"use client"

import { motion } from "framer-motion"


export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-2">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/IMG_4871.JPG")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 mb-auto container mx-auto px-4 py-12"      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
             <span className="text-[#9b8b6f]"> About OLB Motors</span>
            </h1>
            <div className="w-32 h-1 bg-[#9b8b6f] mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-zinc-900/90 backdrop-blur-md p-8 rounded-2xl mb-12">
              <h2 className="text-3xl font-semibold text-[#9b8b6f] mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                At OLB Motors, our mission is to redefine luxury vehicle sales and services, with a particular focus on
                exclusivity for your leisure or business experience. Through the fusion of our extensive knowledge and
                experience, we offer a wide range of customized luxury vehicle solutions, ensuring the perfect match for
                each client.
              </p>
            </div>

            <div className="bg-zinc-900/90 backdrop-blur-md p-8 rounded-2xl mb-12">
              <h2 className="text-3xl font-semibold text-[#9b8b6f] mb-4">Enhance Your Journey</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether you are embarking on a vacation road trip, attending an important business meeting, or enjoying
                a romantic weekend getaway, OLB Motors has the perfect vehicle for you. Our extensive selection of
                vehicles in Dubai offers the flexibility to choose a vehicle that perfectly matches your preferences.
              </p>
            </div>

            <div className="bg-zinc-900/90 backdrop-blur-md p-8 rounded-2xl">
              <h2 className="text-3xl font-semibold text-[#9b8b6f] mb-4">Our Commitment</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
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
    </div>
  )
}

