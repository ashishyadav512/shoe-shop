"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
}

interface FeaturedCollectionProps {
  title: string
  products: Product[]
  className?: string
}

export default function FeaturedCollection({ title, products, className }: FeaturedCollectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsPerView = 4

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setContainerWidth(width)
        setItemWidth(width / Math.min(itemsPerView, products.length))
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [products.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, products.length - itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const canGoNext = currentIndex < products.length - itemsPerView
  const canGoPrev = currentIndex > 0

  return (
    <div className={cn("py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={cn("rounded-full", !canGoPrev && "opacity-50 cursor-not-allowed")}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={!canGoNext}
              className={cn("rounded-full", !canGoNext && "opacity-50 cursor-not-allowed")}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={{
              x: -currentIndex * itemWidth,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${products.length * itemWidth}px` }}
          >
            {products.map((product) => (
              <div key={product.id} style={{ width: `${itemWidth}px` }} className="px-2">
                <ProductCard {...product} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
