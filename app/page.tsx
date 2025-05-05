"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string | null;
  categoryId: string | null;
  category: Category | null;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
}

export default function Home() {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const featuredProducts = async () => {
    try {
      const response = await fetch("/api/products/featured");
      const data = await response.json();
      setProducts(data);
      console.log("Fetched products:", data); // Debug log
    } catch (error) {
      console.error("Error fetching products:", error);
      toast({
        title: "Error",
        description: "Failed to fetch products",
        variant: "destructive"
      });
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories/featured");
      const data = await response.json();
      setCategories(data);
      console.log("Fetched categories:", data); // Debug log
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast({
        title: "Error",
        description: "Failed to fetch categories",
        variant: "destructive"
      });
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl || "/placeholder.svg",
    });
    toast({
      title: "Success",
      description: "Added to cart"
    });
  };

  useEffect(() => {
    featuredProducts();
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero.jpg?height=1080&width=1920')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Natural Healing for Modern Living
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Discover the ancient wisdom of Ayurveda with our premium,
                ethically sourced products
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-green-600 border-green-600 hover:bg-green-50"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Featured Products
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our most popular Ayurvedic remedies and wellness products
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {products &&
              products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.id}`}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative aspect-square">
                        <Image
                          src={product.imageUrl || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-bold">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  <Button
                    size="sm"
                    className="absolute bottom-4 right-4 rounded-full h-8 w-8 p-0 bg-green-600 hover:bg-green-700"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                  </Button>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center space-y-2 p-4"
              >
                <div className="p-3 rounded-full bg-green-100">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <blockquote className="mt-4 text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Join Our Community
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Subscribe to our newsletter for exclusive offers, Ayurvedic
                tips, and new product announcements
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
import { Leaf, ShieldCheck, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-provider";

const benefits = [
  {
    title: "100% Natural Ingredients",
    description:
      "All our products are made with pure, natural ingredients sourced ethically.",
    icon: Leaf,
  },
  {
    title: "Quality Guaranteed",
    description:
      "Every product undergoes rigorous testing to ensure the highest quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Fast & Free Shipping",
    description:
      "Enjoy free shipping on all orders over ₹500 with quick delivery to your door.",
    icon: Truck,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    quote:
      "These products have completely transformed my daily wellness routine. I feel more balanced and energetic!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    quote:
      "As someone who's tried many Ayurvedic products, I can confidently say these are the highest quality I've found.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Priya Patel",
    location: "Chicago, IL",
    rating: 4,
    quote:
      "The Ashwagandha supplement has helped me manage stress so effectively. I'm sleeping better than ever!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
