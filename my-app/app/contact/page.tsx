"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = encodeURIComponent(
      `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`,
    )

    window.open(`https://wa.me/971585867713?text=${message}`, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="fixed inset-0 z-0">
        <Image src="/IMG_8386.JPG" alt="Contact OLB Motors" layout="fill" objectFit="cover" quality={100} priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 container mx-auto px-4 py-8 sm:py-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-center text-white">
          <span className="text-[#9b8b6f]">Contact Us</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          Get in touch with our team for any inquiries or support.
        </p>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8 bg-zinc-900/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#9b8b6f]" />
              <p className="text-sm sm:text-base text-gray-300">+971 58 586 7713</p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#9b8b6f]" />
              <p className="text-sm sm:text-base text-gray-300">info@olbmotors.com</p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#9b8b6f]" />
              <p className="text-sm sm:text-base text-gray-300">Dubai, United Arab Emirates</p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#9b8b6f]" />
              <p className="text-sm sm:text-base text-gray-300">@olb_motors</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-200">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-gray-200"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-10 sm:h-12 text-sm sm:text-base bg-[#9b8b6f] text-black hover:bg-[#c4af8d] transition-colors group"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:scale-110" />
              Contact via WhatsApp
            </Button>
          </form>
        </div>
      </motion.section>
    </div>
  )
}

