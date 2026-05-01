'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Security', href: '#security' },
      { name: 'Pricing', href: '#pricing' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  }

  return (
    <footer className="border-t border-neutral-light bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Link href="/" className="text-2xl font-black text-neutral-dark mb-6 block">
              SahulatKar<span className="text-orange-600">*</span>
            </Link>
            <p className="text-neutral-gray text-sm mb-6">
              Shariah-compliant digital custodian for ethical wealth creation and Halal financing.
            </p>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-neutral-light rounded-lg transition-colors text-neutral-gray hover:text-orange-600">
                📱
              </button>
              <button className="p-2 hover:bg-neutral-light rounded-lg transition-colors text-neutral-gray hover:text-orange-600">
                🐦
              </button>
              <button className="p-2 hover:bg-neutral-light rounded-lg transition-colors text-neutral-gray hover:text-orange-600">
                💼
              </button>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-neutral-dark mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-gray hover:text-orange-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-orange-50 rounded-2xl p-8 mb-12 border border-orange-200"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                Stay Updated on Halal Finance
              </h3>
              <p className="text-neutral-gray">
                Get the latest updates on ethical investing and Shariah-compliant products.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:border-orange-600 text-sm"
              />
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap">
                ✉️
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-neutral-light pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-gray text-sm text-center md:text-left">
            © 2024 SahulatKar. Ethical Fintech Excellence. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-gray">
            <Link href="#" className="hover:text-orange-600 transition-colors">
              NADRA Verified
            </Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">
              SECP Regulated
            </Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
