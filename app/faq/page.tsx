import Link from "next/link"
import { ArrowRight, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Find answers to common questions about our products and services
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search FAQs..."
                  className="pl-8 bg-white text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="products" className="space-y-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="ordering">Ordering</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products" className="space-y-4">
              <div className="mx-auto max-w-3xl space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">What are Ayurvedic products?</h3>
                  <p className="text-gray-500 mt-2">
                    Ayurvedic products are natural health and wellness items based on the ancient Indian 
                    medical system of TellMeIndia. These products typically include herbs, minerals, and other 
                    natural ingredients that promote balance and well-being in the body and mind.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Are your products organic?</h3>
                  <p className="text-gray-500 mt-2">
                    Many of our products use certified organic ingredients. Look for the "Organic" label 
                    on product pages. We prioritize sustainable and ethical sourcing for all ingredients, 
                    even those that aren't certified organic.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How should I store my Ayurvedic products?</h3>
                  <p className="text-gray-500 mt-2">
                    Most products should be stored in a cool, dry place away from direct sunlight. 
                    Some items may require refrigeration after opening. Specific storage instructions 
                    are provided on each product label and product page.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Do your products contain allergens?</h3>
                  <p className="text-gray-500 mt-2">
                    All potential allergens are clearly listed on our product labels and website. 
                    If you have specific allergies, please review the complete ingredient list before purchasing. 
                    Our customer service team can also provide additional information about specific products.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">What is the shelf life of your products?</h3>
                  <p className="text-gray-500 mt-2">
                    The shelf life varies by product. Each item has an expiration date printed on the packaging. 
                    Generally, our products remain effective for 1-2 years when unopened and stored properly. 
                    Once opened, most products should be used within 3-6 months for optimal effectiveness.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Are your products tested on animals?</h3>
                  <p className="text-gray-500 mt-2">
                    No, we do not test our products on animals. We are committed to cruelty-free practices 
                    and ethical production methods. Our products are tested using alternative methods that 
                    do not involve animal testing.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Can I use multiple Ayurvedic products together?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, many of our products complement each other and can be used together as part of a 
                    holistic wellness routine. However, we recommend introducing new products one at a time 
                    to see how your body responds. If you have questions about specific product combinations, 
                    please contact our customer service team.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ordering" className="space-y-4">
              <div className="mx-auto max-w-3xl space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How do I place an order?</h3>
                  <p className="text-gray-500 mt-2">
                    You can place an order through our website by browsing our products, adding items to your cart, 
                    and proceeding to checkout. You'll need to create an account or check out as a guest, provide 
                    shipping and payment information, and confirm your order.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">What payment methods do you accept?</h3>
                  <p className="text-gray-500 mt-2">
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), 
                    PayPal, and Apple Pay. All transactions are processed securely through our payment gateway.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Can I modify or cancel my order after it's placed?</h3>
                  <p className="text-gray-500 mt-2">
                    If your order hasn't been processed yet, we may be able to modify or cancel it. 
                    Please contact our customer service team as soon as possible with your order number. 
                    Once an order has been processed or shipped, it cannot be modified or canceled.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Do you offer discounts or promotions?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we regularly offer promotions and discounts. Subscribe to our newsletter to 
                    stay informed about special offers. We also have a loyalty program that rewards 
                    repeat customers with points that can be redeemed for discounts on future purchases.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Can I purchase products in bulk or wholesale?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we offer wholesale options for businesses and practitioners. Please contact 
                    our wholesale department at wholesale@TellMeIndia.com for more information about 
                    wholesale pricing and minimum order requirements.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Do you offer gift wrapping?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we offer gift wrapping services for a small additional fee. During checkout, 
                    you'll have the option to add gift wrapping and include a personalized message.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How can I check the status of my order?</h3>
                  <p className="text-gray-500 mt-2">
                    You can check your order status by logging into your account and viewing your order history. 
                    You'll also receive email updates when your order is processed and shipped, including 
                    tracking information once available.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="space-y-4">
              <div className="mx-auto max-w-3xl space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How long will it take to receive my order?</h3>
                  <p className="text-gray-500 mt-2">
                    Domestic orders typically arrive within 3-5 business days with standard shipping. 
                    Expedited options are available for faster delivery. International orders usually 
                    take 7-14 business days, depending on the destination country.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Do you offer free shipping?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we offer free standard shipping on all domestic orders over $50. 
                    International orders and expedited shipping options have additional costs.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Do you ship internationally?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we ship to most countries worldwide. International shipping rates and delivery times 
                    vary by location. Please note that customers are responsible for any customs fees, duties, 
                    or taxes imposed by their country.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How do I track my order?</h3>
                  <p className="text-gray-500 mt-2">
                    Once your order ships, you'll receive a confirmation email with tracking information. 
                    You can also track your order by logging into your account and viewing your order history.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">What if my package is lost or damaged?</h3>
                  <p className="text-gray-500 mt-2">
                    If your package is lost or arrives damaged, please contact our customer service team 
                    within 48 hours of the expected delivery date. We'll work with the shipping carrier 
                    to locate your package or process a replacement shipment.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Can I change my shipping address after placing an order?</h3>
                  <p className="text-gray-500 mt-2">
                    If your order hasn't shipped yet, we may be able to update the shipping address. 
                    Please contact our customer service team as soon as possible with your order number.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Do you ship to P.O. boxes?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we can ship to P.O. boxes for standard shipping. However, expedited shipping 
                    options may require a physical street address for delivery.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="account" className="space-y-4">
              <div className="mx-auto max-w-3xl space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How do I create an account?</h3>
                  <p className="text-gray-500 mt-2">
                    You can create an account by clicking the "Account" icon in the top right corner of our website 
                    and selecting "Create Account." You'll need to provide your email address and create a password. 
                    You can also create an account during the checkout process.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">What are the benefits of creating an account?</h3>
                  <p className="text-gray-500 mt-2">
                    Creating an account allows you to track orders, save shipping addresses, store payment methods securely, 
                    view order history, earn loyalty points, and receive personalized product recommendations.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How do I reset my password?</h3>
                  <p className="text-gray-500 mt-2">
                    If you've forgotten your password, click the "Account" icon, select "Sign In," and then click 
                    "Forgot Password." Enter your email address, and we'll send you instructions to reset your password.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How do I update my account information?</h3>
                  <p className="text-gray-500 mt-2">
                    You can update your account information by logging in, navigating to "My Account," and selecting 
                    "Account Settings." From there, you can update your personal information, shipping addresses, 
                    and payment methods.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Is my personal information secure?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we take data security seriously. We use industry-standard encryption and security measures 
                    to protect your personal information. We never share your data with third parties without your consent. 
                    For more details, please review our Privacy Policy.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">Can I delete my account?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, you can request account deletion by contacting our customer service team. 
                    Please note that account deletion is permanent and will remove all your order history 
                    and saved information.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold">How does the loyalty program work?</h3>
                  <p className="text-gray-500 mt-2">
                    Our loyalty program rewards you with points for every purchase. You earn 1 point for every dollar spent. 
                    Points can be redeemed for discounts on future purchases. You also receive bonus points for referring friends, 
                    writing product reviews, and celebrating your birthday with us.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Didn't Find Your Answer?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Our customer support team is ready to assist you with any questions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/help">
                  Visit Help Center
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
