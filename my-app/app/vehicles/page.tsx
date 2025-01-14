"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const vehicles = [
  { id: 'range-rover-sport', name: "Range Rover Sport", price: 450000, type: "SUV" },
  { id: 'rolls-royce-ghost-mansory', name: "Rolls Royce Ghost Mansory", price: 1500000, type: "Sedan" },
  { id: 'rolls-royce-cullinan-violet', name: "Rolls Royce Cullinan Violet", price: 2000000, type: "SUV" },
  { id: 'rolls-royce-dawn-grey', name: "Rolls Royce Dawn Grey", price: 1800000, type: "Convertible" },
  { id: 'lamborghini-urus', name: "Lamborghini Urus", price: 1200000, type: "SUV" },
  { id: 'lamborghini-sterrato', name: "Lamborghini Sterrato", price: 1300000, type: "Sport" },
  { id: 'lamborghini-huracan-sto', name: "Lamborghini Huracan STO", price: 1400000, type: "Sport" },
  { id: 'ferrari-testarossa', name: "Ferrari Testarossa", price: 1000000, type: "Sport" },
  { id: 'ferrari-296-gts', name: "Ferrari 296 GTS", price: 1100000, type: "Convertible" },
  { id: 'ferrari-296-gtb', name: "Ferrari 296 GTB", price: 1050000, type: "Sport" },
  { id: 'bmw-x7-40i', name: "BMW X7 40i", price: 500000, type: "SUV" },
]

const currencyRates = {
  AED: 1,
  USD: 0.27,
  EUR: 0.25
}

export default function Vehicles() {
  const [selectedType, setSelectedType] = useState("All")
  const [selectedCurrency, setSelectedCurrency] = useState("AED")
  const [priceRange] = useState([0, 2000000])

  const filteredVehicles = vehicles.filter(vehicle => 
    (selectedType === "All" || vehicle.type === selectedType) &&
    vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
  )

  const formatPrice = (price: number) => {
    const convertedPrice = price * currencyRates[selectedCurrency as keyof typeof currencyRates]
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: selectedCurrency,
      maximumFractionDigits: 0
    }).format(convertedPrice)
  }

  useEffect(() => {
    const handleScroll = () => {
      const selectors = document.querySelector('.vehicle-selectors');
      if (selectors) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
          selectors.classList.add('sticky-selectors');
        } else {
          selectors.classList.remove('sticky-selectors');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-[#9b8b6f]">Our</span> Vehicles
        </h1>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-12 vehicle-selectors"
        >
          <Select onValueChange={(value) => setSelectedType(value)}>
            <SelectTrigger className="w-[180px] bg-zinc-900 text-[#9b8b6f] border-[#9b8b6f] hover:bg-zinc-800 transition-colors">
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-[#9b8b6f] border-[#9b8b6f]">
              <SelectItem value="All">All Types</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="Sedan">Sedan</SelectItem>
              <SelectItem value="Sport">Sport</SelectItem>
              <SelectItem value="Convertible">Convertible</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSelectedCurrency(value)}>
            <SelectTrigger className="w-[180px] bg-zinc-900 text-[#9b8b6f] border-[#9b8b6f] hover:bg-zinc-800 transition-colors">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-[#9b8b6f] border-[#9b8b6f]">
              <SelectItem value="AED">AED</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
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
                    <div className="w-full h-48 bg-zinc-800 rounded-md mb-4"></div>
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

