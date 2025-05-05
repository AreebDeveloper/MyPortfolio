"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import CV from './CV.pdf'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gray-900">
            Areeb
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href={CV}
              download
              className="text-sm font-medium text-white bg-gray-900 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center"
            >
              Download CV
            </a>
          </div>


          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
