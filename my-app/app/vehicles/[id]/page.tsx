"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Check } from 'lucide-react'

const vehicleData = {
  "range-rover-sport": { 
    name: "Range Rover Sport",
    price: 450000,
    description: "The Range Rover Sport redefines sporting luxury, combining dynamic handling with refined comfort.",
    features: [
      "5.0L V8 Supercharged Engine",
      "Dynamic Air Suspension",
      "Premium LED Headlights",
      "Meridian™ Sound System"
    ]
  },
  "rolls-royce-ghost-mansory": { 
    name: "Rolls Royce Ghost Mansory",
    price: 1500000,
    description: "The Rolls-Royce Ghost Mansory is the epitome of luxury, offering unparalleled comfort and style.",
    features: [
      "6.75L V12 Twin-Turbo Engine",
      "Starlight Headliner",
      "Bespoke Mansory Interior",
      "Advanced Driver Assistance Systems"
    ]
  },
  "rolls-royce-cullinan-violet": { 
    name: "Rolls Royce Cullinan Violet",
    price: 2000000,
    description: "The Rolls-Royce Cullinan in Violet offers a unique blend of luxury and capability in an SUV format.",
    features: [
      "6.75L V12 Twin-Turbo Engine",
      "All-Wheel Drive",
      "Bespoke Violet Exterior",
      "Panoramic Sunroof"
    ]
  },
  "rolls-royce-dawn-grey": { 
    name: "Rolls Royce Dawn Grey",
    price: 1800000,
    description: "The Rolls-Royce Dawn in Grey is the pinnacle of open-top luxury motoring.",
    features: [
      "6.6L V12 Twin-Turbo Engine",
      "Automatic Convertible Roof",
      "Bespoke Grey Exterior",
      "Rolls-Royce Signature Audio"
    ]
  },
  "lamborghini-urus": { 
    name: "Lamborghini Urus",
    price: 1200000,
    description: "The Lamborghini Urus is the world's first Super Sport Utility Vehicle.",
    features: [
      "4.0L V8 Twin-Turbo Engine",
      "All-Wheel Drive",
      "Adaptive Air Suspension",
      "Carbon Ceramic Brakes"
    ]
  },
  "lamborghini-sterrato": { 
    name: "Lamborghini Sterrato",
    price: 1300000,
    description: "The Lamborghini Sterrato is an all-terrain supercar, ready for any adventure.",
    features: [
      "5.2L V10 Engine",
      "All-Terrain Capability",
      "Increased Ground Clearance",
      "Rally-Inspired Design"
    ]
  },
  "lamborghini-huracan-sto": { 
    name: "Lamborghini Huracan STO",
    price: 1400000,
    description: "The Lamborghini Huracan STO is a road-homologated super sports car inspired by racing heritage.",
    features: [
      "5.2L V10 Engine",
      "Rear-Wheel Drive",
      "Carbon Fiber Construction",
      "Race-Inspired Aerodynamics"
    ]
  },
  "ferrari-testarossa": { 
    name: "Ferrari Testarossa",
    price: 1000000,
    description: "The Ferrari Testarossa is an iconic supercar that defined an era of automotive design.",
    features: [
      "4.9L Flat-12 Engine",
      "Classic Side Strakes",
      "Pop-up Headlights",
      "Gated Manual Transmission"
    ]
  },
  "ferrari-296-gts": { 
    name: "Ferrari 296 GTS",
    price: 1100000,
    description: "The Ferrari 296 GTS is a plug-in hybrid convertible that combines performance with efficiency.",
    features: [
      "3.0L V6 Hybrid Powertrain",
      "Retractable Hardtop",
      "Electric-Only Mode",
      "Advanced Vehicle Dynamics"
    ]
  },
  "ferrari-296-gtb": { 
    name: "Ferrari 296 GTB",
    price: 1050000,
    description: "The Ferrari 296 GTB is a plug-in hybrid berlinetta that offers incredible performance and efficiency.",
    features: [
      "3.0L V6 Hybrid Powertrain",
      "Active Aerodynamics",
      "Carbon Fiber Components",
      "8-Speed Dual-Clutch Transmission"
    ]
  },
  "bmw-x7-40i": { 
    name: "BMW X7 40i",
    price: 500000,
    description: "The BMW X7 40i is a luxurious full-size SUV that combines comfort with cutting-edge technology.",
    features: [
      "3.0L Inline-6 Turbo Engine",
      "Air Suspension",
      "Three-Row Seating",
      "BMW Live Cockpit Professional"
    ]
  },
}

export default function VehicleDetails({ params }: { params: { id: string } }) {
  const [isRent, setIsRent] = useState(false)
  const vehicle = vehicleData[params.id as keyof typeof vehicleData]

  if (!vehicle) {
    return <div>Vehicle not found</div>
  }

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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-zinc-800"></div>
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
              </div>

              <p className="text-gray-300 leading-relaxed">
                {vehicle.description}
              </p>

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
                <div className="flex gap-4">
                  <Button 
                    onClick={() => setIsRent(false)}
                    className={`flex-1 text-lg h-12 ${!isRent ? 'bg-[#9b8b6f] text-black hover:bg-[#c4af8d]' : 'bg-zinc-900 text-[#9b8b6f] hover:bg-zinc-800'}`}
                  >
                    Purchase
                  </Button>
                  <Button 
                    onClick={() => setIsRent(true)}
                    className={`flex-1 text-lg h-12 ${isRent ? 'bg-[#9b8b6f] text-black hover:bg-[#c4af8d]' : 'bg-zinc-900 text-[#9b8b6f] hover:bg-zinc-800'}`}
                  >
                    Rent
                  </Button>
                </div>
                
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-12 text-lg bg-[#9b8b6f] text-black hover:bg-[#c4af8d]">
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

