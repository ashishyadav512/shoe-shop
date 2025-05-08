"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Loader2 } from "lucide-react"

interface ParallaxSectionProps {
  imageUrl: string
  children: React.ReactNode
}

export default function ParallaxSection({ imageUrl, children }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    // Preload the background image
    const img = new Image()
    img.src = imageUrl
    img.onload = () => {
      setIsLoading(false)
      console.log("Background image loaded successfully")
    }
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
      console.error("Background image failed to load:", imageUrl)
    }
  }, [imageUrl])

  return (
    <div ref={ref} className="parallax-container">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <div className="flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
            <p className="mt-4 text-muted-foreground">Loading background...</p>
          </div>
        </div>
      )}
      <motion.div
        className="parallax-bg"
        style={{
          backgroundImage: hasError ? "linear-gradient(to bottom, #1a1a2e, #16213e)" : `url(${imageUrl})`,
          y: backgroundY,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
      <div className="parallax-content">{children}</div>
    </div>
  )
}
