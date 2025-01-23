"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare } from 'lucide-react'
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WorkWithUsPage() {
  const [jobFormData, setJobFormData] = useState({
    name: "",
    email: "",
    age: "",
    experience: "",
    position: "",
    message: "",
  })

  const handleJobFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { id: string; value: string } }) => {
    setJobFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = encodeURIComponent(
      `*New Job Application Submission*\n\n*Name:* ${jobFormData.name}\n*Email:* ${jobFormData.email}\n*Age:* ${jobFormData.age}\n*Experience:* ${jobFormData.experience}\n*Position:* ${jobFormData.position}\n\n*Message:*\n${jobFormData.message}`,
    )

    window.open(`https://wa.me/971585867713?text=${message}`, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="fixed inset-0 z-0">
        <Image src="/IMG_1261.JPG" alt="Work with OLB Motors" layout="fill" objectFit="cover" quality={100} priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 container mx-auto px-4 py-8 sm:py-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-center text-white">
          <span className="text-[#9b8b6f]">Work with Us</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          Join our team of automotive enthusiasts and professionals.
        </p>
        <form onSubmit={handleJobSubmit} className="space-y-6 bg-zinc-900/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">
              Your Name
            </Label>
            <Input
              id="name"
              placeholder="Full Name"
              required
              value={jobFormData.name}
              onChange={handleJobFormChange}
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
              value={jobFormData.email}
              onChange={handleJobFormChange}
              className="bg-zinc-800 border-zinc-700 text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age" className="text-gray-200">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Your age"
              required
              value={jobFormData.age}
              onChange={handleJobFormChange}
              className="bg-zinc-800 border-zinc-700 text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience" className="text-gray-200">
              Years of Experience
            </Label>
            <Input
              id="experience"
              type="number"
              placeholder="Years of experience"
              required
              value={jobFormData.experience}
              onChange={handleJobFormChange}
              className="bg-zinc-800 border-zinc-700 text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position" className="text-gray-200">
              Desired Position
            </Label>
            <Select onValueChange={(value) => handleJobFormChange({ target: { id: "position", value } })}>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-gray-200">
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Representative</SelectItem>
                <SelectItem value="mechanic">Mechanic</SelectItem>
                <SelectItem value="customer-service">Customer Service</SelectItem>
                <SelectItem value="marketing">Marketing Specialist</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-200">
              Why do you want to work with us?
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about yourself and why you'd be a great fit..."
              required
              value={jobFormData.message}
              onChange={handleJobFormChange}
              className="bg-zinc-800 border-zinc-700 text-gray-200"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-10 sm:h-12 text-sm sm:text-base bg-[#9b8b6f] text-black hover:bg-[#c4af8d] transition-colors group"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:scale-110" />
            Submit Application
          </Button>
        </form>
      </motion.section>
    </div>
  )
}
