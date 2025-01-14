"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Car, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#9b8b6f]/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6BpLDi47ICsiDrTQ8RvdTXveMUSkN.png" 
            alt="OLB Motors Logo" 
            width={140} 
            height={60}
            className="rounded brightness-150 contrast-125"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/vehicles" 
            className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
          >
            Vehicles
          </Link>
          <Link 
            href="/about" 
            className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
          >
            About Us
          </Link>
          <Link href="/sell">
            <Button 
              variant="outline" 
              className="border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10"
            >
              <Car className="mr-2 h-4 w-4" />
              Sell Your Vehicle
            </Button>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" aria-label="Open Menu">
              <Menu className="h-6 w-6 text-[#9b8b6f]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black/95 border-[#9b8b6f]/20">
            <nav className="flex flex-col space-y-6 mt-8">
              <Link 
                href="/vehicles" 
                className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
              >
                Vehicles
              </Link>
              <Link 
                href="/about" 
                className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
              >
                About Us
              </Link>
              <Link href="/sell">
                <Button 
                  variant="outline" 
                  className="w-full border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10"
                >
                  <Car className="mr-2 h-4 w-4" />
                  Sell Your Vehicle
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

