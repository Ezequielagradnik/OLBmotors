"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const brandData = {
  'range-rover': {
    name: "Range Rover",
    description: "Experience the pinnacle of luxury SUVs with Range Rover.",
    vehicles: [
      { id: 'range-rover-sport', name: "Range Rover Sport", price: 450000, type: "SUV", image: "/range-rover-sport.jpg" },
    ]
  },
  'rolls-royce': {
    name: "Rolls-Royce",
    description: "Indulge in the epitome of automotive luxury with Rolls-Royce.",
    vehicles: [
      { id: 'rolls-royce-ghost-mansory', name: "Rolls Royce Ghost Mansory", price: 1500000, type: "Sedan", image: "/rolls-royce-ghost.jpg" },
      { id: 'rolls-royce-cullinan-violet', name: "Rolls Royce Cullinan Violet", price: 2000000, type: "SUV", image: "/rolls-royce-cullinan.jpg" },
      { id: 'rolls-royce-dawn-grey', name: "Rolls Royce Dawn Grey", price: 1800000, type: "Convertible", image: "/rolls-royce-dawn.jpg" },
    ]
  },
  'lamborghini': {
    name: "Lamborghini",
    description: "Experience the thrill of Italian engineering with Lamborghini.",
    vehicles: [
      { id: 'lamborghini-urus', name: "Lamborghini Urus", price: 1200000, type: "SUV", image: "/lamborghini-urus.jpg" },
      { id: 'lamborghini-sterrato', name: "Lamborghini Sterrato", price: 1300000, type: "Sport", image: "/lamborghini-sterrato.jpg" },
      { id: 'lamborghini-huracan-sto', name: "Lamborghini Huracan STO", price: 1400000, type: "Sport", image: "/lamborghini-huracan-sto.jpg" },
    ]
  },
  'ferrari': {
    name: "Ferrari",
    description: "Feel the passion of Italian racing heritage with Ferrari.",
    vehicles: [
      { id: 'ferrari-testarossa', name: "Ferrari Testarossa", price: 1000000, type: "Sport", image: "/ferrari-testarossa.jpg" },
      { id: 'ferrari-296-gts', name: "Ferrari 296 GTS", price: 1100000, type: "Convertible", image: "/ferrari-296-gts.jpg" },
      { id: 'ferrari-296-gtb', name: "Ferrari 296 GTB", price: 1050000, type: "Sport", image: "/ferrari-296-gtb.jpg" },
    ]
  },
  'bmw': {
    name: "BMW",
    description: "Experience the ultimate driving machine with BMW.",
    vehicles: [
      { id: 'bmw-x7-40i', name: "BMW X7 40i", price: 500000, type: "SUV", image: "/bmw-x7.jpg" },
    ]
  },
}

const currencyRates = {
  AED: 1,
  USD: 0.27,
  EUR: 0.25
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const [selectedType, setSelectedType] = useState("All")
  const [selectedCurrency, setSelectedCurrency] = useState("AED")
  const brand = brandData[params.brand as keyof typeof brandData]

  if (!brand) {
    notFound()
  }

  const filteredVehicles = brand.vehicles.filter(vehicle => 
    selectedType === "All" || vehicle.type === selectedType
  )

  const formatPrice = (price: number) => {
    const convertedPrice = price * currencyRates[selectedCurrency as keyof typeof currencyRates]
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: selectedCurrency,
      maximumFractionDigits: 0
    }).format(convertedPrice)
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 container mx-auto px-4 py-12"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#9b8b6f]">{brand.name}</span> Collection
          </h1>
          <p className="text-lg text-gray-400">
            {brand.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select onValueChange={(value) => setSelectedType(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="Sedan">Sedan</SelectItem>
              <SelectItem value="Sport">Sport</SelectItem>
              <SelectItem value="Convertible">Convertible</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSelectedCurrency(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AED">AED</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/vehicles/${vehicle.id}`}>
                <Card className="bg-zinc-900 border-zinc-800 hover:border-[#9b8b6f] transition-colors">
                  <CardHeader>
                    <CardTitle className="text-[#9b8b6f]">{vehicle.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-48 mb-4">
                      <Image 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-gray-400">Type: {vehicle.type}</p>
                    <p className="text-xl font-semibold text-[#9b8b6f] mt-2">{formatPrice(vehicle.price)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#9b8b6f] text-black hover:bg-[#c4af8d]">View Details</Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

