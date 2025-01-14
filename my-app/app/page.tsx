"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShoppingCart, Key, Car } from 'lucide-react'
import Link from 'next/link'
import { BrandCarousel } from "@/components/brand-carousel"
import { Footer } from "@/components/footer"

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
      <section className="flex-1 flex items-center relative overflow-hidden bg-zinc-900" style={{ marginTop: '6rem' }}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#9b8b6f]">Luxury</span> Redefined <br />
              in Dubai
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Experience automotive excellence with OLB Motors. Where luxury meets performance, 
              and dreams become reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/vehicles">
                <Button 
                  size="lg" 
                  className="bg-[#9b8b6f] text-black hover:bg-[#c4af8d]"
                >
                  Explore Collection
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sell">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10"
                >
                  Sell Your Vehicle
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#9b8b6f]">Premium</span> Services
            </h2>
            <p className="text-gray-400">
              Discover our comprehensive range of automotive services tailored to meet your needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 hover:bg-zinc-800/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b8b6f]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="h-12 w-12 text-[#9b8b6f] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#9b8b6f]">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b8b6f]">Choose</span> a Brand
          </h2>
          <BrandCarousel />
        </div>
      </section>

      <Footer />
    </div>
  )
}
