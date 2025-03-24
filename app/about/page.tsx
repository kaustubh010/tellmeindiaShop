import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Leaf, Microscope } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero.jpg?height=1080&width=1920')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Our Story
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Bringing ancient Ayurvedic wisdom to modern wellness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Revitalizing Ancient Wisdom for Modern Wellness
              </h2>
              <p className="text-gray-500 md:text-lg">
                At TellMeIndia, we are dedicated to bringing the time-tested wisdom of Ayurvedic medicine to the modern world. 
                Our mission is to create premium, research-backed products that promote holistic wellness and balance in 
                today's fast-paced lifestyle.
              </p>
              <p className="text-gray-500 md:text-lg">
                We believe in the power of nature's pharmacy, carefully selecting herbs and ingredients that have been 
                used for centuries in traditional Ayurvedic practice. Our commitment to quality, sustainability, and 
                scientific validation sets us apart in the wellness industry.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src="/placeholder.svg?height=720&width=1280" 
                alt="Ayurvedic herbs and ingredients" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-square overflow-hidden rounded-full max-w-md mx-auto">
              <Image 
                src="/placeholder.svg?height=600&width=600" 
                alt="Dr. Uday Veer Singh" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                Our Founder
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Dr. Uday Veer Singh
              </h2>
              <p className="text-gray-500 md:text-lg">
                Dr. U.V. Singh, a renowned Ayurvedic practitioner with over 25 years of experience, founded TellMeIndia 
                with a vision to bridge ancient healing traditions with modern scientific research.
              </p>
              <p className="text-gray-500 md:text-lg">
                With a Ph.D. in Ayurvedic Medicine and extensive research experience at prestigious institutions, 
                Dr. Singh has dedicated his life to understanding the profound healing properties of herbs and natural 
                compounds. His expertise in formulation development ensures that each product meets the highest standards 
                of efficacy and safety.
              </p>
              <p className="text-gray-500 md:text-lg">
                "My goal is to create products that honor the 5,000-year-old tradition of TellMeIndia while incorporating 
                modern scientific validation. This balance ensures our customers receive the most effective natural 
                solutions for their wellness journey." - Dr. U.V. Singh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Approach</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg">
              We combine ancient wisdom with modern science to create products that truly work
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Authentic Ingredients</h3>
                <p className="mt-2 text-gray-500">
                  We source the highest quality herbs and botanicals, many directly from their native regions, 
                  to ensure authenticity and potency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Microscope className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Scientific Validation</h3>
                <p className="mt-2 text-gray-500">
                  Every formulation undergoes rigorous testing and scientific validation to ensure efficacy, 
                  safety, and consistency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Holistic Approach</h3>
                <p className="mt-2 text-gray-500">
                  We develop products that address the root causes of imbalance, not just symptoms, 
                  promoting long-term wellness and vitality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                Our Research
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Research-Backed Formulations
              </h2>
              <p className="text-gray-500 md:text-lg">
                Our in-house research team, led by Dr. Singh, works tirelessly to study the therapeutic properties 
                of Ayurvedic herbs and compounds. We collaborate with universities and research institutions to 
                validate traditional uses and discover new applications.
              </p>
              <p className="text-gray-500 md:text-lg">
                Each product undergoes multiple stages of development and testing before reaching our customers. 
                This meticulous process ensures that our formulations deliver consistent results while maintaining 
                the highest safety standards.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span>15+ Research Papers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span>5 Patents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span>3 University Partnerships</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src="/placeholder.svg?height=720&width=1280" 
                alt="Research laboratory" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Authenticity</h3>
              <p className="mt-2 text-gray-500">
                Staying true to Ayurvedic principles while embracing scientific innovation
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Quality</h3>
              <p className="mt-2 text-gray-500">
                Uncompromising standards in ingredient sourcing and manufacturing
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Integrity</h3>
              <p className="mt-2 text-gray-500">
                Transparent practices and honest communication with our customers
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Microscope className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Innovation</h3>
              <p className="mt-2 text-gray-500">
                Continuously improving our formulations through research and development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Wellness Journey
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the transformative power of authentic Ayurvedic products
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/shop">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
