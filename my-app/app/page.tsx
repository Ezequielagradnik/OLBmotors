"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShoppingCart, Key, Car } from 'lucide-react'
import Link from 'next/link'
import { BrandCarousel } from "@/components/brand-carousel"

const services = [
  {
    title: "Purchase",
    description: "Find your perfect luxury vehicle from our exclusive collection",
    icon: ShoppingCart
  },
  {
    title: "Rent",
    description: "Experience luxury with our flexible rental options",
    icon: Key
  },
  {
    title: "Sell",
    description: "Get the best value for your premium vehicle",
    icon: Car
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b8b6f] to-[#c4af8d]">
                Luxury
              </span>{" "}
              Redefined
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12"
            >
              Experience automotive excellence with OLB Motors. Where luxury meets performance, 
              and dreams become reality in Dubai.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/vehicles">
                <Button 
                  size="lg" 
                  className="bg-[#9b8b6f] text-black hover:bg-[#c4af8d] h-14 px-8 text-lg group"
                >
                  Explore Collection
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/sell">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10 h-14 px-8 text-lg"
                >
                  Sell Your Vehicle
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#9b8b6f]">Premium</span> Services
            </h2>
            <p className="text-xl text-gray-400">
              Discover our comprehensive range of automotive services tailored to meet your needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-sm p-8 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b8b6f]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <service.icon className="h-16 w-16 text-[#9b8b6f] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-4 text-[#9b8b6f]">{service.title}</h3>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#9b8b6f]">Choose</span> a Brand
            </h2>
            <div className="w-24 h-1 bg-[#9b8b6f] mx-auto" />
          </motion.div>
          <BrandCarousel />
        </div>
      </section>
    </div>
  )
}

