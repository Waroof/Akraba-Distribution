'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Banner Image */}
      <div className="w-full h-[400px] relative flex items-center justify-center">
        <img
          src="/Warehouse2.jpg"
          alt="Akraba Distribution Warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            Value-Driven Distribution,<br />Delivered Right.
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* About Us Section */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between mb-[150px]">
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
              Liquidations, in-store deals, online wholesale, and local distribution — we’ve got it all! Whether you're a small shop or a big operation, Akraba Distribution is your one-stop source for great products at unbeatable prices.
              </p>
              <p className="text-gray-700">
              Looking for bulk discounts? Need fast, reliable delivery? Want to grab liquidation deals before they’re gone? We’re here to help!
              </p>
            </div>
            <img
              src="/AkrabaTruck.png"
              alt="Akraba Distribution Truck"
              className="w-50px] h-[250px] ml-[50px] "
            />
          </div>
        </section>

        {/* Features Section (replaces Delivery Orders) */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Wholesale Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {/* Icon: Phone/Experience */}
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">Wholesale Experience</h3>
              <p className="text-gray-700">Akraba Distribution leads the way in transforming the wholesale journey for both buyers and sellers. Whether you're expanding locally, reaching new markets, or exploring ecommerce, we're here to support your growth every step of the way.</p>
            </div>
            {/* Card 2: Extensive Network */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {/* Icon: Network/Boxes */}
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">Extensive Network</h3>
              <p className="text-gray-700">Our broad network and dedicated staff allow us to offer a wide selection of top-quality products at competitive prices. We streamline your wholesale process, saving you time, money, and effort.</p>
            </div>
            {/* Card 3: Partnerships */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {/* Icon: Handshake/Partnership */}
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12l-4 4m0 0l4 4m-4-4h16" stroke="currentColor" strokeWidth="2"/><rect x="12" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">Partnerships</h3>
              <p className="text-gray-700">We believe in building strong partnerships, not just making transactions. Our team works closely with you to tailor our offerings to your unique business needs and goals.</p>
            </div>
            {/* Card 4: More Services */}
            <div className="flex flex-col items-center text-center mb-[150px]">
              <div className="mb-4">
                {/* Icon: Services/Settings */}
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">More Services</h3>
              <p className="text-gray-700">We're always expanding our range of services to help your business thrive. From logistics support to custom solutions, we're committed to providing the tools and expertise you need to succeed.</p>
            </div>
            {/* Card 5: Delivery Orders */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {/* Icon: Delivery/Truck */}
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="7" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M16 17h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2"/><circle cx="5.5" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">Delivery Orders</h3>
              <p className="text-gray-700">We offer flexible delivery options with minimum order requirements. Enjoy free shipping in select areas and transparent policies designed to make your ordering process smooth and reliable.</p>
            </div>
            {/* Card 6: Join Us */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 ">
                {/* Icon: Join/Users */}
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold  text-red-700 mb-2">Join Us</h3>
              <p className="text-gray-700">Become part of our growing community. Whether you're an established business or just starting out, we have the products and support to help you reach new heights in wholesale.</p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-4">Get In Touch</h3>
              <p className="text-gray-700 mb-4">
                Have questions about our products or services? Our team is ready to assist you.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Address:</strong> 180 Engelwood Dr #E, Orion, MI 48359
                </p>
             
                <p>
                  <strong>Phone:</strong> ‪(248) 372-9485
                </p>
                <p>
                  <strong>Email:</strong> info@akrabanet.com
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday-Friday: 7:00 AM - 3:00 PM
                </p>
                <p>
                  <strong>-------------------------------------------------------------</strong> 
                </p>
                <p>
                  <strong>Store Address:</strong> 3222 Caniff St Hamtramck, MI 4821
                </p>
                <p>
                  <strong>Phone:</strong> ‪(248) 372-9485
                </p>
                <p>
                  <strong>Email:</strong> taha@akrabastore.com
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday-Friday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                
                {showSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">Message sent successfully!</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden py-6">
            <div className="brand-slider flex animate-scroll" style={{ width: 'max-content' }}>
              {/* First set of logos */}
              <div className="flex space-x-12 items-center mx-6">
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/BadiaBrand.png" alt="Badia Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/SharpieBrand.png" alt="Sharpie Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/RedhotBrand.png" alt="Red Hot Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/SpiceBrand.png" alt="Spice Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/GloryBrand.png" alt="Glory Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Princessa.png" alt="Princessa Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Gear.png" alt="Gear" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Ventev.png" alt="Ventev" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Del-Monte.png" alt="Del-Monte" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Bush.png" alt="Bush" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Lifeproof.png" alt="Lifeproof" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/HawaiianPunch.png" alt="Hawaiian Punch" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
              {/* Duplicate set for infinite scroll effect */}
              <div className="flex space-x-12 items-center mx-6">
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/BadiaBrand.png" alt="Badia Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/SharpieBrand.png" alt="Sharpie Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/RedhotBrand.png" alt="Red Hot Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/SpiceBrand.png" alt="Spice Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/GloryBrand.png" alt="Glory Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Princessa.png" alt="Princessa Brand" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Gear.png" alt="Gear" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Ventev.png" alt="Ventev" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Del-Monte.png" alt="Del-Monte" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Bush.png" alt="Bush" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/Lifeproof.png" alt="Lifeproof" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-32 h-20 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <img src="/HawaiianPunch.png" alt="Hawaiian Punch" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
