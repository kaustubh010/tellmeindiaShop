"use client"

import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/components/cart-provider"

export default function ConfirmationPage() {
  const router = useRouter()
  const { cartItems } = useCart()

  // If someone tries to access this page directly without checking out, redirect them
  useEffect(() => {
    if (cartItems.length > 0) {
      router.push("/cart")
    }
  }, [cartItems.length, router])

  const orderNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")

  return (
    <div className="container px-4 py-16 text-center max-w-2xl mx-auto">
      <CheckCircle2 className="h-16 w-16 mx-auto text-green-600" />
      <h1 className="text-3xl font-bold mt-6">Thank You for Your Order!</h1>
      <p className="mt-4 text-gray-500">
        Your order #{orderNumber} has been placed successfully. We've sent a confirmation email with all the details.
      </p>

      <div className="mt-8 p-6 border rounded-lg bg-gray-50 text-left">
        <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
              1
            </span>
            <span>We'll process your order within 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
              2
            </span>
            <span>You'll receive a shipping confirmation email with tracking information</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
              3
            </span>
            <span>Your package will arrive within 3-5 business days</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/account?tab=orders">View My Orders</Link>
        </Button>
      </div>
    </div>
  )
}

