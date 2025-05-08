"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { products, type Product } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { CheckIcon, FilterIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Running", "Lifestyle", "Basketball", "Training", "Outdoor"]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState([0, 250])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get all unique colors and sizes
  const allColors = Array.from(new Set(products.flatMap((product) => product.colors)))
  const allSizes = Array.from(new Set(products.flatMap((product) => product.sizes))).sort(
    (a, b) => Number(a) - Number(b),
  )

  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Filter by price range
    result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by colors
    if (selectedColors.length > 0) {
      result = result.filter((product) => product.colors.some((color) => selectedColors.includes(color)))
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      result = result.filter((product) => product.sizes.some((size) => selectedSizes.includes(size)))
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query),
      )
    }

    // Sort products
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      default:
        // featured
        result.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1))
    }

    setFilteredProducts(result)
  }, [selectedCategory, priceRange, selectedColors, selectedSizes, searchQuery, sortBy])

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const resetFilters = () => {
    setSelectedCategory("All")
    setPriceRange([0, 250])
    setSelectedColors([])
    setSelectedSizes([])
    setSearchQuery("")
    setSortBy("featured")
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-xs"
              />
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <FilterIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Mobile */}
            <motion.div
              className="md:hidden fixed inset-0 bg-background z-40 overflow-auto"
              initial={{ x: "100%" }}
              animate={{ x: isFilterOpen ? "0%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                    <XIcon className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Mobile Filters Content */}
                  <div>
                    <h3 className="font-medium mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="rounded-full"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={250}
                      step={10}
                      onValueChange={(value) => setPriceRange(value as number[])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {allColors.map((color) => (
                        <Button
                          key={color}
                          variant="outline"
                          size="sm"
                          onClick={() => toggleColor(color)}
                          className={cn(
                            "rounded-full",
                            selectedColors.includes(color) && "bg-primary text-primary-foreground",
                          )}
                        >
                          {color}
                          {selectedColors.includes(color) && <CheckIcon className="ml-1 h-3 w-3" />}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map((size) => (
                        <Button
                          key={size}
                          variant="outline"
                          size="sm"
                          onClick={() => toggleSize(size)}
                          className={cn(
                            "rounded-full w-10 h-10 p-0",
                            selectedSizes.includes(size) && "bg-primary text-primary-foreground",
                          )}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" onClick={resetFilters} className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "justify-start px-2",
                        selectedCategory === category
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground",
                      )}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={250}
                  step={10}
                  onValueChange={(value) => setPriceRange(value as number[])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {allColors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                      onClick={() => toggleColor(color)}
                      className={cn(
                        "rounded-full",
                        selectedColors.includes(color) && "bg-primary text-primary-foreground",
                      )}
                    >
                      {color}
                      {selectedColors.includes(color) && <CheckIcon className="ml-1 h-3 w-3" />}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSize(size)}
                      className={cn(
                        "rounded-full w-10 h-10 p-0",
                        selectedSizes.includes(size) && "bg-primary text-primary-foreground",
                      )}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">{filteredProducts.length} products</p>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
