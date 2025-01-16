"use client"

import { useState, useEffect } from 'react'
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
      { id: 'range-rover-vogue', name: "Range Rover Vogue", price: 700000, type: "SUV", image: "/range-rover-vogue.jpg" },
    ]
  },
  'rolls-royce': {
    name: "Rolls-Royce",
    description: "Indulge in the epitome of automotive luxury with Rolls-Royce.",
    vehicles: [
      { id: 'rolls-royce-ghost-mansory', name: "Rolls Royce Ghost Mansory", price: 1500000, type: "Sedan", image: "/rolls-royce-ghost-mansory.jpg" },
      { id: 'rolls-royce-cullinan-violet', name: "Rolls Royce Cullinan Violet", price: 2000000, type: "SUV", image: "/rolls-royce-cullinan-violet.jpg" },
      { id: 'rolls-royce-dawn-grey', name: "Rolls Royce Dawn Grey", price: 1800000, type: "Convertible", image: "/rolls-royce-dawn-grey.jpg" },
      { id: 'rolls-royce-dawn-mansory', name: "Rolls Royce Dawn Mansory", price: 2200000, type: "Convertible", image: "/rolls-royce-dawn-mansory.jpg" },
      { id: 'rolls-royce-ghost-white-orange', name: "Rolls Royce Ghost White/Orange", price: 1900000, type: "Sedan", image: "/rolls-royce-ghost-white-orange.jpg" },
      { id: 'rolls-royce-spectre', name: "Rolls Royce Spectre", price: 2500000, type: "Coupe", image: "/rolls-royce-spectre.jpg" },
      { id: 'rolls-royce-spectre-full-options', name: "Rolls Royce Spectre Full Options", price: 2700000, type: "Coupe", image: "/rolls-royce-spectre-full-options.jpg" },
      { id: 'rolls-royce-cullinan', name: "Rolls Royce Cullinan", price: 2300000, type: "SUV", image: "/rolls-royce-cullinan.jpg" },
      { id: 'rolls-royce-dawn-black-badge', name: "Rolls Royce Dawn Black Badge", price: 2100000, type: "Convertible", image: "/rolls-royce-dawn-black-badge.jpg" },
      { id: 'rolls-royce-ghost', name: "Rolls Royce Ghost", price: 2000000, type: "Sedan", image: "/rolls-royce-ghost.jpg" },
    ]
  },
  'lamborghini': {
    name: "Lamborghini",
    description: "Experience the thrill of Italian engineering with Lamborghini.",
    vehicles: [
      { id: 'lamborghini-urus', name: "Lamborghini Urus", price: 1200000, type: "SUV", image: "/lamborghini-urus.jpg" },
      { id: 'lamborghini-sterrato', name: "Lamborghini Sterrato", price: 1300000, type: "Sport", image: "/lamborghini-sterrato.jpg" },
      { id: 'lamborghini-huracan-sto', name: "Lamborghini Huracan STO", price: 1400000, type: "Sport", image: "/lamborghini-huracan-sto.jpg" },
      { id: 'lamborghini-diablo-vt-roadster', name: "Lamborghini Diablo VT Roadster", price: 1500000, type: "Convertible", image: "/lamborghini-diablo-vt-roadster.jpg" },
      { id: 'lamborghini-huracan-evo-coupe', name: "Lamborghini Huracan EVO Coupe", price: 1100000, type: "Sport", image: "/lamborghini-huracan-evo-coupe.jpg" },
      { id: 'lamborghini-huracan-evo-spyder', name: "Lamborghini Huracan EVO Spyder", price: 1200000, type: "Convertible", image: "/lamborghini-huracan-evo-spyder.jpg" },
    ]
  },
  'ferrari': {
    name: "Ferrari",
    description: "Feel the passion of Italian racing heritage with Ferrari.",
    vehicles: [
      { id: 'ferrari-testarossa', name: "Ferrari Testarossa", price: 1000000, type: "Sport", image: "/ferrari-testarossa.jpg" },
      { id: 'ferrari-296-gts', name: "Ferrari 296 GTS", price: 1100000, type: "Convertible", image: "/ferrari-296-gts.jpg" },
      { id: 'ferrari-296-gtb', name: "Ferrari 296 GTB", price: 1050000, type: "Sport", image: "/ferrari-296-gtb.jpg" },
      { id: 'ferrari-812-superfast', name: "Ferrari 812 Superfast", price: 1600000, type: "Sport", image: "/ferrari-812-superfast.jpg" },
      { id: 'ferrari-f8-spider', name: "Ferrari F8 Spider", price: 1400000, type: "Convertible", image: "/ferrari-f8-spider.jpg" },
      { id: 'ferrari-portofino', name: "Ferrari Portofino", price: 1200000, type: "Convertible", image: "/ferrari-portofino.jpg" },
      { id: 'ferrari-roma', name: "Ferrari Roma", price: 1300000, type: "Coupe", image: "/ferrari-roma.jpg" },
      { id: 'ferrari-sf90-stradale', name: "Ferrari SF90 Stradale", price: 2000000, type: "Sport", image: "/ferrari-sf90-stradale.jpg" },
    ]
  },
  'bmw': {
    name: "BMW",
    description: "Experience the ultimate driving machine with BMW.",
    vehicles: [
      { id: 'bmw-x7-40i', name: "BMW X7 40i", price: 500000, type: "SUV", image: "/bmw-x7-40i.jpg" },
      { id: 'bmw-430i-cabrio', name: "BMW 430i Cabrio", price: 350000, type: "Convertible", image: "/bmw-430i-cabrio.jpg" },
      { id: 'bmw-430i-cabrio-green', name: "BMW 430i Cabrio Green", price: 360000, type: "Convertible", image: "/bmw-430i-cabrio-green.jpg" },
      { id: 'bmw-430i-cabrio-grey', name: "BMW 430i Cabrio Grey", price: 355000, type: "Convertible", image: "/bmw-430i-cabrio-grey.jpg" },
      { id: 'bmw-520i-2024-new-black', name: "BMW 520i 2024 New Black", price: 400000, type: "Sedan", image: "/bmw-520i-2024-new-black.jpg" },
      { id: 'bmw-520i-2024-new-grey', name: "BMW 520i 2024 New Grey", price: 405000, type: "Sedan", image: "/bmw-520i-2024-new-grey.jpg" },
      { id: 'bmw-530i-m-package', name: "BMW 530i M Package", price: 450000, type: "Sedan", image: "/bmw-530i-m-package.jpg" },
      { id: 'bmw-840i-cabrio', name: "BMW 840i Cabrio", price: 700000, type: "Convertible", image: "/bmw-840i-cabrio.jpg" },
      { id: 'bmw-m8-competition', name: "BMW M8 Competition", price: 850000, type: "Coupe", image: "/bmw-m8-competition.jpg" },
      { id: 'bmw-x6m-competition', name: "BMW X6M Competition", price: 750000, type: "SUV", image: "/bmw-x6m-competition.jpg" },
      { id: 'bmw-xm', name: "BMW XM", price: 900000, type: "SUV", image: "/bmw-xm.jpg" },
    ]
  },
  'audi': {
    name: "Audi",
    description: "Experience the art of progress with Audi.",
    vehicles: [
      { id: 'audi-r8', name: "Audi R8", price: 900000, type: "Sport", image: "/audi-r8.jpg" },
      { id: 'audi-rs6', name: "Audi RS6", price: 600000, type: "Wagon", image: "/audi-rs6.jpg" },
      { id: 'audi-rs6-mansory-black-yellow', name: "Audi RS6 Mansory Black/Yellow", price: 800000, type: "Wagon", image: "/audi-rs6-mansory-black-yellow.jpg" },
    ]
  },
  'aurus': {
    name: "Aurus",
    description: "Experience Russian luxury and craftsmanship with Aurus.",
    vehicles: [
      { id: 'aurus-senat', name: "Aurus Senat", price: 1000000, type: "Sedan", image: "/aurus-senat.jpg" },
    ]
  },
  'bentley': {
    name: "Bentley",
    description: "Experience extraordinary luxury with Bentley.",
    vehicles: [
      { id: 'bentley-bentayga', name: "Bentley Bentayga", price: 950000, type: "SUV", image: "/bentley-bentayga.jpg" },
      { id: 'bentley-continental-gtc-w12', name: "Bentley Continental GTC W12", price: 1100000, type: "Convertible", image: "/bentley-continental-gtc-w12.jpg" },
    ]
  },
  'cadillac': {
    name: "Cadillac",
    description: "Experience American luxury and innovation with Cadillac.",
    vehicles: [
      { id: 'cadillac-escalade', name: "Cadillac Escalade", price: 600000, type: "SUV", image: "/cadillac-escalade.jpg" },
      { id: 'cadillac-escalade-luxury', name: "Cadillac Escalade Luxury", price: 650000, type: "SUV", image: "/cadillac-escalade-luxury.jpg" },
      { id: 'cadillac-escalade-mansory', name: "Cadillac Escalade Mansory", price: 850000, type: "SUV", image: "/cadillac-escalade-mansory.jpg" },
      { id: 'cadillac-escalade-matte', name: "Cadillac Escalade Matte", price: 620000, type: "SUV", image: "/cadillac-escalade-matte.jpg" },
      { id: 'cadillac-escalade-v', name: "Cadillac Escalade V", price: 750000, type: "SUV", image: "/cadillac-escalade-v.jpg" },
    ]
  },
  'lotus': {
    name: "Lotus",
    description: "Experience pure driving pleasure with Lotus.",
    vehicles: [
      { id: 'lotus-emira', name: "Lotus Emira", price: 800000, type: "Sport", image: "/lotus-emira.jpg" },
    ]
  },
  'maserati': {
    name: "Maserati",
    description: "Discover Italian luxury and performance with Maserati.",
    vehicles: [
      { id: 'maserati-levante', name: "Maserati Levante", price: 700000, type: "SUV", image: "/maserati-levante.jpg" },
    ]
  },
  'mazda': {
    name: "Mazda",
    description: "Experience the joy of driving with Mazda.",
    vehicles: [
      { id: 'mazda-rx-7', name: "Mazda RX-7", price: 300000, type: "Sport", image: "/mazda-rx-7.jpg" },
    ]
  },
  'mclaren': {
    name: "McLaren",
    description: "Experience the pinnacle of automotive engineering with McLaren.",
    vehicles: [
      { id: 'mclaren-720s', name: "McLaren 720S", price: 1500000, type: "Sport", image: "/mclaren-720s.jpg" },
      { id: 'mclaren-720s-spider-topcar', name: "McLaren 720S Spider Topcar", price: 1700000, type: "Convertible", image: "/mclaren-720s-spider-topcar.jpg" },
      { id: 'mclaren-750s', name: "McLaren 750S", price: 1800000, type: "Sport", image: "/mclaren-750s.jpg" },
      { id: 'mclaren-artura', name: "McLaren Artura", price: 1300000, type: "Sport", image: "/mclaren-artura.jpg" },
    ]
  },
  'mercedes': {
    name: "Mercedes-Benz",
    description: "Experience the best or nothing with Mercedes-Benz.",
    vehicles: [
      { id: 'mercedes-6x6-brabus', name: "Mercedes 6x6 Brabus", price: 2500000, type: "SUV", image: "/mercedes-6x6-brabus.jpg" },
      { id: 'mercedes-amg-gt-6', name: "Mercedes AMG GT-6", price: 1200000, type: "Sport", image: "/mercedes-amg-gt-6.jpg" },
      { id: 'mercedes-g-p820-mansory-grey', name: "Mercedes G P820 Mansory Grey", price: 1800000, type: "SUV", image: "/mercedes-g-p820-mansory-grey.jpg" },
      { id: 'mercedes-g63-amg', name: "Mercedes G63 AMG", price: 1000000, type: "SUV", image: "/mercedes-g63-amg.jpg" },
      { id: 'mercedes-g63-black-mate', name: "Mercedes G63 Black Mate", price: 1050000, type: "SUV", image: "/mercedes-g63-black-mate.jpg" },
      { id: 'mercedes-g63-brabus-700', name: "Mercedes G63 Brabus 700", price: 1300000, type: "SUV", image: "/mercedes-g63-brabus-700.jpg" },
      { id: 'mercedes-g63-white-color', name: "Mercedes G63 White Color", price: 1000000, type: "SUV", image: "/mercedes-g63-white-color.jpg" },
      { id: 'mercedes-g500', name: "Mercedes G500", price: 900000, type: "SUV", image: "/mercedes-g500.jpg" },
      { id: 'mercedes-maybach-1-of-150', name: "Mercedes Maybach 1 of 150", price: 2200000, type: "Sedan", image: "/mercedes-maybach-1-of-150.jpg" },
      { id: 'mercedes-maybach-edition-100', name: "Mercedes Maybach Edition 100", price: 2300000, type: "Sedan", image: "/mercedes-maybach-edition-100.jpg" },
      { id: 'mercedes-maybach-new-black', name: "Mercedes Maybach New Black", price: 2000000, type: "Sedan", image: "/mercedes-maybach-new-black.jpg" },
      { id: 'mercedes-s-maybach-62-150', name: "Mercedes S Maybach 62/150", price: 2100000, type: "Sedan", image: "/mercedes-s-maybach-62-150.jpg" },
      { id: 'mercedes-s63-amg', name: "Mercedes S63 AMG", price: 1100000, type: "Sedan", image: "/mercedes-s63-amg.jpg" },
      { id: 'mercedes-s580-brabus-kit', name: "Mercedes S580 Brabus Kit", price: 1300000, type: "Sedan", image: "/mercedes-s580-brabus-kit.jpg" },
      { id: 'mercedes-sl63', name: "Mercedes SL63", price: 1000000, type: "Convertible", image: "/mercedes-sl63.jpg" },
      { id: 'mercedes-v-class', name: "Mercedes V-Class", price: 700000, type: "Van", image: "/mercedes-v-class.jpg" },
      { id: 'brabus-4x4-xlp-adventure-700', name: "BRABUS 4x4² XLP Adventure 700", price: 1500000, type: "Pickup", image: "/brabus-4x4-xlp-adventure-700.jpg" },
      { id: 'gls-maybach-p600-mansory', name: "GLS Maybach P600 Mansory", price: 1800000, type: "SUV", image: "/gls-maybach-p600-mansory.jpg" },
    ]
  },
  'mini': {
    name: "Mini",
    description: "Experience the iconic British charm with Mini.",
    vehicles: [
      { id: 'mini-cooper-jcw-gp-2020', name: "Mini Cooper JCW GP 2020", price: 250000, type: "Hatchback", image: "/mini-cooper-jcw-gp-2020.jpg" },
    ]
  },
  'porsche': {
    name: "Porsche",
    description: "Experience the thrill of German engineering with Porsche.",
    vehicles: [
      { id: 'porsche-911-stinger-gtr-limited-1-7', name: "Porsche 911 Stinger GTR Limited 1/7", price: 1800000, type: "Sport", image: "/porsche-911-stinger-gtr-limited-1-7.jpg" },
      { id: 'porsche-911-targa-4-stinger-topcar', name: "Porsche 911 Targa 4 Stinger Topcar", price: 1600000, type: "Sport", image: "/porsche-911-targa-4-stinger-topcar.jpg" },
      { id: 'porsche-911-targa-techart', name: "Porsche 911 Targa Techart", price: 1500000, type: "Sport", image: "/porsche-911-targa-techart.jpg" },
      { id: 'porsche-911-turbo-s-cabrio', name: "Porsche 911 Turbo S Cabrio", price: 1700000, type: "Convertible", image: "/porsche-911-turbo-s-cabrio.jpg" },
      { id: 'porsche-boxster-gts', name: "Porsche Boxster GTS", price: 900000, type: "Convertible", image: "/porsche-boxster-gts.jpg" },
      { id: 'porsche-cayenne-s', name: "Porsche Cayenne S", price: 800000, type: "SUV", image: "/porsche-cayenne-s.jpg" },
      { id: 'porsche-panamera-gts', name: "Porsche Panamera GTS", price: 1000000, type: "Sedan", image: "/porsche-panamera-gts.jpg" },
    ]
  },
  'tesla': {
    name: "Tesla",
    description: "Experience the future of electric vehicles with Tesla.",
    vehicles: [
      { id: 'tesla-model-3-performance', name: "Tesla Model 3 Performance", price: 400000, type: "Sedan", image: "/tesla-model-3-performance.jpg" },
    ]
  },
};

const currencyRates = {
  AED: 1,
  USD: 0.27,
  EUR: 0.26
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

  useEffect(() => {
    const handleScroll = () => {
      const selectors = document.querySelector('.brand-selectors');
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#9b8b6f]">{brand.name}</span> Collection
          </h1>
          <p className="text-lg text-gray-400">
            {brand.description}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-12 brand-selectors"
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
                    <div className="relative w-full h-48 mb-4">
                      <Image 
                        src={vehicle.image || "/placeholder.svg"} 
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

