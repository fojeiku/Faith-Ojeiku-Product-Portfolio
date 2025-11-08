function CompetitiveLandscape() {
  const traditionalOptions = [
    {
      option: 'Credit Cards',
      pros: 'Builds credit',
      cons: 'High interest (24%+), annual fees',
      position: 'Premium, excludes mass market'
    },
    {
      option: 'Bank Loans',
      pros: 'Large amounts',
      cons: '+21 days approval, collateral required',
      position: 'Too slow for POS purchases'
    },
    {
      option: 'Merchant Credit',
      pros: 'In-house financing',
      cons: 'Limited to single merchant, poor UX',
      position: 'Fragmented, not scalable'
    }
  ]

  const bnplPlayers = [
    {
      competitor: 'Carbon (PayLater)',
      strengths: 'First mover, digital lending expertise',
      weaknesses: 'Limited merchant network',
      position: 'Broader digital lending play',
      highlight: false
    },
    {
      competitor: 'FairMoney',
      strengths: 'Fast approval, mobile-first',
      weaknesses: 'High interest rates',
      position: 'Consumer loans primary / BNPL secondary',
      highlight: false
    },
    {
      competitor: 'Branch',
      strengths: 'AI-powered risk, multi-market',
      weaknesses: 'Not Nigeria-focused / weak local presence',
      position: 'Regional lender not localized',
      highlight: false
    },
    {
      competitor: 'CDL Checkout',
      strengths: 'Largest merchant network (3,000+), lowest interest, sub-3 min approval, trusted brand',
      weaknesses: '–',
      position: 'Market Leader / Nigeria-Focused BNPL Platform',
      highlight: true
    }
  ]

  return (
    <div className="space-y-8">
      {/* Traditional Credit Options */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-4">
          <h3 className="font-bold text-xl text-white text-center">Traditional Credit Options</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-1/5">Option</th>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-1/5">Pros</th>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-1/5">Cons</th>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-2/5">Market Position</th>
              </tr>
            </thead>
            <tbody>
              {traditionalOptions.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 text-sm font-semibold text-gray-800">
                    {item.option}
                  </td>
                  <td className="border border-gray-300 p-3 text-sm text-gray-700">
                    {item.pros}
                  </td>
                  <td className="border border-gray-300 p-3 text-sm text-[#ee6667]">
                    {item.cons}
                  </td>
                  <td className="border border-gray-300 p-3 text-sm text-gray-600 italic">
                    {item.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BNPL Players */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#4dd0e1] p-4">
          <h3 className="font-bold text-xl text-white text-center">BNPL Players</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-1/5">Competitor</th>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-1/5">Strengths</th>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-1/5">Weaknesses</th>
                <th className="border border-gray-300 p-3 text-left font-bold text-sm text-gray-700 w-2/5">Market Position</th>
              </tr>
            </thead>
            <tbody>
              {bnplPlayers.map((item, index) => (
                <tr
                  key={index}
                  className={item.highlight ? 'bg-[#F4D58D] bg-opacity-30' : 'hover:bg-gray-50'}
                >
                  <td className={`border border-gray-300 p-3 text-sm font-semibold ${item.highlight ? 'text-[#3b82f6]' : 'text-gray-800'}`}>
                    {item.competitor}
                    {item.highlight && (
                      <div className="mt-1">
                        <span className="inline-block bg-[#FDBE34] text-black text-xs px-2 py-1 rounded font-bold">
                          Competitive Advantage
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="border border-gray-300 p-3 text-sm text-green-700">
                    {item.strengths}
                  </td>
                  <td className="border border-gray-300 p-3 text-sm text-[#ee6667]">
                    {item.weaknesses}
                  </td>
                  <td className={`border border-gray-300 p-3 text-sm ${item.highlight ? 'text-[#3b82f6] font-semibold' : 'text-gray-600 italic'}`}>
                    {item.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Metrics Comparison */}
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h4 className="font-bold text-lg text-center text-gray-800 mb-4">Key Metrics Comparison</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg border-l-4 border-[#3b82f6]">
            <div className="text-2xl font-bold text-[#3b82f6] mb-1">&lt;3 min</div>
            <div className="text-xs text-gray-600 font-semibold">Approval Speed</div>
            <div className="text-xs text-gray-500 mt-1">vs +21 days (Banks)</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-1">Lowest</div>
            <div className="text-xs text-gray-600 font-semibold">Interest Rate</div>
            <div className="text-xs text-gray-500 mt-1">vs 24%+ (Cards)</div>
          </div>
          <div className="text-center p-4 bg-cyan-50 rounded-lg border-l-4 border-[#4dd0e1]">
            <div className="text-2xl font-bold text-[#4dd0e1] mb-1">3,000+</div>
            <div className="text-xs text-gray-600 font-semibold">Merchant Network</div>
            <div className="text-xs text-gray-500 mt-1">Largest in Nigeria</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg border-l-4 border-[#FDBE34]">
            <div className="text-2xl font-bold text-[#FDBE34] mb-1">#1</div>
            <div className="text-xs text-gray-600 font-semibold">User Trust</div>
            <div className="text-xs text-gray-500 mt-1">Trusted brand</div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-sm text-gray-600 italic">
          Analysis based on market data and user experience benchmarks. CDL Checkout positioned as Nigeria's fastest, most inclusive BNPL solution.
        </p>
      </div>
    </div>
  )
}

export default CompetitiveLandscape
