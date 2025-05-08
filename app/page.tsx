import { getFeaturedProducts, getNewArrivals } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import ProductCard from "@/components/product-card"
import Image from "next/image"

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 4)
  const newArrivals = getNewArrivals().slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Collection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Limited Edition Series</h2>
              <p className="text-muted-foreground mb-6">
                Discover our exclusive collection of limited edition footwear, designed in collaboration with
                world-renowned artists and designers. Each pair is a unique masterpiece that combines cutting-edge
                technology with unparalleled style.
              </p>
              <Button asChild>
                <Link href="/shop?category=limited">
                  Explore Limited Editions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden neon-border bg-gray-800">
              <Image
                src="/shoes/limited-edition.jpg"
                alt="Limited Edition Neon Sneaker"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive access to new releases, special offers, and insider content. Be
            the first to know about our latest drops and collaborations.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/80">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
