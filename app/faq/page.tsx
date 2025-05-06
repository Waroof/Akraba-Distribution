export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b border-gray-300 pb-2">
        Frequently Asked Questions
      </h1>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">To all eCommerce and 3rd party clients,</h2>
        <p className="text-lg text-gray-700 mb-6">
          Some of the brands we carry might not be authorized for resale on some platforms such as Amazon and Walmart.
          Please do your due diligence to obtain letter of authorization(LOAs) from the brand maker before purchases,
          please note brands may change their policies without notice, therefore we do not provide LOAs, manufacturer
          invoices or any other documents your platform might require, we will only provide our invoices. All goods are
          obtained legitimately under properly established distributional routes, all other information is strictly
          confidential to us.
        </p>

        <div className="mb-8">
          <p className="font-medium">Akraba Distribution</p>
          <p>123 Distribution Lane</p>
          <p>Anytown, MI 48075</p>
          <p>T: (555) 123-4567</p>
          <p>F: (555) 123-4568</p>
          <p>
            <a href="mailto:info@akrabadistribution.com" className="text-red-700">
              info@akrabadistribution.com
            </a>
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">What are your minimum order requirements?</h3>
          <p className="text-gray-700">
            For delivery orders, the minimum is $1,000.00. For pickup orders, new customers must place a minimum order
            of $500.00, while returning customers have a minimum of $250.00.
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Do you offer free shipping?</h3>
          <p className="text-gray-700">
            Yes, we offer free shipping with minimum order requirements that vary by location. Please see our delivery
            information on the homepage for specific details.
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">What is your return policy?</h3>
          <p className="text-gray-700">
            All returns are subject to a 15% restocking fee. All claims must be made within 48 hours of receiving the
            order.
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">How do I place an order?</h3>
          <p className="text-gray-700">
            You can place an order by calling our office at (555) 123-4567 during business hours, or by logging into
            your account on our website if you're an existing customer.
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">What payment methods do you accept?</h3>
          <p className="text-gray-700">
            We accept cash, checks, and all major credit cards. Please note that all credit card payments are subject to
            a 2% processing fee.
          </p>
        </div>

        <div className="bg-white p-6 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">What areas do you serve?</h3>
          <p className="text-gray-700">
            We primarily serve Michigan and surrounding areas, including Lansing, Flint, Port Huron, Toledo, Ann Arbor,
            Ypsilanti, Saginaw, Grand Rapids, Columbus, and Cleveland.
          </p>
        </div>
      </div>
    </div>
  )
}
