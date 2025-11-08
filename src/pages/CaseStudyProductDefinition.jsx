import { Link } from 'react-router-dom'
import CustomerRequirements from '../components/CustomerRequirements'
import EngineeringRequirements from '../components/EngineeringRequirements'
import ProductRoadmap from '../components/ProductRoadmap'
import UserStories from '../components/UserStories'
import RICEPrioritization from '../components/RICEPrioritization'

function CaseStudyProductDefinition() {
  return (
    <div className="bg-[#f0fdf4]">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]">
        <div className="max-w-6xl mx-auto text-white">
          <div className="flex justify-between items-start mb-6">
            <Link to="/" className="inline-flex items-center text-white hover:opacity-80">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <div className="text-right">
              <p className="text-sm mb-2 opacity-90">Other Case Studies</p>
              <div className="flex gap-2">
                <Link to="/case-study/customer-development" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Customer Development
                </Link>
                <Link to="/case-study/design-development" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Design & Development
                </Link>
                <Link to="/case-study/business-financials" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Business & Financials
                </Link>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl mb-3">Product Definition</h1>
          <div className="w-24 h-1 bg-[#F4D58D] mb-4"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            Translating Customer Insights into Engineering Outcomes
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              With a validated understanding of our users, the next critical phase was defining what to build and why. I led the translation of customer pain points into a structured product strategy, making deliberate trade-offs to balance user value, technical feasibility, and business objectives.
            </p>
            <p className="text-lg leading-relaxed">
              My focus was to create a clear, actionable plan that aligned the entire cross-functional team from engineering to go-to-market around a shared vision and measurable outcomes.
            </p>
          </div>

          {/* Key Decisions */}
          <div className="mt-12">
            <h2 className="font-bold text-2xl text-black mb-6">Highlight of Key Decisions</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#3b82f6]">Prioritized speed-to-market over perfection:</span> I de-prioritized a native mobile app in favor of a responsive web dashboard, enabling faster launch and early validation with real users before scaling to native platforms.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-[#F4D58D] p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1E3A8A]">Made a calculated technical bet:</span> I chose BVN verification as the core identity layer, accepting early complexity to unlock sub-3-minute approvals, a decision that became CDL Checkout's defining market differentiator.
                </p>
              </div>
              <div className="bg-cyan-50 border-l-4 border-[#4dd0e1] p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#4dd0e1]">Structured the roadmap for adaptive learning:</span> I designed a 9-month roadmap built around three iterative phases, Foundational MVP, Optimization & Scale, and Growth each engineered to capture learnings, reduce risk, and accelerate delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              The goal in this phase was to take what we learned from customers and turn it into real work, clear features, technical tasks, and delivery plans we could build, test, and improve.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-8 px-6 bg-[#1E3A8A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F4D58D] mb-2">250</div>
              <div className="text-sm text-gray-300">Pilot Merchants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4dd0e1] mb-2">50K</div>
              <div className="text-sm text-gray-300">Applications Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;2%</div>
              <div className="text-sm text-gray-300">Fraud Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Requirements */}
      <CustomerRequirements />

      {/* Engineering Requirements */}
      <EngineeringRequirements />

      {/* Product Roadmap */}
      <ProductRoadmap />

      {/* User Stories */}
      <UserStories />

      {/* RICE Prioritization */}
      <RICEPrioritization />

      {/* Closing Summary */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl mb-4">From Definition to Design</h2>
          <p className="text-lg leading-relaxed mb-6">
            This was the point where everything got real, research stopped being notes on a page and became actual decisions we could build. I translated insights into features the team could execute, aligning on what to build and why it mattered. By the end of this phase, we had clarity, focus, and a direction the team could commit to
          </p>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyProductDefinition
