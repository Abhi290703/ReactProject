import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            MyStore
          </h2>
          <p className="text-sm">
            Your one-stop destination for quality products and valuable content.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-4">
            Get the latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-r-md text-white hover:bg-indigo-500">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>

    </footer>
  );
}

