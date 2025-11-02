import headshot from '../assets/headshot.jpeg'

function About() {
  return (
    <div className="bg-gray-50">
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-bold text-5xl md:text-6xl text-black mb-6">About Me</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              I'm a product leader with deep roots in finance and technology. I've built and scaled fintech products reaching 10 million+ users across Africa, blending technical depth, financial acumen, and human-centered design.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Column - Headshot */}
            <div className="flex justify-center">
              <img
                src={headshot}
                alt="Faith Ojeiku"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                I'm a product leader who thrives at the intersection of technology, finance, and emerging markets. With over 15 years of experience, I don't just manage backlogs, I own the business outcomes. My focus is on building products that win markets by delivering undeniable user value and sustainable unit economics.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My career is built on translating ambiguous market opportunities into shippable, successful products. From launching Nigeria's first merchant-integrated BNPL solution to scaling platforms to 10M+ users, I lead cross-functional teams to turn vision into measurable results.
              </p>
            </div>
          </div>

          {/* My Approach to Product */}
          <div className="mb-16 bg-white p-10 rounded-lg">
            <h2 className="font-bold text-3xl text-black mb-8">My Approach to Product</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl text-black mb-3">Strategy with Financial Rigor</h3>
                <p className="text-gray-700">I bridge product vision and P&L ownership. I model unit economics, portfolio performance, and revenue impact to ensure we're building not just a great product, but a great business.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-black mb-3">Technical Partnership</h3>
                <p className="text-gray-700">I collaborate deeply with engineering on architecture and system trade-offs. I speak their language, which accelerates discovery and de-risks delivery.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-black mb-3">Customer-Led Discovery</h3>
                <p className="text-gray-700">I use qualitative and quantitative data to uncover latent needs. My product strategies are grounded in real user behavior, not just assumptions.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-black mb-3">GTM Execution</h3>
                <p className="text-gray-700">I think beyond the launch. I define positioning, pricing, and rollout strategies that ensure product-market fit is achieved and scaled.</p>
              </div>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="mb-16 bg-white p-10 rounded-lg">
            <h2 className="font-bold text-3xl text-black mb-8">Career Highlights</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span>Launched Nigeria's first merchant-integrated BNPL solution, becoming #2 market player within 9 months</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span>Scaled products to 10+ million customers across multiple markets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span>Achieved 300%+ YoY growth through data-driven product strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span>Reduced fraud by 98% through strategic product design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span>Generated $2M+ monthly revenue from product launches</span>
              </li>
            </ul>
          </div>

          {/* Education & Continuous Learning */}
          <div className="bg-white p-10 rounded-lg">
            <h2 className="font-bold text-3xl text-black mb-8">Education & Continuous Learning</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span><strong className="text-black">MBA – Advanced AI & Automation</strong> | Nexford University | 2023</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span><strong className="text-black">Product Management Professional Certificate</strong> | UC San Diego | 2024-2025</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span><strong className="text-black">Oxford Fintech Programme</strong> | Saïd Business School, University of Oxford | 2024</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-black">•</span>
                <span><strong className="text-black">Certified Scrum Product Owner (CSPO)</strong> | Scrum Alliance | 2024-2026</span>
              </div>
            </div>
            <p className="text-gray-700 italic mt-6">
              I stay ahead through continuous learning, formal education, and industry certifications that keep me sharp on emerging trends in AI, automation, and technology innovations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
