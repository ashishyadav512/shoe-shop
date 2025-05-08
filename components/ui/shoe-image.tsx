"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ShoeImageProps {
  productName: string
  category: string
  color?: string
  className?: string
  style?: React.CSSProperties
  viewType?: "front" | "side" | "back" | "top"
}

export default function ShoeImage({
  productName,
  category,
  color,
  className,
  style,
  viewType = "front",
}: ShoeImageProps) {
  const [isLoaded, setIsLoaded] = useState(true)

  // Generate a color based on the product name if not provided
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

  const shoeColor = color || generateColor(productName)
  const accentColor = generateColor(productName + "accent")

  // Choose the appropriate shoe SVG based on category and view
  const renderShoe = () => {
    // Basic running shoe SVG - front view
    if ((category === "Running" || category === "Training") && viewType === "front") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M50,140 C60,120 80,110 100,110 C120,110 140,120 150,140 L160,150 C165,155 165,160 160,165 L40,165 C35,160 35,155 40,150 L50,140 Z"
            fill={shoeColor}
          />
          <path
            d="M70,140 L130,140 L130,120 C130,115 125,110 120,110 L80,110 C75,110 70,115 70,120 L70,140 Z"
            fill={accentColor}
          />
          <path d="M40,150 L160,150 L160,165 L40,165 Z" fill="#333" />
          <path d="M70,110 L130,110 L130,120 L70,120 Z" fill="#555" />
          <path d="M85,125 L95,125 L95,135 L85,135 Z" fill="#fff" opacity="0.7" />
          <path d="M105,125 L115,125 L115,135 L105,135 Z" fill="#fff" opacity="0.7" />
        </svg>
      )
    }

    // Running shoe - side view
    if ((category === "Running" || category === "Training") && viewType === "side") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M30,140 C40,130 60,125 80,125 L150,125 C160,125 170,130 180,140 L180,160 L30,160 L30,140 Z"
            fill={shoeColor}
          />
          <path d="M30,160 L180,160 L180,170 L30,170 Z" fill="#333" />
          <path d="M80,125 L150,125 L150,140 L80,140 Z" fill={accentColor} />
          <path
            d="M50,135 C55,130 60,128 65,128 L75,128 C80,128 85,130 90,135"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            opacity="0.7"
          />
          <path d="M100,130 L140,130 L140,135 L100,135 Z" fill="#fff" opacity="0.5" />
        </svg>
      )
    }

    // Running shoe - back view
    if ((category === "Running" || category === "Training") && viewType === "back") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M60,140 C70,120 90,110 100,110 C110,110 130,120 140,140 L150,150 C155,155 155,160 150,165 L50,165 C45,160 45,155 50,150 L60,140 Z"
            fill={shoeColor}
          />
          <path d="M50,150 L150,150 L150,165 L50,165 Z" fill="#333" />
          <path d="M90,110 L110,110 L110,140 L90,140 Z" fill={accentColor} />
          <path d="M95,120 L105,120 L105,130 L95,130 Z" fill="#fff" opacity="0.5" />
        </svg>
      )
    }

    // Running shoe - top view
    if ((category === "Running" || category === "Training") && viewType === "top") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M50,100 C60,90 80,85 100,85 C120,85 140,90 150,100 L150,120 L50,120 L50,100 Z" fill={shoeColor} />
          <path d="M60,85 L140,85 L140,95 L60,95 Z" fill={accentColor} />
          <path d="M70,95 L130,95 L130,105 L70,105 Z" fill="#555" />
          <path d="M80,105 L120,105 L120,115 L80,115 Z" fill="#444" />
          <ellipse cx="100" cy="100" rx="5" ry="10" fill="#fff" opacity="0.3" />
        </svg>
      )
    }

    // Basketball shoe - front view
    if (category === "Basketball" && viewType === "front") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M50,140 C60,110 80,100 100,100 C120,100 140,110 150,140 L160,150 C165,155 165,160 160,165 L40,165 C35,160 35,155 40,150 L50,140 Z"
            fill={shoeColor}
          />
          <path
            d="M60,140 L140,140 L140,110 C140,105 135,100 130,100 L70,100 C65,100 60,105 60,110 L60,140 Z"
            fill={accentColor}
          />
          <path d="M40,150 L160,150 L160,165 L40,165 Z" fill="#333" />
          <path d="M70,100 L130,100 L130,110 L70,110 Z" fill="#555" />
          <path d="M85,115 L95,115 L95,125 L85,125 Z" fill="#fff" opacity="0.7" />
          <path d="M105,115 L115,115 L115,125 L105,125 Z" fill="#fff" opacity="0.7" />
          <path d="M60,130 L140,130" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <path d="M60,135 L140,135" stroke="#fff" strokeWidth="1" opacity="0.5" />
        </svg>
      )
    }

    // Basketball shoe - side view
    if (category === "Basketball" && viewType === "side") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M30,140 C40,120 60,110 80,110 L150,110 C160,110 170,120 180,140 L180,160 L30,160 L30,140 Z"
            fill={shoeColor}
          />
          <path d="M30,160 L180,160 L180,170 L30,170 Z" fill="#333" />
          <path d="M80,110 L150,110 L150,130 L80,130 Z" fill={accentColor} />
          <path d="M90,130 L140,130 L140,140 L90,140 Z" fill="#555" />
          <path d="M100,115 L130,115 L130,125 L100,125 Z" fill="#fff" opacity="0.3" />
          <path d="M40,145 L170,145" stroke="#fff" strokeWidth="1" opacity="0.5" />
        </svg>
      )
    }

    // Basketball shoe - back view
    if (category === "Basketball" && viewType === "back") {
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M60,140 C70,110 90,100 100,100 C110,100 130,110 140,140 L150,150 C155,155 155,160 150,165 L50,165 C45,160 45,155 50,150 L60,140 Z"
            fill={shoeColor}
          />
          <path d="M50,150 L150,150 L150,165 L50,165 Z" fill="#333" />
          <path d="M80,100 L120,100 L120,140 L80,140 Z" fill={accentColor} />
          <path d="M90,110 L110,110 L110,120 L90,120 Z" fill="#fff" opacity="0.5" />
          <path d="M80,130 L120,130" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <path d="M80,135 L120,135" stroke="#fff" strokeWidth="1" opacity="0.5" />
        </svg>
      )
    }

    // Default shoe - front view
    return (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M50,140 C60,120 80,110 100,110 C120,110 140,120 150,140 L160,150 C165,155 165,160 160,165 L40,165 C35,160 35,155 40,150 L50,140 Z"
          fill={shoeColor}
        />
        <path
          d="M70,140 L130,140 L130,120 C130,115 125,110 120,110 L80,110 C75,110 70,115 70,120 L70,140 Z"
          fill={accentColor}
        />
        <path d="M40,150 L160,150 L160,165 L40,165 Z" fill="#333" />
        <path d="M70,110 L130,110 L130,120 L70,120 Z" fill="#555" />
        <path d="M85,125 L95,125 L95,135 L85,135 Z" fill="#fff" opacity="0.7" />
        <path d="M105,125 L115,125 L115,135 L105,135 Z" fill="#fff" opacity="0.7" />
      </svg>
    )
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundColor: "#1a1a2e",
        ...style,
      }}
    >
      {isLoaded ? (
        renderShoe()
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <p className="text-muted-foreground">Loading shoe...</p>
        </div>
      )}
    </div>
  )
}
