import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-black font-bold text-2xl">
            Faith Ojeiku
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
              About Me
            </Link>
            <a href="#how-i-work" className="text-gray-700 hover:text-black transition-colors font-medium">
              How I Work
            </a>
            <a href="#my-work" className="text-gray-700 hover:text-black transition-colors font-medium">
              My Work
            </a>
            <a href="#beyond" className="text-gray-700 hover:text-black transition-colors font-medium">
              Beyond the Build
            </a>
            <a href="#resume" className="text-gray-700 hover:text-black transition-colors font-medium">
              Resume
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
