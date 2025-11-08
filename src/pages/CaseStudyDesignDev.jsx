import { Link } from 'react-router-dom'

function CaseStudyDesignDev() {
  return (
    <div className="bg-[#f0fdf4]">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1]">
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
                <Link to="/case-study/product-definition" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Product Definition
                </Link>
                <Link to="/case-study/business-financials" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Business & Financials
                </Link>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl mb-3">Design & Development</h1>
          <div className="w-24 h-1 bg-[#FDBE34] mb-4"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            From Requirements to Experience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              This phase was about turning specs into simple, trustworthy experiences. I worked closely with design to remove friction, simplify flows, and build confidence. The results were clear, form drop-offs fell 40%, approval time dropped to ~3 mins, and NPS increased by 18 points. The goal was simple: make finance feel human.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-8 px-6 bg-[#1E3A8A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4dd0e1] mb-2">-40%</div>
              <div className="text-sm text-gray-300">Form Abandonment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F4D58D] mb-2">~3 mins</div>
              <div className="text-sm text-gray-300">Approval Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">+18</div>
              <div className="text-sm text-gray-300">NPS Points</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIFACT 3.1: USER FLOW DIAGRAM */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">User Flow Diagram</h2>
          <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              To design for speed and confidence, we mapped the entire BNPL journey from checkout to approval, identifying every potential hesitation point. The flow ensured users could complete applications without uploads, with transparent decision steps and fallback paths for declines.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
            <img
              src="Brand%20Assets/Design%20folder/User%20Flow%20Diagram.png"
              alt="CDL Checkout BNPL User Flow"
              className="w-full h-auto"
            />
          </div>

          <div className="bg-cyan-50 border-l-4 border-[#4dd0e1] p-6 rounded-r-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              End-to-end BNPL checkout → underwriting → repayment flow mapped across merchant systems, scoring engine, and lifecycle operations.
            </p>
          </div>
        </div>
      </section>

      {/* ARTIFACT 3.2: WIREFRAMES & MOCKUPS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Wireframes & Mockups</h2>
          <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              I collaborated closely with UX to bring the user flow into visual form, focusing on clarity, transparency, and reducing friction across the journey. From verification to loan breakdown, the goal was to help users understand what they're getting, what they're paying, and what comes next before committing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* BVN + OTP Validation */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="Brand%20Assets/Design%20folder/BVN%20Validation%20&%20OTP%20verification.png"
                alt="BVN + OTP Validation Screen"
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#1E3A8A] mb-2">BVN + OTP Validation</h3>
                <p className="text-sm text-gray-600">Mid-fidelity mock exploring faster account verification and OTP confirmation to reduce onboarding friction.</p>
              </div>
            </div>

            {/* Loan Calculator / Offer */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="Brand%20Assets/Design%20folder/Calculator%20or%20Loan%20Summary.png"
                alt="Loan Calculator / Offer Screen"
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#1E3A8A] mb-2">Loan Calculator / Offer</h3>
                <p className="text-sm text-gray-600">Mid-fidelity mock showing transparent loan breakdown, helping users understand repayment, interest and product details before acceptance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIFACT 3.3: DESIGN ITERATIONS */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Design Iterations</h2>
          <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              We approached design as an evolving system, not a one-time launch. Each version was treated as a hypothesis to validate through user testing and behavioral analytics. By analyzing drop-offs and in-app events, we uncovered friction points and designed targeted experiments that directly improved conversion and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Iteration 1: BVN Field Confusion */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-[#3b82f6] to-[#4dd0e1] text-white px-4 py-2 rounded-lg font-bold">
                  Example 1
                </div>
                <h3 className="font-bold text-xl text-black">BVN Field Confusion</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-[#1E3A8A] mb-2">Hypothesis</h4>
                  <p className="text-gray-700">Users were abandoning the form because they didn't understand what "BVN" meant or how to retrieve it.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-[#3b82f6] mb-3">Experiment 1</h4>
                  <p className="text-gray-700 mb-2">Added an inline tooltip explaining "BVN = Bank Verification Number. Dial *565*0# to retrieve yours."</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-3xl text-green-600">↓</span>
                    <span className="font-bold text-2xl text-green-600">15% abandonment drop</span>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-[#4dd0e1] mb-3">Experiment 2</h4>
                  <p className="text-gray-700 mb-2">Introduced a contextual "What's my BVN?" button with USSD codes for all major banks.</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-3xl text-green-600">↓</span>
                    <span className="font-bold text-2xl text-green-600">Additional 25% reduction</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">✓</span>
                    <div>
                      <p className="font-bold text-xl text-green-800">Total Impact</p>
                      <p className="text-lg text-green-700">40% total abandonment reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Iteration 2: Bank Statement Retrieval Friction */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-[#FDBE34] to-[#ee6667] text-white px-4 py-2 rounded-lg font-bold">
                  Example 2
                </div>
                <h3 className="font-bold text-xl text-black">Bank Statement Retrieval Friction</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-[#1E3A8A] mb-2">Hypothesis</h4>
                  <p className="text-gray-700">Users were dropping off during the bank statement retrieval step due to limited bank coverage and unclear guidance within the flow.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-[#3b82f6] mb-3">Experiment 1: API Coverage Expansion</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Problem:</strong> Initial integration with MBS supported only select Tier 1 banks, creating exclusion for users whose banks weren't available.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Action:</strong> We onboarded a secondary provider, Mono, expanding API coverage across Tier 1 and Tier 2 banks.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl text-green-600">↓</span>
                    <span className="font-bold text-xl text-green-600">Retrieval-related drop-offs: 55% → &lt;10%</span>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-[#4dd0e1] mb-3">Experiment 2: UX Copy Optimization</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Problem:</strong> User feedback revealed uncertainty about why the app required access to bank data and how it would be used.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Action:</strong> We optimized in-flow microcopy and added contextual tooltips clarifying the purpose ("Used securely to verify income and affordability") and emphasizing bank-grade encryption via trusted APIs.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl text-green-600">↑</span>
                    <span className="font-bold text-xl text-green-600">Improved user confidence and conversion</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">✓</span>
                    <div>
                      <p className="font-bold text-xl text-green-800">Combined Result</p>
                      <p className="text-lg text-green-700">Faster end-to-end approvals and higher completion rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Summary */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl mb-4">From Strategy to Empathy</h2>
          <p className="text-lg leading-relaxed">
            This phase turned insights into simple, human-centered screens. The design decisions improved clarity, reduced friction, and strengthened trust. With a validated experience in place, the next step was scale, growing CDL Checkout across merchants and users.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyDesignDev
