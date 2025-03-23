"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { CreditCard, Loader2 } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

type Order = {
  id: string
  status: string
  totalAmount: number
  discountAmount: number
  paymentMethod: string
  paymentStatus: string
  createdAt: string
  coupon: {
    code: string
    discountPercentage: number
  } | null
  items?: OrderItem[]
}

type OrderItem = {
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

type Address = {
  id: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}

export default function AccountPage() {
  const { user, isLoading, logout } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState("profile")
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoadingOrders, setIsLoadingOrders] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })
  const [viewingOrder, setViewingOrder] = useState<Order | null>(null)

  // Set active tab from URL parameter if available
  useEffect(() => {
    if (tabParam && ["profile", "orders"].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  // Populate form with user data when available
  useEffect(() => {
    if (user) {
      const names = user.name.split(" ")
      setProfileForm({
        firstName: names[0] || "",
        lastName: names.slice(1).join(" ") || "",
        email: user.email,
        phone: "",
      })
    }
  }, [user])

  // Fetch user orders when on orders tab
  useEffect(() => {
    if (activeTab === "orders" && user) {
      fetchOrders()
    }
  }, [activeTab, user])

  const fetchOrders = async () => {
    setIsLoadingOrders(true)
    try {
      const response = await fetch("/api/orders/user")
      if (!response.ok) {
        throw new Error("Failed to fetch orders")
      }
      const data = await response.json()
      setOrders(data)
    } catch (error) {
      console.error("Error fetching orders:", error)
      toast({
        title: "Error",
        description: "Failed to load your orders",
        variant: "destructive",
      })
    } finally {
      setIsLoadingOrders(false)
    }
  }

  const handleChangePassword = async () => {
    if (
      !changePasswordForm.currentPassword || 
      !changePasswordForm.newPassword || 
      !changePasswordForm.confirmPassword
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all password fields",
        variant: "destructive",
      })
      return
    }

    if (changePasswordForm.newPassword !== changePasswordForm.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "New password and confirmation must match",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: changePasswordForm.currentPassword,
          newPassword: changePasswordForm.newPassword,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to update password")
      }

      setChangePasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      })

      toast({
        title: "Password updated",
        description: "Your password has been changed successfully",
      })
    } catch (error: unknown) {
      console.error("Error changing password:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update password",
        variant: "destructive",
      })
    }
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = async () => {
    if (!profileForm.firstName || !profileForm.lastName) {
      toast({
        title: "Missing information",
        description: "Please provide your first and last name",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: profileForm.firstName,
          lastName: profileForm.lastName,
          phone: profileForm.phone,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully",
      })
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error",
        description: "Failed to update your profile",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container py-16 text-center">
        <Loader2 className="h-6 w-6 animate-spin mx-auto" />
        <p className="mt-2">Loading...</p>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in the useEffect
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 max-w-md">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and email preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    value={profileForm.firstName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    value={profileForm.lastName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    name="email"
                    value={profileForm.email}
                    disabled 
                  />
                  <p className="text-xs text-gray-500">Email cannot be changed</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    name="phone"
                    value={profileForm.phone}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="font-medium">Email Preferences</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing">Marketing emails</Label>
                    <p className="text-sm text-gray-500">Receive emails about new products, offers, and promotions</p>
                  </div>
                  <Switch id="marketing" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="order-updates">Order updates</Label>
                    <p className="text-sm text-gray-500">Receive emails about your orders and shipping updates</p>
                  </div>
                  <Switch id="order-updates" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={changePasswordForm.currentPassword}
                      onChange={(e) => setChangePasswordForm({
                        ...changePasswordForm,
                        currentPassword: e.target.value
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={changePasswordForm.newPassword}
                      onChange={(e) => setChangePasswordForm({
                        ...changePasswordForm,
                        newPassword: e.target.value
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={changePasswordForm.confirmPassword}
                      onChange={(e) => setChangePasswordForm({
                        ...changePasswordForm,
                        confirmPassword: e.target.value
                      })}
                    />
                  </div>
                  <Button onClick={handleChangePassword}>Update Password</Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delete Account</CardTitle>
              <CardDescription>Permanently delete your account and all associated data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                This action cannot be undone. Once you delete your account, all your data will be permanently removed.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>View your order history and track current orders</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingOrders ? (
                <div className="text-center py-4">
                  <Loader2 className="animate-spin h-6 w-6 mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">Loading your orders...</p>
                </div>
              ) : orders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You haven't placed any orders yet</p>
                  <Button asChild className="mt-4">
                    <Link href="/shop">Start Shopping</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-medium">Order #{order.id.slice(-5)}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.createdAt).toLocaleDateString()} - {order.items?.length || 0} items
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "processing"
                                ? "bg-blue-100 text-blue-800"
                                : order.status === "shipped"
                                ? "bg-purple-100 text-purple-800"
                                : order.status === "cancelled"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                          <div className="mx-2 font-medium">${order.totalAmount.toFixed(2)}</div>
                          <Button 
                            size="sm"
                            variant="ghost"
                            onClick={() => setViewingOrder(order)}
                          >
                            Quick View
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            asChild
                          >
                            <Link href={`/account/orders/${order.id}`}>
                              Order Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Order Details Modal */}
      {viewingOrder && (
        <Dialog open={!!viewingOrder} onOpenChange={() => setViewingOrder(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Order #{viewingOrder.id.slice(-5)}</DialogTitle>
              <DialogDescription>
                Placed on {new Date(viewingOrder.createdAt).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">Status</h4>
                <div className="mt-1">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      viewingOrder.status === "delivered"
                        ? "bg-green-100 text-green-800"
                        : viewingOrder.status === "processing"
                        ? "bg-blue-100 text-blue-800"
                        : viewingOrder.status === "shipped"
                        ? "bg-purple-100 text-purple-800"
                        : viewingOrder.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {viewingOrder.status.charAt(0).toUpperCase() + viewingOrder.status.slice(1)}
                  </span>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2">Order Items</h4>
                <div className="space-y-2">
                  {viewingOrder.items?.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-12 h-12 relative bg-muted rounded overflow-hidden">
                          {item.product && item.product.imageUrl && (
                            <Image
                              src={item.product.imageUrl}
                              alt={item.productName}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.productName}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{(viewingOrder.totalAmount + viewingOrder.discountAmount).toFixed(2)}</span>
                </div>
                {viewingOrder.discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount {viewingOrder.coupon ? `(${viewingOrder.coupon.code})` : ''}</span>
                    <span>-₹{viewingOrder.discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-medium mt-4">
                  <span>Total</span>
                  <span>₹{viewingOrder.totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setViewingOrder(null)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

