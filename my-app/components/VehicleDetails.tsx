"use client"
import { useState } from 'react'
import { Vehicle } from '@/types/vehicle'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Info, Check } from 'lucide-react'

interface VehicleDetailsProps {
  vehicle: Vehicle
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const [isRent, setIsRent] = useState(false)

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in ${isRent ? 'renting' : 'purchasing'} the ${vehicle.name}. Can you provide more information?`
  )
  const whatsappLink = `https://wa.me/971585867713?text=${whatsappMessage}`

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 container mx-auto px-4 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={vehicle.images[0] || "/placeholder.svg"}
                  alt={vehicle.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {vehicle.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${vehicle.name} - Image ${index + 2}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold mb-4">{vehicle.name}</h1>
                <p className="text-3xl font-semibold text-[#9b8b6f]">{new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED' }).format(vehicle.price)}</p>
                <p className="text-xl text-gray-400 mt-2">Mileage: {vehicle.mileage.toLocaleString()} km</p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {vehicle.description}
              </p>

              <div className="bg-zinc-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-[#9b8b6f] flex items-center mb-2">
                  <Info className="mr-2" /> Additional Information
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {vehicle.additionalInfo}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#9b8b6f]">Key Features</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <Check className="h-5 w-5 text-[#9b8b6f]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={() => setIsRent(false)}
                    className={`text-lg h-14 transition-all duration-300 ${
                      !isRent 
                        ? 'bg-[#9b8b6f] text-black hover:bg-[#c4af8d] shadow-lg' 
                        : 'bg-transparent border-2 border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10'
                    }`}
                  >
                    Purchase
                  </Button>
                  <Button 
                    onClick={() => setIsRent(true)}
                    className={`text-lg h-14 transition-all duration-300 ${
                      isRent 
                        ? 'bg-[#9b8b6f] text-black hover:bg-[#c4af8d] shadow-lg' 
                        : 'bg-transparent border-2 border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10'
                    }`}
                  >
                    Rent
                  </Button>
                </div>
                
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-14 text-lg bg-black border-2 border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f] hover:text-black transition-all duration-300">
                    Contact via WhatsApp
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

