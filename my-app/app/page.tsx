"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShoppingCart, Key, Car } from "lucide-react"
import Link from "next/link"
import { BrandCarousel } from "@/components/brand-carousel"
import Image from "next/image"

const services = [
  {
    title: "Purchase",
    description: "Find your perfect luxury vehicle from our exclusive collection",
    icon: ShoppingCart,
  },
  {
    title: "Rent",
    description: "Experience luxury with our flexible rental options",
    icon: Key,
  },
  {
    title: "Sell",
    description: "Get the best value for your premium vehicle",
    icon: Car,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image src="/banner.jpg" alt="Luxury Car Banner" layout="fill" objectFit="cover" quality={100} priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
        />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b8b6f] to-[#c4af8d]">
                Luxury Redefined
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 px-4"
            >
              Experience automotive excellence with OLB Motors. Where luxury meets performance, and dreams become
              reality in Dubai.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
            >
              <Link href="/vehicles" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#9b8b6f] text-black hover:bg-[#c4af8d] h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg group"
                >
                  Explore Collection
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/sell" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
                >
                  Sell Your Vehicle
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-[#9b8b6f]">Premium</span> Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 px-4">
              Discover our comprehensive range of automotive services tailored to meet your needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b8b6f]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 sm:h-16 sm:w-16 text-[#9b8b6f] mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#9b8b6f]">{service.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-[#9b8b6f]">Choose</span> a Brand
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#9b8b6f] mx-auto" />
          </motion.div>
          <BrandCarousel />
        </div>
      </section>
    </div>
  )
}

