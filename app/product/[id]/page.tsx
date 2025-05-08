"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { getFeaturedProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import Image from "next/image"

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id as string)
  const featuredProducts = getFeaturedProducts()
    .filter((p) => p.id !== id)
    .slice(0, 4)

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [currentView, setCurrentView] = useState(0)
  const viewLabels = ["Front View", "Side View", "Back View", "Top View"]

  if (!product) {
    notFound()
  }

  // Map product IDs to specific image paths
  const productImages: Record<string, string> = {
    "1": "/shoes/quantum-boost.jpg",
    "2": "/shoes/neon-glide.png",
    "3": "/shoes/apex-dominator.jpg",
    "4": "/shoes/stealth-runner.jpg",
    "5": "/shoes/cyber-trekker.jpg",
    "6": "/shoes/pulse-elite.jpg",
    "7": "/shoes/velocity-x.jpg",
    "8": "/shoes/urban-drift.jpg",
    "9": "/shoes/gravity-zero.jpg",
    "10": "/shoes/phantom-stride.jpg",
    "11": "/shoes/fusion-pro.jpg",
    "12": "/shoes/lunar-voyage.jpg",
  }

  // Get the image path for this product
  const imagePath = productImages[id as string] || product.image

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % viewLabels.length)
  }

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + viewLabels.length) % viewLabels.length)
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden neon-border bg-gray-800">
              <Image
                src={imagePath || "/placeholder.svg"}
                alt={`${product.name} - ${viewLabels[currentView]}`}
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority={true}
              />

              {/* View controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" onClick={prevView}>
                      ←
                    </Button>
                    <span className="text-sm font-medium">{viewLabels[currentView]}</span>
                    <Button variant="ghost" size="sm" onClick={nextView}>
                      →
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2">
              {viewLabels.map((label, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentView(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                    currentView === index ? "border-primary" : "border-transparent"
                  } hover:border-primary transition-colors bg-gray-800`}
                >
                  <Image
                    src={imagePath || "/placeholder.svg"}
                    alt={`${product.name} - ${label}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-muted-foreground">{product.category}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{product.name}</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-4 w-4", i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground")}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.0) 24 reviews</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              {product.isNew && (
                <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                  New Release
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                      className={cn("rounded-full", selectedColor === color && "bg-primary text-primary-foreground")}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "rounded-full w-10 h-10 p-0",
                        selectedSize === size && "bg-primary text-primary-foreground",
                      )}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                    -
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 animate-glow-pulse flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">On all orders over $100</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
