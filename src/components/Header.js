'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            PureFlow<span className="text-accent"> Air</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-accent transition">Home</Link>
            <Link href="/about" className="text-white hover:text-accent transition">About</Link>
            <Link href="/services" className="text-white hover:text-accent transition">Services</Link>
            <Link href="/contact" className="text-white hover:text-accent transition">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <Link href="/" className="block text-white hover:text-accent transition">Home</Link>
            <Link href="/about" className="block text-white hover:text-accent transition">About</Link>
            <Link href="/services" className="block text-white hover:text-accent transition">Services</Link>
            <Link href="/contact" className="block text-white hover:text-accent transition">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}