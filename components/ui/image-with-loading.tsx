"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ImageWithLoadingProps extends Omit<ImageProps, "onLoadingComplete" | "onError"> {
  fallbackSrc?: string
  containerClassName?: string
}

export default function ImageWithLoading({
  src,
  alt,
  fallbackSrc = "/shoe-images/default-front.png",
  containerClassName,
  className,
  ...props
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setError(true)
    setCurrentSrc(fallbackSrc)
  }

  return (
    <div className={cn("relative", containerClassName)}>
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <span className="mt-2 text-xs text-muted-foreground">Loading image...</span>
          </div>
        </div>
      )}
      <Image
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        {...props}
      />
    </div>
  )
}
