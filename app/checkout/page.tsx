"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, CreditCard, Lock, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"

type Coupon = {
  id: string;
  code: string;
  discountPercentage: number;
  expiresAt: string | null;
};

export default function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart()
  const { toast } = useToast()
  const { user, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [coupon, setCoupon] = useState<Coupon | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvc: "",
    orderNotes: "",
  })

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      toast({
        title: "Authentication required",
        description: "Please login to proceed with checkout",
        variant: "destructive",
      })
      router.push(`/login?redirect=${encodeURIComponent("/checkout")}`)
    }
  }, [user, authLoading, router, toast])

  // Pre-fill user data if available
  useEffect(() => {
    if (user) {
      const names = user.name.split(" ")
      setFormData((prev) => ({
        ...prev,
        email: user.email,
        firstName: names[0] || "",
        lastName: names.slice(1).join(" ") || "",
      }))
    }
  }, [user])

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-4 text-gray-500">You need to add items to your cart before checking out.</p>
        <Button asChild className="mt-8 bg-green-600 hover:bg-green-700">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      toast({
        title: "Coupon code required",
        description: "Please enter a coupon code",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/coupons/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: couponCode.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Invalid coupon code")
      }

      const validCoupon = await response.json()
      setCoupon(validCoupon)
      toast({
        title: "Coupon applied",
        description: `${validCoupon.discountPercentage}% discount applied to your order`,
      })
    } catch (error) {
      toast({
        title: "Invalid coupon",
        description: error instanceof Error ? error.message : "Failed to apply coupon",
        variant: "destructive",
      })
    }
  }

  const removeCoupon = () => {
    setCoupon(null)
    setCouponCode("")
    toast({
      title: "Coupon removed",
      description: "Coupon has been removed from your order",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (authLoading || !user) {
      toast({
        title: "Authentication required",
        description: "Please login to proceed with checkout",
        variant: "destructive",
      })
      return
    }

    if (step === 1) {
      // Validate shipping info
      if (
        !formData.email ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.address ||
        !formData.city ||
        !formData.zipCode
      ) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        })
        return
      }
      setStep(2)
      window.scrollTo(0, 0)
    } else if (step === 2) {
      // Validate payment info
      if (formData.paymentMethod === "credit-card") {
        if (!formData.cardNumber || !formData.cardName || !formData.cardExpiry || !formData.cardCvc) {
          toast({
            title: "Missing payment information",
            description: "Please fill in all required payment fields",
            variant: "destructive",
          })
          return
        }
      }

      // Process order
      setIsProcessing(true)
      try {
        const shipping = subtotal >= 50 ? 0 : 5
        const discountPercentage = coupon ? coupon.discountPercentage : 0
        const discountAmount = Math.round((subtotal * discountPercentage) / 100)
        const totalAmount = subtotal + shipping - discountAmount

        const orderData = {
          cartItems,
          shippingAddress: formData.address,
          shippingCity: formData.city,
          shippingState: formData.state,
          shippingPincode: formData.zipCode,
          shippingPhone: formData.phone,
          paymentMethod: formData.paymentMethod,
          couponId: coupon?.id,
          orderNotes: formData.orderNotes,
          totalAmount,
          discountAmount,
        }

        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to create order")
        }

        const result = await response.json()
        
        // Clear cart and redirect to confirmation
        router.push(`/checkout/confirmation?orderId=${result.order.id}`)
        clearCart()
        
      } catch (error) {
        toast({
          title: "Order processing failed",
          description: error instanceof Error ? error.message : "Failed to process your order",
          variant: "destructive",
        })
      } finally {
        setIsProcessing(false)
      }
    }
  }

  const shipping = subtotal >= 50 ? 0 : 5
  const discountPercentage = coupon ? coupon.discountPercentage : 0
  const discountAmount = Math.round((subtotal * discountPercentage) / 100)
  const total = subtotal + shipping - discountAmount

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/cart" className="hover:text-green-600">
          Cart
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <div className="flex items-center mt-4">
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? "bg-green-600 text-white" : "bg-gray-200"}`}
              >
                {step > 1 ? <Check className="h-5 w-5" /> : 1}
              </div>
              <div className={`h-1 w-12 ${step > 1 ? "bg-green-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? "bg-green-600 text-white" : "bg-gray-200"}`}
              >
                {step > 2 ? <Check className="h-5 w-5" /> : 2}
              </div>
              <div className={`h-1 w-12 ${step > 2 ? "bg-green-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 3 ? "bg-green-600 text-white" : "bg-gray-200"}`}
              >
                3
              </div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Shipping</span>
              <span>Payment</span>
              <span>Confirmation</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" name="state" value={formData.state} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP / Postal code</Label>
                      <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="orderNotes">Order notes (optional)</Label>
                      <Input 
                        id="orderNotes" 
                        name="orderNotes" 
                        value={formData.orderNotes} 
                        onChange={handleChange}
                        placeholder="Notes about your order, e.g. special delivery instructions" 
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="space-y-3">
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Credit / Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.paymentMethod === "credit-card" && (
                  <div className="space-y-4 border rounded-md p-4">
                    <div>
                      <Label htmlFor="cardName">Name on card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Smith"
                        value={formData.cardName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry date</Label>
                        <Input
                          id="cardExpiry"
                          name="cardExpiry"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvc">CVC</Label>
                        <Input
                          id="cardCvc"
                          name="cardCvc"
                          placeholder="123"
                          value={formData.cardCvc}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back to Shipping
                  </Button>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isProcessing}>
                    {isProcessing ? (
                      <>
                        <span className="mr-2">Processing...</span>
                        <span className="animate-spin">⏳</span>
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Place Order
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div>
          <div className="border rounded-lg p-6 sticky top-4 space-y-6">
            <h2 className="text-lg font-medium">Order Summary</h2>
            
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute -top-1 -right-1 bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                      {item.quantity}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                      <span className="text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
              </div>
              
              {coupon ? (
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-600">Discount ({discountPercentage}%)</span>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-1">Code: {coupon.code}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-4 w-4 p-0 text-gray-500" 
                        onClick={removeCoupon}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <span className="text-green-600">-₹{discountAmount.toFixed(2)}</span>
                </div>
              ) : (
                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <Label htmlFor="couponCode" className="text-sm">
                      Coupon code
                    </Label>
                    <Input
                      id="couponCode"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={applyCoupon}>
                    Apply
                  </Button>
                </div>
              )}
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            
            <div className="pt-4 flex items-center text-sm text-gray-500">
              <Lock className="h-4 w-4 mr-2 text-green-600" />
              <span>Your payment information is secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

