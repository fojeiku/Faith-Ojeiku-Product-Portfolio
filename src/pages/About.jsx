import headshot from '../assets/headshot.jpeg'

function About() {
  return (
    <div className="bg-[#f0fdf4]">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header with Brand Color Accent */}
          <div className="text-center mb-16">
            <h1 className="font-bold text-5xl md:text-6xl text-black mb-6">About Me</h1>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              I'm a product manager with deep roots in finance and technology. I've built and scaled fintech products reaching 10 million+ users across Africa, blending technical depth, financial acumen, and human-centered design.
            </p>
          </div>

          {/* Main Content - Enhanced Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Headshot with Circular Design */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#3b82f6] via-[#4dd0e1] to-[#FDBE34] rounded-full opacity-20 blur-xl"></div>
                <img
                  src={headshot}
                  alt="Faith Ojeiku"
                  className="relative w-96 h-96 rounded-full shadow-2xl object-cover border-4 border-white"
                />
              </div>
            </div>

            {/* Right Column - Content with Card Style */}
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a product manager who works at the intersection of technology, finance, and emerging markets. With over 15 years of experience, I focus on winning business outcomes and building viable products that deliver value to customers.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My work centers on solving real problems with products that make sense for users and the business. From launching <span className="font-semibold text-[#ee6667]">Nigeria's first merchant-integrated BNPL solution</span> to scaling platforms to <span className="font-semibold text-[#FDBE34]">10M+ users</span>, I've led teams through discovery, delivery, and growth.
              </p>
            </div>
          </div>

          {/* My Approach to Product - Color-Coded Cards */}
          <div className="mb-16">
            <h2 className="font-bold text-4xl text-black mb-2 text-center">My Approach to Product</h2>
            <div className="w-24 h-1 bg-[#ee6667] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FDBE34] hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#FDBE34] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-black mb-3">Strategy with Financial Rigor</h3>
                <p className="text-gray-700 leading-relaxed">I bridge product vision and P&L ownership. I model unit economics, portfolio performance, and revenue impact to ensure we're building not just a great product, but a great business.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#3b82f6] hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#3b82f6] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-black mb-3">Technical Partnership</h3>
                <p className="text-gray-700 leading-relaxed">I collaborate deeply with engineering on architecture and system trade-offs. I speak their language, which accelerates discovery and de-risks delivery.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#4dd0e1] hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#4dd0e1] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-black mb-3">Customer-Led Discovery</h3>
                <p className="text-gray-700 leading-relaxed">I use qualitative and quantitative data to uncover latent needs. My product strategies are grounded in real user behavior, not just assumptions.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ee6667] hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#ee6667] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-black mb-3">GTM Execution</h3>
                <p className="text-gray-700 leading-relaxed">I think beyond the launch. I define positioning, pricing, and rollout strategies that ensure product-market fit is achieved and scaled.</p>
              </div>
            </div>
          </div>

          {/* Career Highlights - Enhanced with Icons */}
          <div className="mb-16">
            <h2 className="font-bold text-4xl text-black mb-2 text-center">Career Highlights</h2>
            <div className="w-24 h-1 bg-[#4dd0e1] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#ee6667] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">Launched Nigeria's first merchant-integrated BNPL solution, becoming <span className="font-semibold text-black">#2 market player within 9 months</span></p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">Scaled products to <span className="font-semibold text-black">10+ million customers</span> across multiple markets</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#FDBE34] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">Achieved <span className="font-semibold text-black">300%+ YoY growth</span> through data-driven product strategy</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#4dd0e1] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">Reduced fraud by <span className="font-semibold text-black">98%</span> through strategic product design</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-[#ee6667] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">Generated <span className="font-semibold text-black">$2M+ monthly revenue</span> from product launches</p>
              </div>
            </div>
          </div>

          {/* Education & Continuous Learning - Enhanced Design */}
          <div>
            <h2 className="font-bold text-4xl text-black mb-2 text-center">Education & Continuous Learning</h2>
            <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1] p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">MBA – Advanced AI & Automation</h3>
                  </div>
                </div>
                <p className="text-sm opacity-90">Nexford University | 2023</p>
              </div>

              <div className="bg-gradient-to-br from-[#ee6667] to-[#FDBE34] p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Product Management Professional Certificate</h3>
                  </div>
                </div>
                <p className="text-sm opacity-90">UC San Diego | 2024-2025</p>
              </div>

              <div className="bg-gradient-to-br from-[#FDBE34] to-[#4dd0e1] p-6 rounded-lg shadow-lg text-black hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Oxford Fintech Programme</h3>
                  </div>
                </div>
                <p className="text-sm opacity-90">Saïd Business School, University of Oxford | 2024</p>
              </div>

              <div className="bg-gradient-to-br from-[#4dd0e1] to-[#3b82f6] p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Certified Scrum Product Owner (CSPO)</h3>
                  </div>
                </div>
                <p className="text-sm opacity-90">Scrum Alliance | 2024-2026</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                I stay ahead through continuous learning, formal education, and industry certifications that keep me sharp on emerging trends in <span className="font-semibold text-[#3b82f6]">AI</span>, <span className="font-semibold text-[#ee6667]">automation</span>, and <span className="font-semibold text-[#4dd0e1]">technology innovations</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
