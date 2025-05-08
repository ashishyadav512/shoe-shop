"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
}

export default function ProductCard({ id, name, price, image, category, isNew = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

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
  const imagePath = productImages[id] || image

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="product-card group relative bg-card rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-800">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={`${name} - ${category}`}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
            priority={id === "1"} // Prioritize loading the first image
          />
          {isNew && <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">New</Badge>}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{category}</p>
          <p className="font-bold">${price.toFixed(2)}</p>
        </div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-4 right-4"
      >
        <Button size="icon" className="rounded-full bg-primary hover:bg-primary/80">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </motion.div>
    </motion.div>
  )
}
