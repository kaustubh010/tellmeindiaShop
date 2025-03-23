"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <ShoppingCart className="h-16 w-16 mx-auto text-gray-300" />
        <h1 className="text-2xl font-bold mt-6">Your cart is empty</h1>
        <p className="mt-4 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
        <Button asChild className="mt-8 bg-green-600 hover:bg-green-700">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted px-6 py-4 hidden md:grid md:grid-cols-6 text-sm font-medium">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="border-t px-6 py-4 grid grid-cols-1 md:grid-cols-6 items-center">
                <div className="col-span-3 flex items-center space-x-4">
                  <div className="relative h-16 w-16 rounded overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="md:hidden mt-1 text-sm text-gray-500">₹{item.price.toFixed(2)} each</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-1 h-auto p-0 text-red-600 hover:text-red-700 md:hidden"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="text-center hidden md:block">₹{item.price.toFixed(2)}</div>

                <div className="flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-10 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>

                <div className="flex items-center justify-between md:justify-end">
                  <div className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4 text-red-600 hover:text-red-700 hidden md:flex"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border rounded-lg p-6 sticky top-4">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{subtotal >= 500 ? "Free" : "₹500.00"}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>₹{(subtotal >= 50 ? subtotal : subtotal + 5).toFixed(2)}</span>
            </div>
            <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            <Button variant="outline" className="w-full mt-2" onClick={clearCart}>
              Clear Cart
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              Shipping is free for orders over ₹500. Taxes will be calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

