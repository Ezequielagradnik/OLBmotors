"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare } from 'lucide-react'

export default function SellYourVehicle() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = encodeURIComponent(
      `*New Vehicle Evaluation Request*\n\n` +
      `*Vehicle Details:*\n` +
      `Make: ${formData.make}\n` +
      `Model: ${formData.model}\n` +
      `Year: ${formData.year}\n` +
      `Mileage: ${formData.mileage}\n\n` +
      `*Description:*\n${formData.description}\n\n` +
      `*Contact Information:*\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}`
    )

    window.open(`https://wa.me/971585867713?text=${message}`, '_blank')
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-[#9b8b6f]">Sell</span> Your Vehicle
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Get the best value for your premium vehicle. Our experts will evaluate your car and provide you with a competitive offer.
        </p>
        <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="make">Make</Label>
                <Input 
                  id="make" 
                  placeholder="e.g. Mercedes-Benz" 
                  value={formData.make}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input 
                  id="model" 
                  placeholder="e.g. S-Class" 
                  value={formData.model}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input 
                  id="year" 
                  placeholder="e.g. 2021" 
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileage">Mileage</Label>
                <Input 
                  id="mileage" 
                  placeholder="e.g. 15000" 
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Vehicle Description</Label>
              <Textarea 
                id="description" 
                placeholder="Tell us more about your vehicle..." 
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                placeholder="+971 XX XXX XXXX" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-14 text-lg bg-black border-2 border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f] hover:text-black transition-all duration-300 group"
            >
              <MessageSquare className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Contact via WhatsApp
            </Button>
          </form>
        </div>
      </motion.section>
    </div>
  )
}

