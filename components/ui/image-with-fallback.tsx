"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  containerClassName?: string
}

export default function ImageWithFallback({
  src,
  alt,
  containerClassName,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Create a placeholder URL based on the alt text
  const placeholderUrl = `/placeholder.svg?height=${props.height || 400}&width=${props.width || 400}&query=${encodeURIComponent(alt)}`

  const imageSrc = error ? placeholderUrl : src

  return (
    <div className={cn("relative", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <span className="mt-2 text-xs text-muted-foreground">Loading...</span>
          </div>
        </div>
      )}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        className={cn(className)}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          console.error(`Failed to load image: ${src}`)
          setError(true)
          setIsLoading(false)
        }}
        {...props}
      />
    </div>
  )
}
