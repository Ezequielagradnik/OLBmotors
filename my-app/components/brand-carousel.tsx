"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brands = [
  'Audi', 'Aurus', 'Bentley', 'BMW', 'Cadillac', 'Ferrari', 'Lamborghini', 'Lotus',
  'Maserati', 'Mazda', 'McLaren', 'Mercedes', 'Porsche', 'Range Rover', 'Rolls Royce', 'Tesla'
]

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 5

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= brands.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? brands.length - 1 : prev - 1
    )
  }

  const visibleBrands = [...brands.slice(currentIndex), ...brands.slice(0, currentIndex)]
    .slice(0, itemsToShow)

  return (
    <div className="relative max-w-5xl mx-auto px-12">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-[#9b8b6f]" />
      </button>
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center gap-8">
          <AnimatePresence mode="popLayout">
            {visibleBrands.map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-32 text-center"
              >
                <div className="bg-zinc-800/50 p-4 rounded-xl backdrop-blur">
                  <div className="w-20 h-20 bg-zinc-700 rounded-full mx-auto mb-2"></div>
                  <p className="mt-2 text-sm text-[#9b8b6f]">{brand}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-[#9b8b6f]" />
      </button>
    </div>
  )
}

