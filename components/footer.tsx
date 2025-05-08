import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Akraba Distribution</h3>
            <p className="text-gray-600">Your reliable local distribution partner since 2015.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-red-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-red-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-red-700">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-600">
              <p>180 Engelwood Dr #E </p>
              <p>Orion, MI 48359</p>
              <p className="mt-2">Phone: (248) 372-9485</p>
              <p>Email: info@akrabanet.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Akraba Distribution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
