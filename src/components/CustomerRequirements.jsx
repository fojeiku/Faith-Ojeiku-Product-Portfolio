function CustomerRequirements() {
  const requirements = [
    { req: 'Complete purchase without paying upfront', initial: 9, current: 10 },
    { req: 'Receive approval within 2 minutes', initial: 8, current: 9 },
    { req: 'Understand total cost with no hidden fees', initial: 9, current: 10 },
    { req: 'Minimal documentation required', initial: 7, current: 9 },
    { req: 'Flexible repayment options', initial: 8, current: 9 },
    { req: 'No collateral or guarantor needed', initial: 6, current: 8 },
    { req: 'Clear payment reminders', initial: 7, current: 9 },
    { req: 'Easy to understand eligibility', initial: 6, current: 8 },
    { req: 'Access across multiple merchants', initial: 7, current: 9 },
    { req: 'Transparent credit limit visibility', initial: 8, current: 9 },
    { req: 'Secure data handling', initial: 9, current: 10 },
    { req: 'Mobile-friendly experience', initial: 7, current: 8 }
  ]

  const getConfidenceColor = (value) => {
    if (value >= 9) return 'bg-green-500'
    if (value >= 7) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getBarWidth = (initial, current) => {
    return {
      initial: `${(initial / 10) * 100}%`,
      current: `${(current / 10) * 100}%`
    }
  }

  return (
    <section className="py-16 px-6 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-black mb-2 text-center">Customer Requirements</h2>
        <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-6"></div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To ensure we built the right product, I defined a set of core customer requirements and tracked our validation confidence. This framework allowed me to objectively assess which user needs were critical for launch and monitor how our understanding evolved through testing, ensuring we remained customer-centric in every technical decision.
          </p>
          <div className="mt-6 inline-block bg-blue-50 px-6 py-3 rounded-lg">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-[#3b82f6]">Initial Confidence:</span> How critical for launch (1-10) |
              <span className="text-[#4dd0e1] ml-2">Current Confidence:</span> Validated through testing (1-10)
            </p>
          </div>
        </div>

        {/* Requirements Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white w-2/5">Customer Requirement</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white w-1/6">Initial Confidence</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white w-1/6">Current Confidence</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white w-1/4">Confidence Growth</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((item, index) => {
                  const widths = getBarWidth(item.initial, item.current)
                  const isPriority = ['Complete purchase without paying upfront', 'Receive approval within 2 minutes', 'Understand total cost with no hidden fees', 'Minimal documentation required', 'Flexible repayment options'].includes(item.req)

                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${isPriority ? 'bg-[#F4D58D] bg-opacity-20' : 'hover:bg-gray-50'}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${isPriority ? 'font-semibold text-gray-800' : 'text-gray-700'}`}>
                            {item.req}
                          </span>
                          {isPriority && (
                            <span className="inline-block bg-[#F4D58D] text-black text-xs px-2 py-1 rounded font-bold">
                              Priority
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-8 h-8 ${getConfidenceColor(item.initial)} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {item.initial}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-8 h-8 ${getConfidenceColor(item.current)} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {item.current}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {/* Initial Bar */}
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-blue-400 h-full transition-all duration-500"
                                style={{ width: widths.initial }}
                              ></div>
                            </div>
                          </div>
                          {/* Current Bar */}
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-[#4dd0e1] h-full transition-all duration-500"
                                style={{ width: widths.current }}
                              ></div>
                            </div>
                          </div>
                          {/* Growth Indicator */}
                          <div className="text-center">
                            {item.current > item.initial && (
                              <span className="text-xs text-green-600 font-semibold">
                                +{item.current - item.initial} ↑
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 italic">
            Translating user insights into measurable product requirements
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomerRequirements
