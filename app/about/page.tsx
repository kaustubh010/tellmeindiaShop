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
                About Us
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Revitalizing society by reintroducing ancient technologies and ethical practices for a healthier, sustainable future.
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
                Bridging the Wisdom of Bharat with the Dynamism of Today
              </h2>
              <p className="text-gray-500 md:text-lg">
                At Tell Me India, we strive to revive the forgotten brilliance of Bharat’s ancient technologies and weave them into the vibrant fabric of modern life.
              </p>
              <p className="text-gray-500 md:text-lg">
                We’re not just preserving heritage — we’re reimagining it. With a deep-rooted respect for the Vedic sciences and ethical principles, our work promotes Swastha (wholeness): a state where mind, body, and spirit are in harmony.
              </p>
              <p className="text-gray-500 md:text-lg">
                As echoed in the Charaka Samhita: “Through Swastha, one finds stability, happiness, self-realization, contentment, fulfillment of desires, and a long and healthy life.”
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src="/about2.webp?height=720&width=1280" 
                alt="Ayurvedic harmony" 
                fill 
                className="object-cover"
              />
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
              A symphony of innovation orchestrated by tradition
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
                  We source time-honored herbs and botanicals directly from their native environments, ensuring purity and potency.
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
                  Our revival of ancient tech is grounded in modern scientific frameworks, ensuring every application is both timeless and trusted.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Holistic Perspective</h3>
                <p className="mt-2 text-gray-500">
                  Beyond just treating symptoms, we nurture root-level harmony to help individuals attain true Swastha — mind-body-spirit alignment.
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
                Where Tradition Meets Discovery
              </h2>
              <p className="text-gray-500 md:text-lg">
                We work with leading researchers and institutions to rediscover and revalidate ancient Indian technologies. Through rigorous study and innovation, we convert centuries-old insights into impactful, real-world applications.
              </p>
              <p className="text-gray-500 md:text-lg">
                Our research aims to not just preserve but evolve ancient wisdom — turning ancient blueprints into modern tools for healing, sustainability, and progress.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src="/about1.webp?height=720&width=1280" 
                alt="Research in Ayurveda and Vedic Science" 
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
              Guiding principles that shape our journey
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Authenticity</h3>
              <p className="mt-2 text-gray-500">
                We stay true to ancient texts and practices while validating their relevance in today’s world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Quality</h3>
              <p className="mt-2 text-gray-500">
                Every step — from sourcing to packaging — reflects our dedication to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Integrity</h3>
              <p className="mt-2 text-gray-500">
                Transparent operations and a customer-first approach are at our core.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Microscope className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold">Innovation</h3>
              <p className="mt-2 text-gray-500">
                Breathing new life into ancient systems through modern technology and research.
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
                Join Our Wellness Yatra
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Embrace the power of ancient Bharat and walk with us toward a harmonious, thriving future.
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
