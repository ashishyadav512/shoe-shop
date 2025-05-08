"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src="/shoes/hero-background.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4 neon-glow"
          >
            STEP INTO THE FUTURE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="text-xl text-muted-foreground mb-8"
          >
            Discover our premium collection of cutting-edge footwear designed for the modern explorer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/80 animate-glow-pulse" asChild>
              <Link href="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/shop">Explore Collection</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
