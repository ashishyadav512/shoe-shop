export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  colors: string[]
  sizes: string[]
  isNew?: boolean
  isFeatured?: boolean
  images?: string[] // Additional images for the product
}

export const products: Product[] = [
  {
    id: "1",
    name: "Quantum Boost",
    price: 189.99,
    image: "/shoe-images/quantum-boost.png",
    category: "Running",
    description:
      "Experience unparalleled energy return with our revolutionary Quantum Boost technology. These running shoes feature a responsive midsole that propels you forward with each stride, while the breathable upper keeps your feet cool and comfortable.",
    colors: ["Black", "Purple", "White"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/quantum-boost.png",
      "/shoe-images/quantum-boost-side.png",
      "/shoe-images/quantum-boost-back.png",
      "/shoe-images/quantum-boost-top.png",
    ],
  },
  {
    id: "2",
    name: "Neon Glide",
    price: 159.99,
    image: "/shoe-images/neon-glide.png",
    category: "Lifestyle",
    description:
      "Turn heads with the Neon Glide, featuring eye-catching accents that illuminate in low light. The sleek design pairs perfectly with any outfit, while the cushioned sole ensures all-day comfort.",
    colors: ["Black/Blue", "Black/Pink", "White/Green"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isFeatured: true,
    images: [
      "/shoe-images/neon-glide.png",
      "/shoe-images/neon-glide-side.png",
      "/shoe-images/neon-glide-back.png",
      "/shoe-images/neon-glide-top.png",
    ],
  },
  {
    id: "3",
    name: "Apex Dominator",
    price: 219.99,
    image: "/shoe-images/apex-dominator.png",
    category: "Basketball",
    description:
      "Dominate the court with our high-performance basketball shoe. The Apex Dominator features enhanced ankle support, superior traction, and responsive cushioning to help you play at your best.",
    colors: ["Black/Purple", "White/Red", "Blue/Yellow"],
    sizes: ["8", "9", "10", "11", "12", "13"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/apex-dominator.png",
      "/shoe-images/apex-dominator-side.png",
      "/shoe-images/apex-dominator-back.png",
      "/shoe-images/apex-dominator-top.png",
    ],
  },
  {
    id: "4",
    name: "Stealth Runner",
    price: 149.99,
    image: "/shoe-images/stealth-runner.png",
    category: "Running",
    description:
      "The Stealth Runner combines minimalist design with maximum performance. The lightweight construction and responsive cushioning make these perfect for daily runs and race day alike.",
    colors: ["Black", "Grey", "Navy"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isFeatured: true,
    images: [
      "/shoe-images/stealth-runner.png",
      "/shoe-images/stealth-runner-side.png",
      "/shoe-images/stealth-runner-back.png",
      "/shoe-images/stealth-runner-top.png",
    ],
  },
  {
    id: "5",
    name: "Cyber Trekker",
    price: 179.99,
    image: "/shoe-images/cyber-trekker.png",
    category: "Outdoor",
    description:
      "Conquer any terrain with the Cyber Trekker. These rugged hiking boots feature waterproof construction, superior grip, and futuristic styling that stands out on the trail.",
    colors: ["Black/Green", "Grey/Orange", "Brown/Blue"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/cyber-trekker.png",
      "/shoe-images/cyber-trekker-side.png",
      "/shoe-images/cyber-trekker-back.png",
      "/shoe-images/cyber-trekker-top.png",
    ],
  },
  {
    id: "6",
    name: "Pulse Elite",
    price: 199.99,
    image: "/shoe-images/pulse-elite.png",
    category: "Training",
    description:
      "Elevate your training with the Pulse Elite. Designed for versatility, these shoes provide stability for lifting and cushioning for cardio, making them the perfect all-in-one gym companion.",
    colors: ["Black/Red", "White/Blue", "Grey/Yellow"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isFeatured: true,
    images: [
      "/shoe-images/pulse-elite.png",
      "/shoe-images/pulse-elite-side.png",
      "/shoe-images/pulse-elite-back.png",
      "/shoe-images/pulse-elite-top.png",
    ],
  },
  {
    id: "7",
    name: "Velocity X",
    price: 229.99,
    image: "/shoe-images/velocity-x.png",
    category: "Running",
    description:
      "Break your personal records with the Velocity X. Featuring a carbon fiber plate and our most responsive foam, these racing shoes are engineered for speed and efficiency.",
    colors: ["Red/Black", "Blue/White", "Yellow/Black"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/velocity-x.png",
      "/shoe-images/velocity-x-side.png",
      "/shoe-images/velocity-x-back.png",
      "/shoe-images/velocity-x-top.png",
    ],
  },
  {
    id: "8",
    name: "Urban Drift",
    price: 139.99,
    image: "/shoe-images/urban-drift.png",
    category: "Lifestyle",
    description:
      "Express your unique style with the Urban Drift. These fashion-forward sneakers feature distinctive patterns and premium materials that make a statement wherever you go.",
    colors: ["Black/Pattern", "White/Pattern", "Grey/Pattern"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isFeatured: true,
    images: [
      "/shoe-images/urban-drift.png",
      "/shoe-images/urban-drift-side.png",
      "/shoe-images/urban-drift-back.png",
      "/shoe-images/urban-drift-top.png",
    ],
  },
  {
    id: "9",
    name: "Gravity Zero",
    price: 249.99,
    image: "/shoe-images/gravity-zero.png",
    category: "Basketball",
    description:
      "Defy gravity with our most advanced basketball shoe yet. The Gravity Zero features our proprietary air cushioning system that provides unmatched vertical support and landing comfort for high-flying players.",
    colors: ["Black/Gold", "White/Silver", "Red/Black"],
    sizes: ["8", "9", "10", "11", "12", "13", "14"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/gravity-zero.png",
      "/shoe-images/gravity-zero-side.png",
      "/shoe-images/gravity-zero-back.png",
      "/shoe-images/gravity-zero-top.png",
    ],
  },
  {
    id: "10",
    name: "Phantom Stride",
    price: 179.99,
    image: "/shoe-images/phantom-stride.png",
    category: "Running",
    description:
      "Run like a ghost with the Phantom Stride. These ultra-lightweight running shoes feature our thinnest yet most responsive midsole, giving you the sensation of running on air while providing the support you need for long distances.",
    colors: ["Ghost White", "Shadow Black", "Mist Grey"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/phantom-stride.png",
      "/shoe-images/phantom-stride-side.png",
      "/shoe-images/phantom-stride-back.png",
      "/shoe-images/phantom-stride-top.png",
    ],
  },
  {
    id: "11",
    name: "Fusion Pro",
    price: 209.99,
    image: "/shoe-images/fusion-pro.png",
    category: "Training",
    description:
      "The ultimate cross-training shoe, the Fusion Pro adapts to whatever workout you throw at it. With a stable heel for lifting, responsive forefoot for cardio, and durable construction for everything in between, it's the only shoe you need in your gym bag.",
    colors: ["Charcoal/Lime", "Navy/Orange", "Black/Red"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    isNew: false,
    isFeatured: true,
    images: [
      "/shoe-images/fusion-pro.png",
      "/shoe-images/fusion-pro-side.png",
      "/shoe-images/fusion-pro-back.png",
      "/shoe-images/fusion-pro-top.png",
    ],
  },
  {
    id: "12",
    name: "Lunar Voyage",
    price: 169.99,
    image: "/shoe-images/lunar-voyage.png",
    category: "Lifestyle",
    description:
      "Inspired by space exploration, the Lunar Voyage features a unique crater-textured outsole and reflective upper that mimics the surface of the moon. These conversation-starting sneakers aren't just about looks—they provide cloud-like comfort for all-day wear.",
    colors: ["Moon Grey", "Cosmic Black", "Asteroid White"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: true,
    isFeatured: true,
    images: [
      "/shoe-images/lunar-voyage.png",
      "/shoe-images/lunar-voyage-side.png",
      "/shoe-images/lunar-voyage-back.png",
      "/shoe-images/lunar-voyage-top.png",
    ],
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured)
}

export function getNewArrivals(): Product[] {
  return products.filter((product) => product.isNew)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}
