function CustomerJourneyMap() {
  const stages = [
    {
      id: 1,
      name: 'Awareness',
      color: 'bg-orange-100',
      borderColor: 'border-orange-400',
      thoughts: 'I need a laptop but I can\'t afford full ₦250K now, is there a legit flexible option?',
      action: 'Browses electronics stores & sees "Pay in 4" CTA messaging',
      goal: 'Discover affordable purchase options',
      painPoint: 'Hard to tell which BNPL solution is trustworthy',
      solution: 'Targeted content + merchant banners to educate on BNPL'
    },
    {
      id: 2,
      name: 'Research & Planning',
      color: 'bg-blue-100',
      borderColor: 'border-blue-500',
      thoughts: 'Will I qualify? What documents do they need? Is CDL safe?',
      action: 'Reads CDL FAQs & uses repayment calculator',
      goal: 'Understand eligibility & real cost',
      painPoint: 'Too much jargon, unclear criteria',
      solution: 'Eligibility checklist + transparent fee calculator'
    },
    {
      id: 3,
      name: 'Purchase Decision',
      color: 'bg-purple-100',
      borderColor: 'border-purple-500',
      thoughts: 'Hope this approval is fast. I don\'t want stress or hidden fees.',
      action: 'Selects "Pay with CDL Checkout" & submits BVN',
      goal: 'Get quick approval & complete purchase',
      painPoint: 'Anxiety while waiting for decision',
      solution: '90-second approval engine + status indicator'
    },
    {
      id: 4,
      name: 'Post-Purchase',
      color: 'bg-green-100',
      borderColor: 'border-green-500',
      thoughts: 'I\'m glad I got approved, when exactly is my first repayment date?',
      action: 'Checks dashboard & sets payment reminders',
      goal: 'Track balance & avoid missing payments',
      painPoint: 'Due dates not visible enough or notified clearly',
      solution: 'Auto reminders + simple balance dashboard + autopay'
    },
    {
      id: 5,
      name: 'Repayment & Beyond',
      color: 'bg-teal-100',
      borderColor: 'border-teal-500',
      thoughts: 'This is easier than I expected. I\'d like higher limits in future.',
      action: 'Pays instalments, reviews balance, shares referral link',
      goal: 'Build history, unlock better limits, repeat usage',
      painPoint: 'No rewards for good payers / little clarity on limit increases',
      solution: 'Loyalty rewards, limit increase for on-time payments, referral bonuses'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3b82f6] to-[#4dd0e1] p-4 text-white">
        <h3 className="font-bold text-xl mb-1">CDL Checkout BNPL Customer Journey</h3>
        <p className="text-sm opacity-90">
          <span className="font-semibold">Persona:</span> Chioma Adeyemi (Paying Customer) - Mapping awareness to repayment
        </p>
      </div>

      {/* Journey Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Stage Headers */}
          <thead>
            <tr>
              <th className="w-32 bg-gray-100 border border-gray-300 p-3 text-left font-bold text-sm text-gray-700">
                Stage
              </th>
              {stages.map((stage) => (
                <th
                  key={stage.id}
                  className={`${stage.color} ${stage.borderColor} border-l-4 border-t border-r border-b border-gray-300 p-3 text-center font-bold text-sm text-gray-800`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-700">
                      {stage.id}
                    </span>
                    <span>{stage.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Customer Thoughts & Feelings */}
            <tr>
              <td className="bg-gray-50 border border-gray-300 p-3 font-semibold text-xs text-gray-700">
                Customer Thoughts & Feelings
              </td>
              {stages.map((stage) => (
                <td key={`thoughts-${stage.id}`} className="border border-gray-300 p-3 text-xs text-gray-700 italic align-top">
                  {stage.thoughts}
                </td>
              ))}
            </tr>

            {/* Customer Actions */}
            <tr>
              <td className="bg-gray-50 border border-gray-300 p-3 font-semibold text-xs text-gray-700">
                Customer Actions
              </td>
              {stages.map((stage) => (
                <td key={`act-${stage.id}`} className="border border-gray-300 p-3 text-xs text-gray-700 bg-blue-50 align-top">
                  {stage.action}
                </td>
              ))}
            </tr>

            {/* Customer Goals */}
            <tr>
              <td className="bg-gray-50 border border-gray-300 p-3 font-semibold text-xs text-gray-700">
                Customer Goals
              </td>
              {stages.map((stage) => (
                <td key={`goal-${stage.id}`} className="border border-gray-300 p-3 text-xs text-gray-700 bg-green-50 align-top">
                  {stage.goal}
                </td>
              ))}
            </tr>

            {/* Pain Points */}
            <tr>
              <td className="bg-gray-50 border border-gray-300 p-3 font-semibold text-xs text-gray-700">
                Pain Points
              </td>
              {stages.map((stage) => (
                <td key={`pain-${stage.id}`} className="border border-gray-300 p-3 text-xs text-gray-700 bg-red-50 align-top">
                  {stage.painPoint}
                </td>
              ))}
            </tr>

            {/* Possible Solutions */}
            <tr>
              <td className="bg-gray-50 border border-gray-300 p-3 font-semibold text-xs text-gray-700">
                Possible Solutions
              </td>
              {stages.map((stage) => (
                <td key={`solution-${stage.id}`} className="border border-gray-300 p-3 text-xs text-gray-700 bg-teal-50 align-top">
                  {stage.solution}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="p-4 bg-gradient-to-r from-orange-50 to-blue-50 border-t-4 border-[#3b82f6]">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Product Insight:</span> These insights directly influenced our differentiation strategy anchored on transparency, simplicity, and control.
        </p>
      </div>
    </div>
  )
}

export default CustomerJourneyMap
