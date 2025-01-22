"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Footer } from "@/components/footer"

const faqs = [
  {
    question: "How can I schedule a test drive?",
    answer:
      "To schedule a test drive, simply browse our vehicle inventory, select the car you're interested in, and click on the 'Contact via WhatsApp' button. Our team will promptly assist you in arranging a convenient time for your test drive.",
  },
  {
    question: "What documents do I need to purchase a vehicle?",
    answer:
      "To purchase a vehicle, you'll need a valid UAE driver's license, Emirates ID, and proof of insurance. For financing options, additional documents such as bank statements and proof of income may be required.",
  },
  {
    question: "Do you offer vehicle financing?",
    answer:
      "Yes, we offer competitive financing options through our trusted banking partners. Our finance team can help you explore various plans tailored to your needs and budget.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day/500 km return policy on all our vehicles. If you're not completely satisfied with your purchase, you can return the vehicle within this period for a full refund, subject to our terms and conditions.",
  },
  {
    question: "How does your vehicle inspection process work?",
    answer:
      "All our vehicles undergo a rigorous multi-point inspection by certified technicians. We provide a detailed report of the vehicle's condition and history to ensure transparency and peace of mind for our customers.",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="fixed inset-0">
        <Image src="/IMG_0245.JPG" alt="Help Center Background" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <main className="relative flex-grow z-10 pt-24">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-[#9b8b6f]">Help</span> Center
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Find answers to common questions about our services and processes.
          </p>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-zinc-800/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#9b8b6f]">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

