"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import ShoeImage from "./shoe-image"

interface ReliableImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  productName?: string
  category?: string
  fill?: boolean
}

export default function ReliableImage({
  src,
  alt,
  fallbackSrc,
  className,
  width = 400,
  height = 400,
  priority = false,
  productName,
  category,
  fill = false,
}: ReliableImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Generate a placeholder URL based on the alt text
  const placeholderUrl = `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(alt)}`

  // Use the placeholder URL if there's an error
  const imageSrc = error ? placeholderUrl : src

  const handleImageLoad = () => {
    setIsLoading(false)
    setError(false)
  }

  const handleImageError = () => {
    console.error(`Failed to load image: ${src}`)
    setIsLoading(false)

    // If fallback is provided and it's different from the current src, try it
    if (fallbackSrc && fallbackSrc !== src) {
      console.log(`Trying fallback image: ${fallbackSrc}`)
      // We'll use the placeholder instead of trying the fallback
      // since we know external images aren't working
      setError(true)
    } else {
      setError(true)
    }
  }

  // If we have an error and no fallback worked, show the SVG shoe or placeholder
  if (error) {
    if (productName && category) {
      return (
        <div className={cn("relative overflow-hidden", className)}>
          <ShoeImage
            productName={productName}
            category={category}
            className="w-full h-full"
            viewType={
              src.includes("-side") ? "side" : src.includes("-back") ? "back" : src.includes("-top") ? "top" : "front"
            }
          />
        </div>
      )
    } else {
      // Use Next.js built-in placeholder service
      return (
        <div className={cn("relative", className)}>
          <Image
            src={placeholderUrl || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className={cn("object-cover")}
          />
        </div>
      )
    }
  }

  const imageProps = fill ? { fill: true } : { width, height }

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50 backdrop-blur-sm z-10">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
        </div>
      )}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        {...imageProps}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={cn("object-cover", isLoading ? "opacity-0" : "opacity-100")}
        priority={priority}
      />
    </div>
  )
}
