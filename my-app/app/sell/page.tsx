"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function SellYourVehicle() {
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
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="make">Make</Label>
                <Input id="make" placeholder="e.g. Mercedes-Benz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input id="model" placeholder="e.g. S-Class" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" placeholder="e.g. 2021" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileage">Mileage</Label>
                <Input id="mileage" placeholder="e.g. 15000" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Vehicle Description</Label>
              <Textarea id="description" placeholder="Tell us more about your vehicle..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Full Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+971 XX XXX XXXX" />
            </div>
            <Button type="submit" className="w-full bg-[#9b8b6f] text-black hover:bg-[#c4af8d]">
              Submit for Evaluation
            </Button>
          </form>
        </div>
      </motion.section>
    </div>
  )
}

