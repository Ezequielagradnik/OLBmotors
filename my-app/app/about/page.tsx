"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="fixed inset-0">
        <Image src="/IMG_4871.JPG" alt="About OLB Motors" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <main className="relative flex-grow z-10 pt-24">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                <span className="text-[#9b8b6f]">About OLB Motors</span>
              </h1>
              <div className="w-32 h-1 bg-[#9b8b6f] mx-auto mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-zinc-900/80 p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold text-[#9b8b6f] mb-3">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  At OLB Motors, our mission is to redefine luxury vehicle sales and services, with a particular focus
                  on exclusivity for your leisure or business experience. Through the fusion of our extensive knowledge
                  and experience, we offer a wide range of customized luxury vehicle solutions, ensuring the perfect
                  match for each client.
                </p>
              </div>

              <div className="bg-zinc-900/80 p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold text-[#9b8b6f] mb-3">Enhance Your Journey</h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you are embarking on a vacation road trip, attending an important business meeting, or
                  enjoying a romantic weekend getaway, OLB Motors has the perfect vehicle for you. Our extensive
                  selection of vehicles in Dubai offers the flexibility to choose a vehicle that perfectly matches your
                  preferences.
                </p>
              </div>

              <div className="bg-zinc-900/80 p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold text-[#9b8b6f] mb-3">Our Commitment</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our commitment is to provide an affordable service that not only meets but exceeds customer
                  expectations, as we firmly believe in our satisfaction guarantee. Choose OLB Motors for your luxury
                  vehicle needs and let us ensure you are on the right path! Consult with our experts to explore our
                  various vehicle categories, including exotic, prestige, and powerful cars, as well as renowned brands
                  like Rolls Royce, Lamborghini, Ferrari, and Porsche.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <div className="relative z-10">
      </div>
    </div>
  )
}

