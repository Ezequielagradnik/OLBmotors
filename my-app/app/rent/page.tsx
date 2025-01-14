"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const rentals = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    image: "/placeholder.svg?height=300&width=400",
    pricePerDay: "$500",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    image: "/placeholder.svg?height=300&width=400",
    pricePerDay: "$450",
  },
  {
    id: 3,
    name: "Audi A8",
    image: "/placeholder.svg?height=300&width=400",
    pricePerDay: "$475",
  },
  {
    id: 4,
    name: "Porsche Panamera",
    image: "/placeholder.svg?height=300&width=400",
    pricePerDay: "$600",
  },
]

export default function Rent() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-[#9b8b6f]">Rent</span> a Luxury Vehicle
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Experience the thrill of driving a premium vehicle with our flexible rental options. Choose from our curated selection of luxury cars.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rentals.map((rental) => (
            <motion.div
              key={rental.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-[#9b8b6f]">{rental.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={rental.image} alt={rental.name} className="w-full h-48 object-cover rounded-md mb-4" />
                  <p className="text-xl font-semibold text-[#9b8b6f] mt-2">{rental.pricePerDay} / day</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#9b8b6f] text-black hover:bg-[#c4af8d]">Rent Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

