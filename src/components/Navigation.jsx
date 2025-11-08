import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)

  const handleCaseStudyClick = () => {
    setIsCaseStudiesOpen(false)
  }

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
            <Link to="/resume" className="text-gray-700 hover:text-black transition-colors font-medium">
              Resume
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                className="text-gray-700 hover:text-black transition-colors font-medium flex items-center gap-1"
              >
                Case Studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCaseStudiesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px]">
                  <Link to="/case-study/customer-development" onClick={handleCaseStudyClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Customer Development</Link>
                  <Link to="/case-study/product-definition" onClick={handleCaseStudyClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Product Definition</Link>
                  <Link to="/case-study/design-development" onClick={handleCaseStudyClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Design & Development</Link>
                  <Link to="/case-study/business-financials" onClick={handleCaseStudyClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Business & Financials</Link>
                </div>
              )}
            </div>
            <Link to="/results-impact" className="text-gray-700 hover:text-black transition-colors font-medium">
              Results & Impact
            </Link>
            <a
              href="https://www.linkedin.com/in/faithojeiku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
