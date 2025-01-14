import { Playfair_Display } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
