"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Check, Info } from 'lucide-react'
import { notFound } from 'next/navigation'

export const vehicleData = {
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
  "audi-r8": {
    name: "Audi R8",
    price: 900000,
    mileage: 8000,
    description: "The Audi R8 is a high-performance supercar that combines stunning design with cutting-edge technology.",
    additionalInfo: "Experience the thrill of a true supercar with the Audi R8. This mid-engine marvel offers breathtaking performance and head-turning looks, making it the perfect choice for those who demand the ultimate driving experience.",
    features: [
      "5.2L V10 Engine",
      "Quattro All-Wheel Drive",
      "Carbon Fiber Construction",
      "Virtual Cockpit"
    ]
  },
  "audi-rs6": {
    name: "Audi RS6",
    price: 600000,
    mileage: 15000,
    description: "The Audi RS6 is a high-performance wagon that offers supercar-like performance in a practical package.",
    additionalInfo: "Enjoy the perfect blend of performance and practicality with the Audi RS6. This high-performance wagon offers supercar-like acceleration and handling, all while providing the space and versatility of a family vehicle.",
    features: [
      "4.0L V8 Twin-Turbo Engine",
      "Quattro All-Wheel Drive",
      "Adaptive Air Suspension",
      "RS Sport Exhaust System"
    ]
  },
  "audi-rs6-mansory-black-yellow": {
    name: "Audi RS6 Mansory Black/Yellow",
    price: 800000,
    mileage: 10000,
    description: "The Audi RS6 Mansory Black/Yellow is a bespoke creation that takes the already impressive RS6 to new heights.",
    additionalInfo: "Stand out from the crowd with the Audi RS6 Mansory Black/Yellow. This unique creation combines the performance of the RS6 with Mansory's exquisite craftsmanship, resulting in a truly one-of-a-kind automotive masterpiece.",
    features: [
      "Upgraded 4.0L V8 Twin-Turbo Engine",
      "Bespoke Black and Yellow Exterior",
      "Custom Mansory Interior",
      "Enhanced Aerodynamics Package"
    ]
  },
  "aurus-senat": {
    name: "Aurus Senat",
    price: 1000000,
    mileage: 5000,
    description: "The Aurus Senat is a luxury sedan that represents the pinnacle of Russian automotive engineering.",
    additionalInfo: "Experience unparalleled luxury and prestige with the Aurus Senat. This flagship sedan combines advanced technology with exquisite craftsmanship, offering a truly unique driving experience.",
    features: [
      "4.4L V8 Hybrid Powertrain",
      "All-Wheel Drive",
      "Advanced Safety Systems",
      "Bespoke Interior Options"
    ]
  },
  "bentley-bentayga": {
    name: "Bentley Bentayga",
    price: 950000,
    mileage: 12000,
    description: "The Bentley Bentayga is a luxury SUV that offers unparalleled comfort and performance.",
    additionalInfo: "Indulge in the ultimate luxury SUV experience with the Bentley Bentayga. This exceptional vehicle combines Bentley's renowned craftsmanship with cutting-edge technology and impressive performance capabilities.",
    features: [
      "4.0L V8 Twin-Turbo Engine",
      "All-Wheel Drive",
      "Bentley Dynamic Ride",
      "Handcrafted Interior"
    ]
  },
  "bentley-continental-gtc-w12": {
    name: "Bentley Continental GTC W12",
    price: 1100000,
    mileage: 8000,
    description: "The Bentley Continental GTC W12 is a luxurious grand tourer that offers open-top motoring at its finest.",
    additionalInfo: "Experience the pinnacle of open-top luxury with the Bentley Continental GTC W12. This exquisite convertible combines breathtaking performance with unparalleled comfort and style.",
    features: [
      "6.0L W12 Twin-Turbo Engine",
      "All-Wheel Drive",
      "Convertible Roof",
      "Naim for Bentley Audio System"
    ]
  },
  "bmw-430i-cabrio": {
    name: "BMW 430i Cabrio",
    price: 350000,
    mileage: 18000,
    description: "The BMW 430i Cabrio is a stylish convertible that offers a perfect blend of performance and luxury.",
    additionalInfo: "Enjoy open-top driving at its finest with the BMW 430i Cabrio. This elegant convertible combines sporty performance with luxurious comfort, making it the perfect choice for those who love to feel the wind in their hair.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "Retractable Hardtop",
      "BMW Live Cockpit Professional",
      "Harman Kardon Surround Sound System"
    ]
  },
  "bmw-430i-cabrio-green": {
    name: "BMW 430i Cabrio Green",
    price: 360000,
    mileage: 16000,
    description: "The BMW 430i Cabrio in Green is a unique and stylish convertible that stands out from the crowd.",
    additionalInfo: "Make a statement with the BMW 430i Cabrio in Green. This eye-catching convertible combines the performance and luxury of the 430i with a distinctive green exterior, perfect for those who want to stand out.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "Retractable Hardtop",
      "Bespoke Green Exterior",
      "BMW Live Cockpit Professional"
    ]
  },
  "bmw-430i-cabrio-grey": {
    name: "BMW 430i Cabrio Grey",
    price: 355000,
    mileage: 17000,
    description: "The BMW 430i Cabrio in Grey is a sophisticated convertible that exudes elegance and style.",
    additionalInfo: "Experience refined open-top driving with the BMW 430i Cabrio in Grey. This elegant convertible combines sporty performance with a sophisticated grey exterior, perfect for those who appreciate understated luxury.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "Retractable Hardtop",
      "Bespoke Grey Exterior",
      "BMW Live Cockpit Professional"
    ]
  },
  "bmw-520i-2024-new-black": {
    name: "BMW 520i 2024 New Black",
    price: 400000,
    mileage: 1000,
    description: "The BMW 520i 2024 in Black is a sophisticated sedan that offers the latest in luxury and technology.",
    additionalInfo: "Experience the future of luxury sedans with the BMW 520i 2024 in Black. This cutting-edge vehicle combines elegant design with advanced technology, offering a truly premium driving experience.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "Mild Hybrid Technology",
      "BMW Operating System 8",
      "Sleek Black Exterior"
    ]
  },
  "bmw-520i-2024-new-grey": {
    name: "BMW 520i 2024 New Grey",
    price: 405000,
    mileage: 1000,
    description: "The BMW 520i 2024 in Grey is a refined sedan that combines elegance with cutting-edge technology.",
    additionalInfo: "Embrace sophistication with the BMW 520i 2024 in Grey. This premium sedan offers a perfect blend of performance, luxury, and technology, all wrapped in an elegant grey exterior.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "Mild Hybrid Technology",
      "BMW Operating System 8",
      "Elegant Grey Exterior"
    ]
  },
  "bmw-530i-m-package": {
    name: "BMW 530i M Package",
    price: 450000,
    mileage: 10000,
    description: "The BMW 530i M Package is a sporty sedan that combines luxury with performance-inspired design.",
    additionalInfo: "Experience the perfect blend of luxury and sportiness with the BMW 530i M Package. This dynamic sedan offers enhanced performance and aggressive styling, making it the ideal choice for driving enthusiasts.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "M Sport Suspension",
      "M Aerodynamics Package",
      "BMW Live Cockpit Professional"
    ]
  },
  "bmw-840i-cabrio": {
    name: "BMW 840i Cabrio",
    price: 700000,
    mileage: 8000,
    description: "The BMW 840i Cabrio is a luxurious grand tourer that offers open-top driving at its finest.",
    additionalInfo: "Indulge in the ultimate open-top driving experience with the BMW 840i Cabrio. This elegant convertible combines powerful performance with luxurious comfort, making every journey unforgettable.",
    features: [
      "3.0L Turbocharged 6-Cylinder Engine",
      "Convertible Soft Top",
      "BMW xDrive All-Wheel Drive",
      "Bowers & Wilkins Diamond Surround Sound System"
    ]
  },
  "bmw-m8-competition": {
    name: "BMW M8 Competition",
    price: 850000,
    mileage: 6000,
    description: "The BMW M8 Competition is a high-performance luxury coupe that offers breathtaking speed and handling.",
    additionalInfo: "Experience the pinnacle of BMW performance with the M8 Competition. This powerful coupe combines luxurious comfort with track-ready performance, making it the ultimate driving machine.",
    features: [
      "4.4L V8 Twin-Turbo Engine",
      "M xDrive All-Wheel Drive",
      "Adaptive M Suspension",
      "M Carbon Ceramic Brakes"
    ]
  },
  "bmw-x6m-competition": {
    name: "BMW X6M Competition",
    price: 750000,
    mileage: 9000,
    description: "The BMW X6M Competition is a high-performance SUV that combines practicality with supercar-like performance.",
    additionalInfo: "Experience the thrill of a sports car with the practicality of an SUV in the BMW X6M Competition. This powerful vehicle offers exceptional performance and handling, all wrapped in a distinctive coupe-like design.",
    features: [
      "4.4L V8 Twin-Turbo Engine",
      "M xDrive All-Wheel Drive",
      "Adaptive M Suspension Professional",
      "M Compound Brakes"
    ]
  },
  "bmw-xm": {
    name: "BMW XM",
    price: 900000,
    mileage: 5000,
    description: "The BMW XM is a high-performance luxury SUV that showcases BMW's most powerful hybrid powertrain.",
    additionalInfo: "Experience the future of high-performance luxury SUVs with the BMW XM. This groundbreaking vehicle combines exceptional power with advanced hybrid technology, offering an unparalleled driving experience.",
    features: [
      "4.4L V8 Hybrid Powertrain",
      "M xDrive All-Wheel Drive",
      "Adaptive M Professional Suspension",
      "BMW Curved Display"
    ]
  },
  "brabus-4x4-xlp-adventure-700": {
    name: "BRABUS 4x4² XLP Adventure 700",
    price: 1500000,
    mileage: 3000,
    description: "The BRABUS 4x4² XLP Adventure 700 is an extreme off-road pickup truck based on the Mercedes-Benz G-Class.",
    additionalInfo: "Conquer any terrain with the BRABUS 4x4² XLP Adventure 700. This ultimate off-road vehicle combines luxury with extreme capability, making it the perfect choice for adventurers who demand the very best.",
    features: [
      "4.0L V8 Twin-Turbo Engine",
      "Portal Axles",
      "Pickup Truck Conversion",
      "BRABUS Fine Leather Interior"
    ]
  },
  "cadillac-escalade": {
    name: "Cadillac Escalade",
    price: 600000,
    mileage: 15000,
    description: "The Cadillac Escalade is a full-size luxury SUV that offers unparalleled comfort and presence.",
    additionalInfo: "Experience the epitome of American luxury with the Cadillac Escalade. This iconic SUV combines imposing design with cutting-edge technology, offering a truly premium driving experience.",
    features: [
      "6.2L V8 Engine",
      "Magnetic Ride Control",
      "AKG Studio Reference Sound System",
      "Super Cruise Hands-Free Driving"
    ]
  },
  "cadillac-escalade-luxury": {
    name: "Cadillac Escalade Luxury",
    price: 650000,
    mileage: 12000,
    description: "The Cadillac Escalade Luxury is a premium trim level that offers enhanced comfort and features.",
    additionalInfo: "Indulge in the ultimate luxury SUV experience with the Cadillac Escalade Luxury. This premium trim level offers additional comfort features and upgraded materials, elevating the already impressive Escalade to new heights.",
    features: [
      "6.2L V8 Engine",
      "Magnetic Ride Control",
      "Enhanced Interior Trim",
      "Panoramic Sunroof"
    ]
  },
  "cadillac-escalade-mansory": {
    name: "Cadillac Escalade Mansory",
    price: 850000,
    mileage: 8000,
    description: "The Cadillac Escalade Mansory is a bespoke creation that takes luxury and presence to the extreme.",
    additionalInfo: "Stand out from the crowd with the Cadillac Escalade Mansory. This unique creation combines the luxury of the Escalade with Mansory's exquisite craftsmanship, resulting in a truly one-of-a-kind automotive masterpiece.",
    features: [
      "Upgraded 6.2L V8 Engine",
      "Bespoke Mansory Exterior",
      "Custom Mansory Interior",
      "Enhanced Sound System"
    ]
  },
  "cadillac-escalade-matte": {
    name: "Cadillac Escalade Matte",
    price: 620000,
    mileage: 14000,
    description: "The Cadillac Escalade Matte features a unique matte finish that adds an extra layer of sophistication.",
    additionalInfo: "Make a statement with the Cadillac Escalade Matte. This distinctive SUV combines all the luxury and technology of the Escalade with a sleek matte exterior finish, perfect for those who want to stand out from the crowd.",
    features: [
      "6.2L V8 Engine",
      "Matte Exterior Finish",
      "AKG Studio Reference Sound System",
      "Super Cruise Hands-Free Driving"
    ]
  },
  "cadillac-escalade-v": {
    name: "Cadillac Escalade V",
    price: 750000,
    mileage: 10000,
    description: "The Cadillac Escalade V is a high-performance version of the luxury SUV, offering incredible power and dynamics.",
    additionalInfo: "Experience the ultimate in luxury performance with the Cadillac Escalade V. This high-performance SUV combines the opulence of the Escalade with breathtaking acceleration and handling, making it the perfect choice for those who demand the very best.",
    features: [
      "6.2L Supercharged V8 Engine",
      "Performance-Tuned Magnetic Ride Control",
      "Brembo High-Performance Brakes",
      "V-Series Performance Interior"
    ]
  },
  "ferrari-812-superfast": {
    name: "Ferrari 812 Superfast",
    price: 1600000,
    mileage: 5000,
    description: "The Ferrari 812 Superfast is a front-engine grand tourer that offers exceptional performance and handling.",
    additionalInfo: "Experience the pinnacle of Ferrari's front-engine performance with the 812 Superfast. This breathtaking grand tourer combines raw power with sophisticated aerodynamics, delivering an unparalleled driving experience.",
    features: [
      "6.5L V12 Engine",
      "7-Speed Dual-Clutch Transmission",
      "Active Aerodynamics",
      "Ferrari Power Oversteer"
    ]
  },
  "ferrari-f8-spider": {
    name: "Ferrari F8 Spider",
    price: 1400000,
    mileage: 4000,
    description: "The Ferrari F8 Spider is an open-top supercar that offers exhilarating performance and stunning design.",
    additionalInfo: "Indulge in the ultimate open-air driving experience with the Ferrari F8 Spider. This mid-engine marvel combines breathtaking performance with the thrill of top-down motoring, making every drive an unforgettable adventure.",
    features: [
      "3.9L Twin-Turbo V8 Engine",
      "Retractable Hardtop",
      "Side Slip Angle Control",
      "Ferrari Dynamic Enhancer"
    ]
  },
  "ferrari-portofino": {
    name: "Ferrari Portofino",
    price: 1200000,
    mileage: 7000,
    description: "The Ferrari Portofino is a versatile grand tourer that offers both performance and everyday usability.",
    additionalInfo: "Experience the perfect blend of performance and practicality with the Ferrari Portofino. This elegant convertible offers exhilarating performance and open-top thrills, all while providing the comfort and versatility for daily use.",
    features: [
      "3.9L Twin-Turbo V8 Engine",
      "Retractable Hardtop",
      "Magnetorheological Suspension",
      "Ferrari Power Transfer"
    ]
  },
  "ferrari-roma": {
    name: "Ferrari Roma",
    price: 1300000,
    mileage: 5000,
    description: "The Ferrari Roma is a stylish grand tourer that combines timeless design with modern performance.",
    additionalInfo: "Embrace the spirit of la dolce vita with the Ferrari Roma. This elegant coupe offers a perfect balance of performance and refinement, making it the ideal choice for those who appreciate both style and substance.",
    features: [
      "3.9L Twin-Turbo V8 Engine",
      "8-Speed Dual-Clutch Transmission",
      "Side Slip Control 6.0",
      "Ferrari Dynamic Enhancer"
    ]
  },
  "ferrari-sf90-stradale": {
    name: "Ferrari SF90 Stradale",
    price: 2000000,
    mileage: 3000,
    description: "The Ferrari SF90 Stradale is a plug-in hybrid supercar that represents the pinnacle of Ferrari technology.",
    additionalInfo: "Experience the future of Ferrari performance with the SF90 Stradale. This groundbreaking plug-in hybrid supercar combines a powerful V8 engine with three electric motors, delivering unprecedented performance and efficiency.",
    features: [
      "4.0L Twin-Turbo V8 Hybrid Powertrain",
      "All-Wheel Drive",
      "eManettino Driving Modes",
      "Carbon Fiber Construction"
    ]
  },
  "gls-maybach-p600-mansory": {
    name: "GLS Maybach P600 Mansory",
    price: 1800000,
    mileage: 5000,
    description: "The GLS Maybach P600 Mansory is a bespoke luxury SUV that combines opulence with extreme customization.",
    additionalInfo: "Indulge in the ultimate luxury SUV experience with the GLS Maybach P600 Mansory. This exclusive creation combines the refinement of Maybach with Mansory's exquisite craftsmanship, resulting in a truly unique automotive masterpiece.",
    features: [
      "4.0L V8 Biturbo Engine",
      "Bespoke Mansory Exterior",
      "Custom Mansory Interior",
      "Advanced Driver Assistance Systems"
    ]
  },
  "lamborghini-diablo-vt-roadster": {
    name: "Lamborghini Diablo VT Roadster",
    price: 1500000,
    mileage: 15000,
    description: "The Lamborghini Diablo VT Roadster is an iconic supercar that defined an era of automotive excellence.",
    additionalInfo: "Own a piece of automotive history with the Lamborghini Diablo VT Roadster. This legendary supercar combines breathtaking design with raw power, offering an unparalleled driving experience.",
    features: [
      "5.7L V12 Engine",
      "All-Wheel Drive",
      "Removable Carbon Fiber Roof",
      "Scissor Doors"
    ]
  },
  "lamborghini-huracan-evo-coupe": {
    name: "Lamborghini Huracan EVO Coupe",
    price: 1100000,
    mileage: 5000,
    description: "The Lamborghini Huracan EVO Coupe is a high-performance supercar that offers cutting-edge technology and exhilarating performance.",
    additionalInfo: "Experience the evolution of performance with the Lamborghini Huracan EVO Coupe. This advanced supercar combines state-of-the-art technology with Lamborghini's legendary performance, delivering an unforgettable driving experience.",
    features: [
      "5.2L V10 Engine",
      "All-Wheel Drive",
      "Lamborghini Dinamica Veicolo Integrata",
      "Adaptive Magnetorheological Suspension"
    ]
  },
  "lamborghini-huracan-evo-spyder": {
    name: "Lamborghini Huracan EVO Spyder",
    price: 1200000,
    mileage: 4000,
    description: "The Lamborghini Huracan EVO Spyder is an open-top supercar that combines breathtaking performance with the thrill of open-air driving.",
    additionalInfo: "Indulge in the ultimate open-top driving experience with the Lamborghini Huracan EVO Spyder. This exhilarating convertible offers all the performance of the EVO Coupe with the added excitement of top-down motoring.",
    features: [
      "5.2L V10 Engine",
      "All-Wheel Drive",
      "Electrohydraulic Soft Top",
      "Lamborghini Dynamic Steering"
    ]
  },
  "lotus-emira": {
    name: "Lotus Emira",
    price: 800000,
    mileage: 2000,
    description: "The Lotus Emira is a mid-engine sports car that combines stunning design with exceptional handling.",
    additionalInfo: "Experience the future of Lotus with the Emira. This stunning sports car combines Lotus' legendary handling prowess with modern design and technology, offering a truly exhilarating driving experience.",
    features: [
      "3.5L V6 Engine",
      "6-Speed Manual or Automatic Transmission",
      "Lotus Driving Mode Selector",
      "Exposed Gear Linkage (manual models)"
    ]
  },
  "maserati-levante": {
    name: "Maserati Levante",
    price: 700000,
    mileage: 10000,
    description: "The Maserati Levante is a luxury SUV that combines Italian style with versatile performance.",
    additionalInfo: "Experience the perfect blend of luxury and performance with the Maserati Levante. This stylish SUV offers the practicality of a crossover with the soul of a sports car, making it the ideal choice for those who refuse to compromise.",
    features: [
      "3.0L V6 Twin-Turbo Engine",
      "Q4 Intelligent All-Wheel Drive",
      "Skyhook Air Suspension",
      "Maserati Touch Control Plus"
    ]
  },
  "mazda-rx-7": {
    name: "Mazda RX-7",
    price: 300000,
    mileage: 50000,
    description: "The Mazda RX-7 is a legendary sports car known for its unique rotary engine and exceptional handling.",
    additionalInfo: "Own a piece of automotive history with the Mazda RX-7. This iconic sports car is renowned for its lightweight design, perfect balance, and distinctive rotary engine, offering a driving experience unlike any other.",
    features: [
      "1.3L Twin-Rotor Wankel Rotary Engine",
      "Rear-Wheel Drive",
      "Pop-up Headlights",
      "Limited-Slip Differential"
    ]
  },
  "mclaren-720s": {
    name: "McLaren 720S",
    price: 1500000,
    mileage: 5000,
    description: "The McLaren 720S is a high-performance supercar that offers breathtaking speed and advanced aerodynamics.",
    additionalInfo: "Experience the pinnacle of McLaren engineering with the 720S. This cutting-edge supercar combines lightweight construction with incredible power, delivering a driving experience that's truly out of this world.",
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "7-Speed Dual-Clutch Transmission",
      "Active Chassis Control II",
      "Variable Drift Control"
    ]
  },
  "mclaren-720s-spider-topcar": {
    name: "McLaren 720S Spider Topcar",
    price: 1700000,
    mileage: 3000,
    description: "The McLaren 720S Spider Topcar is a bespoke open-top supercar that combines stunning performance with unique customization.",
    additionalInfo: "Indulge in the ultimate open-air driving experience with the McLaren 720S Spider Topcar. This exclusive creation combines the thrilling performance of the 720S with Topcar's exquisite customization, resulting in a truly one-of-a-kind automotive masterpiece.",
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "Retractable Hardtop",
      "Bespoke Topcar Exterior",
      "Custom Topcar Interior"
    ]
  },
  "mclaren-750s": {
    name: "McLaren 750S",
    price: 1800000,
    mileage: 1000,
    description: "The McLaren 750S is the latest evolution of McLaren's supercar lineup, offering even more power and performance.",
    additionalInfo: "Experience the next level of McLaren performance with the 750S. This advanced supercar builds on the success of its predecessors, delivering even more power, improved aerodynamics, and cutting-edge technology.",
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "7-Speed Dual-Clutch Transmission",
      "Enhanced Active Chassis Control",
      "Next-Generation Variable Drift Control"
    ]
  },
  "mclaren-artura": {
    name: "McLaren Artura",
    price: 1300000,
    mileage: 2000,
    description: "The McLaren Artura is a high-performance hybrid supercar that combines electrification with McLaren's legendary performance.",
    additionalInfo: "Experience the future of supercars with the McLaren Artura. This groundbreaking hybrid combines a powerful V6 engine with an electric motor, delivering exceptional performance with improved efficiency and sustainability.",
    features: [
      "3.0L Twin-Turbo V6 Hybrid Powertrain",
      "8-Speed Dual-Clutch Transmission",
      "Carbon Fiber Monocoque",
      "Cyber Tire Technology"
    ]
  },
  "mercedes-6x6-brabus": {
    name: "Mercedes 6x6 Brabus",
    price: 2500000,
    mileage: 5000,
    description: "The Mercedes 6x6 Brabus is an extreme off-road vehicle that combines luxury with unparalleled capability.",
    additionalInfo: "Conquer any terrain in ultimate luxury with the Mercedes 6x6 Brabus. This extraordinary vehicle combines the legendary G-Class platform with six-wheel drive and Brabus' exquisite customization, resulting in a truly unique automotive experience.",
    features: [
      "5.5L V8 Biturbo Engine",
      "Six-Wheel Drive",
      "Portal Axles",
      "Brabus Fine Leather Interior"
    ]
  },
  "mercedes-amg-gt-6": {
    name: "Mercedes AMG GT-6",
    price: 1200000,
    mileage: 3000,
    description: "The Mercedes AMG GT-6 is a high-performance grand tourer that offers exceptional speed and luxury.",
    additionalInfo: "Experience the perfect blend of performance and luxury with the Mercedes AMG GT-6. This powerful grand tourer combines breathtaking acceleration with long-distance comfort, making it the ideal choice for high-speed continental cruising.",
    features: [
      "4.0L V8 Biturbo Engine",
      "AMG SPEEDSHIFT DCT 7-Speed Transmission",
      "AMG RIDE CONTROL Suspension",
      "AMG High-Performance Composite Braking System"
    ]
  },
  "mercedes-g-p820-mansory-grey": {
    name: "Mercedes G P820 Mansory Grey",
    price: 1800000,
    mileage: 2000,
    description: "The Mercedes G P820 Mansory Grey is a bespoke luxury SUV that combines iconic design with extreme customization.",
    additionalInfo: "Stand out from the crowd with the Mercedes G P820 Mansory Grey. This unique creation combines the legendary G-Class platform with Mansory's exquisite craftsmanship, resulting in a truly one-of-a-kind automotive masterpiece.",
    features: [
      "4.0L V8 Biturbo Engine (Upgraded to 820 HP)",
      "Bespoke Mansory Grey Exterior",
      "Custom Mansory Interior",
      "Enhanced Suspension System"
    ]
  },
  "mercedes-g63-amg": {
    name: "Mercedes G63 AMG",
    price: 1000000,
    mileage: 8000,
    description: "The Mercedes G63 AMG is a high-performance luxury SUV that combines iconic design with incredible power.",
    additionalInfo: "Experience the perfect blend of luxury and performance with the Mercedes G63 AMG. This powerful SUV combines the legendary G-Class platform with AMG's high-performance engineering, resulting in an unparalleled driving experience.",
    features: [
      "4.0L V8 Biturbo Engine",
      "AMG SPEEDSHIFT TCT 9-Speed Transmission",
      "AMG RIDE CONTROL Suspension",
      "Dual 12.3-inch Widescreen Displays"
    ]
  },
  "mercedes-g63-black-mate": {
    name: "Mercedes G63 Black Mate",
    price: 1050000,
    mileage: 7000,
    description: "The Mercedes G63 Black Mate is a luxurious SUV that combines powerful performance with a sleek matte black finish.",
    additionalInfo: "Make a bold statement with the Mercedes G63 Black Mate. This striking SUV combines the legendary G-Class capability with a sophisticated matte black exterior, perfect for those who want to stand out from the crowd.",
    features: [
      "4.0L V8 Biturbo Engine",
      "AMG SPEEDSHIFT TCT 9-Speed Transmission",
      "Matte Black Exterior Finish",
      "AMG Performance Exhaust System"
    ]
  },
  "mercedes-g63-brabus-700": {
    name: "Mercedes G63 Brabus 700",
    price: 1300000,
    mileage: 5000,
    description: "The Mercedes G63 Brabus 700 is a high-performance luxury SUV that takes the G-Class to new heights.",
    additionalInfo: "Experience the ultimate G-Class with the Mercedes G63 Brabus 700. This exclusive creation combines the iconic G63 AMG with Brabus' performance upgrades and exquisite customization, resulting in a truly extraordinary vehicle.",
    features: [
      "4.0L V8 Biturbo Engine (Upgraded to 700 HP)",
      "Brabus ROCKET 900 Body Kit",
      "Brabus Monoblock Wheels",
      "Brabus Fine Leather Interior"
    ]
  },
  "mercedes-g63-white-color": {
    name: "Mercedes G63 White Color",
    price: 1000000,
    mileage: 9000,
    description: "The Mercedes G63 in White is a luxurious SUV that combines powerful performance with a classic white exterior.",
    additionalInfo: "Make a statement with the Mercedes G63 in White. This elegant SUV combines the legendary G-Class capability with a timeless white exterior, perfect for those who appreciate classic luxury.",
    features: [
      "4.0L V8 Biturbo Engine",
      "AMG SPEEDSHIFT TCT 9-Speed Transmission",
      "Classic White Exterior",
      "AMG Performance Exhaust System"
    ]
  },
  "mercedes-g500": {
    name: "Mercedes G500",
    price: 900000,
    mileage: 12000,
    description: "The Mercedes G500 is a versatile luxury SUV that offers a perfect balance of comfort and capability.",
    additionalInfo: "Experience the legendary G-Class with the Mercedes G500. This capable SUV combines luxurious comfort with impressive off-road ability, making it the perfect choice for adventurers who refuse to compromise on luxury.",
    features: [
      "4.0L V8 Biturbo Engine",
      "9G-TRONIC Automatic Transmission",
      "DYNAMIC SELECT Driving Modes",
      "Permanent All-Wheel Drive"
    ]
  },
  "mercedes-maybach-1-of-150": {
    name: "Mercedes Maybach 1 of 150",
    price: 2200000,
    mileage: 1000,
    description: "The Mercedes Maybach 1 of 150 is an ultra-exclusive luxury sedan that represents the pinnacle of Mercedes-Benz craftsmanship.",
    additionalInfo: "Indulge in the ultimate luxury experience with the Mercedes Maybach 1 of 150. This rare and exclusive sedan is one of only 150 produced, offering unparalleled opulence and bespoke craftsmanship.",
    features: [
      "6.0L V12 Biturbo Engine",
      "Magic Body Control Suspension",
      "Executive Rear Seats",
      "Burmester High-End 3D Surround Sound System"
    ]
  },
  "mercedes-maybach-edition-100": {
    name: "Mercedes Maybach Edition 100",
    price: 2300000,
    mileage: 500,
    description: "The Mercedes Maybach Edition 100 is a centenary celebration model that showcases the very best of Maybach luxury.",
    additionalInfo: "Celebrate a century of automotive excellence with the Mercedes Maybach Edition 100. This special edition model combines cutting-edge technology with timeless luxury, offering a truly unique driving experience.",
    features: [
      "6.0L V12 Biturbo Engine",
      "Bespoke Edition 100 Exterior",
      "Hand-Crafted Interior",
      "Exclusive Edition 100 Accessories"
    ]
  },
  "mercedes-maybach-new-black": {
    name: "Mercedes Maybach New Black",
    price: 2000000,
    mileage: 2000,
    description: "The Mercedes Maybach New Black is a sophisticated luxury sedan that combines elegance with cutting-edge technology.",
    additionalInfo: "Experience the epitome of luxury with the Mercedes Maybach New Black. This elegant sedan offers unparalleled comfort and advanced technology, all wrapped in a sleek black exterior.",
    features: [
      "4.0L V8 Biturbo Engine",
      "9G-TRONIC Automatic Transmission",
      "Executive Rear Seats",
      "MBUX High-End Rear Seat Entertainment"
    ]
  },
  "mercedes-s-maybach-62-150": {
    name: "Mercedes S Maybach 62/150",
    price: 2100000,
    mileage: 3000,
    description: "The Mercedes S Maybach 62/150 is an ultra-luxurious limousine that offers unparalleled space and comfort.",
    additionalInfo: "Indulge in the ultimate luxury experience with the Mercedes S Maybach 62/150. This extended wheelbase limousine offers exceptional rear-seat comfort and advanced technology, perfect for those who demand the very best.",
    features: [
      "6.0L V12 Biturbo Engine",
      "Magic Body Control Suspension",
      "Executive Rear Seats with Reclining Function",
      "Burmester High-End 3D Surround Sound System"
    ]
  },
  "mercedes-s63-amg": {
    name: "Mercedes S63 AMG",
    price: 1100000,
    mileage: 8000,
    description: "The Mercedes S63 AMG is a high-performance luxury sedan that combines comfort with incredible power.",
    additionalInfo: "Experience the perfect blend of luxury and performance with the Mercedes S63 AMG. This powerful sedan offers exceptional comfort and advanced technology, all while delivering breathtaking acceleration and handling.",
    features: [
      "4.0L V8 Biturbo Engine",
      "AMG SPEEDSHIFT MCT 9-Speed Transmission",
      "AMG RIDE CONTROL+ Suspension",
      "AMG High-Performance Composite Braking System"
    ]
  },
  "mercedes-s580-brabus-kit": {
    name: "Mercedes S580 Brabus Kit",
    price: 1300000,
    mileage: 5000,
    description: "The Mercedes S580 Brabus Kit is a luxurious sedan enhanced with Brabus' performance and styling upgrades.",
    additionalInfo: "Elevate your driving experience with the Mercedes S580 Brabus Kit. This exclusive creation combines the luxury of the S-Class with Brabus' performance upgrades and exquisite customization, resulting in a truly extraordinary vehicle.",
    features: [
      "4.0L V8 Biturbo Engine (Brabus Tuned)",
      "Brabus Aerodynamic Enhancement Kit",
      "Brabus Monoblock Wheels",
      "Brabus Fine Leather Interior"
    ]
  },
  "mercedes-sl63": {
    name: "Mercedes SL63",
    price: 1000000,
    mileage: 6000,
    description: "The Mercedes SL63 is a high-performance roadster that offers open-top thrills with AMG power.",
    additionalInfo: "Experience the perfect blend of luxury and performance with the Mercedes SL63. This powerful roadster combines exhilarating open-top driving with AMG's high-performance engineering, delivering an unforgettable driving experience.",
    features: [
      "4.0L V8 Biturbo Engine",
      "AMG SPEEDSHIFT MCT 9-Speed Transmission",
      "AMG RIDE CONTROL Suspension",
      "AMG High-Performance Composite Braking System"
    ]
  },
  "mercedes-v-class": {
    name: "Mercedes V-Class",
    price: 700000,
    mileage: 15000,
    description: "The Mercedes V-Class is a luxurious multi-purpose vehicle that offers exceptional space and versatility.",
    additionalInfo: "Experience first-class travel for the whole family with the Mercedes V-Class. This versatile vehicle combines the luxury of a Mercedes-Benz with the practicality of a spacious interior, making it perfect for both business and leisure.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "9G-TRONIC Automatic Transmission",
      "AGILITY CONTROL Suspension",
      "Flexible Seating Configurations"
    ]
  },
  "mini-cooper-jcw-gp-2020": {
    name: "Mini Cooper JCW GP 2020",
    price: 250000,
    mileage: 5000,
    description: "The Mini Cooper JCW GP 2020 is a limited-edition, high-performance version of the iconic Mini.",
    additionalInfo: "Experience the most extreme Mini ever produced with the JCW GP 2020. This track-focused hot hatch combines lightweight construction with potent performance, delivering an exhilarating driving experience.",
    features: [
      "2.0L Turbocharged 4-Cylinder Engine",
      "8-Speed Automatic Transmission",
      "GP-Specific Suspension",
      "Carbon Fiber Reinforced Plastic Wheel Arches"
    ]
  },
  "porsche-911-stinger-gtr-limited-1-7": {
    name: "Porsche 911 Stinger GTR Limited 1/7",
    price: 1800000,
    mileage: 1000,
    description: "The Porsche 911 Stinger GTR Limited 1/7 is an ultra-rare, bespoke creation based on the iconic 911.",
    additionalInfo: "Own a piece of automotive art with the Porsche 911 Stinger GTR Limited 1/7. This exclusive creation combines the legendary performance of the 911 with unique styling and extreme rarity, making it a true collector's item.",
    features: [
      "3.8L Twin-Turbo Flat-6 Engine",
      "7-Speed PDK Transmission",
      "Bespoke Stinger GTR Body Kit",
      "Limited Edition (1 of 7 produced)"
    ]
  },
  "porsche-911-targa-4-stinger-topcar": {
    name: "Porsche 911 Targa 4 Stinger Topcar",
    price: 1600000,
    mileage: 2000,
    description: "The Porsche 911 Targa 4 Stinger Topcar is a bespoke creation that combines open-top driving with unique customization.",
    additionalInfo: "Experience the thrill of open-top motoring with a twist in the Porsche 911 Targa 4 Stinger Topcar. This exclusive creation combines the classic Targa design with Topcar's exquisite customization, resulting in a truly unique driving experience.",
    features: [
      "3.0L Twin-Turbo Flat-6 Engine",
      "8-Speed PDK Transmission",
      "Bespoke Stinger Body Kit",
      "Custom Topcar Interior"
    ]
  },
  "porsche-911-targa-techart": {
    name: "Porsche 911 Targa Techart",
    price: 1500000,
    mileage: 3000,
    description: "The Porsche 911 Targa Techart is a customized version of the iconic 911 Targa, offering enhanced performance and styling.",
    additionalInfo: "Elevate your Porsche experience with the 911 Targa Techart. This bespoke creation combines the classic Targa design with Techart's performance upgrades and styling enhancements, delivering a truly unique driving experience.",
    features: [
      "3.0L Twin-Turbo Flat-6 Engine (Techart Tuned)",
      "Techart Aerodynamic Package",
      "Techart Sport Springs",
      "Techart Formula V Forged Wheels"
    ]
  },
  "porsche-911-turbo-s-cabrio": {
    name: "Porsche 911 Turbo S Cabrio",
    price: 1700000,
    mileage: 4000,
    description: "The Porsche 911 Turbo S Cabrio is a high-performance convertible that offers breathtaking speed and open-top thrills.",
    additionalInfo: "Experience the ultimate open-top driving machine with the Porsche 911 Turbo S Cabrio. This powerful convertible combines exhilarating performance with the joy of top-down motoring, delivering an unforgettable driving experience.",
    features: [
      "3.8L Twin-Turbo Flat-6 Engine",
      "8-Speed PDK Transmission",
      "Porsche Traction Management (PTM) All-Wheel Drive",
      "Porsche Active Aerodynamics (PAA)"
    ]
  },
  "porsche-boxster-gts": {
    name: "Porsche Boxster GTS",
    price: 900000,
    mileage: 8000,
    description: "The Porsche Boxster GTS is a high-performance convertible that offers exceptional handling and open-top thrills.",
    additionalInfo: "Experience the joy of open-top motoring with the Porsche Boxster GTS. This nimble roadster combines Porsche's legendary handling with exhilarating performance, delivering a pure and engaging driving experience.",
    features: [
      "4.0L Flat-6 Engine",
      "6-Speed Manual or 7-Speed PDK Transmission",
      "Porsche Active Suspension Management (PASM)",
      "Sport Chrono Package"
    ]
  },
  "porsche-cayenne-s": {
    name: "Porsche Cayenne S",
    price: 800000,
    mileage: 10000,
    description: "The Porsche Cayenne S is a luxury SUV that combines sporty performance with practical versatility.",
    additionalInfo: "Experience the perfect blend of performance and practicality with the Porsche Cayenne S. This versatile SUV offers impressive on-road dynamics and off-road capability, all wrapped in a luxurious package.",
    features: [
      "2.9L Twin-Turbo V6 Engine",
      "8-Speed Tiptronic S Transmission",
      "Porsche Active Suspension Management (PASM)",
      "Porsche 4D Chassis Control"
    ]
  },
  "porsche-panamera-gts": {
    name: "Porsche Panamera GTS",
    price: 1000000,
    mileage: 7000,
    description: "The Porsche Panamera GTS is a high-performance luxury sedan that offers a perfect balance of comfort and sportiness.",
    additionalInfo: "Experience the best of both worlds with the Porsche Panamera GTS. This versatile sedan combines the comfort of a luxury car with the performance of a sports car, making it the ideal choice for those who refuse to compromise.",
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "8-Speed PDK Transmission",
      "Adaptive Air Suspension",
      "Sport Chrono Package"
    ]
  },
  "range-rover-vogue": {
    name: "Range Rover Vogue",
    price: 700000,
    mileage: 15000,
    description: "The Range Rover Vogue is a luxurious SUV that offers unparalleled comfort and capability.",
    additionalInfo: "Experience the pinnacle of luxury SUVs with the Range Rover Vogue. This exceptional vehicle combines opulent comfort with impressive off-road capability, making it the perfect choice for those who demand the very best.",
    features: [
      "3.0L Inline-6 Mild Hybrid Engine",
      "8-Speed Automatic Transmission",
      "Electronic Air Suspension",
      "Terrain Response 2 System"
    ]
  },
  "rolls-royce-dawn-mansory": {
    name: "Rolls Royce Dawn Mansory",
    price: 2200000,
    mileage: 3000,
    description: "The Rolls Royce Dawn Mansory is a bespoke luxury convertible that combines open-top elegance with extreme customization.",
    additionalInfo: "Indulge in the ultimate open-top luxury experience with the Rolls Royce Dawn Mansory. This exclusive creation combines the elegance of the Dawn with Mansory's exquisite craftsmanship, resulting in a truly unique automotive masterpiece.",
    features: [
      "6.6L V12 Twin-Turbo Engine (Mansory Tuned)",
      "Bespoke Mansory Exterior",
      "Custom Mansory Interior",
      "Mansory Forged Alloy Wheels"
    ]
  },
  "rolls-royce-ghost-white-orange": {
    name: "Rolls Royce Ghost White/Orange",
    price: 1900000,
    mileage: 4000,
    description: "The Rolls Royce Ghost in White and Orange is a luxurious sedan that offers a unique and striking color combination.",
    additionalInfo: "Make a bold statement with the Rolls Royce Ghost in White and Orange. This elegant sedan combines Rolls Royce's legendary comfort and craftsmanship with a distinctive two-tone exterior, perfect for those who want to stand out from the crowd.",
    features: [
      "6.75L V12 Twin-Turbo Engine",
      "Satellite Aided Transmission",
      "Planar Suspension System",
      "Bespoke White and Orange Exterior"
    ]
  },
  "rolls-royce-spectre": {
    name: "Rolls Royce Spectre",
    price: 2500000,
    mileage: 1000,
    description: "The Rolls Royce Spectre is the brand's first all-electric ultra-luxury car, offering silent and sustainable opulence.",
    additionalInfo: "Experience the future of ultra-luxury with the Rolls Royce Spectre. This groundbreaking electric vehicle combines Rolls Royce's legendary comfort and craftsmanship with cutting-edge electric technology, delivering a truly unique driving experience.",
    features: [
      "Dual Electric Motor Powertrain",
      "Advanced Battery Technology",
      "Planar Suspension System",
      "Bespoke Silent Serenity Sound Insulation"
    ]
  },
  "rolls-royce-spectre-full-options": {
    name: "Rolls Royce Spectre Full Options",
    price: 2700000,
    mileage: 500,
    description: "The Rolls Royce Spectre Full Options is the ultimate expression of electric luxury, featuring every available option and bespoke feature.",
    additionalInfo: "Indulge in the pinnacle of electric luxury with the Rolls Royce Spectre Full Options. This exceptional vehicle includes every available option and bespoke feature, offering an unparalleled level of customization and opulence.",
    features: [
      "Dual Electric Motor Powertrain",
      "Extended Range Battery Pack",
      "Bespoke Interior Configuration",
      "Starlight Headliner with Shooting Star Feature"
    ]
  },
  "rolls-royce-cullinan": {
    name: "Rolls Royce Cullinan",
    price: 2300000,
    mileage: 4000,
    description: "The Rolls Royce Cullinan is the brand's first all-terrain SUV, offering unparalleled luxury in any environment.",
    additionalInfo: "Experience luxury without limits with the Rolls Royce Cullinan. This exceptional SUV combines Rolls Royce's renowned comfort and craftsmanship with impressive all-terrain capability, making it the perfect choice for adventurous luxury seekers.",
    features: [
      "6.75L V12 Engine",
      "All-Wheel Drive",
      "Magic Carpet Ride Air Suspension",
      "Viewing Suite"
    ]
  },
  "rolls-royce-dawn-black-badge": {
    name: "Rolls Royce Dawn Black Badge",
    price: 2100000,
    mileage: 3500,
    description: "The Rolls Royce Dawn Black Badge is a darker, more assertive take on the luxurious Dawn convertible.",
    additionalInfo: "Experience a more dynamic side of luxury with the Rolls Royce Dawn Black Badge. This powerful convertible combines the open-top elegance of the Dawn with enhanced performance and a more assertive aesthetic.",
    features: [
      "6.6L V12 Engine (Uprated)",
      "Black Badge Aesthetic Package",
      "Bespoke Interior with Technical Fiber",
      "Darkened Spirit of Ecstasy"
    ]
  },
  "rolls-royce-ghost": {
    name: "Rolls Royce Ghost",
    price: 2000000,
    mileage: 3000,
    description: "The Rolls Royce Ghost is a luxury sedan that offers effortless performance and cutting-edge technology.",
    additionalInfo: "Experience the perfect blend of luxury and technology with the Rolls Royce Ghost. This sophisticated sedan combines powerful performance with advanced features, providing an unparalleled driving experience.",
    features: [
      "6.75L V12 Engine",
      "Satellite Aided Transmission",
      "Planar Suspension System",
      "Illuminated Fascia"
    ]
  },
  "tesla-model-3-performance": {
    name: "Tesla Model 3 Performance",
    price: 400000,
    mileage: 5000,
    description: "The Tesla Model 3 Performance is an all-electric sedan that offers exhilarating acceleration and advanced technology.",
    additionalInfo: "Experience the future of performance with the Tesla Model 3 Performance. This cutting-edge electric vehicle combines breathtaking acceleration with long-range capability and advanced autonomous features.",
    features: [
      "Dual Motor All-Wheel Drive",
      "Performance Upgrade Package",
      "Full Self-Driving Capability",
      "Premium Interior"
    ]
  }
};



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

