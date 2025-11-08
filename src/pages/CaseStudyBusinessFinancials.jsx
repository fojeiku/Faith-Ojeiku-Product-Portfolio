import { Link } from 'react-router-dom'

function CaseStudyBusinessFinancials() {
  const growthData = [
    { year: 'Year 1', cities: '1 (Lagos)', merchants: 150, monthlyTxns: '500', annualVolume: '$417K' },
    { year: 'Year 2', cities: '4 (National Scale)', merchants: '1k+', monthlyTxns: '1,800', annualVolume: '$2.3M' },
    { year: 'Year 3', cities: '10+', merchants: '3k+', monthlyTxns: '2,750', annualVolume: '$7.5M' }
  ]

  const unitEconomics = {
    cacInitial: '$2.08',
    cacOptimized: '$1.50',
    ltv: '$7.50',
    ltvCacInitial: 3.6,
    ltvCacOptimized: 5.0,
    improvement: '28%'
  }

  const gtmPhases = [
    {
      phase: 'Phase 1: Pilot',
      partner: 'SLOT (Nigeria\'s #1 Electronics Retailer)',
      duration: 'Months 1-3',
      focus: 'Product-market fit validation',
      results: [
        '$417K annual transaction volume',
        '150 pilot merchants',
        'Proven consumer demand'
      ]
    },
    {
      phase: 'Phase 2: Scale',
      partner: 'OPPO (Premium Smartphone Brand)',
      duration: 'Months 4-12',
      focus: 'National expansion & brand building',
      results: [
        '$2.3M annual transaction volume',
        '1k+ active merchants',
        '30-45% GMV increase for partners'
      ]
    },
    {
      phase: 'Phase 3: Expand',
      partner: 'Regional Merchants (Fashion, Home, Tech)',
      duration: 'Year 2-3',
      focus: 'Ecosystem diversification',
      results: [
        '$7.5M annual transaction volume',
        '3k+ merchant network',
        'Top-2 BNPL brand nationally'
      ]
    }
  ]

  const competitors = [
    { name: 'CDL Checkout', approvalTime: '< 3 min', networkScale: 'Largest', interestRate: 'Lowest', trustFactor: 'High (18yr legacy)' },
    { name: 'Carbon', approvalTime: '5-15 min', networkScale: 'Medium', interestRate: 'Higher', trustFactor: 'Medium' },
    { name: 'FairMoney', approvalTime: '15-25 min', networkScale: 'Small', interestRate: 'Higher', trustFactor: 'Medium' },
    { name: 'Branch', approvalTime: '1-2 hours', networkScale: 'Small', interestRate: 'Highest', trustFactor: 'Low' }
  ]

  return (
    <div className="bg-[#f0fdf4]">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#FDBE34] to-[#ee6667]">
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
                <Link to="/case-study/design-development" className="text-sm bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-all text-[#1E3A8A] font-medium">
                  Design & Development
                </Link>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl mb-3">Business & Financials</h1>
          <div className="w-24 h-1 bg-white mb-4"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            From Vision to Scale
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              As CDL Checkout matured, the focus shifted from usability to growth. Our BNPL model drove higher sales for merchants and provided consumers flexible credit with transparent pricing.
            </p>
            <p className="text-lg leading-relaxed">
              By Year 2, CDL Checkout was live across major retail hubs, with 1,000+ active merchant partners including SLOT, OPPO and delivered measurable GMV lift. Every pricing and partnership decision balanced user affordability, merchant profitability, and business sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-8 px-6 bg-[#1E3A8A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F4D58D] mb-2">$7.5M</div>
              <div className="text-sm text-gray-300">Annual Transaction Volume (Year 3)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4dd0e1] mb-2">1,000+</div>
              <div className="text-sm text-gray-300">Active Merchant Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5.5×</div>
              <div className="text-sm text-gray-300">Transaction Growth (2 Years)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIFACT 4.1: BUSINESS MODEL CANVAS */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Business Model Canvas</h2>
          <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our business model was designed to create a win-win ecosystem. Merchants gained faster sellouts and higher conversions, while consumers accessed affordable, short-term credit through trusted retail partners.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img
              src="/Brand%20Assets/Financial%20folder/Business%20Model%20Canvas.png"
              alt="CDL Checkout Business Model Canvas"
              className="w-full h-auto"
            />
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-[#F4D58D] p-6 rounded-r-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              Building a sustainable ecosystem connecting merchants and consumers through affordable credit.
            </p>
          </div>
        </div>
      </section>

      {/* ARTIFACT 4.2: FINANCIAL PROJECTIONS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Financial Projections</h2>
          <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CDL Checkout's growth trajectory reflected disciplined scaling and merchant-led expansion. In just two years, we evolved from a single-city pilot to national coverage, achieving multi-city rollout and exponential growth in transaction volume and merchant participation.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              The focus was on accessibility, affordability, and ecosystem enablement driving repeat usage while helping merchants achieve faster sellouts.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Timeline</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Cities</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Merchants</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Monthly Txns</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Annual Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {growthData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-bold text-[#1E3A8A]">{row.year}</td>
                      <td className="px-6 py-4 text-gray-700">{row.cities}</td>
                      <td className="px-6 py-4 text-gray-700">{row.merchants}</td>
                      <td className="px-6 py-4 text-gray-700">{row.monthlyTxns}</td>
                      <td className="px-6 py-4 font-bold text-green-600 text-lg">{row.annualVolume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#F4D58D] to-[#FDBE34] p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[#1E3A8A] mb-2">National Scale</div>
              <div className="text-sm text-gray-800">By Year 2, expanding from Lagos to Abuja, Port Harcourt, and Ibadan</div>
            </div>
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#4dd0e1] p-6 rounded-lg shadow-lg text-white">
              <div className="text-3xl font-bold mb-2">5.5× Growth</div>
              <div className="text-sm">Transaction growth in two years, driven by merchant network expansion</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white">
              <div className="text-3xl font-bold mb-2">Competitive Pricing</div>
              <div className="text-sm">Sustained rapid user adoption while boosting merchant GMV</div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-6 rounded-r-lg">
            <p className="text-xs text-gray-600 mb-2">
              <strong>Note:</strong> USD equivalents are approximate, based on prevailing 2025 FX rates (₦1,200 = $1 USD). Nigeria's exchange rate remains volatile; figures are presented for directional context.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              CDL Checkout – Ecosystem Growth Through Merchant Expansion
            </p>
          </div>
        </div>
      </section>

      {/* ARTIFACT 4.3: UNIT ECONOMICS */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Unit Economics</h2>
          <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every acquisition and pricing decision was modeled for sustainability. Through channel optimization and partner-led campaigns, we reduced Customer Acquisition Cost (CAC) by 28% while maintaining one of the strongest LTV:CAC ratios in the BNPL segment.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Strategic co-marketing with partners like SLOT and OPPO significantly improved cost efficiency and user retention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* CAC Reduction */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="font-bold text-2xl text-[#1E3A8A] mb-6 text-center">Customer Acquisition Cost (CAC)</h3>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Initial</div>
                  <div className="text-4xl font-bold text-red-500">{unitEconomics.cacInitial}</div>
                </div>
                <div className="text-4xl text-green-600">→</div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Optimized</div>
                  <div className="text-4xl font-bold text-green-600">{unitEconomics.cacOptimized}</div>
                </div>
              </div>
              <div className="mt-6 bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{unitEconomics.improvement} reduction</div>
                <div className="text-sm text-gray-600 mt-1">Through OPPO & SLOT co-marketing</div>
              </div>
            </div>

            {/* LTV:CAC Ratio */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="font-bold text-2xl text-[#1E3A8A] mb-6 text-center">LTV:CAC Ratio</h3>
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Initial</div>
                  <div className="text-4xl font-bold text-[#3b82f6]">{unitEconomics.ltvCacInitial}×</div>
                </div>
                <div className="text-4xl text-green-600">→</div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Optimized</div>
                  <div className="text-4xl font-bold text-green-600">{unitEconomics.ltvCacOptimized}×</div>
                </div>
              </div>
              <div className="bg-[#F4D58D] bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-2">Lifetime Value (LTV)</div>
                <div className="text-3xl font-bold text-[#1E3A8A]">{unitEconomics.ltv}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h3 className="font-bold text-xl text-[#1E3A8A] mb-4">Optimization Drivers</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-gray-700">
                  Shifted 40% of marketing budget to merchant co-marketing campaigns with SLOT and OPPO
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-gray-700">
                  Co-branded promotions and retail activations reduced CAC by 28% and improved brand recall
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-gray-700">
                  Leveraged in-store sales influence to acquire high-intent customers at lower costs
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 border-l-4 border-[#4dd0e1] p-6 rounded-r-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              Scaling efficiently through ecosystem-led acquisition. USD values based on ₦1,200 = $1 (subject to rate fluctuations).
            </p>
          </div>
        </div>
      </section>

      {/* ARTIFACT 4.4: GO-TO-MARKET STRATEGY */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Go-to-Market Strategy</h2>
          <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our go-to-market strategy focused on partnerships, performance, and learning. We launched CDL Checkout through flagship merchants with national consumer trust and wide retail reach, then scaled through data-led optimization and localized activations.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Each phase was designed to balance acquisition efficiency with merchant ROI, proving that disciplined growth beats blitz-scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {gtmPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A] p-6">
                  <h3 className="font-bold text-xl text-white mb-1">{phase.phase}</h3>
                  <p className="text-[#F4D58D] font-medium text-sm">{phase.partner}</p>
                  <div className="mt-3 bg-[#F4D58D] px-3 py-1 rounded inline-block">
                    <span className="text-[#1E3A8A] text-sm font-bold">{phase.duration}</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1E3A8A] mb-2 text-sm">Focus</h4>
                    <p className="text-gray-700 text-sm">{phase.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3A8A] mb-2 text-sm">Results</h4>
                    <ul className="space-y-2">
                      {phase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 text-sm">✓</span>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-2xl text-[#1E3A8A] mb-4 text-center">Overall Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">Top-2</div>
                <div className="text-sm text-gray-700">BNPL brand in Nigeria within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15×</div>
                <div className="text-sm text-gray-700">Merchant network growth from pilot to national rollout</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30-45%</div>
                <div className="text-sm text-gray-700">Merchant GMV increase post-integration</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-[#F4D58D] p-6 rounded-r-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              Driving national scale through partnership-led GTM execution. USD based on ₦1,200 = $1 (volatile rate).
            </p>
          </div>
        </div>
      </section>

      {/* ARTIFACT 4.5: COMPETITIVE POSITIONING */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-black mb-2 text-center">Competitive Positioning</h2>
          <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-6"></div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              In a rapidly growing BNPL landscape, CDL Checkout stood out for speed, transparency, and ecosystem depth. We built an omnichannel solution trusted by merchants and consumers alike, grounded in Credit Direct's 18-year lending heritage and modernized through API-driven decisioning.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Approval Speed</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Network Scale</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Interest Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Trust Factor</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, index) => (
                    <tr
                      key={index}
                      className={comp.name === 'CDL Checkout' ? 'bg-gradient-to-r from-[#F4D58D] to-[#FDBE34]' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-6 py-4 font-bold text-[#1E3A8A]">{comp.name}</td>
                      <td className="px-6 py-4 text-gray-700">{comp.approvalTime}</td>
                      <td className="px-6 py-4 text-gray-700">{comp.networkScale}</td>
                      <td className="px-6 py-4 text-gray-700">{comp.interestRate}</td>
                      <td className="px-6 py-4 text-gray-700">{comp.trustFactor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h3 className="font-bold text-2xl text-[#1E3A8A] mb-6 text-center">Differentiators</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#3b82f6] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-[#1E3A8A] mb-1">Speed & Automation</h4>
                  <p className="text-gray-700 text-sm">&lt;3-minute approvals vs. industry average 25min-2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#4dd0e1] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-[#1E3A8A] mb-1">Ecosystem Scale</h4>
                  <p className="text-gray-700 text-sm">Largest merchant distribution network in Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#F4D58D] text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-[#1E3A8A] mb-1">Affordability</h4>
                  <p className="text-gray-700 text-sm">Lowest consumer interest rates in BNPL category</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#ee6667] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-bold text-[#1E3A8A] mb-1">Trust</h4>
                  <p className="text-gray-700 text-sm">Legacy lending brand with regulated credit operations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A] rounded-lg p-8 text-white">
            <h3 className="font-bold text-2xl mb-4 text-center">Three Levers That Drove CDL Checkout's Growth</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-3">🤝</div>
                <h4 className="font-bold mb-2">Ecosystem Partnerships</h4>
                <p className="text-sm opacity-90">SLOT and OPPO accelerated adoption and brand trust</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Channel Efficiency</h4>
                <p className="text-sm opacity-90">Co-marketing cut CAC by 28%</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Consumer Accessibility</h4>
                <p className="text-sm opacity-90">Competitive rates and fast approvals increased merchant GMV nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Summary */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#FDBE34] to-[#ee6667]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl mb-4">Building an Ecosystem That Scales Value</h2>
          <p className="text-lg leading-relaxed">
            CDL Checkout wasn't just a lending feature, it became an ecosystem. By aligning value for merchants, consumers, and partners, we scaled from a small pilot to national distribution driving higher conversions for retailers and flexible credit access for users. This foundation now powers expansion into new verticals, payments, merchant credit, and broader embedded finance services.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyBusinessFinancials
