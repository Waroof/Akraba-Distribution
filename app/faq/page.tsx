export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b border-gray-300 pb-2">
        Frequently Asked Questions
      </h1>

      <div className="mb-10 bg-white p-6 border border-gray-300 rounded" >
        <h2 className="text-4xl font-bold mb-4 text-gray-800">To all eCommerce and 3rd party clients,</h2>
        <p className="text-2xl text-gray-700 mb-6">
        Please be advised that some of the brands we distribute may have resale restrictions on platforms such as Amazon, Walmart, and others. It is your responsibility to confirm whether brand authorization is required and to obtain any necessary Letters of Authorization (LOAs) directly from the brand owner prior to making a purchase. Please note that brand policies are subject to change without notice. As a distributor, we do not issue LOAs, manufacturer authorization, or platform-specific documentation. We will provide our company invoice as proof of purchase only. All products we supply are sourced through legitimate and established distribution channels. Further sourcing details and supplier relationships are considered proprietary and will remain confidential.
        </p>

        <div className="mb-8">
          <p className="font-medium">Akraba Distribution</p>
        
          <p>
            <a href="mailto:info@akrabanet.com" className="text-red-700">
              info@akrabanet.com
            </a>
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Product List Availability?</h3>
          <p className="text-gray-700">
          Please note that we do not provide a master product list.
All items must be browsed and purchased through our online portal.

          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Labeling Policy?</h3>
          <p className="text-gray-700">
          We do not label individual boxes for retail or e-commerce packaging.

          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">International Shipment?</h3>
          <p className="text-gray-700">
          We supply both domestic and international buyers, including shipments to the Middle East. Buyers are responsible for handling all import logistics and ensuring compliance with the destination country’s import regulations.
            
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Lead Time?</h3>
          <p className="text-gray-700">
          Most orders are shipped within 48-72  hours of receiving payment.
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Return Policy?</h3>
          <p className="text-gray-700">
          If you're not satisfied with your purchase, you may return items within 5 business days of receipt.
          Returns may be subject to:
          </p>
          <p>A 15% restocking fee, and

Return shipping costs, where applicable.
Please note, all returns must be approved by our team in advance.</p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Order Minimum?</h3>
          <p className="text-gray-700">
          Minimum order requirements depend on your delivery location.
Customers located within a 45-mile radius of our facility are not subject to a minimum order.
For all other areas, minimums may apply.
Once your order is submitted, our sales team will reach out to confirm details and arrange payment.
Please note that shipping fees may apply.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Shipping to Residential Address?</h3>
          <p className="text-gray-700">
          In certain cases, we can accommodate residential deliveries.
Please contact our team for more details.
          </p>
        </div>
      </div>
    </div>
  )
}
