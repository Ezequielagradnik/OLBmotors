"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from 'next/navigation'

const brandData = {
  'ferrari': {
    name: "Ferrari",
    description: "Experience the pinnacle of Italian automotive excellence.",
    vehicles: [
      { id: 'ferrari-testarossa', name: "Ferrari Testarossa", price: "1,000,000 AED", year: 2023 },
      { id: 'ferrari-296-gts', name: "Ferrari 296 GTS", price: "1,100,000 AED", year: 2023 },
      { id: 'ferrari-296-gtb', name: "Ferrari 296 GTB", price: "1,050,000 AED", year: 2023 },
    ]
  },
  'lamborghini': {
    name: "Lamborghini",
    description: "Unleash the power of Italian engineering and design.",
    vehicles: [
      { id: 'lamborghini-urus', name: "Lamborghini Urus", price: "1,200,000 AED", year: 2023 },
      { id: 'lamborghini-sterrato', name: "Lamborghini Sterrato", price: "1,300,000 AED", year: 2023 },
      { id: 'lamborghini-huracan-sto', name: "Lamborghini Huracan STO", price: "1,400,000 AED", year: 2023 },
    ]
  },
  'rolls-royce': {
    name: "Rolls Royce",
    description: "The ultimate expression of automotive luxury.",
    vehicles: [
      { id: 'rolls-royce-ghost-mansory', name: "Rolls Royce Ghost Mansory", price: "1,500,000 AED", year: 2023 },
      { id: 'rolls-royce-cullinan-violet', name: "Rolls Royce Cullinan Violet", price: "2,000,000 AED", year: 2023 },
      { id: 'rolls-royce-dawn-grey', name: "Rolls Royce Dawn Grey", price: "1,800,000 AED", year: 2023 },
    ]
  },
  'range-rover': {
    name: "Range Rover",
    description: "Luxury and capability, perfectly balanced.",
    vehicles: [
      { id: 'range-rover-sport', name: "Range Rover Sport", price: "450,000 AED", year: 2023 },
    ]
  },
  'bmw': {
    name: "BMW",
    description: "The ultimate driving machine.",
    vehicles: [
      { id: 'bmw-x7-40i', name: "BMW X7 40i", price: "500,000 AED", year: 2023 },
    ]
  }
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = brandData[params.brand as keyof typeof brandData]

  if (!brand) {
    notFound()
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brand.vehicles.map((vehicle) => (
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
                    <p className="text-gray-400">Year: {vehicle.year}</p>
                    <p className="text-xl font-semibold text-[#9b8b6f] mt-2">{vehicle.price}</p>
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
