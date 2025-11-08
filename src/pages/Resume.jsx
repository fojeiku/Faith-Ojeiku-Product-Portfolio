function Resume() {
  return (
    <div className="bg-[#f0fdf4]">
      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1]">
        <div className="max-w-5xl mx-auto text-white text-center">
          <h1 className="font-bold text-5xl md:text-6xl mb-4">FAITH OJEIKU</h1>
          <p className="text-2xl md:text-3xl mb-6">Product Manager</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg mb-8">
            <a href="mailto:faithojeiku@gmail.com" className="hover:opacity-80">faithojeiku@gmail.com</a>
            <span>•</span>
            <span>+1-403-998-3590</span>
            <span>•</span>
            <span>Canada</span>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/faithojeiku"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3b82f6] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              LinkedIn Profile
            </a>
            <button
              onClick={() => window.print()}
              className="bg-[#FDBE34] text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Download my resume to explore my full career journey from product strategy to growth leadership.
          </p>

          {/* Icon Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1] p-6 rounded-lg shadow-lg text-white">
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-sm font-semibold">Users</div>
            </div>
            <div className="bg-gradient-to-br from-[#FDBE34] to-[#ee6667] p-6 rounded-lg shadow-lg text-black">
              <div className="text-4xl font-bold mb-2">$2M</div>
              <div className="text-sm font-semibold">Monthly Revenue</div>
            </div>
            <div className="bg-gradient-to-br from-[#4dd0e1] to-[#3b82f6] p-6 rounded-lg shadow-lg text-white">
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-sm font-semibold">Growth</div>
            </div>
            <div className="bg-gradient-to-br from-[#ee6667] to-[#FDBE34] p-6 rounded-lg shadow-lg text-white">
              <div className="text-4xl font-bold mb-2">3,000+</div>
              <div className="text-sm font-semibold">Merchants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Professional Summary */}
          <div>
            <h2 className="font-bold text-3xl text-black mb-4 pb-2 border-b-4 border-[#3b82f6]">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Product management with 15+ years of experience building and scaling products across emerging markets. Proven track record launching market-leading solutions that achieve 300%+ YoY growth, serve 10M+ customers, and generate $2M+ monthly revenue. Expert in product strategy, roadmap development, and go-to-market execution for embedded finance, BNPL, and digital payment solutions. Skilled at translating customer insights into product strategies that drive measurable business value. CSPO certified with MBA in AI & Automation.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="font-bold text-3xl text-black mb-4 pb-2 border-b-4 border-[#4dd0e1]">CORE COMPETENCIES</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-[#3b82f6] mb-2">Product Strategy & Vision</h3>
                <p className="text-sm text-gray-700">0-1 product launches, market positioning, roadmap development, competitive analysis</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-[#3b82f6] mb-2">Go-to-Market Strategy</h3>
                <p className="text-sm text-gray-700">Customer discovery, market research, GTM execution, feature prioritization, pricing strategy</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-[#3b82f6] mb-2">Customer Development</h3>
                <p className="text-sm text-gray-700">User research, persona development, journey mapping, A/B testing, behavioral analytics</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-[#3b82f6] mb-2">Product Analytics</h3>
                <p className="text-sm text-gray-700">KPI tracking, funnel optimization, SQL, Google Analytics, Mixpanel, data-driven decisions</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-[#3b82f6] mb-2">Cross-functional Leadership</h3>
                <p className="text-sm text-gray-700">Agile/Scrum methodologies, stakeholder management, team collaboration</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-[#3b82f6] mb-2">Technical Product Management</h3>
                <p className="text-sm text-gray-700">API design, system integration, product requirements, engineering collaboration</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="font-bold text-3xl text-black mb-6 pb-2 border-b-4 border-[#ee6667]">PROFESSIONAL EXPERIENCE</h2>

            {/* Job 1 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#3b82f6]">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-2xl text-black">Head of Embedded Finance</h3>
                  <p className="text-lg text-gray-700">Credit Direct Limited | Nigeria (Hybrid)</p>
                </div>
                <span className="text-gray-600 font-semibold">Jul 2022 – Jul 2025</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Led product vision and strategy for Africa's largest embedded finance ecosystem, partnering with major telecom and retail players to scale financial services across 3,000+ locations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-1">•</span>
                  <span>Launched Credit Direct Checkout BNPL product through iterative development and extensive user testing, achieving <span className="font-semibold">300%+ YoY growth, 50,000+ monthly applications</span>, and 5%+ contribution to new customer acquisition within 4 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-1">•</span>
                  <span>Defined product vision and roadmap for embedded finance ecosystem through market research and <span className="font-semibold">200+ customer interviews</span>, identifying underserved needs in credit, savings, and payment solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-1">•</span>
                  <span>Scaled products across <span className="font-semibold">3,000+ merchant locations</span> using data-driven go-to-market strategy, A/B testing, and conversion funnel optimization to drive adoption and usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-1">•</span>
                  <span>Increased approval rates by <span className="font-semibold">35%</span> through analyzing product metrics and user behavior data, implementing data-driven improvements to optimize user journeys and reduce friction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-1">•</span>
                  <span>Developed product roadmaps for credit, savings, and payment solutions, prioritizing features based on customer value, business impact, and technical feasibility using RICE framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-1">•</span>
                  <span>Led cross-functional teams using Agile/Scrum methodologies, facilitating sprint planning, backlog grooming, and stakeholder alignment to deliver <span className="font-semibold">15+ product releases</span></span>
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FDBE34]">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-2xl text-black">Chief Operating Officer</h3>
                  <p className="text-lg text-gray-700">Bankly | Hybrid</p>
                </div>
                <span className="text-gray-600 font-semibold">May 2021 – Jun 2022</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Drove product strategy and operational transformation during critical growth phase, redesigning core features to improve customer satisfaction and business performance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDBE34] font-bold mt-1">•</span>
                  <span>Redesigned merchant credit/loans product using design thinking and customer research, increasing active merchant base by <span className="font-semibold">25%</span> and satisfaction ratings by <span className="font-semibold">15%</span> through improved UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDBE34] font-bold mt-1">•</span>
                  <span>Re-architected aggregator and agent platforms by collaborating with engineering and design teams, improving user journeys and achieving <span className="font-semibold">50% increase in conversion rates</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDBE34] font-bold mt-1">•</span>
                  <span>Optimized product-market fit through iterative testing, customer feedback loops, and feature prioritization, driving <span className="font-semibold">25% revenue increase</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDBE34] font-bold mt-1">•</span>
                  <span>Established product analytics framework tracking key metrics (activation, retention, revenue), enabling data-driven decision making across product portfolio</span>
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#4dd0e1]">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-2xl text-black">Head of Customer Success</h3>
                  <p className="text-lg text-gray-700">weKurnect | Remote (Contract)</p>
                </div>
                <span className="text-gray-600 font-semibold">Nov 2020 – Apr 2021</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Led product initiative to improve merchant experience through Distribution Management System (DMS).
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4dd0e1] font-bold mt-1">•</span>
                  <span>Designed and launched Distribution Management System (DMS) product based on merchant feedback and user research, improving operational efficiency by <span className="font-semibold">40%</span> and enhancing merchant satisfaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4dd0e1] font-bold mt-1">•</span>
                  <span>Conducted qualitative research with <span className="font-semibold">50+ merchants</span> to identify pain points, define product requirements, and validate solutions before development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4dd0e1] font-bold mt-1">•</span>
                  <span>Collaborated with engineering and design teams using Agile methodology to deliver product features that addressed critical merchant operational needs</span>
                </li>
              </ul>
            </div>

            {/* Job 4 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ee6667]">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-2xl text-black">Senior Business Development Manager</h3>
                  <p className="text-lg text-gray-700">Transsnet Financial | Lagos, Nigeria</p>
                </div>
                <span className="text-gray-600 font-semibold">Jan 2018 – Oct 2020</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Led end-to-end product development and launch of Nano loan & BNPL products across six regions, from customer discovery through scaling to 10M+ customers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#ee6667] font-bold mt-1">•</span>
                  <span>Launched mobile Nano loan and BNPL products serving <span className="font-semibold">10+ million customers</span>, achieving <span className="font-semibold">150% MoM growth and $2M monthly revenue</span> through effective go-to-market strategy and product positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee6667] font-bold mt-1">•</span>
                  <span>Conducted extensive market research across <span className="font-semibold">6 regions</span>, identifying customer pain points, product-market fit opportunities, and underserved segments in digital lending</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee6667] font-bold mt-1">•</span>
                  <span>Optimized product offerings through data analysis and user feedback, increasing approval rates by <span className="font-semibold">35%</span> and significantly improving customer satisfaction scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee6667] font-bold mt-1">•</span>
                  <span>Defined product requirements and collaborated with engineering teams using Agile methodologies to deliver customer-centric solutions on time and within scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee6667] font-bold mt-1">•</span>
                  <span>Developed pricing strategies and feature prioritization frameworks that balanced customer value with business sustainability and profitability</span>
                </li>
              </ul>
            </div>

            {/* Job 5 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#111111]">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-2xl text-black">Product Manager</h3>
                  <p className="text-lg text-gray-700">One Finance & Investment Limited | Lagos, Nigeria</p>
                </div>
                <span className="text-gray-600 font-semibold">Jul 2014 – Aug 2017</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Developed product strategies driving revenue growth through effective pricing optimization and feature prioritization.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#111111] font-bold mt-1">•</span>
                  <span>Developed product strategies by collaborating with finance and engineering teams to drive revenue growth through pricing optimization and strategic feature launches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111111] font-bold mt-1">•</span>
                  <span>Conducted competitive analysis and market research to inform product positioning and identify opportunities for differentiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111111] font-bold mt-1">•</span>
                  <span>Managed product lifecycle from ideation to launch, working with cross-functional teams to deliver features that met customer needs and business objectives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111111] font-bold mt-1">•</span>
                  <span>Analyzed customer usage patterns and feedback to prioritize product enhancements and optimize feature adoption rates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="font-bold text-3xl text-black mb-6 pb-2 border-b-4 border-[#FDBE34]">EDUCATION & CERTIFICATIONS</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1] p-6 rounded-lg shadow-lg text-white">
                <h3 className="font-bold text-xl mb-2">Product Management Professional Certificate</h3>
                <p className="text-sm opacity-90">University of California San Diego (UC San Diego) Extended Studies</p>
                <p className="text-sm font-semibold mt-2">2024-2025</p>
              </div>

              <div className="bg-gradient-to-br from-[#FDBE34] to-[#4dd0e1] p-6 rounded-lg shadow-lg text-black">
                <h3 className="font-bold text-xl mb-2">Oxford Fintech Programme</h3>
                <p className="text-sm opacity-90">Saïd Business School, University of Oxford</p>
                <p className="text-sm font-semibold mt-2">2024</p>
              </div>

              <div className="bg-gradient-to-br from-[#ee6667] to-[#FDBE34] p-6 rounded-lg shadow-lg text-white">
                <h3 className="font-bold text-xl mb-2">MBA – Advanced AI & Automation</h3>
                <p className="text-sm opacity-90">Nexford University</p>
                <p className="text-sm font-semibold mt-2">2023</p>
              </div>

              <div className="bg-gradient-to-br from-[#4dd0e1] to-[#3b82f6] p-6 rounded-lg shadow-lg text-white">
                <h3 className="font-bold text-xl mb-2">Certified Scrum Product Owner (CSPO)</h3>
                <p className="text-sm opacity-90">Scrum Alliance</p>
                <p className="text-sm font-semibold mt-2">2024-2026</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#3b82f6]">
                <h3 className="font-bold text-xl text-black mb-2">Bachelor of Science in Biochemistry</h3>
                <p className="text-sm text-gray-700">Delta State University, Nigeria</p>
                <p className="text-sm font-semibold text-gray-700 mt-2">2006</p>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-black mb-3">Additional Certifications</h3>
              <ul className="grid md:grid-cols-3 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#3b82f6]">✓</span>
                  Introduction to Artificial Intelligence – Simplilearn
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3b82f6]">✓</span>
                  Product Management: Building a Product Strategy – LinkedIn Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3b82f6]">✓</span>
                  AI for Product Managers – Canva Credential
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills & Tools */}
          <div>
            <h2 className="font-bold text-3xl text-black mb-6 pb-2 border-b-4 border-[#4dd0e1]">TECHNICAL SKILLS & TOOLS</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#3b82f6]">
                <h3 className="font-bold text-lg text-[#3b82f6] mb-3">Product Management</h3>
                <p className="text-gray-700">Jira, Asana, Confluence, Aha!, Miro</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FDBE34]">
                <h3 className="font-bold text-lg text-[#FDBE34] mb-3">Methodologies</h3>
                <p className="text-gray-700">Agile, Scrum, Design Thinking, Lean Startup, Jobs-to-be-Done Framework</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#4dd0e1]">
                <h3 className="font-bold text-lg text-[#4dd0e1] mb-3">Analytics & Data</h3>
                <p className="text-gray-700">Google Analytics, Mixpanel, SQL, Excel (Advanced), PowerBI, A/B Testing Frameworks</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ee6667]">
                <h3 className="font-bold text-lg text-[#ee6667] mb-3">Design & Research</h3>
                <p className="text-gray-700">Figma, UserTesting, Hotjar, SurveyMonkey</p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="font-bold text-3xl text-black mb-6 pb-2 border-b-4 border-[#ee6667]">KEY ACHIEVEMENTS</h2>

            <div className="bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1] p-8 rounded-lg shadow-xl text-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Scaled products to <span className="font-bold">10M+ combined customers</span> across multiple markets in Nigeria and West Africa</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Achieved <span className="font-bold">300%+ YoY growth</span> in BNPL product line through data-driven strategy and optimization</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Generated <span className="font-bold">$2M+ monthly revenue</span> from successful product launches and go-to-market execution</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Improved conversion rates by <span className="font-bold">50%</span> and approval rates by <span className="font-bold">35%</span> through user experience optimization</p>
                </div>

                <div className="flex items-start gap-3 md:col-span-2">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Led product launches across <span className="font-bold">6 regions</span> and scaled to <span className="font-bold">3,000+ merchant locations</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Resume
