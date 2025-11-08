import { Link } from 'react-router-dom'

function ResultsImpact() {
  // Performance metrics data
  const performanceMetrics = [
    {
      metric: 'Approval Time',
      before: '~2 hours',
      after: '>3 minutes',
      icon: '⏱️',
      color: 'bg-[#4dd0e1]'
    },
    {
      metric: 'Form Abandonment',
      before: '52%',
      after: '12%',
      icon: '📋',
      color: 'bg-[#3b82f6]'
    },
    {
      metric: 'Net Promoter Score',
      before: '+14',
      after: '+32',
      icon: '😊',
      color: 'bg-[#4dd0e1]'
    },
    {
      metric: 'Monthly GMV',
      before: '$8.3K',
      after: '$625K',
      icon: '🛒',
      color: 'bg-[#1E3A8A]'
    },
    {
      metric: 'Fraud Rate',
      before: '+8.2%',
      after: '<2%',
      icon: '🛡️',
      color: 'bg-[#FDBE34]'
    }
  ]

  // Impact drivers data
  const impactDrivers = [
    {
      driver: 'Checkout Funnel Optimization',
      action: 'Reduced BVN field confusion, optimized OTP flow',
      outcome: '-40% form abandonment, +18 NPS',
      icon: '🔄'
    },
    {
      driver: 'Merchant Co-Marketing',
      action: 'Trained POS staff, deployed in-store signage',
      outcome: '15% sales uplift at SLOT Nigeria',
      icon: '🏪'
    },
    {
      driver: 'BVN-Powered Decisioning',
      action: 'Automated bank statement retrieval & scoring',
      outcome: 'Sub-3-minute approvals at scale',
      icon: '🤖'
    },
    {
      driver: 'Geographic Expansion Strategy',
      action: 'Pilot-first rollout, data-driven city selection',
      outcome: '1 city → 10+ cities in 18 months',
      icon: '📍'
    }
  ]

  return (
    <div className="bg-[#f0fdf4]">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]">
        <div className="max-w-6xl mx-auto text-white">
          <Link to="/" className="inline-flex items-center text-white hover:opacity-80 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-bold text-4xl md:text-5xl mb-3">Results & Impact</h1>
          <div className="w-24 h-1 bg-[#4dd0e1] mb-4"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            From Product Launch to Market Transformation
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl text-black mb-6">From Launch to Measurable Impact</h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              CDL Checkout was built to solve a clear gap: affordable, instant, and trusted access to credit at the point of purchase.
            </p>
            <p className="text-lg leading-relaxed">
              In less than two years, it evolved from a pilot in Lagos to a nationally scaled BNPL platform active across 10+ cities.
            </p>
            <p className="text-lg leading-relaxed">
              By focusing on transparency, merchant alignment, and product simplicity, we transformed not just user experience, but merchant economics and customer trust.
            </p>
          </div>
        </div>
      </section>

      {/* Artifact 5.1 - Performance Dashboard */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-bold text-3xl text-black mb-3">Performance Dashboard</h2>
            <p className="text-gray-600 text-lg">
              CDL Checkout's rollout drove measurable improvements across every key metric: speed, conversion, satisfaction, and operational efficiency.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              All USD conversions approximate (₦1,200 ≈ $1 USD). Figures adjusted for FX volatility.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {performanceMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className={`text-4xl mb-3 ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-sm text-center text-gray-800 mb-4">{item.metric}</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <p className="text-lg font-semibold text-gray-400">{item.before}</p>
                  </div>
                  <div className="text-center border-t pt-3">
                    <p className="text-xs text-[#1E3A8A] mb-1">After</p>
                    <p className="text-xl font-bold text-[#1E3A8A]">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Driving measurable results through data and design.
          </p>
        </div>
      </section>

      {/* Artifact 5.2 - Testimonials */}
      <section className="py-16 px-6 bg-[#4dd0e1] bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-bold text-3xl text-black mb-3">Customer & Merchant Testimonial Snapshot</h2>
            <p className="text-gray-700 text-lg">
              CDL Checkout's impact extended beyond data; it reshaped how merchants and consumers perceived credit. The feedback highlighted our success in designing for trust, speed, and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Merchant Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute top-4 right-4 text-[#3b82f6] text-5xl opacity-20">"</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  🏢
                </div>
                <div>
                  <p className="font-bold text-gray-800">Merchant Perspective</p>
                  <p className="text-sm text-gray-500">SLOT Nigeria</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "We saw a 15% increase in sales within months of integrating CDL Checkout. Customers loved how seamless and transparent the financing felt."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                — Head of Retail, SLOT Nigeria
              </p>
            </div>

            {/* Customer Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute top-4 right-4 text-[#4dd0e1] text-5xl opacity-20">"</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#4dd0e1] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  👤
                </div>
                <div>
                  <p className="font-bold text-gray-800">Customer Perspective</p>
                  <p className="text-sm text-gray-500">CDL Checkout User</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "It was my first time buying on credit, and it was stress-free. I got approved in under a minute and the repayment reminders helped me stay on track."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                — Chioma, CDL Checkout User
              </p>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-8 italic font-medium">
            Empowering merchants and customers through trust and transparency.
          </p>
        </div>
      </section>

      {/* Artifact 5.3 - Product Impact Map */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-bold text-3xl text-black mb-3">Product Impact Map</h2>
            <p className="text-gray-700 text-lg">
              CDL Checkout created a connected ecosystem of value where every stakeholder benefited.
            </p>
          </div>

          <div className="relative">
            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Consumers */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#4dd0e1] text-white rounded-lg p-6 text-center shadow-lg">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="font-bold text-xl mb-3">Consumers</h3>
                  <p className="text-sm leading-relaxed">
                    Gained flexible, low-interest access to essential goods.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-[#1E3A8A] text-4xl">→</div>

              {/* Merchants */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#3b82f6] text-white rounded-lg p-6 text-center shadow-lg">
                  <div className="text-5xl mb-4">🏪</div>
                  <h3 className="font-bold text-xl mb-3">Merchants</h3>
                  <p className="text-sm leading-relaxed">
                    Grew revenue and conversion rates with no default risk.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-[#1E3A8A] text-4xl">→</div>

              {/* Business Impact */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#1E3A8A] text-white rounded-lg p-6 text-center shadow-lg">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="font-bold text-xl mb-3">Business Impact</h3>
                  <p className="text-sm leading-relaxed">
                    Built a scalable BNPL infrastructure that became the foundation for future embedded finance products.
                  </p>
                </div>
              </div>
            </div>

            {/* Circular Flow Indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-[#4dd0e1] bg-opacity-30 px-6 py-3 rounded-full">
                <span className="text-2xl">🔄</span>
                <span className="font-semibold text-gray-700">Circular Value Flow</span>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Designing for shared success across the ecosystem.
          </p>
        </div>
      </section>

      {/* Artifact 5.4 - Impact Insights */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-bold text-3xl text-black mb-3">Impact Insight: What Drove the Results</h2>
            <p className="text-gray-700 text-lg">
              Success wasn't accidental; it was the product of focused experimentation and data discipline.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 bg-[#1E3A8A] text-white font-bold text-sm p-4">
              <div className="px-4">Driver</div>
              <div className="px-4">Key Action</div>
              <div className="px-4">Outcome</div>
            </div>
            {impactDrivers.map((item, index) => (
              <div key={index} className={`grid md:grid-cols-3 p-4 border-b ${index % 2 === 0 ? 'bg-[#4dd0e1] bg-opacity-10' : 'bg-white'}`}>
                <div className="px-4 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-800">{item.driver}</span>
                </div>
                <div className="px-4 text-gray-700">{item.action}</div>
                <div className="px-4 font-semibold text-[#1E3A8A]">{item.outcome}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Experimentation and alignment drove sustainable results.
          </p>
        </div>
      </section>

      {/* Reflections & Learnings */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl text-black mb-8 text-center">Reflections & Learnings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-[#3b82f6]">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-[#3b82f6]">Trust scales faster than incentives.</span> Customers repay reliability, not discounts.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-l-4 border-[#4dd0e1]">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-[#1E3A8A]">Merchant-led growth is the most efficient growth model</span> when aligned with partner ROI.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border-l-4 border-[#4dd0e1]">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-[#4dd0e1]">Every UX friction fixed became a revenue gain.</span> Empathy and economics move together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl mb-6">Moving Forward</h2>
          <p className="text-lg leading-relaxed mb-6">
            CDL Checkout proved that inclusion and innovation can coexist at scale.
          </p>
          <p className="text-lg leading-relaxed">
            We didn't just build a BNPL product; we built a bridge between merchants, consumers, and credit access, anchored in trust.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ResultsImpact
