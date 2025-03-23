"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle, Truck, Loader2 } from "lucide-react"
import { use } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"

// Define order interface based on API response
interface OrderItem {
  id: string
  productId: string
  productName: string
  quantity: number
  price: number
  product: {
    id: string
    name: string
    imageUrl: string | null
  }
}

interface Order {
  id: string
  userId: string
  status: string
  totalAmount: number
  discountAmount: number
  paymentMethod: string
  paymentStatus: string
  createdAt: string
  shippingAddress: string
  shippingCity: string
  shippingState: string
  shippingPincode: string
  shippingPhone: string
  orderNotes?: string
  items: OrderItem[]
  coupon: {
    code: string
    discountPercentage: number
  } | null
}

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const orderId = resolvedParams.id
  const { toast } = useToast()
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoadingOrder, setIsLoadingOrder] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  // Fetch order details
  useEffect(() => {
    if (user) {
      fetchOrderDetails()
    }
  }, [user, orderId])

  const fetchOrderDetails = async () => {
    setIsLoadingOrder(true)
    try {
      const response = await fetch(`/api/orders/${orderId}`)
      if (!response.ok) {
        if (response.status === 404) {
          setError("Order not found")
        } else if (response.status === 403) {
          setError("You don't have permission to view this order")
        } else {
          setError("Failed to fetch order details")
        }
        return
      }

      const data = await response.json()
      setOrder(data)
    } catch (err) {
      console.error("Error fetching order:", err)
      setError("An error occurred while fetching the order details")
      toast({
        title: "Error",
        description: "Failed to load order details",
        variant: "destructive",
      })
    } finally {
      setIsLoadingOrder(false)
    }
  }

  if (isLoading || isLoadingOrder) {
    return (
      <div className="container px-4 py-8 md:py-12">
        <div className="flex items-center mb-8">
          <Button variant="ghost" className="mr-4" asChild>
            <Link href="/account/orders">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Orders
            </Link>
          </Button>
          <Skeleton className="h-10 w-48" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="h-20 w-20 rounded" />
                      <div className="ml-4 flex-1">
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-24 mb-1" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-6 w-16" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in the useEffect
  }

  if (error || !order) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">{error || "Order not found"}</h1>
        <p className="mt-4 text-gray-500">The order you are looking for does not exist or could not be loaded.</p>
        <Button asChild className="mt-8 bg-green-600 hover:bg-green-700">
          <Link href="/account/orders">Back to Orders</Link>
        </Button>
      </div>
    )
  }

  // Format date for display
  const orderDate = new Date(order.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" className="mr-4" asChild>
          <Link href="/account?tab=orders">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Order #{order.id.slice(-5)}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>Items included in your order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="relative h-20 w-20 rounded overflow-hidden flex-shrink-0">
                      <Image 
                        src={item.product?.imageUrl || "/placeholder.svg"} 
                        alt={item.productName} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium">{item.productName}</h4>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-500">Price: ₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
              <CardDescription>Current status of your order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Order Placed</p>
                    <p className="text-sm text-gray-500">{orderDate}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`h-10 w-10 rounded-full ${order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                      <CheckCircle className={`h-6 w-6 ${order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  <div>
                    <p className={`font-medium ${order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'text-gray-900' : 'text-gray-500'}`}>Processing</p>
                    <p className="text-sm text-gray-500">{order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'Your order is being processed' : 'Pending'}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`h-10 w-10 rounded-full ${order.status === 'shipped' || order.status === 'delivered' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                      <CheckCircle className={`h-6 w-6 ${order.status === 'shipped' || order.status === 'delivered' ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  <div>
                    <p className={`font-medium ${order.status === 'shipped' || order.status === 'delivered' ? 'text-gray-900' : 'text-gray-500'}`}>Shipped</p>
                    <p className="text-sm text-gray-500">{order.status === 'shipped' || order.status === 'delivered' ? 'Your order has been shipped' : 'Pending'}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`h-10 w-10 rounded-full ${order.status === 'delivered' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                      <CheckCircle className={`h-6 w-6 ${order.status === 'delivered' ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  <div>
                    <p className={`font-medium ${order.status === 'delivered' ? 'text-gray-900' : 'text-gray-500'}`}>Delivered</p>
                    <p className="text-sm text-gray-500">{order.status === 'delivered' ? 'Your order has been delivered' : 'Pending'}</p>
                  </div>
                </div>
              </div>

              {order.status === 'shipped' || order.status === 'delivered' ? (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-start">
                  <Truck className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Tracking Information</p>
                    <p className="text-sm text-gray-500">Carrier: Standard Delivery</p>
                    <p className="text-sm text-gray-500">Expected delivery: Within 3-5 business days</p>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                Order #{order.id.slice(-5)} placed on {orderDate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>₹{(order.totalAmount + order.discountAmount).toFixed(2)}</span>
                </div>
                {order.discountAmount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Discount {order.coupon ? `(${order.coupon.code})` : ''}</span>
                    <span className="text-green-600">-₹{order.discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹{order.totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Shipping Address</h3>
                  <p className="text-sm text-gray-500">
                    {user.name}
                    <br />
                    {order.shippingAddress}
                    <br />
                    {order.shippingCity}, {order.shippingState} {order.shippingPincode}
                    <br />
                    Phone: {order.shippingPhone}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <p className="text-sm text-gray-500">
                    {order.paymentMethod}
                    <br />
                    Status: <span className={order.paymentStatus === 'completed' ? 'text-green-600' : 'text-yellow-600'}>
                      {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Download Invoice
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

