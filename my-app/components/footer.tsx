import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-[#9b8b6f]">
              OLB Motors
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/help" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
              Help
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-[#9b8b6f] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Phone: +971 58 586 7713</p>
          <p>Instagram: @olb_motors</p>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OLB Motors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

