import "../styles/globals.css"
import { Header } from "@/components/header"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OLB Motors',
  description: 'Tu concesionario de confianza',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}