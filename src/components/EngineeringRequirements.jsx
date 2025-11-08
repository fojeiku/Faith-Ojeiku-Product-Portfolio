function EngineeringRequirements() {
  const requirements = {
    phase1: [
      { feature: 'BVN Verification API', type: 'API', priority: 'Must Have', icon: '🔗', adopted: false },
      { feature: 'Credit Scoring Engine (ML)', type: 'API', priority: 'Must Have', icon: '🔗', adopted: false },
      { feature: 'BNPL Application Flow (Web)', type: 'Dashboard', priority: 'Must Have', icon: '🖥️', adopted: false },
      { feature: 'Merchant POS Integration (API + Plugins)', type: 'Plugin', priority: 'Must Have', icon: '⚙️', adopted: true },
      { feature: 'Payment Gateway Integration', type: 'API', priority: 'Must Have', icon: '🔗', adopted: false },
      { feature: 'Automated Payment Collection', type: 'API', priority: 'Must Have', icon: '🔗', adopted: false },
      { feature: 'SMS/Email Notifications', type: 'Communication', priority: 'Must Have', icon: '✉️', adopted: false }
    ],
    phase2: [
      { feature: 'Enhanced Fraud Detection (ML)', type: 'API', priority: 'Should Have', icon: '🔗', adopted: false },
      { feature: 'Credit Limit Management', type: 'Dashboard', priority: 'Should Have', icon: '🖥️', adopted: false },
      { feature: 'Early Payment Feature', type: 'API', priority: 'Should Have', icon: '🔗', adopted: false },
      { feature: 'USSD Payment Integration', type: 'API', priority: 'Should Have', icon: '🔗', adopted: false }
    ],
    phase3: [
      { feature: 'Device Fingerprinting (Mobile)', type: 'API', priority: 'Could Have', icon: '🔗', deferred: true },
      { feature: 'Merchant Self-Serve Portal', type: 'Dashboard', priority: 'Could Have', icon: '🖥️', adopted: false },
      { feature: 'Referral & Loyalty Program', type: 'Dashboard', priority: 'Could Have', icon: '🖥️', adopted: false },
      { feature: 'API Marketplace', type: 'API', priority: 'Could Have', icon: '🔗', adopted: false }
    ],
    deferred: [
      { feature: 'Native Mobile App (iOS/Android)', type: 'App', priority: 'Deferred', icon: '📱', deferred: true }
    ]
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Must Have': return 'bg-green-100 text-green-800 border-green-300'
      case 'Should Have': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Could Have': return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'Deferred': return 'bg-gray-100 text-gray-500 border-gray-300'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityDot = (priority) => {
    switch (priority) {
      case 'Must Have': return '🟢'
      case 'Should Have': return '🟡'
      case 'Could Have': return '🔵'
      case 'Deferred': return '⚪'
      default: return '⚪'
    }
  }

  const renderPhaseTable = (features, phaseTitle, phaseColor) => (
    <div className="mb-8">
      <div className={`bg-gradient-to-r ${phaseColor} p-4 rounded-t-lg`}>
        <h4 className="font-bold text-lg text-white">{phaseTitle}</h4>
      </div>
      <div className="bg-white border-2 border-gray-200 rounded-b-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase w-2/5">Feature</th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase w-1/6">Type</th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase w-1/6">Priority</th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase w-1/4">Status</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr key={index} className={`border-t border-gray-200 ${item.deferred ? 'opacity-50' : ''}`}>
                <td className={`px-4 py-4 ${item.deferred ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.feature}</span>
                    {item.adopted && (
                      <span className="inline-block bg-[#F4D58D] text-black text-xs px-2 py-1 rounded-full font-bold">
                        Adopted for Scale
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="text-xs text-gray-600">{item.type}</span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-sm">{getPriorityDot(item.priority)}</span>
                    <span className={`text-xs px-2 py-1 rounded border ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  {item.deferred ? (
                    <span className="text-xs text-gray-500 italic">Deferred to Mobile Phase</span>
                  ) : item.adopted ? (
                    <span className="text-xs text-green-600 font-semibold">✓ Implemented</span>
                  ) : (
                    <span className="text-xs text-blue-600 font-semibold">Planned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-black mb-2 text-center">Engineering Requirements</h2>
        <div className="w-24 h-1 bg-[#4dd0e1] mx-auto mb-6"></div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            After defining customer requirements, I worked with engineering to translate them into a clear technical blueprint that balanced delivery speed, scalability, and integration flexibility.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Every specification mapped directly to user value and market readiness. We prioritized an <span className="font-semibold text-[#3b82f6]">API-first architecture</span> with WordPress and Magento plugins and a payment link (BNPL merchant link) to accelerate merchant adoption, while deferring native mobile complexity to later phases for validation.
          </p>
        </div>

        {/* Phase 1 */}
        {renderPhaseTable(requirements.phase1, 'Phase 1: Foundational MVP (Months 1-3)', 'from-[#3b82f6] to-[#4dd0e1]')}

        {/* Phase 2 */}
        {renderPhaseTable(requirements.phase2, 'Phase 2: Optimization & Scale (Months 4-6)', 'from-[#FDBE34] to-[#ee6667]')}

        {/* Phase 3 */}
        {renderPhaseTable(requirements.phase3, 'Phase 3: Growth & Expansion (Months 7-9)', 'from-[#4dd0e1] to-[#3b82f6]')}

        {/* Deferred */}
        {renderPhaseTable(requirements.deferred, 'Deferred Features', 'from-gray-600 to-gray-800')}

        {/* Caption */}
        <div className="mt-8 bg-blue-50 border-l-4 border-[#3b82f6] p-6 rounded-r-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            By adopting an API-first architecture with plug-and-play merchant plugins, we accelerated time-to-market while maintaining integration flexibility. Device fingerprinting and mobile components were deliberately deferred until after MVP validation to minimize complexity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EngineeringRequirements
