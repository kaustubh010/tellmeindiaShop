import Link from "next/link"
import { ArrowRight, BookOpen, FileQuestion, HelpCircle, LifeBuoy, Package, Search, ShieldCheck, Truck } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                How Can We Help?
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Find answers to your questions and get the support you need
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search for help..."
                  className="pl-8 bg-white text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">Orders & Shipping</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Track your order, shipping policies, and returns
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-green-600"
                    asChild
                  >
                    <Link href="#orders">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <FileQuestion className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">Product Information</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Usage instructions, ingredients, and benefits
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-green-600"
                    asChild
                  >
                    <Link href="#products">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">Account & Security</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Login issues, password reset, and account management
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-green-600"
                    asChild
                  >
                    <Link href="#account">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <LifeBuoy className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">Customer Support</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Contact our team for personalized assistance
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-green-600"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="orders" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders" id="orders">Orders</TabsTrigger>
                <TabsTrigger value="products" id="products">Products</TabsTrigger>
                <TabsTrigger value="account" id="account">Account</TabsTrigger>
                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders" className="space-y-4">
                <div className="rounded-lg border bg-white p-6">
                  <h3 className="text-xl font-bold mb-4">Orders & Shipping</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">How do I track my order?</h4>
                      <p className="text-gray-500 mt-1">
                        Once your order ships, you'll receive a confirmation email with tracking information. 
                        You can also track your order by logging into your account and viewing your order history.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">What are your shipping options?</h4>
                      <p className="text-gray-500 mt-1">
                        We offer standard shipping (3-5 business days), expedited shipping (2-3 business days), 
                        and overnight shipping. Free standard shipping is available on orders over $50.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">How do I return a product?</h4>
                      <p className="text-gray-500 mt-1">
                        If you're not completely satisfied with your purchase, you can return it within 30 days 
                        for a full refund. Visit our <Link href="/shipping" className="text-green-600 hover:underline">Shipping & Returns</Link> page for more details.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Do you ship internationally?</h4>
                      <p className="text-gray-500 mt-1">
                        Yes, we ship to most countries worldwide. International shipping rates and delivery times 
                        vary by location. Please note that customers are responsible for any customs fees or taxes.
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="/shipping">
                      View Shipping & Returns Policy <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="products" className="space-y-4">
                <div className="rounded-lg border bg-white p-6">
                  <h3 className="text-xl font-bold mb-4">Product Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">How do I use Ayurvedic products?</h4>
                      <p className="text-gray-500 mt-1">
                        Each product comes with specific usage instructions on the packaging. For detailed information, 
                        visit the individual product pages on our website or refer to the product insert.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Are your products organic?</h4>
                      <p className="text-gray-500 mt-1">
                        Many of our products use certified organic ingredients. Look for the "Organic" label 
                        on product pages. We prioritize sustainable and ethical sourcing for all ingredients.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Do your products contain allergens?</h4>
                      <p className="text-gray-500 mt-1">
                        All potential allergens are clearly listed on our product labels and website. 
                        If you have specific allergies, please review the complete ingredient list before purchasing.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">How should I store my Ayurvedic products?</h4>
                      <p className="text-gray-500 mt-1">
                        Most products should be stored in a cool, dry place away from direct sunlight. 
                        Some items may require refrigeration after opening. Specific storage instructions 
                        are provided on each product.
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="/shop">
                      Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="account" className="space-y-4">
                <div className="rounded-lg border bg-white p-6">
                  <h3 className="text-xl font-bold mb-4">Account & Security</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">How do I reset my password?</h4>
                      <p className="text-gray-500 mt-1">
                        On the login page, click "Forgot password?" and follow the instructions sent to your email. 
                        For security reasons, password reset links expire after 24 hours.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">How do I update my account information?</h4>
                      <p className="text-gray-500 mt-1">
                        Log in to your account and navigate to the "Account Settings" page. 
                        There you can update your personal information, shipping addresses, and payment methods.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Is my personal information secure?</h4>
                      <p className="text-gray-500 mt-1">
                        Yes, we use industry-standard encryption and security measures to protect your personal information. 
                        We never share your data with third parties without your consent. See our <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link> for details.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">How do I delete my account?</h4>
                      <p className="text-gray-500 mt-1">
                        To delete your account, please contact our customer support team. 
                        Note that account deletion is permanent and will remove all your order history and saved information.
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="/account">
                      Manage Your Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="troubleshooting" className="space-y-4">
                <div className="rounded-lg border bg-white p-6">
                  <h3 className="text-xl font-bold mb-4">Troubleshooting</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">I can't complete my purchase</h4>
                      <p className="text-gray-500 mt-1">
                        If you're having trouble completing your purchase, try clearing your browser cache, 
                        using a different payment method, or checking if your card issuer is blocking the transaction.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">The website is not loading properly</h4>
                      <p className="text-gray-500 mt-1">
                        Try refreshing the page, clearing your browser cache, or using a different browser. 
                        Our website is optimized for the latest versions of Chrome, Firefox, Safari, and Edge.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">I didn't receive my order confirmation</h4>
                      <p className="text-gray-500 mt-1">
                        Check your spam or junk folder. If you still can't find it, log into your account to verify 
                        your order status. You can also contact our customer support team for assistance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">My discount code isn't working</h4>
                      <p className="text-gray-500 mt-1">
                        Ensure the code is entered correctly (codes are case-sensitive). Check if the code has expired 
                        or if there are minimum purchase requirements. Some promotions cannot be combined with other offers.
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="/contact">
                      Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Additional Resources
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg">
              Explore our guides and documentation for more detailed information
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Product Guides</h3>
                    <p className="mt-2 text-gray-500">
                      Detailed guides on how to use our products for maximum benefit
                    </p>
                    <Button
                      variant="link"
                      className="mt-4 p-0 h-auto text-green-600"
                      asChild
                    >
                      <Link href="/guides">View Guides</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <FileQuestion className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">FAQs</h3>
                    <p className="mt-2 text-gray-500">
                      Answers to the most commonly asked questions about our products and services
                    </p>
                    <Button
                      variant="link"
                      className="mt-4 p-0 h-auto text-green-600"
                      asChild
                    >
                      <Link href="/faq">View FAQs</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Shipping Information</h3>
                    <p className="mt-2 text-gray-500">
                      Detailed information about our shipping policies, rates, and delivery times
                    </p>
                    <Button
                      variant="link"
                      className="mt-4 p-0 h-auto text-green-600"
                      asChild
                    >
                      <Link href="/shipping">View Shipping Info</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Still Need Help?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our customer support team is ready to assist you with any questions or concerns
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
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
