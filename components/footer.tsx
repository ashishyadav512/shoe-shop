import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight neon-glow">NEON KICKS</h3>
            <p className="text-muted-foreground text-sm">
              Discover the future of footwear with our premium collection of cutting-edge designs and unparalleled
              comfort.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=running"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Running
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=lifestyle"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=basketball"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Basketball
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=limited"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Limited Edition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} NEON KICKS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
