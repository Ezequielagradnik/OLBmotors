"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Check, Info } from 'lucide-react'
import { notFound } from 'next/navigation'

const vehicleData = {
  "range-rover-sport": { 
    name: "Range Rover Sport",
    price: 450000,
    mileage: 15000,
    description: "The Range Rover Sport redefines sporting luxury, combining dynamic handling with refined comfort.",
    additionalInfo: "Experience the perfect blend of luxury and performance with the Range Rover Sport. This vehicle offers exceptional off-road capabilities without compromising on-road dynamics, making it the ideal choice for those who demand versatility and style.",
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
    mileage: 5000,
    description: "The Rolls-Royce Ghost Mansory is the epitome of luxury, offering unparalleled comfort and style.",
    additionalInfo: "Indulge in the ultimate luxury experience with the Rolls-Royce Ghost Mansory. This bespoke creation combines the timeless elegance of Rolls-Royce with Mansory's exquisite craftsmanship, resulting in a truly unique automotive masterpiece.",
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
    mileage: 2000,
    description: "The Rolls-Royce Cullinan in Violet offers a unique blend of luxury and capability in an SUV format.",
    additionalInfo: "Command attention with the Rolls-Royce Cullinan in Violet. This exceptional SUV seamlessly blends luxury, performance, and versatility, making it the perfect choice for discerning individuals who demand the best.",
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
    mileage: 3000,
    description: "The Rolls-Royce Dawn in Grey is the pinnacle of open-top luxury motoring.",
    additionalInfo: "Experience the thrill of open-air luxury with the Rolls-Royce Dawn in Grey. This elegant convertible offers unparalleled comfort and performance, making every drive an unforgettable experience.",
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
    mileage: 8000,
    description: "The Lamborghini Urus is the world's first Super Sport Utility Vehicle.",
    additionalInfo: "Experience the ultimate blend of luxury and performance with the Lamborghini Urus. This groundbreaking SUV combines the power of a supercar with the versatility of an SUV, making it the perfect choice for those who demand both.",
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
    mileage: 10000,
    description: "The Lamborghini Sterrato is an all-terrain supercar, ready for any adventure.",
    additionalInfo: "Conquer any terrain with the Lamborghini Sterrato. This all-terrain supercar combines exhilarating performance with exceptional off-road capabilities, making it the perfect choice for those who seek adventure.",
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
    mileage: 7000,
    description: "The Lamborghini Huracan STO is a road-homologated super sports car inspired by racing heritage.",
    additionalInfo: "Experience the thrill of track-inspired performance with the Lamborghini Huracan STO. This road-legal supercar combines cutting-edge technology with race-bred design, making it the perfect choice for those who demand the ultimate driving experience.",
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
    mileage: 12000,
    description: "The Ferrari Testarossa is an iconic supercar that defined an era of automotive design.",
    additionalInfo: "Own a piece of automotive history with the Ferrari Testarossa. This iconic supercar combines timeless design with exhilarating performance, making it a true collector's item.",
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
    mileage: 4000,
    description: "The Ferrari 296 GTS is a plug-in hybrid convertible that combines performance with efficiency.",
    additionalInfo: "Experience the future of performance with the Ferrari 296 GTS. This plug-in hybrid convertible combines exhilarating power with exceptional efficiency, making it the perfect choice for those who demand both.",
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
    mileage: 6000,
    description: "The Ferrari 296 GTB is a plug-in hybrid berlinetta that offers incredible performance and efficiency.",
    additionalInfo: "Experience the pinnacle of performance and efficiency with the Ferrari 296 GTB. This plug-in hybrid berlinetta combines exhilarating power with exceptional fuel economy, making it the perfect choice for those who demand both.",
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
    mileage: 20000,
    description: "The BMW X7 40i is a luxurious full-size SUV that combines comfort with cutting-edge technology.",
    additionalInfo: "Experience the ultimate in luxury and versatility with the BMW X7 40i. This full-size SUV combines spacious comfort with cutting-edge technology, making it the perfect choice for families and individuals who demand both.",
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
    notFound()
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

