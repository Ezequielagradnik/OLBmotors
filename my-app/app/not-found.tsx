import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-[#9b8b6f]">404</span> - Page Not Found
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="bg-[#9b8b6f] text-black hover:bg-[#c4af8d]">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

