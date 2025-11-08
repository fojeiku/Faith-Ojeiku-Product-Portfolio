function ProductRoadmap() {
  const roadmapData = [
    {
      phase: 'Phase 1',
      title: 'Foundational MVP',
      months: 'Months 1-3',
      coreOutcome: 'Launch a fully functional BNPL product validating demand and repayment behavior',
      objective: 'Build and deploy core infrastructure for instant credit approvals, merchant integrations, and payment collection',
      deliverables: [
        'BVN Verification API (instant ID validation)',
        'Credit Scoring Engine (ML-based)',
        'Core BNPL application flow (web-first)',
        'Merchant POS Integration – API + Plugins (WordPress, Magento)',
        'Payment gateway integration (Paystack, Flutterwave)',
        'Automated payment collection system',
        'SMS/email notifications for payment status',
        'Admin console for internal operations',
        'Basic fraud detection (rules-based)',
        'Merchant settlement automation'
      ],
      successMetrics: [
        'Go-live with 20 pilot merchants',
        'Process 1,000+ applications',
        'Achieve 60%+ approval rate',
        'Maintain 95%+ repayment collection',
        'Average approval time <3 minutes'
      ],
      color: 'bg-blue-50'
    },
    {
      phase: 'Phase 2',
      title: 'Optimization & Scale',
      months: 'Months 4-6',
      coreOutcome: 'Scale merchant adoption and improve system reliability and fraud management',
      objective: 'Enhance platform performance, introduce automation for credit limits, and expand payment accessibility',
      deliverables: [
        'Enhanced fraud detection with ML (behavioral analysis)',
        'Credit limit management automation',
        'Early payment feature (no penalties)',
        'USSD payment integration for non-smartphone users',
        'Improved merchant onboarding & dashboard analytics',
        'Feedback loop integration and UI refinements',
        'System uptime optimization (target: 99%+)'
      ],
      successMetrics: [
        'Scale to 200+ merchants',
        'Process 10,000+ applications',
        'Reduce fraud to <2%',
        'Improve approval rate to 70%+',
        'Maintain 98%+ collection rate'
      ],
      color: 'bg-yellow-50'
    },
    {
      phase: 'Phase 3',
      title: 'Growth & Expansion',
      months: 'Months 7-9',
      coreOutcome: 'Drive repeat usage, ecosystem depth, and achieve positive unit economics',
      objective: 'Introduce retention mechanisms, advanced fraud tools, and scale merchant self-service capabilities',
      deliverables: [
        'Advanced Fraud Detection (Device Fingerprinting)',
        'Merchant self-serve portal',
        'Referral & loyalty program',
        'API marketplace for fintech and merchant partners',
        'Advanced analytics dashboard (portfolio & repayment insights)',
        'Multi-purchase management',
        'Mobile App (iOS/Android) - Deferred',
        'Continuous credit model optimization (AI model retraining)'
      ],
      successMetrics: [
        'Process 50,000+ monthly applications',
        'Scale to 1,000+ active merchants',
        'Achieve 40%+ repeat purchase rate',
        'Reduce fraud to <1%',
        'Business outcome: Positive unit economics'
      ],
      color: 'bg-cyan-50'
    }
  ]

  return (
    <section className="py-16 px-6 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-black mb-2 text-center">Product Roadmap</h2>
        <div className="w-24 h-1 bg-[#F4D58D] mx-auto mb-6"></div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Once priorities were established, I structured a nine-month roadmap that balanced speed, scalability, and learning velocity. We took an <span className="font-semibold text-[#3b82f6]">API-first approach</span>, launching through merchant plugins and a responsive web experience to validate adoption before committing to mobile development.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            This approach allowed us to scale early, collect data from real transactions, and defer complex builds like device fingerprinting and native apps until the value was proven.
          </p>
        </div>

        {/* Comprehensive Roadmap Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase border-r border-gray-600 w-[10%]">Phase</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase border-r border-gray-600 w-[10%]">Month(s)</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase border-r border-gray-600 w-[15%]">Core Outcome</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase border-r border-gray-600 w-[15%]">Objective</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase border-r border-gray-600 w-[30%]">Deliverables</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase w-[20%]">Success Metric</th>
                </tr>
              </thead>
              <tbody>
                {roadmapData.map((phase, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${phase.color}`}>
                    <td className="px-4 py-4 align-top border-r border-gray-200">
                      <div className="font-bold text-sm text-gray-800">{phase.phase}</div>
                      <div className="text-xs text-gray-600 mt-1">{phase.title}</div>
                    </td>
                    <td className="px-4 py-4 align-top border-r border-gray-200">
                      <div className="text-sm text-gray-700 font-semibold">{phase.months}</div>
                    </td>
                    <td className="px-4 py-4 align-top border-r border-gray-200">
                      <div className="text-sm text-gray-700 leading-relaxed">{phase.coreOutcome}</div>
                    </td>
                    <td className="px-4 py-4 align-top border-r border-gray-200">
                      <div className="text-sm text-gray-700 leading-relaxed">{phase.objective}</div>
                    </td>
                    <td className="px-4 py-4 align-top border-r border-gray-200">
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 flex-shrink-0 mt-1 text-xs">●</span>
                            <span className="text-xs text-gray-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <ul className="space-y-1">
                        {phase.successMetrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-600 flex-shrink-0 mt-1 text-xs">✓</span>
                            <span className="text-xs text-gray-700">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-[#F4D58D] p-6 rounded-r-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            By launching through merchant plugins and a responsive web dashboard, we validated the market quickly without overextending engineering resources. Strategic deferrals like mobile and device fingerprinting ensured our roadmap stayed lean, data-driven, and scalable.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductRoadmap
