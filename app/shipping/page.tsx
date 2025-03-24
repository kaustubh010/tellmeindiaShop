import Link from "next/link"
import { ArrowRight, Clock, Globe, Package, RefreshCw, Truck } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShippingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero.jpg?height=1080&width=1920')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Shipping & Returns
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Everything you need to know about our shipping policies and return process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="shipping" className="space-y-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns & Exchanges</TabsTrigger>
            </TabsList>
            
            <TabsContent value="shipping" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Truck className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold">Domestic Shipping</h3>
                      <p className="mt-2 text-gray-500">
                        Fast and reliable shipping throughout the United States
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold">International Shipping</h3>
                      <p className="mt-2 text-gray-500">
                        We ship to most countries worldwide
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold">Processing Time</h3>
                      <p className="mt-2 text-gray-500">
                        Orders are processed within 1-2 business days
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Domestic Shipping</h2>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-bold">Standard Shipping</h3>
                      <p className="text-gray-500 mt-1">3-5 business days</p>
                      <p className="text-gray-500 mt-1">$5.99 (Free on orders over $50)</p>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h3 className="font-bold">Expedited Shipping</h3>
                      <p className="text-gray-500 mt-1">2-3 business days</p>
                      <p className="text-gray-500 mt-1">$9.99</p>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h3 className="font-bold">Overnight Shipping</h3>
                      <p className="text-gray-500 mt-1">Next business day (order by 12pm EST)</p>
                      <p className="text-gray-500 mt-1">$19.99</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">International Shipping</h2>
                  <p className="text-gray-500 mt-2">
                    We ship to most countries worldwide. International shipping rates and delivery times vary by location.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-bold">Standard International</h3>
                      <p className="text-gray-500 mt-1">7-14 business days</p>
                      <p className="text-gray-500 mt-1">Starting at $14.99</p>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h3 className="font-bold">Expedited International</h3>
                      <p className="text-gray-500 mt-1">5-7 business days</p>
                      <p className="text-gray-500 mt-1">Starting at $24.99</p>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">
                    Please note that customers are responsible for any customs fees, duties, or taxes imposed by their country.
                    These charges are not included in the shipping cost and will be collected upon delivery.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">Order Processing</h2>
                  <p className="text-gray-500 mt-2">
                    All orders are processed within 1-2 business days (Monday through Friday, excluding holidays) after payment confirmation.
                    Once your order ships, you will receive a confirmation email with tracking information.
                  </p>
                  <p className="text-gray-500 mt-2">
                    Please note that order processing may take longer during peak seasons or promotional periods.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">Shipping Restrictions</h2>
                  <p className="text-gray-500 mt-2">
                    Due to regulations, we cannot ship certain products to specific countries or regions.
                    If you have concerns about shipping to your location, please contact our customer support team.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="returns" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <RefreshCw className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold">30-Day Returns</h3>
                      <p className="mt-2 text-gray-500">
                        Return unused items within 30 days for a full refund
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Package className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold">Easy Exchanges</h3>
                      <p className="mt-2 text-gray-500">
                        Exchange for a different product or size
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Truck className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold">Free Return Shipping</h3>
                      <p className="mt-2 text-gray-500">
                        On defective or incorrectly shipped items
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Return Policy</h2>
                  <p className="text-gray-500 mt-2">
                    We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, 
                    we're here to help.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-bold">Eligible Items</h3>
                      <p className="text-gray-500 mt-1">
                        Items must be returned within 30 days of delivery. Products must be unused, in their original 
                        packaging, and in the same condition you received them.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold">Non-Returnable Items</h3>
                      <p className="text-gray-500 mt-1">
                        For hygiene reasons, certain products cannot be returned once opened or used, including:
                      </p>
                      <ul className="list-disc list-inside text-gray-500 mt-1">
                        <li>Personal care items that have been opened</li>
                        <li>Products with broken seals</li>
                        <li>Clearance items marked as final sale</li>
                        <li>Gift cards</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">Return Process</h2>
                  <ol className="list-decimal list-inside text-gray-500 mt-2 space-y-2">
                    <li>
                      <span className="font-medium text-black">Initiate a Return:</span> Contact our customer service team 
                      or log into your account to initiate a return request.
                    </li>
                    <li>
                      <span className="font-medium text-black">Receive Return Authorization:</span> You'll receive a return 
                      authorization number and shipping instructions via email.
                    </li>
                    <li>
                      <span className="font-medium text-black">Package Your Return:</span> Securely package the item(s) in 
                      their original packaging if possible.
                    </li>
                    <li>
                      <span className="font-medium text-black">Ship Your Return:</span> Send your return using the shipping 
                      method provided in the instructions.
                    </li>
                    <li>
                      <span className="font-medium text-black">Refund Processing:</span> Once we receive and inspect your return, 
                      we'll process your refund. This typically takes 5-7 business days.
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">Exchanges</h2>
                  <p className="text-gray-500 mt-2">
                    If you'd like to exchange an item for a different size, color, or product, please follow the same 
                    process as returns. In your return request, indicate that you'd like an exchange and specify the 
                    item you'd like instead.
                  </p>
                  <p className="text-gray-500 mt-2">
                    If the new item costs more than your original purchase, you'll need to pay the difference. 
                    If it costs less, we'll refund the difference.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">Damaged or Defective Items</h2>
                  <p className="text-gray-500 mt-2">
                    If you receive a damaged or defective item, please contact our customer service team within 48 hours 
                    of delivery. We'll arrange for a replacement or refund at no additional cost to you.
                  </p>
                  <p className="text-gray-500 mt-2">
                    Please take photos of the damaged item and packaging to help us process your claim more efficiently.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">Return Shipping Costs</h2>
                  <p className="text-gray-500 mt-2">
                    For standard returns, customers are responsible for return shipping costs unless the item is defective 
                    or was shipped incorrectly.
                  </p>
                  <p className="text-gray-500 mt-2">
                    For defective items or shipping errors on our part, we'll provide a prepaid return shipping label.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg">
              Find answers to common questions about shipping, returns, and exchanges
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-bold">How long will it take to receive my order?</h3>
              <p className="text-gray-500 mt-2">
                Domestic orders typically arrive within 3-5 business days with standard shipping. 
                Expedited options are available for faster delivery. International orders usually 
                take 7-14 business days, depending on the destination country.
              </p>
            </div>
            
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-bold">Do you offer free shipping?</h3>
              <p className="text-gray-500 mt-2">
                Yes, we offer free standard shipping on all domestic orders over $50. 
                International orders and expedited shipping options have additional costs.
              </p>
            </div>
            
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-bold">Can I change my shipping address after placing an order?</h3>
              <p className="text-gray-500 mt-2">
                If your order hasn't shipped yet, we may be able to update the shipping address. 
                Please contact our customer service team as soon as possible with your order number.
              </p>
            </div>
            
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-bold">How do I track my order?</h3>
              <p className="text-gray-500 mt-2">
                Once your order ships, you'll receive a confirmation email with tracking information. 
                You can also track your order by logging into your account and viewing your order history.
              </p>
            </div>
            
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-bold">What if I'm not home when my package arrives?</h3>
              <p className="text-gray-500 mt-2">
                Delivery procedures vary by carrier. Most carriers will leave the package if it's safe to do so, 
                or they may leave a delivery attempt notice with instructions for rescheduling or pickup.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need More Information?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Our customer service team is here to help with any questions about shipping or returns
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
