"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Pause, Play, RotateCcw } from "lucide-react"
import ImageWithFallback from "@/components/ui/image-with-fallback"

interface ThreeDShoeViewerProps {
  images: string[]
  productName: string
  autoRotate?: boolean
}

export default function ThreeDShoeViewer({ images, productName, autoRotate = false }: ThreeDShoeViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(autoRotate)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-rotate functionality
  useEffect(() => {
    let rotationInterval: NodeJS.Timeout

    if (isRotating && !isDragging) {
      rotationInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 1000)
    }

    return () => clearInterval(rotationInterval)
  }, [isRotating, isDragging, images.length])

  // Mouse and touch event handlers for manual rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsRotating(false)
    setStartX(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setIsRotating(false)
    setStartX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleDrag(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleDrag(e.touches[0].clientX)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const deltaX = clientX - startX
    const threshold = containerWidth / images.length / 2

    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? -1 : 1
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction
        if (newIndex < 0) newIndex = images.length - 1
        if (newIndex >= images.length) newIndex = 0
        return newIndex
      })
      setStartX(clientX)
    }
  }

  const toggleRotation = () => {
    setIsRotating(!isRotating)
  }

  const resetRotation = () => {
    setCurrentIndex(0)
    setIsRotating(false)
  }

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative aspect-square rounded-lg overflow-hidden neon-border cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              display: currentIndex === index ? "block" : "none",
            }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <ImageWithFallback
              src={image || "/placeholder.svg"}
              alt={`${productName} - view ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </motion.div>
        ))}

        {/* Overlay with instructions */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <p className="text-white text-center px-4">Drag to rotate or use controls below</p>
        </div>

        {/* Rotation indicator */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center z-10">
          <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
            <span className="text-xs">
              View {currentIndex + 1}/{images.length}
            </span>
            <div className="flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <Button variant="outline" size="sm" onClick={toggleRotation} className="rounded-full">
          {isRotating ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
          {isRotating ? "Pause" : "Auto-Rotate"}
        </Button>
        <Button variant="outline" size="sm" onClick={resetRotation} className="rounded-full">
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>
    </div>
  )
}
