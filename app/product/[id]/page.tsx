"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingBag, Star, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { use } from "react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageUrl: string | null
  categoryId: string | null
  category: {
    id: string
    name: string
  } | null
  rating: number
  reviewCount: number
  originalPrice?: number
  badge?: string
  fullDescription: string
  ingredients: string[]
  howToUse: string
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const productId = resolvedParams.id
  
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const { addToCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchProduct()
  }, [productId])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`)
      if (!response.ok) {
        throw new Error("Product not found")
      }
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error("Error fetching product:", error)
      toast({
        title: "Failed to fetch product",
        description: "There was an error fetching the product. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (!product) return

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl || "/placeholder.svg",
      quantity,
    })
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart`
    })
  }
  
  const handleBuyNow = () => {
    if (!product) return
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl || "/placeholder.svg",
      quantity,
    })
    
    // Navigate to checkout page
    router.push('/checkout')
  }

  if (isLoading) {
    return (
      <div className="container max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="w-full">
          <div className="w-48 h-6 bg-gray-200 rounded-md animate-pulse mb-4"></div>
          <div className="aspect-square w-full max-w-md mx-auto bg-gray-200 rounded-lg animate-pulse mb-4"></div>
          <div className="w-72 h-8 bg-gray-200 rounded-md animate-pulse mb-4"></div>
          <div className="w-24 h-8 bg-gray-200 rounded-md animate-pulse mb-8"></div>
          <div className="w-full h-20 bg-gray-200 rounded-md animate-pulse mb-8"></div>
          <div className="flex gap-4">
            <div className="w-1/2 h-12 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-12 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-4 text-gray-500">The product you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/shop">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
          {product.badge && (
            <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
              {product.badge}
            </div>
          )}
        </div>

        <div>
          {product.category && (
            <Link
              href={`/shop?category=${product.category.name}`}
              className="text-sm font-medium text-green-600 hover:text-green-700"
            >
              {product.category.name}
            </Link>
          )}
          <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
          <div className="mt-4">
            <span className="text-2xl font-bold">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">₹{product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium">Description</h3>
              <p className="mt-2 text-gray-500">{product.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Quantity</h3>
              <div className="mt-2 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <Button
                className="w-full"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
              
              <Button
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

