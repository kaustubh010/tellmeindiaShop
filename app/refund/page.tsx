import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Refund & Cancellation Policy</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Refund & Cancellation Policy</h1>
        <p className="text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-green max-w-none">
          <p>
            At Ayurveda, we strive to ensure your complete satisfaction with every purchase. This Refund and
            Cancellation Policy outlines the procedures and guidelines for returns, refunds, and order cancellations.
            Please read this policy carefully before making a purchase.
          </p>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h2 className="text-xl font-semibold text-green-800 mt-0">Quick Reference Guide</h2>
            <ul className="mt-4 space-y-2">
              <li>Return Window: 30 days from delivery date</li>
              <li>Unopened Products: Full refund available</li>
              <li>Opened Products: Case-by-case evaluation</li>
              <li>Order Cancellation: Available until order is shipped</li>
              <li>Return Shipping: Customer responsibility (except for defective items)</li>
              <li>Refund Processing: 5-10 business days after return is received</li>
            </ul>
          </div>

          <h2 id="table-of-contents">Table of Contents</h2>
          <ul>
            <li>
              <a href="#return-policy" className="text-green-600 hover:text-green-800">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#refund-policy" className="text-green-600 hover:text-green-800">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#cancellation-policy" className="text-green-600 hover:text-green-800">
                Cancellation Policy
              </a>
            </li>
            <li>
              <a href="#exceptions" className="text-green-600 hover:text-green-800">
                Exceptions and Non-Returnable Items
              </a>
            </li>
            <li>
              <a href="#damaged-items" className="text-green-600 hover:text-green-800">
                Damaged or Defective Items
              </a>
            </li>
            <li>
              <a href="#international-returns" className="text-green-600 hover:text-green-800">
                International Returns
              </a>
            </li>
            <li>
              <a href="#contact-us" className="text-green-600 hover:text-green-800">
                Contact Us
              </a>
            </li>
          </ul>

          <h2 id="return-policy">1. Return Policy</h2>
          <h3>1.1 Return Eligibility</h3>
          <p>
            You may return most new, unopened items within 30 days of delivery for a full refund. We also accept returns
            of opened items within 30 days of delivery, but these will be evaluated on a case-by-case basis, considering
            the nature and condition of the product.
          </p>

          <h3>1.2 Return Process</h3>
          <p>To initiate a return, please follow these steps:</p>
          <ol>
            <li>
              Contact our customer service team at returns@ayurveda.com or call (555) 123-4567 to request a return
              authorization.
            </li>
            <li>
              Include your order number, the items you wish to return, and the reason for the return in your
              communication.
            </li>
            <li>
              Our team will review your request and provide you with return instructions within 1-2 business days.
            </li>
            <li>
              Package the item(s) securely in their original packaging if possible, including any accessories, manuals,
              or free items that came with the product.
            </li>
            <li>
              Include a copy of your receipt or packing slip inside the package and clearly mark the return
              authorization number on the outside of the package.
            </li>
            <li>Ship the package to the address provided in the return instructions.</li>
          </ol>

          <h3>1.3 Return Shipping</h3>
          <p>
            Customers are responsible for return shipping costs unless the return is due to our error (you received an
            incorrect or defective item). We recommend using a trackable shipping service or purchasing shipping
            insurance for items of value.
          </p>

          <h3>1.4 Return Condition Requirements</h3>
          <p>To be eligible for a return, your item must be:</p>
          <ul>
            <li>In the same condition that you received it</li>
            <li>In the original packaging, when possible</li>
            <li>Complete with all components and accessories</li>
            <li>Accompanied by the receipt or proof of purchase</li>
          </ul>

          <h2 id="refund-policy">2. Refund Policy</h2>
          <h3>2.1 Refund Processing</h3>
          <p>
            Once we receive and inspect your return, we will notify you about the status of your refund. If approved,
            your refund will be processed, and a credit will automatically be applied to your original method of payment
            within 5-10 business days.
          </p>

          <h3>2.2 Refund Methods</h3>
          <p>Refunds will be issued using the following methods:</p>
          <ul>
            <li>
              <strong>Original Payment Method:</strong> Credit/debit card purchases will be refunded to the original
              card used for the purchase.
            </li>
            <li>
              <strong>Store Credit:</strong> In some cases, we may offer store credit instead of a monetary refund,
              particularly for opened items or returns without receipt.
            </li>
            <li>
              <strong>Exchange:</strong> You may choose to exchange your item for another product of equal value instead
              of receiving a refund.
            </li>
          </ul>

          <h3>2.3 Partial Refunds</h3>
          <p>Partial refunds may be granted in the following circumstances:</p>
          <ul>
            <li>Item shows signs of use or wear beyond inspection</li>
            <li>Item has been opened (for certain product categories)</li>
            <li>Components or accessories are missing</li>
            <li>Item was purchased as part of a bundle or promotional discount</li>
          </ul>

          <h3>2.4 Refund Deductions</h3>
          <p>
            Please note that shipping costs are non-refundable. If you received free shipping on your order, the
            standard shipping cost will be deducted from your refund amount.
          </p>

          <h2 id="cancellation-policy">3. Cancellation Policy</h2>
          <h3>3.1 Order Cancellation</h3>
          <p>
            You may cancel an order at any time before it has been shipped. Once an order has been shipped, it cannot be
            canceled, but you may return it according to our return policy after receiving it.
          </p>

          <h3>3.2 Cancellation Process</h3>
          <p>To cancel an order, please follow these steps:</p>
          <ol>
            <li>
              Log into your account and check your order status. If the status is "Processing" or "Payment Confirmed,"
              you may be able to cancel it directly from your account dashboard.
            </li>
            <li>
              If you cannot cancel through your account, contact our customer service team immediately at
              orders@ayurveda.com or call (555) 123-4567 with your order number and cancellation request.
            </li>
            <li>
              Our team will confirm whether your order can be canceled and will provide confirmation of the cancellation
              if processed.
            </li>
          </ol>

          <h3>3.3 Cancellation Timeframe</h3>
          <p>
            We process orders quickly to ensure fast delivery. Therefore, we cannot guarantee that an order can be
            canceled once it has been placed, but we will make every reasonable effort to accommodate cancellation
            requests received within 2 hours of order placement.
          </p>

          <h3>3.4 Refund for Canceled Orders</h3>
          <p>
            If your order is successfully canceled before shipping, you will receive a full refund, including any
            shipping charges, to your original payment method within 5-10 business days.
          </p>

          <h2 id="exceptions">4. Exceptions and Non-Returnable Items</h2>
          <p>Certain items cannot be returned or may have special return conditions:</p>
          <ul>
            <li>
              <strong>Perishable goods:</strong> Due to their nature, certain Ayurvedic herbs, fresh products, or items
              with a limited shelf life cannot be returned once opened.
            </li>
            <li>
              <strong>Personal care items:</strong> For hygiene reasons, skincare products, oils, and personal care
              items cannot be returned if opened or used, unless they are defective.
            </li>
            <li>
              <strong>Sale items:</strong> Items marked as "Final Sale," "Clearance," or "Non-Returnable" cannot be
              returned or exchanged.
            </li>
            <li>
              <strong>Gift cards:</strong> Gift cards and e-gift certificates are not returnable or refundable.
            </li>
            <li>
              <strong>Customized products:</strong> Custom-made or personalized products cannot be returned unless they
              are defective.
            </li>
            <li>
              <strong>Digital products:</strong> Downloaded digital content is not eligible for return or refund once
              access has been provided.
            </li>
          </ul>

          <h2 id="damaged-items">5. Damaged or Defective Items</h2>
          <h3>5.1 Reporting Damaged Items</h3>
          <p>
            If you receive a damaged or defective item, please contact us within 48 hours of delivery at
            quality@ayurveda.com with photos of the damaged item and packaging. We take quality control very seriously
            and will work quickly to resolve the issue.
          </p>

          <h3>5.2 Replacement or Refund for Damaged Items</h3>
          <p>
            For damaged or defective items, we offer the following solutions at our discretion and based on product
            availability:
          </p>
          <ul>
            <li>Replacement of the same item</li>
            <li>Store credit for the full amount plus shipping</li>
            <li>Full refund including original shipping costs</li>
          </ul>

          <h3>5.3 Return Shipping for Damaged Items</h3>
          <p>
            If you need to return a damaged or defective item, we will provide a prepaid return shipping label or
            reimburse your return shipping costs. Please do not return damaged items without contacting us first.
          </p>

          <h2 id="international-returns">6. International Returns</h2>
          <p>
            For international orders, our standard return policy applies with the following additional considerations:
          </p>
          <ul>
            <li>
              The return window remains 30 days, but we allow additional transit time for international shipments.
            </li>
            <li>
              Customers are responsible for all return shipping costs, duties, and taxes associated with international
              returns.
            </li>
            <li>
              Please mark returned packages as "Returned Merchandise" to avoid additional customs charges. We cannot
              refund any customs fees you paid on your original order.
            </li>
            <li>
              International refunds may take longer to process due to banking systems and may be subject to currency
              exchange rate fluctuations.
            </li>
          </ul>

          <h2 id="contact-us">7. Contact Us</h2>
          <p>If you have any questions about our Refund and Cancellation Policy, please contact us:</p>
          <ul>
            <li>
              <strong>Email:</strong> support@ayurveda.com
            </li>
            <li>
              <strong>Phone:</strong> (555) 123-4567
            </li>
            <li>
              <strong>Mail:</strong> Ayurveda Customer Service, 123 Wellness Street, Harmony City, HC 12345
            </li>
            <li>
              <strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM EST
            </li>
          </ul>

          <p className="mt-8">
            This Refund and Cancellation Policy was last updated on{" "}
            {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} and applies to
            all purchases made on or after this date. We reserve the right to modify this policy at any time, so please
            review it periodically.
          </p>
        </div>
      </div>
    </div>
  )
}
