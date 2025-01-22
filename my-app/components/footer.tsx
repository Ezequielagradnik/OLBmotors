import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-[#9b8b6f]">
              OLB Motors
            </Link>
            <p className="mt-4 text-gray-400">Redefining luxury vehicle sales and services in Dubai.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#9b8b6f] mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/vehicles" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                Vehicles
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                About Us
              </Link>
              <Link href="/help" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                Help
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#9b8b6f] mb-4">Contact Us</h3>
            <p className="text-gray-400">Phone: +971 58 586 7713</p>
            <p className="text-gray-400">Email: info@olbmotors.com</p>
            <p className="text-gray-400">Instagram: @olb_motors</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OLB Motors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

