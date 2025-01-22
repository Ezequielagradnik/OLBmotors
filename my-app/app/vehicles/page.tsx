"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Pagination } from "@/components/Pagination"
import vehicleData from '@/data/vehicle-data'

const vehicles = [
  { id: 'rolls-royce-dawn-grey', name: "Rolls Royce Dawn Grey", price: 1800000, type: "Convertible", brand: "Rolls Royce" },
  { id: 'lamborghini-sterrato', name: "Lamborghini Sterrato", price: 1300000, type: "Sport", brand: "Lamborghini" },
  { id: 'lamborghini-urus', name: "Lamborghini Urus", price: 1200000, type: "SUV", brand: "Lamborghini" },
  { id: 'range-rover-sport', name: "Range Rover Sport", price: 450000, type: "SUV", brand: "Range Rover" },
  { id: 'rolls-royce-ghost-mansory', name: "Rolls Royce Ghost Mansory", price: 1500000, type: "Sedan", brand: "Rolls Royce" },
  { id: 'rolls-royce-cullinan-violet', name: "Rolls Royce Cullinan Violet", price: 2000000, type: "SUV", brand: "Rolls Royce" },
  { id: 'ferrari-testarossa', name: "Ferrari Testarossa", price: 1000000, type: "Sport", brand: "Ferrari" },
  { id: 'lamborghini-huracan-sto', name: "Lamborghini Huracan STO", price: 1400000, type: "Sport", brand: "Lamborghini" },
  { id: 'ferrari-296-gts', name: "Ferrari 296 GTS", price: 1100000, type: "Convertible", brand: "Ferrari" },
  { id: 'ferrari-296-gtb', name: "Ferrari 296 GTB", price: 1050000, type: "Sport", brand: "Ferrari" },
  { id: 'bmw-x7-40i', name: "BMW X7 40i", price: 500000, type: "SUV", brand: "BMW" },
  { id: 'audi-r8', name: "Audi R8", price: 900000, type: "Sport", brand: "Audi" },
  { id: 'audi-rs6', name: "Audi RS6", price: 600000, type: "Wagon", brand: "Audi" },
  { id: 'audi-rs6-mansory-black-yellow', name: "Audi RS6 Mansory Black/Yellow", price: 800000, type: "Wagon", brand: "Audi" },
  { id: 'aurus-senat', name: "Aurus Senat", price: 1000000, type: "Sedan", brand: "Aurus" },
  { id: 'bentley-bentayga', name: "Bentley Bentayga", price: 950000, type: "SUV", brand: "Bentley" },
  { id: 'bentley-continental-gtc-w12', name: "Bentley Continental GTC W12", price: 1100000, type: "Convertible", brand: "Bentley" },
  { id: 'bmw-430i-cabrio', name: "BMW 430i Cabrio", price: 350000, type: "Convertible", brand: "BMW" },
  { id: 'bmw-430i-cabrio-green', name: "BMW 430i Cabrio Green", price: 360000, type: "Convertible", brand: "BMW" },
  { id: 'bmw-430i-cabrio-grey', name: "BMW 430i Cabrio Grey", price: 355000, type: "Convertible", brand: "BMW" },
  { id: 'bmw-520i-2024-new-black', name: "BMW 520i 2024 New Black", price: 400000, type: "Sedan", brand: "BMW" },
  { id: 'bmw-520i-2024-new-grey', name: "BMW 520i 2024 New Grey", price: 405000, type: "Sedan", brand: "BMW" },
  { id: 'bmw-530i-m-package', name: "BMW 530i M Package", price: 450000, type: "Sedan", brand: "BMW" },
  { id: 'bmw-840i-cabrio', name: "BMW 840i Cabrio", price: 700000, type: "Convertible", brand: "BMW" },
  { id: 'bmw-m8-competition', name: "BMW M8 Competition", price: 850000, type: "Coupe", brand: "BMW" },
  { id: 'bmw-x6m-competition', name: "BMW X6M Competition", price: 750000, type: "SUV", brand: "BMW" },
  { id: 'bmw-xm', name: "BMW XM", price: 900000, type: "SUV", brand: "BMW" },
  { id: 'brabus-4x4-xlp-adventure-700', name: "BRABUS 4x4 XLP Adventure 700", price: 1500000, type: "Pickup", brand: "Mercedes" },
  { id: 'cadillac-escalade', name: "Cadillac Escalade", price: 600000, type: "SUV", brand: "Cadillac" },
  { id: 'cadillac-escalade-luxury', name: "Cadillac Escalade Luxury", price: 650000, type: "SUV", brand: "Cadillac" },
  { id: 'cadillac-escalade-mansory', name: "Cadillac Escalade Mansory", price: 850000, type: "SUV", brand: "Cadillac" },
  { id: 'cadillac-escalade-matte', name: "Cadillac Escalade Matte", price: 620000, type: "SUV", brand: "Cadillac" },
  { id: 'cadillac-escalade-v', name: "Cadillac Escalade V", price: 750000, type: "SUV", brand: "Cadillac" },
  { id: 'ferrari-812-superfast', name: "Ferrari 812 Superfast", price: 1600000, type: "Sport", brand: "Ferrari" },
  { id: 'ferrari-f8-spider', name: "Ferrari F8 Spider", price: 1400000, type: "Convertible", brand: "Ferrari" },
  { id: 'ferrari-portofino', name: "Ferrari Portofino", price: 1200000, type: "Convertible", brand: "Ferrari" },
  { id: 'ferrari-roma', name: "Ferrari Roma", price: 1300000, type: "Coupe", brand: "Ferrari" },
  { id: 'ferrari-sf90-stradale', name: "Ferrari SF90 Stradale", price: 2000000, type: "Sport", brand: "Ferrari" },
  { id: 'gls-maybach-p600-mansory', name: "GLS Maybach P600 Mansory", price: 1800000, type: "SUV", brand: "Mercedes" },
  { id: 'lamborghini-diablo-vt-roadster', name: "Lamborghini Diablo VT Roadster", price: 1500000, type: "Convertible", brand: "Lamborghini" },
  { id: 'lamborghini-huracan-evo-coupe', name: "Lamborghini Huracan EVO Coupe", price: 1100000, type: "Sport", brand: "Lamborghini" },
  { id: 'lamborghini-huracan-evo-spyder', name: "Lamborghini Huracan EVO Spyder", price: 1200000, type: "Convertible", brand: "Lamborghini" },
  { id: 'lotus-emira', name: "Lotus Emira", price: 800000, type: "Sport", brand: "Lotus" },
  { id: 'maserati-levante', name: "Maserati Levante", price: 700000, type: "SUV", brand: "Maserati" },
  { id: 'mazda-rx-7', name: "Mazda RX-7", price: 300000, type: "Sport", brand: "Mazda" },
  { id: 'mclaren-720s', name: "McLaren 720S", price: 1500000, type: "Sport", brand: "McLaren" },
  { id: 'mclaren-720s-spider-topcar', name: "McLaren 720S Spider Topcar", price: 1700000, type: "Convertible", brand: "McLaren" },
  { id: 'mclaren-750s', name: "McLaren 750S", price: 1800000, type: "Sport", brand: "McLaren" },
  { id: 'mclaren-artura', name: "McLaren Artura", price: 1300000, type: "Sport", brand: "McLaren" },
  { id: 'mercedes-6x6-brabus', name: "Mercedes 6x6 Brabus", price: 2500000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-amg-gt-6', name: "Mercedes AMG GT-6", price: 1200000, type: "Sport", brand: "Mercedes" },
  { id: 'mercedes-g-p820-mansory-grey', name: "Mercedes G P820 Mansory Grey", price: 1800000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-g63-amg', name: "Mercedes G63 AMG", price: 1000000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-g63-black-mate', name: "Mercedes G63 Black Mate", price: 1050000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-g63-brabus-700', name: "Mercedes G63 Brabus 700", price: 1300000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-g63-white-color', name: "Mercedes G63 White Color", price: 1000000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-g500', name: "Mercedes G500", price: 900000, type: "SUV", brand: "Mercedes" },
  { id: 'mercedes-maybach-1-of-150', name: "Mercedes Maybach 1 of 150", price: 2200000, type: "Sedan", brand: "Mercedes" },
  { id: 'mercedes-maybach-edition-100', name: "Mercedes Maybach Edition 100", price: 2300000, type: "Sedan", brand: "Mercedes" },
  { id: 'mercedes-maybach-new-black', name: "Mercedes Maybach New Black", price: 2000000, type: "Sedan", brand: "Mercedes" },
  { id: 'mercedes-s-maybach-62-150', name: "Mercedes S Maybach 62/150", price: 2100000, type: "Sedan", brand: "Mercedes" },
  { id: 'mercedes-s63-amg', name: "Mercedes S63 AMG", price: 1100000, type: "Sedan", brand: "Mercedes" },
  { id: 'mercedes-s580-brabus-kit', name: "Mercedes S580 Brabus Kit", price: 1300000, type: "Sedan", brand: "Mercedes" },
  { id: 'mercedes-sl63', name: "Mercedes SL63", price: 1000000, type: "Convertible", brand: "Mercedes" },
  { id: 'mercedes-v-class', name: "Mercedes V-Class", price: 700000, type: "Van", brand: "Mercedes" },
  { id: 'mini-cooper-jcw-gp-2020', name: "Mini Cooper JCW GP 2020", price: 250000, type: "Hatchback", brand: "Mini" },
  { id: 'porsche-911-stinger-gtr-limited-1-7', name: "Porsche 911 Stinger GTR Limited 1/7", price: 1800000, type: "Sport", brand: "Porsche" },
  { id: 'porsche-911-targa-4-stinger-topcar', name: "Porsche 911 Targa 4 Stinger Topcar", price: 1600000, type: "Sport", brand: "Porsche" },
  { id: 'porsche-911-targa-techart', name: "Porsche 911 Targa Techart", price: 1500000, type: "Sport", brand: "Porsche" },
  { id: 'porsche-911-turbo-s-cabrio', name: "Porsche 911 Turbo S Cabrio", price: 1700000, type: "Convertible", brand: "Porsche" },
  { id: 'porsche-boxster-gts', name: "Porsche Boxster GTS", price: 900000, type: "Convertible", brand: "Porsche" },
  { id: 'porsche-cayenne-s', name: "Porsche Cayenne S", price: 800000, type: "SUV", brand: "Porsche" },
  { id: 'porsche-panamera-gts', name: "Porsche Panamera GTS", price: 1000000, type: "Sedan", brand: "Porsche" },
  { id: 'range-rover-vogue', name: "Range Rover Vogue", price: 700000, type: "SUV", brand: "Range Rover" },
  { id: 'rolls-royce-dawn-mansory', name: "Rolls Royce Dawn Mansory", price: 2200000, type: "Convertible", brand: "Rolls Royce" },
  { id: 'rolls-royce-ghost-white-orange', name: "Rolls Royce Ghost White/Orange", price: 1900000, type: "Sedan", brand: "Rolls Royce" },
  { id: 'rolls-royce-spectre', name: "Rolls Royce Spectre", price: 2500000, type: "Coupe", brand: "Rolls Royce" },
  { id: 'rolls-royce-spectre-full-options', name: "Rolls Royce Spectre Full Options", price: 2700000, type: "Coupe", brand: "Rolls Royce" },
  { id: 'rolls-royce-cullinan', name: "Rolls Royce Cullinan", price: 2300000, type: "SUV", brand: "Rolls Royce" },
  { id: 'rolls-royce-dawn-black-badge', name: "Rolls Royce Dawn Black Badge", price: 2100000, type: "Convertible", brand: "Rolls Royce" },
  { id: 'rolls-royce-ghost', name: "Rolls Royce Ghost", price: 2000000, type: "Sedan", brand: "Rolls Royce" },
  { id: 'tesla-model-3-performance', name: "Tesla Model 3 Performance", price: 400000, type: "Sedan", brand: "Tesla" },
];


const brands = [
  { name: 'Audi', image: '/audi-logo.png' },
  { name: 'Aurus', image: '/aurus-Logo.jpg' },
  { name: 'Bentley', image: '/bentley-logo.png' },
  { name: 'BMW', image: '/BMW-logo.png' },
  { name: 'Cadillac', image: '/cadillac-logo.jpg' },
  { name: 'Ferrari', image: '/ferrari-logo.jpg' },
  { name: 'Lamborghini', image: '/lambo-logo.jpg' },
  { name: 'Lotus', image: '/lotus-logo.png' },
  { name: 'Maserati', image: '/Maserati-logo.jpg' },
  { name: 'Mazda', image: '/Mazda-Logo.png' },
  { name: 'McLaren', image: '/mclaren-logo.webp' },
  { name: 'Mercedes', image: '/mercedes-logo.jpg' },
  { name: 'Porsche', image: '/porsche-logo.png' },
  { name: 'Range Rover', image: '/range-logo.svg' },
  { name: 'Rolls Royce', image: '/rolls-logo.png' },
  { name: 'Tesla', image: '/tesla-logo.png' }
]

const currencyRates = {
  AED: 1,
  USD: 0.27,
  EUR: 0.25
}

const ITEMS_PER_PAGE = 15

export default function Vehicles() {
  const [selectedType, setSelectedType] = useState("All")
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [selectedCurrency, setSelectedCurrency] = useState("AED")
  const [currentPage, setCurrentPage] = useState(1)
  const [priceRange] = useState([0, 2000000])

  const filteredVehicles = vehicles.filter(vehicle => 
    (selectedType === "All" || vehicle.type === selectedType) &&
    (selectedBrand === "All" || vehicle.brand === selectedBrand) &&
    vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
  )

  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE)
  const currentVehicles = filteredVehicles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedType, selectedBrand])

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
          <Select onValueChange={(value) => setSelectedBrand(value)}>
            <SelectTrigger className="w-[180px] bg-zinc-900 text-[#9b8b6f] border-[#9b8b6f] hover:bg-zinc-800 transition-colors">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-[#9b8b6f] border-[#9b8b6f]">
              <SelectItem value="All">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand.name} value={brand.name}>
                  <div className="flex items-center">
                    <Image src={brand.image || "/placeholder.svg"} alt={brand.name} width={20} height={20} className="mr-2" />
                    <span>{brand.name}</span>
                  </div>
                </SelectItem>
              ))}
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
          {currentVehicles.map((vehicle) => (
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
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                      <Image
                        src={vehicleData[vehicle.id]?.images[0] || "/placeholder.svg"}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-400">Type: {vehicle.type}</p>
                    <p className="text-gray-400">Brand: {vehicle.brand}</p>
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
        
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </motion.section>
    </div>
  )
}