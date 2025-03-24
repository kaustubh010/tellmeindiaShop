"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Filter, ShoppingBag, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/components/cart-provider";
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

export default function ShopPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Update selected categories when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      console.log("Fetched products:", data); // Debug log
    } catch (error) {
      console.error("Error fetching products:", error);
      toast({
        title: "Error",
        description: "Failed to fetch products",
        variant: "destructive",
      });
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
      console.log("Fetched categories:", data); // Debug log
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast({
        title: "Error",
        description: "Failed to fetch categories",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate filtered products
  const filteredProducts = products
    .filter((product) => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Category filter - only apply if categories are selected
      if (selectedCategories.length > 0) {
        // Handle case where categoryId might be null by converting to string
        const productCategoryId = product.categoryId ? product.categoryId : "";

        // Check if the product's category is in selectedCategories
        return selectedCategories.includes(productCategoryId);
      }

      // If no categories selected, include all products that passed price filter
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low-high":
          return a.price - b.price;
        case "price-high-low":
          return b.price - a.price;
        case "newest":
          return (
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
        default:
          return 0;
      }
    });

  // Update selected categories when URL parameter changes
  useEffect(() => {
    if (categoryParam && categories.length > 0) {
      const matchedCategory = categories.find(
        (category) =>
          category.name.toLowerCase() ===
          decodeURIComponent(categoryParam).toLowerCase()
      );

      if (matchedCategory) {
        setSelectedCategories([matchedCategory.id]);
      } else {
        setSelectedCategories([]); // Clear selection if category not found
      }
    }
  }, [categoryParam, categories]); // Run when categoryParam or categories change

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
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
      description: "Added to cart",
    });
  };

  if (isLoading) {
    return (
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
          <p className="text-gray-500 mt-1">
            Browse our collection of premium Ayurvedic products
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="py-4">
                <h3 className="font-medium mb-4">Filters</h3>
                {renderFilters()}
              </div>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Sort: {getSortLabel(sortOption)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortOption("featured")}>
                Featured
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-low-high")}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-high-low")}>
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("newest")}>
                Newest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block">{renderFilters()}</div>

        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-gray-500 mt-1">Try adjusting your filters</p>
              {products.length > 0 && (
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 10000]);
                  }}
                >
                  Clear all filters
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
          )}
        </div>
      </div>
    </div>
  );

  function renderFilters() {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Categories</h3>
          <div className="space-y-3">
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="ml-2 text-sm font-normal"
                  >
                    {category.name}
                  </Label>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">No categories found</div>
            )}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="font-medium mb-4">Price Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={[0, 10000]}
              max={10000}
              step={10}
              value={priceRange}
              onValueChange={(value) => {
                if (Array.isArray(value) && value.length === 2) {
                  setPriceRange([value[0], value[1]]);
                }
              }}
              className="mb-6"
            />
            <div className="flex items-center justify-between">
              <div className="border rounded-md px-2 py-1 w-20">
                ₹{priceRange[0]}
              </div>
              <div className="border rounded-md px-2 py-1 w-20 text-right">
                ₹{priceRange[1]}
              </div>
            </div>
          </div>
        </div>
        <Separator />
        {(selectedCategories.length > 0 ||
          priceRange[0] > 0 ||
          priceRange[1] < 10000) && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSelectedCategories([]);
              setPriceRange([0, 10000]);
            }}
          >
            Clear all filters
          </Button>
        )}
      </div>
    );
  }

  function getSortLabel(option: string) {
    switch (option) {
      case "price-low-high":
        return "Price: Low to High";
      case "price-high-low":
        return "Price: High to Low";
      case "newest":
        return "Newest";
      default:
        return "Featured";
    }
  }
}
