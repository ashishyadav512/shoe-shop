"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface StatCounterProps {
  value: number
  label: string
  duration?: number
  delay?: number
}

function StatCounter({ value, label, duration = 2, delay = 0 }: StatCounterProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      let start = 0
      const end = value
      const totalDuration = duration * 1000
      const incrementTime = totalDuration / end

      setTimeout(() => {
        const timer = setInterval(() => {
          start += 1
          setCount(start)
          if (start >= end) clearInterval(timer)
        }, incrementTime)

        return () => clearInterval(timer)
      }, delay * 1000)
    }
  }, [isInView, controls, value, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      className="text-center"
    >
      <div className="text-4xl font-bold mb-2 neon-glow">{count}+</div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  )
}

import { useState } from "react"

export default function AboutPage() {
  // Update team member images to ensure they load properly
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image:
        "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20asian%20man%20in%20dark%20clothing%20on%20dark%20background",
      bio: "Alex founded NEON KICKS with a vision to revolutionize footwear through innovative design and technology.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Head of Design",
      image:
        "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20latina%20woman%20in%20dark%20clothing%20on%20dark%20background",
      bio: "Sophia brings over 15 years of experience in footwear design, having previously worked with major global brands.",
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      image:
        "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20black%20man%20in%20dark%20clothing%20on%20dark%20background",
      bio: "Marcus leads our technology initiatives, focusing on integrating cutting-edge materials and manufacturing processes.",
    },
    {
      name: "Emma Wilson",
      role: "Marketing Director",
      image:
        "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20white%20woman%20in%20dark%20clothing%20on%20dark%20background",
      bio: "Emma oversees our global marketing strategy, building the NEON KICKS brand through innovative campaigns.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 neon-glow"
              >
                Our Story
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground mb-6"
              >
                Founded in 2018, NEON KICKS began with a simple mission: to create footwear that combines cutting-edge
                technology, sustainable materials, and bold design. What started as a small passion project has grown
                into a global brand that pushes the boundaries of what shoes can be.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted-foreground mb-6"
              >
                Our team of designers, engineers, and footwear experts work together to create products that not only
                look amazing but also enhance performance and comfort. We believe that the future of footwear is bright,
                bold, and sustainable.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            {/* Also update the about page hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-lg overflow-hidden neon-border"
            >
              <Image
                src="/placeholder.svg?height=800&width=800&query=modern%20shoe%20design%20studio%20with%20dark%20theme%20and%20neon%20purple%20accents"
                alt="NEON KICKS Design Studio"
                fill
                className="object-cover"
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={50} label="Countries" delay={0.2} />
            <StatCounter value={120} label="Retail Locations" delay={0.4} />
            <StatCounter value={500} label="Employees" delay={0.6} />
            <StatCounter value={1000000} label="Happy Customers" delay={0.8} />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-12 text-center"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of what's possible in footwear design and technology, never settling
                for the status quo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to reducing our environmental footprint through sustainable materials, ethical
                manufacturing, and responsible business practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-background p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-muted-foreground">
                We design for everyone, celebrating diversity and ensuring our products are accessible to all,
                regardless of background or ability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-12 text-center"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden neon-border">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Join Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              We're always looking for talented individuals who share our passion for innovation and design. Check out
              our current openings or drop us a line.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button asChild>
                <Link href="/careers">View Careers</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
