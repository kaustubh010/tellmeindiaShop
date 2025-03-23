import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TellMeIndia</h3>
            <p className="text-sm text-gray-500">
              Natural healing for modern living. Premium Ayurvedic products for your health and wellness journey.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=supplements" className="text-gray-500 hover:text-green-600">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/shop?category=teas-beverages" className="text-gray-500 hover:text-green-600">
                  Teas & Beverages
                </Link>
              </li>
              <li>
                <Link href="/shop?category=skincare" className="text-gray-500 hover:text-green-600">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/shop?category=wellness-kits" className="text-gray-500 hover:text-green-600">
                  Wellness Kits
                </Link>
              </li>
              <li>
                <Link href="/shop?category=new-arrivals" className="text-gray-500 hover:text-green-600">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bestsellers" className="text-gray-500 hover:text-green-600">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-green-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-green-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-500 hover:text-green-600">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-500 hover:text-green-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-500 hover:text-green-600">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-green-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-green-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TellMeIndia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

