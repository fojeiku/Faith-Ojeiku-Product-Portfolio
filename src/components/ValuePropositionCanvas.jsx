function ValuePropositionCanvas() {
  return (
    <div className="space-y-12">
      {/* Consumer Segment */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#4dd0e1] p-4">
          <h3 className="font-bold text-xl text-white text-center">Consumer Value Proposition Canvas</h3>
        </div>

        <div className="p-8">
          {/* Value Proposition Canvas Image */}
          <div className="w-full">
            <img
              src="/value-prop-consumer.png"
              alt="Consumer Value Proposition Canvas"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Summary */}
          <div className="mt-8 bg-gradient-to-r from-[#3b82f6] to-[#4dd0e1] p-4 rounded-lg text-white text-center">
            <p className="text-sm font-semibold italic">
              "CDL Checkout gives consumers financial flexibility to buy now and pay later responsibly - no hidden fees, no friction, full control"
            </p>
          </div>
        </div>
      </div>

      {/* Merchant Segment */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FDBE34] to-[#ee6667] p-4">
          <h3 className="font-bold text-xl text-black text-center">Merchant Value Proposition Canvas</h3>
        </div>

        <div className="p-8">
          {/* Value Proposition Canvas Image */}
          <div className="w-full">
            <img
              src="/value-prop-merchant.png"
              alt="Merchant Value Proposition Canvas"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Summary */}
          <div className="mt-8 bg-gradient-to-r from-[#FDBE34] to-[#ee6667] p-4 rounded-lg text-black text-center">
            <p className="text-sm font-semibold italic">
              "CDL Checkout empowers merchants to increase sales, get paid faster, and grow customer loyalty without taking on credit risk"
            </p>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="text-center">
        <p className="text-sm text-gray-600 italic">
          A unified value map showing how CDL Checkout creates value for both consumers and merchants in a two-sided BNPL ecosystem
        </p>
      </div>
    </div>
  )
}

export default ValuePropositionCanvas
