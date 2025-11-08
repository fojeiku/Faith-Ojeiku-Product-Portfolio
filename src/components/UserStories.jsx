function UserStories() {
  const stories = [
    {
      title: 'Quick Application',
      icon: '⚡',
      color: 'from-[#3b82f6] to-[#4dd0e1]',
      role: 'a consumer shopping at a partner merchant',
      goal: 'to apply for BNPL with minimal effort and instant validation',
      benefit: 'I can complete my purchase seamlessly without lengthy forms or document uploads',
      acceptanceCriteria: [
        'Application form requires only Full Name, Phone Number, and BVN',
        'Customer consents to data retrieval via secure APIs (no file uploads required)',
        'System fetches, pre-fills and matches data (Name, DOB, Bank Info) directly from NIBSS/BVN/Technical Provider API',
        'Bank transaction data retrieved through partner API (e.g., Mono, MBS) with explicit user consent',
        'Real-time validation of BVN and account ownership before submission',
        'Application submission completes in <30 seconds'
      ],
      technicalNotes: [
        'Integrate NIBSS BVN API for identity and KYC verification',
        'Integrate banking API (e.g., Mono, Okra) for income and transaction retrieval',
        'Store anonymized metadata only (no raw document uploads)',
        'Implement client-side field validation and encryption-in-transit',
        'Log consent events for compliance auditing'
      ]
    },
    {
      title: 'Instant Decision',
      icon: '⏱️',
      color: 'from-[#FDBE34] to-[#ee6667]',
      role: 'a consumer who has submitted an application',
      goal: 'to receive an approval decision within 3 minutes',
      benefit: 'I can complete my purchase in real time without waiting for manual review',
      acceptanceCriteria: [
        'System displays "Processing Application" immediately upon submission',
        'Credit Scoring Engine processes inputs asynchronously (<120 seconds)',
        'Decision outcome automatically updates UI and triggers SMS/email notification',
        'Approved customers see available credit limit, repayment schedule, and merchant reference',
        'Rejected applicants receive a clear but compliant reason (e.g., "insufficient transaction history")',
        'All timeouts, retries, and fallbacks handled gracefully'
      ],
      technicalNotes: [
        'Asynchronous scoring workflow with event-driven architecture (queue-based)',
        'Integrate circuit breaker pattern for third-party API reliability',
        'Audit every scoring event for transparency and model tuning',
        'Decision logs stored in PostgreSQL; real-time updates published to active client sessions via WebSocket',
        'Webhooks notify merchant systems of final approval outcomes'
      ]
    },
    {
      title: 'Clear Payment Terms',
      icon: '💳',
      color: 'from-[#4dd0e1] to-[#3b82f6]',
      role: 'a consumer reviewing my approval',
      goal: 'to clearly see what I will pay and when',
      benefit: 'I can make an informed decision before accepting the BNPL offer',
      acceptanceCriteria: [
        'Display a payment schedule (e.g., 4 installments with specific due dates)',
        'Show exact repayment amounts and total purchase cost (interest rate, no hidden fees)',
        'Provide an interactive payment calculator to adjust purchase value and term length',
        'Include transparent language on consequences of late or missed payments',
        'Require explicit acceptance (checkbox + confirmation) before completing checkout'
      ],
      technicalNotes: [
        'Payment schedules generated dynamically by BNPL API service',
        'Calculations rendered client-side with rounding precision validation',
        'Acceptance logged as digital consent for regulatory compliance',
        'Payment terms delivered via SMS + email post-acceptance'
      ]
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-black mb-2 text-center">User Stories & Acceptance Criteria</h2>
        <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To deliver an instant and frictionless BNPL experience, I defined clear user stories and acceptance criteria that connected business logic with system behavior. CDL Checkout's customer journey was designed to eliminate manual uploads, replacing traditional documentation with <span className="font-semibold text-[#3b82f6]">API integrations</span> to trusted data sources like BVN, NIBSS, and open banking APIs.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            These stories ensured that engineering, design, and compliance teams shared a unified understanding of what "fast, simple, and secure" meant in production.
          </p>
        </div>

        {/* Epic Label */}
        <div className="mb-8 text-center">
          <span className="inline-block bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-bold text-sm">
            Epic: Customer Application Flow
          </span>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${story.color} p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-white">{story.title}</h3>
                  <span className="text-3xl">{story.icon}</span>
                </div>
                <div className="text-xs text-white opacity-90">User Story {index + 1}</div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4">
                {/* User Story Format */}
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-[#1E3A8A]">As</span> {story.role}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-[#1E3A8A]">I want</span> {story.goal}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#1E3A8A]">So that</span> {story.benefit}
                  </p>
                </div>

                {/* Acceptance Criteria */}
                <div>
                  <h4 className="font-bold text-xs text-gray-700 uppercase mb-2 flex items-center gap-1">
                    <span>✓</span> Acceptance Criteria
                  </h4>
                  <ul className="space-y-1">
                    {story.acceptanceCriteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-green-600 flex-shrink-0 mt-0.5">●</span>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Notes */}
                <div>
                  <h4 className="font-bold text-xs text-gray-700 uppercase mb-2 flex items-center gap-1">
                    <span>🔧</span> Technical Notes
                  </h4>
                  <ul className="space-y-1">
                    {story.technicalNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-blue-600 flex-shrink-0 mt-0.5">▸</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-8 bg-cyan-50 border-l-4 border-[#4dd0e1] p-6 rounded-r-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            CDL Checkout's customer journey replaced traditional documentation with secure API integrations, reducing onboarding friction and enabling real-time approvals without manual uploads. Delivering instant credit decisions through secure data integrations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default UserStories
