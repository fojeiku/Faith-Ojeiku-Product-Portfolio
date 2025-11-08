import { Link } from 'react-router-dom'
import { useState } from 'react'
import headshot from '../assets/headshot.jpeg'
import marketing1 from '../assets/product-gallery/marketing-1.jpeg'
import marketing2 from '../assets/product-gallery/marketing-2.jpeg'
import screen1 from '../assets/product-gallery/screen-1.jpeg'
import screen2 from '../assets/product-gallery/screen-2.jpeg'
import screen3 from '../assets/product-gallery/screen-3.jpeg'
import screen4 from '../assets/product-gallery/screen-4.jpeg'
import Footer from '../components/Footer'

function Home() {
  const [currentMarketingSlide, setCurrentMarketingSlide] = useState(0)
  const marketingImages = [marketing1, marketing2]
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Headshot */}
            <div className="flex justify-center md:justify-start">
              <img
                src={headshot}
                alt="Faith Ojeiku"
                className="w-[450px] h-[450px] rounded-full shadow-lg object-cover"
              />
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <div>
                <h1 className="font-bold text-5xl md:text-6xl text-black mb-2">
                  Faith Ojeiku
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700">
                  Product Manager | Program Management
                </p>
              </div>

              <h2 className="font-bold text-5xl md:text-6xl text-black pt-4">
                Hello.
              </h2>

              <p className="text-xl text-black leading-relaxed">
                I'm Faith Ojeiku, a Product Manager currently based in Calgary. I build & ship digital products that solve real problems, drive business growth, and scale with purpose.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I partner with engineering and design to transform market complexity into scalable, customer-obsessed products. I've launched and scaled fintech solutions for millions, driving growth through rigorous product strategy and execution.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My background spans finance, technology, and operations, but my approach fits any industry: listen, simplify, and execute with clarity.
              </p>

              <div className="text-gray-700 space-y-1 pt-2">
                <p className="font-medium">Let's connect:</p>
                <p>faithojeiku@gmail.com | +1-403-998-3590 | Canada</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#my-work"
                  className="bg-[#3b82f6] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                  View My Work
                </a>
                <Link
                  to="/resume"
                  className="bg-[#FDBE34] hover:opacity-90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Brief Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl text-black mb-6">About Me</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I'm a product manager with deep roots in finance and technology. I've built and scaled fintech products reaching 10 million + users across Africa, blending technical depth, financial acumen, and human-centered design.
            </p>
          </div>

          {/* Four Highlight Tiles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#3b82f6] shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Technical Depth</h3>
              <p className="text-gray-600 text-sm">Collaborating with engineering on architecture and system trade-offs</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#FDBE34] shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#FDBE34] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Financial Acumen</h3>
              <p className="text-gray-600 text-sm">Bridging product vision with P&L ownership</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#ee6667] shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#ee6667] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Strategic Vision</h3>
              <p className="text-gray-600 text-sm">Translating opportunities into successful products</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#4dd0e1] shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#4dd0e1] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Customer Obsession</h3>
              <p className="text-gray-600 text-sm">Using data to drive product-market fit</p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="bg-black text-white p-10 rounded-lg text-center mb-12">
            <blockquote className="text-2xl md:text-3xl font-medium italic">
              "Listen deeply. Simplify relentlessly. Execute with clarity."
            </blockquote>
          </div>

          {/* Career Timeline */}
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-black mb-8 text-center">Career Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Credit Direct', color: '#3b82f6' },
                { name: 'Bankly', color: '#FDBE34' },
                { name: 'weKurnect', color: '#ee6667' },
                { name: 'Transsnet', color: '#4dd0e1' },
                { name: 'Carbon', color: '#111111' }
              ].map((company, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  style={{ borderLeft: `4px solid ${company.color}` }}
                >
                  <span className="font-medium text-black">{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link to Full About Page */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-black mb-4">Product in Action</h2>
            <div className="w-24 h-1 bg-[#4dd0e1] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Real product, real impact: Nigeria's first merchant-integrated BNPL solution
            </p>

            {/* Confidentiality Disclaimer */}
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-white border-l-4 border-[#3b82f6] p-4 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-600 text-left leading-relaxed">
                    <span className="font-semibold text-gray-800">Note:</span> Due to confidentiality agreements and the sensitivity of proprietary business data, the product screens and marketing materials shown here represent a limited selection of publicly available assets. Detailed analytics, internal documentation, and strategic materials remain confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Campaign Carousel */}
          <div className="mb-16">
            <h3 className="font-bold text-2xl text-black mb-8 text-center">Go-to-Market Strategy</h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={marketingImages[currentMarketingSlide]}
                  alt={`Marketing Campaign ${currentMarketingSlide + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentMarketingSlide((prev) => (prev === 0 ? marketingImages.length - 1 : prev - 1))}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {marketingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMarketingSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentMarketingSlide === index ? 'bg-[#3b82f6] w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentMarketingSlide((prev) => (prev === marketingImages.length - 1 ? 0 : prev + 1))}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Consumer-facing campaigns: Electronics & Fashion verticals
              </p>
            </div>
          </div>

          {/* Product Screens */}
          <div className="mb-8">
            <h3 className="font-bold text-2xl text-black mb-8 text-center">User Experience Flow</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { img: screen1, caption: 'Account Setup' },
                { img: screen2, caption: 'Loan Application' },
                { img: screen3, caption: 'Approval Process' },
                { img: screen4, caption: 'Payment Management' }
              ].map((screen, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Phone Frame Effect */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={screen.img}
                        alt={screen.caption}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-700 mt-4">{screen.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-[#3b82f6] to-[#4dd0e1] p-8 md:p-10 rounded-2xl shadow-xl text-white text-center">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              From Concept to Market Leader
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Launched in 6 months, scaled to 50K applications/month, achieved 300% YoY growth, and became Nigeria's #2 BNPL player
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-black mb-4">Featured Case Study</h2>
            <div className="w-24 h-1 bg-[#ee6667] mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">CDL CHECKOUT (BNPL PRODUCT)</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Launching Nigeria's #2 BNPL Player in 6 Months
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1] p-8 md:p-10 rounded-lg shadow-xl text-white mb-12">
            <p className="text-lg md:text-xl leading-relaxed">
              CDL Checkout was Nigeria's first merchant-integrated Buy Now Pay Later platform, built to close the credit gap for consumers and help merchants grow sales. I led end-to-end strategy, development, research, architecture, feature prioritization, and go-to-market execution.
            </p>
          </div>

          {/* Case Study Journey - 5 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* The Problem */}
            <div className="bg-white border-t-4 border-[#ee6667] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#ee6667] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-black mb-2">The Problem</h4>
              <p className="text-gray-700 text-sm leading-relaxed">60% cart abandonment due to upfront payment barriers.</p>
            </div>

            {/* The Insight */}
            <div className="bg-white border-t-4 border-[#FDBE34] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#FDBE34] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-black mb-2">The Insight</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Consumers wanted flexibility & convenience. Merchants wanted solutions to increase sales.</p>
            </div>

            {/* The Solution */}
            <div className="bg-white border-t-4 border-[#4dd0e1] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#4dd0e1] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-black mb-2">The Solution</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Pay in installments, instant approval &lt; 3 min, instant payment to merchants</p>
            </div>

            {/* My Role */}
            <div className="bg-white border-t-4 border-[#3b82f6] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-black mb-2">My Role</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Vision, research, requirements, UX, launch, P&L management.</p>
            </div>

            {/* Impact */}
            <div className="bg-white border-t-4 border-[#111111] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-black mb-2">Impact</h4>
              <p className="text-gray-700 text-sm leading-relaxed">50K applications/month, 300% YoY growth, +80% fraud reduction.</p>
            </div>
          </div>

          {/* Case Study Navigation */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h4 className="font-bold text-2xl text-black mb-6 text-center">Explore the Full Case Study</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/case-study/customer-development" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-[#3b82f6]">
                <h5 className="font-semibold text-black">Customer Development</h5>
              </Link>
              <a href="#product-definition" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-[#FDBE34]">
                <h5 className="font-semibold text-black">Product Definition</h5>
              </a>
              <a href="#design-development" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-[#4dd0e1]">
                <h5 className="font-semibold text-black">Design & Development</h5>
              </a>
              <a href="#business-financials" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-[#ee6667]">
                <h5 className="font-semibold text-black">Business & Financials</h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="font-bold text-4xl md:text-5xl text-black mb-6">What People Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insights from colleagues and collaborators who've worked with me across different projects and challenges.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Muritala Yusuf */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#3b82f6] hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#3b82f6] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  MY
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Muritala Yusuf</h3>
                  <p className="text-sm text-gray-600 font-medium">Chief Technology Officer at FCMB UK</p>
                  <p className="text-xs text-gray-500">The Wharton School</p>
                  <p className="text-xs text-gray-500 italic mt-1">Collaborated on Platform Infrastructure | 2022-2024</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                "Faith's technical depth is exceptional for a product manager. During our platform scaling, she was able to contribute to the microservices and database optimizations as well as the API design with the same fluency as business strategy. Rather than just handing off requirements, she collaborated on technical decisions, understood tradeoffs and shaped architecture for both current and future scale which quickly earned her the engineering team's trust."
              </blockquote>
              <a
                href="https://www.linkedin.com/in/yusufmd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3b82f6] hover:underline text-sm font-medium"
              >
                View LinkedIn →
              </a>
            </div>

            {/* Nneka Osuizugbe */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#ee6667] hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#ee6667] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  NO
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Nneka Osuizugbe</h3>
                  <p className="text-sm text-gray-600 font-medium">Strategic Finance Leader | FCCA</p>
                  <p className="text-xs text-gray-500">Chartered Certified Accountant | Fintech Expert | Ex-PwC</p>
                  <p className="text-xs text-gray-500 italic mt-1">Worked together on Financial Modeling & Portfolio Analytics | 2020-present</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                "Faith's financial acumen sets her apart from most product managers I've worked with. She doesn't just think about features, she understands unit economics, portfolio performance, and P&L impact at a deep level. When we were building the credit engine, she could discuss NPL projections and capital efficiency with the finance team, then turn around and architect the technical solution with engineering. That cross-functional fluency is rare and incredibly valuable, especially in fintech where every product decision has financial implications."
              </blockquote>
              <a
                href="https://www.linkedin.com/in/nneka-osuizugbe-fcca-88a1122b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ee6667] hover:underline text-sm font-medium"
              >
                View LinkedIn →
              </a>
            </div>

            {/* Folajimi Adeleye */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4dd0e1] hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#4dd0e1] flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                  FA
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Folajimi Adeleye</h3>
                  <p className="text-sm text-gray-600 font-medium">Executive Director at VFD Group</p>
                  <p className="text-xs text-gray-500">Ahmadu Bello University</p>
                  <p className="text-xs text-gray-500 italic mt-1">Collaborated on CDL Checkout Launch | 2014-2017</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                "Faith thinks strategically in a way that's rare for product managers. She doesn't just execute roadmaps; she shapes market strategy. During carbon finance expansion, she identified white space competitors missed, built partnerships that created moats, and positioned us to win enterprise deals. Her ability to see around corners, anticipating competitive moves, regulatory shifts, and market dynamics, made her invaluable at the executive table. She's a strategic thinker who can execute."
              </blockquote>
              <a
                href="https://www.linkedin.com/in/folajimi-adeleye-44058945/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4dd0e1] hover:underline text-sm font-medium"
              >
                View LinkedIn →
              </a>
            </div>

            {/* Bonike Ayanbadejo */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#FDBE34] hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#FDBE34] flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                  BA
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Bonike Ayanbadejo</h3>
                  <p className="text-sm text-gray-600 font-medium">Global People Operations | Strategic HRBP</p>
                  <p className="text-xs text-gray-500">MCIPM, ACIPD | People Manager</p>
                  <p className="text-xs text-gray-500 italic mt-1">Worked together in Credit Direct | 2022-2023</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                "Faith builds high-performing teams that actually enjoy working together, a rare combination. She created psychological safety by enabling an environment where people could disagree constructively, take calculated risks, and learn from failures. Her team had low attrition, less than 0.1% in an industry with 30%+ annual employee turnover. People wanted to work with her because she invested in their growth, gave meaningful autonomy, and celebrated wins publicly. This is hinged on a proven principle that great products come from great teams."
              </blockquote>
              <a
                href="https://www.linkedin.com/in/bonike-ayanbadejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FDBE34] hover:underline text-sm font-medium"
              >
                View LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
