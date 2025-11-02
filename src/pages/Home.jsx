import { Link } from 'react-router-dom'
import headshot from '../assets/headshot.jpeg'

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Headshot */}
            <div className="flex justify-center md:justify-start">
              <img
                src={headshot}
                alt="Faith Ojeiku"
                className="w-96 h-96 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <h1 className="font-bold text-6xl md:text-7xl text-black">
                Hello.
              </h1>

              <p className="text-2xl text-black">
                I'm Faith Ojeiku, a Product Manager currently based in Calgary.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I build digital products that solve real problems and scale with purpose. With more than 18 years of experience, I've led teams that turn ideas into market-ready solutions, helping organizations deliver measurable growth, customer satisfaction, and operational efficiency.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My background spans finance, technology, and operations, but my approach fits any industry: listen, simplify, and execute with clarity.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#resume"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
                <a
                  href="#work"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                  Projects
                </a>
                <a
                  href="mailto:faithojeiku@gmail.com"
                  className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                  Contact
                </a>
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
              I'm a product leader with deep roots in finance and technology. I've built and scaled fintech products reaching 10 million + users across Africa, blending technical depth, financial acumen, and human-centered design.
            </p>
          </div>

          {/* Four Highlight Tiles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Technical Depth</h3>
              <p className="text-gray-600 text-sm">Collaborating with engineering on architecture and system trade-offs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Financial Acumen</h3>
              <p className="text-gray-600 text-sm">Bridging product vision with P&L ownership</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Strategic Vision</h3>
              <p className="text-gray-600 text-sm">Translating opportunities into successful products</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
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
              {['Credit Direct', 'Bankly', 'weKurnect', 'Transsnet', 'One Finance'].map((company, index) => (
                <div key={index} className="bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
                  <span className="font-medium text-black">{company}</span>
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
    </div>
  )
}

export default Home
