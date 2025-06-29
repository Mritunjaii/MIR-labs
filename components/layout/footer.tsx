export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MIR Labs</h3>
            <p className="text-gray-300">
              Machine Intelligence Research Labs - A non-profit international scientific organization promoting
              excellence in Computer Science and Information Technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/membership" className="hover:text-white transition-colors">
                  Membership
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@mirlabs.org
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Machine Intelligence Research Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
