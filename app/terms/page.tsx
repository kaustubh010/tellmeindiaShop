import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Terms & Conditions</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-green max-w-none">
          <p>
            Welcome to TellMeIndia. These Terms & Conditions govern your use of our website and the purchase of products from our online store. By accessing our website or placing an order, you agree to be bound by these Terms & Conditions. Please read them carefully.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
          <p>
            We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users, us, or third parties, or for any other reason.
          </p>

          <h2>3. Products and Orders</h2>
          <p>
            All product descriptions, including pricing and availability, are subject to change at any time without notice. We reserve the right to limit the quantity of items purchased per order or per customer.
          </p>
          <p>
            Your order represents an offer to purchase a product that is accepted by us when we send an order confirmation email. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or problems identified by our fraud detection systems.
          </p>

          <h2>4. Pricing and Payment</h2>
          <p>
            All prices are displayed in USD and are exclusive of taxes unless otherwise stated. Applicable taxes will be added at checkout. Shipping costs are calculated and displayed during the checkout process.
          </p>
          <p>
            We accept various payment methods as indicated on our website. By providing payment information, you represent and warrant that you have the legal right to use the payment method and that the information you provide is accurate.
          </p>

          <h2>5. Shipping and Delivery</h2>
          <p>
            We will make every effort to deliver products within the estimated timeframes. However, delivery times are not guaranteed, and delays may occur due to factors beyond our control. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
          </p>

          <h2>6. Returns and Refunds</h2>
          <p>
            Our return and refund policy is detailed on our Shipping & Returns page. By making a purchase, you agree to the terms of this policy.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of TellMeIndia or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
          </p>

          <h2>8. User Content</h2>
          <p>
            By posting, uploading, or submitting any content to our website (including product reviews, comments, or feedback), you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
          </p>
          <p>
            You represent and warrant that you own or control all rights to the content you submit, that the content is accurate, and that use of the content does not violate these Terms & Conditions and will not cause injury to any person or entity.
          </p>

          <h2>9. Prohibited Activities</h2>
          <p>
            You may not use our website for any illegal or unauthorized purpose. You agree not to:
          </p>
          <ul>
            <li>Violate any laws, regulations, or third-party rights</li>
            <li>Use the website to transmit harmful code or interfere with its functionality</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
            <li>Use the website to collect user information without consent</li>
            <li>Engage in any activity that disrupts or impairs the website's functionality</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
          </ul>

          <h2>10. Disclaimers and Limitations of Liability</h2>
          <p>
            THE WEBSITE AND ALL PRODUCTS ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR SERVER ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          <p>
            IN NO EVENT WILL WE, OUR AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE WEBSITE OR PRODUCTS, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2>11. Health Disclaimer</h2>
          <p>
            The information provided on our website regarding Ayurvedic products is for informational purposes only and is not intended as medical advice. Our products are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before starting any new dietary supplement or treatment.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless TellMeIndia, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms & Conditions or your use of the website.
          </p>

          <h2>13. Governing Law and Jurisdiction</h2>
          <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without giving effect to any principles of conflicts of law. Any legal action or proceeding arising out of or relating to these Terms & Conditions shall be instituted in the courts of [Jurisdiction], and you consent to the jurisdiction of such courts.
          </p>

          <h2>14. Dispute Resolution</h2>
          <p>
            Any dispute arising out of or relating to these Terms & Conditions shall first be attempted to be resolved through good faith negotiations. If such negotiations fail, the dispute shall be submitted to binding arbitration in accordance with the rules of [Arbitration Association], and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.
          </p>

          <h2>15. Changes to Terms & Conditions</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. All changes are effective immediately when posted and apply to all access to and use of the website thereafter. Your continued use of the website following the posting of revised Terms & Conditions means that you accept and agree to the changes.
          </p>

          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms & Conditions is held to be invalid, illegal, or unenforceable, such provision shall be eliminated or limited to the minimum extent necessary so that the remaining provisions will continue in full force and effect.
          </p>

          <h2>17. Entire Agreement</h2>
          <p>
            These Terms & Conditions, together with our Privacy Policy and any other policies or agreements referenced herein, constitute the entire agreement between you and TellMeIndia regarding the website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
          </p>

          <h2>18. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p>
            TellMeIndia<br />
            Email: legal@TellMeIndia.com<br />
            Phone: (555) 123-4567<br />
            Address: 123 Wellness Street, Harmony City, HC 12345
          </p>
        </div>
      </div>
    </div>
  )
}
