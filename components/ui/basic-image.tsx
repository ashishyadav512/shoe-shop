"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface BasicImageProps {
  alt: string
  className?: string
  style?: React.CSSProperties
}

// A very simple image component that just renders a colored div with the product name
export default function BasicImage({ alt, className, style }: BasicImageProps) {
  // Generate a simple color based on the alt text
  const generateColor = (text: string) => {
    let hash = 0
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash)
    }

    // Generate a vibrant color in the purple/blue range for our shoe shop theme
    const h = ((hash % 60) + 240) % 360 // Hue between 240-300 (blue to purple)
    const s = 70 + (hash % 30) // Saturation between 70-100%
    const l = 30 + (hash % 20) // Lightness between 30-50%

    return `hsl(${h}, ${s}%, ${l}%)`
  }

  const bgColor = generateColor(alt)

  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{
        backgroundColor: bgColor,
        ...style,
      }}
    >
      <div className="text-white text-center p-4 font-medium">{alt}</div>
    </div>
  )
}
