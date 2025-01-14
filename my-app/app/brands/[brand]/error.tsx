'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BrandError() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-[#9b8b6f]">Error</span> Loading Brand
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          There was a problem loading this brand information.
        </p>
        <Link href="/vehicles">
          <Button className="bg-[#9b8b6f] text-black hover:bg-[#c4af8d]">
            View All Vehicles
          </Button>
        </Link>
      </div>
    </div>
  )
}

