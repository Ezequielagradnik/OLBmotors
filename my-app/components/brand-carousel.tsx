"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Brand data with image URLs
const brands = [
  { name: "Audi", image: "/audi-logo.png" },
  { name: "Aurus", image: "/aurus-Logo.jpg" },
  { name: "Bentley", image: "/bentley-logo.png" },
  { name: "BMW", image: "/BMW-logo.png" },
  { name: "Cadillac", image: "/cadillac-logo.jpg" },
  { name: "Ferrari", image: "/ferrari-logo.jpg" },
  { name: "Lamborghini", image: "/lambo-logo.jpg" },
  { name: "Lotus", image: "/lotus-logo.png" },
  { name: "Maserati", image: "/Maserati-logo.jpg" },
  { name: "Mazda", image: "/Mazda-Logo.png" },
  { name: "McLaren", image: "/mclaren-logo.webp" },
  { name: "Mercedes", image: "/mercedes-logo.jpg" },
  { name: "Porsche", image: "/porsche-logo.png" },
  { name: "Range Rover", image: "/range-logo.svg" },
  { name: "Rolls Royce", image: "/rolls-logo.png" },
  { name: "Tesla", image: "/tesla-logo.png" },
]

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 5

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= brands.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? brands.length - 1 : prev - 1))
  }

  const visibleBrands = [...brands.slice(currentIndex), ...brands.slice(0, currentIndex)].slice(0, itemsToShow)

  return (
    <div className="relative max-w-5xl mx-auto px-12">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous brand"
      >
        <ChevronLeft className="w-6 h-6 text-[#9b8b6f]" />
      </button>
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center gap-8">
          <AnimatePresence mode="popLayout">
            {visibleBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-32 text-center"
              >
                <div className="bg-zinc-800/50 p-4 rounded-xl backdrop-blur transition-colors">
                  <div className="w-20 h-20 relative mx-auto mb-2">
                    <Image
                      src={brand.image || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="(max-width: 80px) 100vw, 80px"
                      className="object-contain rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-sm text-[#9b8b6f]">{brand.name}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next brand"
      >
        <ChevronRight className="w-6 h-6 text-[#9b8b6f]" />
      </button>
    </div>
  )
}

