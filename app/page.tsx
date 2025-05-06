export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* About Us Section */}
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Akraba Distribution is a small local distribution company serving businesses in Michigan and surrounding
              areas since 2005. We pride ourselves on reliable service and unbeatable prices.
            </p>
            <p className="text-gray-700">
              Our team of experienced professionals is dedicated to providing timely deliveries and excellent customer
              service to all our clients, from small businesses to larger operations.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center h-64">
            <p className="text-gray-500 text-center">Company Image</p>
          </div>
        </div>
      </section>

      {/* Delivery Orders Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-red-700 border-b border-gray-300 pb-2">Delivery Orders:</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>Minimum order of $1000.00 dollars is required.</li>
          <li>
            Free shipping with minimums: (not including vape, baby formula, tobacco, pallets of rock salt, water or
            pallets over 2400lb of weight.)
            <ul className="list-circle pl-5 space-y-2 mt-2">
              <li>Local area 25 mile radius from our location: $1000.00.</li>
              <li>Lansing, Flint, Port Huron, & Toledo area: $1,500.00.</li>
              <li>Ann arbor, Ypsilanti, & Surrounding area: $1,500.00.</li>
              <li>Saginaw & Grand Rapids area: $2,500.00.</li>
              <li>Columbus & Cleveland: $3,000.00.</li>
            </ul>
          </li>
          <li>
            Shipping charges may apply in some cases if shipping to Third-Party fulfillment centers or public storages.
          </li>
          <li>We have order/quantity limits in some cases.</li>
          <li>All other locations are FOB ZIP 48075.</li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-700 mb-4">
              Have questions about our products or services? Our team is ready to assist you.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Address:</strong> 123 Distribution Lane, Anytown, MI 48075
              </p>
              <p>
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong> info@akrabadistribution.com
              </p>
              <p>
                <strong>Business Hours:</strong> Monday-Friday: 7:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mb-12">
        <div className="relative overflow-hidden py-6">
          <div className="brand-slider flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-12 items-center mx-6">
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 1</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 2</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 3</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 4</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 5</span>
              </div>
            </div>
            {/* Duplicate set for infinite scroll effect */}
            <div className="flex space-x-12 items-center mx-6">
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 1</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 2</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 3</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 4</span>
              </div>
              <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
