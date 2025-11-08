import { Link } from 'react-router-dom'
import chiomaImage from '../assets/personas/chioma.png'
import tundeImage from '../assets/personas/tunde.png'
import amakaImage from '../assets/personas/amaka.png'
import CustomerJourneyMap from '../components/CustomerJourneyMap'
import ValuePropositionCanvas from '../components/ValuePropositionCanvas'
import CompetitiveLandscape from '../components/CompetitiveLandscape'
import CaseStudyCarousel from '../components/CaseStudyCarousel'

function CaseStudyCustomerDev() {
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
                <Link to="/case-study/product-definition" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Product Definition
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
          <h1 className="font-bold text-4xl md:text-5xl mb-3">Customer Development</h1>
          <div className="w-24 h-1 bg-[#FDBE34] mb-4"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            My core objective was to deeply understand who our customers truly are, how they think, decide, and behave throughout the purchase journey.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#3b82f6]">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before writing a single PRD, I needed to validate one core assumption: Was "inability to pay upfront" truly a pain point? For whom? And what would a viable solution need to achieve to drive adoption?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Together with our research and design teams, we conducted extensive market studies and user interviews. We moved from a broad hypothesis to three distinct, data-backed user archetypes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              This deep understanding of our customers became the foundation for every subsequent product decision.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl text-black mb-2 text-center">Customer Development Framework</h2>
          <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>
          <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Four key artifacts that shaped our understanding and strategy
          </p>

          <CaseStudyCarousel />
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">User Personas</h2>
          <div className="w-24 h-1 bg-[#ee6667] mx-auto mb-6"></div>
          <p className="text-center text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            I led the customer segmentation and synthesis process that identified three core user groups, each with unique motivations, barriers, and behavioral patterns.
          </p>

          {/* Persona Cards - Horizontal Layout */}
          <div className="space-y-8 mb-12">
            {/* Persona 1: Chioma */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-t-4 border-[#4dd0e1]">
              <div className="bg-[#4dd0e1] text-white p-4">
                <h3 className="font-bold text-xl text-center">Persona 1: Chioma Adeyemi (Customer)</h3>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Profile Image Only */}
                  <div className="md:col-span-1">
                    <img
                      src={chiomaImage}
                      alt="Chioma Adeyemi"
                      className="w-full h-full rounded-lg object-cover object-top shadow-md"
                    />
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Bio */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-sm text-black mb-2">Bio</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Chioma Adeyemi is a Marketing Manager at a tech startup in Lagos. She earns $292/month and is always looking for ways to manage her budget smartly while maintaining her lifestyle. She needs flexibility in payments for larger purchases without depleting her savings.
                      </p>
                    </div>

                    {/* Goals/Needs and Frustrations Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Goals | Needs */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-[#3b82f6] mb-2">Goals | Needs</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Purchase without depleting savings</li>
                          <li>• Spread payments over time</li>
                          <li>• Maintain good credit standing</li>
                          <li>• Access quality products now</li>
                        </ul>
                      </div>

                      {/* Frustrations | Fears | Challenges */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-[#ee6667] mb-2">Frustrations | Challenges</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Bank loans take too long</li>
                          <li>• High interest rate</li>
                          <li>• Worried about hidden fees</li>
                          <li>• Complex applications</li>
                        </ul>
                      </div>
                    </div>

                    {/* Demographics, Interests, Motivations, How to Reach - All Side by Side */}
                    <div className="grid grid-cols-4 gap-4">
                      {/* Demographic Profile */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">Demographics</h4>
                        <div className="text-xs text-gray-700 space-y-1">
                          <p><span className="font-semibold">Age:</span> 32</p>
                          <p><span className="font-semibold">Education:</span> BA Marketing</p>
                          <p><span className="font-semibold">Location:</span> Lagos</p>
                          <p><span className="font-semibold">Status:</span> Single, 1 kid</p>
                        </div>
                      </div>

                      {/* Interests & Passions */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded-full">Shopping</span>
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded-full">Fashion</span>
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded-full">Career</span>
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded-full">Tech</span>
                        </div>
                      </div>

                      {/* Motivations */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-[#FDBE34] mb-2">Motivations</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Financial independence</li>
                          <li>• Building credit history</li>
                          <li>• Convenience & speed</li>
                          <li>• Better quality of life</li>
                        </ul>
                      </div>

                      {/* How to reach the archetype */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">How to Reach</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded">Instagram</span>
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded">Social Media</span>
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded">Email</span>
                          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded">Merchant Store front</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 2: Tunde */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-t-4 border-[#FDBE34]">
              <div className="bg-[#FDBE34] text-black p-4">
                <h3 className="font-bold text-xl text-center">Persona 2: Tunde Okonkwo (Merchant)</h3>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Profile Image Only */}
                  <div className="md:col-span-1">
                    <img
                      src={tundeImage}
                      alt="Tunde Okonkwo"
                      className="w-full h-full rounded-lg object-cover object-top shadow-md"
                    />
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Bio */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-sm text-black mb-2">Bio</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Tunde Okonkwo owns and operates a successful electronics retail business in Abuja with ₦50M ($41,667) annual revenue and 15 staff. He's always looking for innovative ways to increase sales conversion, reduce cart abandonment, and provide better financing options to his customers while maintaining healthy cash flow.
                      </p>
                    </div>

                    {/* Goals/Needs and Frustrations Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Goals | Needs */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-[#3b82f6] mb-2">Goals | Needs</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Increase sales conversion</li>
                          <li>• Maintain healthy cash flow</li>
                          <li>• Simple POS integration</li>
                          <li>• Reduce cart abandonment</li>
                        </ul>
                      </div>

                      {/* Frustrations | Fears | Challenges */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-[#ee6667] mb-2">Frustrations | Challenges</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Losing price-sensitive customers</li>
                          <li>• Complex onboarding</li>
                          <li>• Fraud risk concerns</li>
                          <li>• Payment delays</li>
                        </ul>
                      </div>
                    </div>

                    {/* Demographics, Interests, Motivations, How to Reach - All Side by Side */}
                    <div className="grid grid-cols-4 gap-4">
                      {/* Demographic Profile */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">Demographics</h4>
                        <div className="text-xs text-gray-700 space-y-1">
                          <p><span className="font-semibold">Age:</span> 38</p>
                          <p><span className="font-semibold">Education:</span> MBA</p>
                          <p><span className="font-semibold">Location:</span> Abuja</p>
                          <p><span className="font-semibold">Business:</span> Electronics</p>
                        </div>
                      </div>

                      {/* Interests & Passions */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded-full">Growth</span>
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded-full">Innovation</span>
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded-full">Sales</span>
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded-full">Fintech</span>
                        </div>
                      </div>

                      {/* Motivations */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-[#FDBE34] mb-2">Motivations</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Revenue growth</li>
                          <li>• Competitive advantage</li>
                          <li>• Customer retention</li>
                          <li>• Business expansion</li>
                        </ul>
                      </div>

                      {/* How to reach the archetype */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">How to Reach</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded">B2B Sales</span>
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded">Trade Shows</span>
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded">LinkedIn</span>
                          <span className="bg-[#FDBE34] text-black text-xs px-2 py-1 rounded">Direct</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 3: Amaka */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-t-4 border-[#ee6667]">
              <div className="bg-[#ee6667] text-white p-4">
                <h3 className="font-bold text-xl text-center">Persona 3: Amaka Nwosu (Early Adopter)</h3>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Profile Image Only */}
                  <div className="md:col-span-1">
                    <img
                      src={amakaImage}
                      alt="Amaka Nwosu"
                      className="w-full h-full rounded-lg object-cover object-top shadow-md"
                    />
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Bio */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-sm text-black mb-2">Bio</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Amaka Nwosu is a software developer at a tech company in Port Harcourt, earning $150/month. She's tech-savvy, early adopter of new fintech solutions, and values convenience and transparency. She wants to make larger purchases without draining her limited savings while building her credit history.
                      </p>
                    </div>

                    {/* Goals/Needs and Frustrations Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Goals | Needs */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-[#3b82f6] mb-2">Goals | Needs</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Purchases beyond budget</li>
                          <li>• Build credit history</li>
                          <li>• Use trusted platforms</li>
                          <li>• Transparent processes</li>
                        </ul>
                      </div>

                      {/* Frustrations | Fears | Challenges */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-[#ee6667] mb-2">Frustrations | Challenges</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Limited savings</li>
                          <li>• Traditional financing rigid</li>
                          <li>• Fear of overspending</li>
                          <li>• No credit history yet</li>
                        </ul>
                      </div>
                    </div>

                    {/* Demographics, Interests, Motivations, How to Reach - All Side by Side */}
                    <div className="grid grid-cols-4 gap-4">
                      {/* Demographic Profile */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">Demographics</h4>
                        <div className="text-xs text-gray-700 space-y-1">
                          <p><span className="font-semibold">Age:</span> 26</p>
                          <p><span className="font-semibold">Education:</span> BSc CS</p>
                          <p><span className="font-semibold">Location:</span> Port Harcourt</p>
                          <p><span className="font-semibold">Status:</span> Single</p>
                        </div>
                      </div>

                      {/* Interests & Passions */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded-full">Technology</span>
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded-full">Coding</span>
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded-full">Fintech</span>
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded-full">Innovation</span>
                        </div>
                      </div>

                      {/* Motivations */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-[#FDBE34] mb-2">Motivations</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Financial empowerment</li>
                          <li>• Building credit</li>
                          <li>• Smart budgeting</li>
                          <li>• Access to tech</li>
                        </ul>
                      </div>

                      {/* How to reach the archetype */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold text-xs text-black mb-2">How to Reach</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded">Tech Communities</span>
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded">Twitter</span>
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded">Instagram</span>
                          <span className="bg-[#ee6667] text-white text-xs px-2 py-1 rounded">Product Hunt</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F4D58D] bg-opacity-20 p-6 rounded-lg border-l-4 border-[#FDBE34]">
            <p className="text-lg text-gray-700 italic">
              "These three personas, Chioma, Tunde, and Amaka captured the ecosystem CDL Checkout needed to serve for true product-market fit."
            </p>
          </div>
        </div>
      </section>

      {/* Customer Journey Map Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Customer Journey Map</h2>
          <div className="w-24 h-1 bg-[#4dd0e1] mx-auto mb-6"></div>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Mapping Chioma's end-to-end experience from initial awareness to repayment revealed specific friction points that shaped our design and product priorities.
            </p>
          </div>

          <CustomerJourneyMap />
        </div>
      </section>

      {/* Value Proposition Canvas Section */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Value Proposition Canvas</h2>
          <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-6"></div>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CDL Checkout operates in a two-sided market, serving both consumers seeking flexible payment options and merchants wanting to boost sales without credit risk.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              I led the value proposition design to ensure <span className="font-semibold text-[#3b82f6]">balanced value creation</span> across both sides of the ecosystem, aligning product features with the specific jobs, pains, and gains of each customer segment.
            </p>
          </div>

          <ValuePropositionCanvas />
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Competitive Landscape</h2>
          <div className="w-24 h-1 bg-[#ee6667] mx-auto mb-6"></div>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To validate our market differentiation, I led a comparative analysis of both traditional credit options and emerging BNPL competitors.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              This exercise revealed how CDL Checkout stood out: <span className="font-semibold text-[#3b82f6]">instant approvals</span>, <span className="font-semibold text-green-600">low interest rate</span>, and the <span className="font-semibold text-[#4dd0e1]">largest merchant network in Nigeria</span>, positioning us as the most accessible, trusted BNPL platform in our market. The outcome ensured our value proposition wasn't just desirable, but <span className="font-semibold text-[#FDBE34]">defensible</span>.
            </p>
          </div>

          <CompetitiveLandscape />
        </div>
      </section>

      {/* Closing Summary */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#111111] to-[#1E3A8A]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl mb-4">From Empathy to Execution</h2>
          <p className="text-lg leading-relaxed">
            These insights anchored CDL Checkout's product definition. Every feature, user flow, and roadmap milestone traced back to a clear understanding of who we serve, why they struggle, and how our solution wins.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyCustomerDev
