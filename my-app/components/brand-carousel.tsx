"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
// Agregar URLs de imágenes para cada marca
const brands = [
  { name: 'Audi', image: 'https://example.com/audi-logo.png' },
  { name: 'Aurus', image: 'https://example.com/aurus-logo.png' },
  { name: 'Bentley', image: 'https://example.com/bentley-logo.png' },
  { name: 'BMW', image: 'https://example.com/bmw-logo.png' },
  { name: 'Cadillac', image: 'https://example.com/cadillac-logo.png' },
  { name: 'Ferrari', image: 'https://example.com/ferrari-logo.png' },
  { name: 'Lamborghini', image: 'https://example.com/lamborghini-logo.png' },
  { name: 'Lotus', image: 'https://example.com/lotus-logo.png' },
  { name: 'Maserati', image: 'https://example.com/maserati-logo.png' },
  { name: 'Mazda', image: 'https://example.com/mazda-logo.png' },
  { name: 'McLaren', image: 'https://example.com/mclaren-logo.png' },
  { name: 'Mercedes', image: 'https://example.com/mercedes-logo.png' },
  { name: 'Porsche', image: 'https://example.com/porsche-logo.png' },
  { name: 'Range Rover', image: 'https://example.com/range-rover-logo.png' },
  { name: 'Rolls Royce', image: 'https://example.com/rolls-royce-logo.png' },
  { name: 'Tesla', image: 'https://example.com/tesla-logo.png' }
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
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-32 text-center"
              >
                <div className="bg-zinc-800/50 p-4 rounded-xl backdrop-blur">
                  {/* Mostrar la imagen de la marca */}
                  <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    width={80} 
                    height={80} 
                    className="w-20 h-20 object-contain mx-auto mb-2" 
                  />
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
      >
        <ChevronRight className="w-6 h-6 text-[#9b8b6f]" />
      </button>
    </div>
  )
}