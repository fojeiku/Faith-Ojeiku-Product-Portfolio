function RICEPrioritization() {
  const features = [
    // P0 - Launch Blockers
    { feature: 'BVN Verification API', reach: 10, impact: 10, confidence: 10, effort: 5, rice: 200, priority: 'P0', category: 'Launch Blockers' },
    { feature: 'Credit Scoring Engine', reach: 10, impact: 10, confidence: 9, effort: 8, rice: 112.5, priority: 'P0', category: 'Launch Blockers' },
    { feature: 'Merchant API + Plugins', reach: 9, impact: 9, confidence: 10, effort: 6, rice: 135, priority: 'P0', category: 'Launch Blockers' },
    { feature: 'Payment Collection System', reach: 10, impact: 10, confidence: 10, effort: 4, rice: 250, priority: 'P0', category: 'Launch Blockers' },
    { feature: 'SMS/Email Notifications', reach: 10, impact: 8, confidence: 10, effort: 2, rice: 400, priority: 'P0', category: 'Launch Blockers' },

    // P1 - Growth Drivers
    { feature: 'Early Payment Feature', reach: 7, impact: 7, confidence: 8, effort: 3, rice: 130.7, priority: 'P1', category: 'Growth Drivers' },
    { feature: 'Credit Limit Automation', reach: 8, impact: 8, confidence: 9, effort: 5, rice: 115.2, priority: 'P1', category: 'Growth Drivers' },
    { feature: 'USSD Payment Integration', reach: 6, impact: 8, confidence: 7, effort: 4, rice: 84, priority: 'P1', category: 'Growth Drivers' },
    { feature: 'Enhanced Fraud Detection (ML)', reach: 9, impact: 9, confidence: 8, effort: 7, rice: 92.6, priority: 'P1', category: 'Growth Drivers' },

    // P2 - Differentiators
    { feature: 'Referral & Loyalty Program', reach: 5, impact: 6, confidence: 6, effort: 5, rice: 36, priority: 'P2', category: 'Differentiators' },
    { feature: 'API Marketplace', reach: 4, impact: 7, confidence: 5, effort: 8, rice: 17.5, priority: 'P2', category: 'Differentiators' },

    // Deferred
    { feature: 'Native Mobile App', reach: 8, impact: 7, confidence: 6, effort: 10, rice: 33.6, priority: 'Deferred', category: 'Deferred', deferred: true }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'P0': return 'bg-[#F4D58D] bg-opacity-30 border-l-4 border-[#F4D58D]'
      case 'P1': return 'bg-blue-50 border-l-4 border-[#3b82f6]'
      case 'P2': return 'bg-gray-50 border-l-4 border-gray-400'
      case 'Deferred': return 'bg-gray-100 border-l-4 border-gray-300 opacity-50'
      default: return 'bg-white'
    }
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'P0': return 'bg-[#F4D58D] text-black'
      case 'P1': return 'bg-[#3b82f6] text-white'
      case 'P2': return 'bg-gray-400 text-white'
      case 'Deferred': return 'bg-gray-300 text-gray-600'
      default: return 'bg-gray-200 text-gray-800'
    }
  }

  const getRICEBarColor = (rice) => {
    if (rice >= 200) return 'bg-green-500'
    if (rice >= 100) return 'bg-blue-500'
    if (rice >= 50) return 'bg-yellow-500'
    return 'bg-gray-400'
  }

  const groupedFeatures = {
    'Launch Blockers': features.filter(f => f.category === 'Launch Blockers'),
    'Growth Drivers': features.filter(f => f.category === 'Growth Drivers'),
    'Differentiators': features.filter(f => f.category === 'Differentiators'),
    'Deferred': features.filter(f => f.category === 'Deferred')
  }

  return (
    <section className="py-16 px-6 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-black mb-2 text-center">Feature Prioritization Framework</h2>
        <div className="w-24 h-1 bg-[#FDBE34] mx-auto mb-6"></div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            I used the RICE framework to make prioritization clear and objective across product, design, and engineering. High-reach, high-confidence items were prioritized first, while larger features like mobile and referrals were intentionally deferred to later growth phases.
          </p>
        </div>

        {/* RICE Formula */}
        <div className="mb-8 bg-[#1E3A8A] text-white p-6 rounded-lg text-center">
          <p className="text-sm mb-2 opacity-80">RICE Score Formula</p>
          <p className="text-2xl font-bold">
            RICE = (Reach × Impact × Confidence) ÷ Effort
          </p>
        </div>

        {/* Prioritization Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase w-1/4">Feature</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase w-1/12">Reach<br/>(1-10)</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase w-1/12">Impact<br/>(1-10)</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase w-1/12">Confidence<br/>(1-10)</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase w-1/12">Effort<br/>(1-10)</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase w-1/6">RICE Score</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase w-1/12">Priority</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
                  <>
                    {/* Category Header */}
                    <tr key={category} className="bg-gray-100">
                      <td colSpan="7" className="px-4 py-3">
                        <h4 className="font-bold text-sm text-gray-800 uppercase">{category}</h4>
                      </td>
                    </tr>
                    {/* Category Features */}
                    {categoryFeatures.map((item, index) => (
                      <tr
                        key={`${category}-${index}`}
                        className={`border-b border-gray-200 ${getPriorityColor(item.priority)}`}
                      >
                        <td className="px-4 py-4">
                          <span className={`text-sm font-medium ${item.deferred ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {item.feature}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="text-sm font-semibold text-gray-700">{item.reach}</span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="text-sm font-semibold text-gray-700">{item.impact}</span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="text-sm font-semibold text-gray-700">{item.confidence}</span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="text-sm font-semibold text-gray-700">{item.effort}</span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                              <div
                                className={`${getRICEBarColor(item.rice)} h-full transition-all duration-500`}
                                style={{ width: `${Math.min((item.rice / 400) * 100, 100)}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold text-gray-800 w-12 text-right">{item.rice}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className={`inline-block text-xs px-3 py-1 rounded-full font-bold ${getPriorityBadge(item.priority)}`}>
                            {item.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Prioritization Decisions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="font-bold text-xl text-black mb-4">Prioritization Decisions</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="inline-block bg-[#F4D58D] text-black text-xs px-3 py-1 rounded-full font-bold flex-shrink-0">P0</span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Launch Blockers:</span> Critical MVP enablers driving core transaction flow (BVN verification, credit scoring, merchant plugin integrations, payment collection, and notifications).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block bg-[#3b82f6] text-white text-xs px-3 py-1 rounded-full font-bold flex-shrink-0">P1</span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Growth Drivers:</span> Enhancements improving user experience, repayment flexibility, and access (early payment, credit limit automation, USSD).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block bg-gray-400 text-white text-xs px-3 py-1 rounded-full font-bold flex-shrink-0">P2</span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Differentiators:</span> Features that build engagement and retention but not essential to MVP validation (referral & loyalty).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full font-bold flex-shrink-0">Deferred</span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Deferred:</span> Features deliberately postponed (native mobile app) to maintain lean delivery and validate web-first performance.
              </p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="bg-yellow-50 border-l-4 border-[#F4D58D] p-6 rounded-r-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            RICE gave us an objective view of trade-offs, but sequencing was driven by launch dependencies and risk not just score ranking. By prioritizing high-reach, high-confidence items like BVN verification and merchant API plugins early, we delivered impact fast without overextending resources.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RICEPrioritization
