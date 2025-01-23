"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Car, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#9b8b6f]/20 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 ml-4">
          <Image
            src="/an-illustration-of-a-large-golden-olb-te_lJOcQSzsQr-1HLXegteuWA_DyoTyHT9RuaAo3wkMfetYQ.png"
            alt="OLB Motors Logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/vehicles" className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors">
            Vehicles
          </Link>
          <Link href="/about" className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors">
            About Us
          </Link>
          <Link href="/help" className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors">
            Help
          </Link>
          <Link href="/contact" className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors">
            Contact
          </Link>
          <Link href="/work-with-us" className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors">
            Work with Us
          </Link>
          <Link href="/sell">
            <Button variant="outline" className="border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10">
              <Car className="mr-2 h-4 w-4" />
              Sell Your Vehicle
            </Button>
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" aria-label="Open Menu">
              <Menu className="h-6 w-6 text-[#9b8b6f]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-zinc-900/95 border-[#9b8b6f]/20">
            <nav className="flex flex-col space-y-6 mt-8">
              <Link
                href="/vehicles"
                className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
                onClick={closeSheet}
              >
                Vehicles
              </Link>
              <Link
                href="/about"
                className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
                onClick={closeSheet}
              >
                About Us
              </Link>
              <Link href="/help" className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors" onClick={closeSheet}>
                Help
              </Link>
              <Link
                href="/contact"
                className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
                onClick={closeSheet}
              >
                Contact
              </Link>
              <Link
                href="/work-with-us"
                className="text-[#9b8b6f] hover:text-[#c4af8d] transition-colors"
                onClick={closeSheet}
              >
                Work with Us
              </Link>
              <Link href="/sell" onClick={closeSheet}>
                <Button variant="outline" className="w-full border-[#9b8b6f] text-[#9b8b6f] hover:bg-[#9b8b6f]/10">
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

