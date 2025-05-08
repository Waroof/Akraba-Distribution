"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/AkrabaLogo.png" alt="Akraba Logo" width={32} height={32} className="h-16 w-16 mr-2" />
              <span className="font-bold text-xl text-gray-800">Akraba Distribution</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-800 hover:text-red-700 px-3 py-2 font-medium">
              Home
            </Link>
            <Link href="/#contact" className="text-gray-800 hover:text-red-700 px-3 py-2 font-medium">
              Contact Us
            </Link>
            <Link href="/#about" className="text-gray-800 hover:text-red-700 px-3 py-2 font-medium">
              About Us
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-red-700 px-3 py-2 font-medium">
              FAQ
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 font-medium focus:outline-none transition"
              >
                Become a Customer
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-red-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-300">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="border-t border-gray-200 pt-2">
              <div className="px-3 py-1 text-sm font-medium text-gray-500">Become a Customer</div>
              <Link
                href="/login"
                className="block px-3 py-2 text-gray-800 hover:bg-gray-200 pl-6"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
