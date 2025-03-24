import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Privacy Policy</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-green max-w-none">
          <p>
            At TellMeIndia, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or make a purchase. Please read this
            Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood,
            and agree to be bound by all the terms of this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information from you when you register on our site, place an order, subscribe to our newsletter,
            respond to a survey, fill out a form, or engage with our website in any other way. The information we
            collect may include:
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
            <li>Date of birth (if provided)</li>
          </ul>

          <h3>Payment Information</h3>
          <p>When you make a purchase, our payment processors collect payment information, which may include:</p>
          <ul>
            <li>Credit card numbers</li>
            <li>Billing addresses</li>
            <li>Other payment details</li>
          </ul>
          <p>
            We do not store complete credit card information on our servers. This information is processed securely
            through our payment processors.
          </p>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed</li>
            <li>Time and date of your visit</li>
            <li>Time spent on those pages</li>
            <li>Other statistics</li>
          </ul>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, pixels, and similar tracking technologies to collect information about your
            browsing activities. These technologies help us analyze website traffic, customize content, and improve your
            experience. For more information about our use of cookies, please see the "Cookies and Other Tracking
            Technologies" section below.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect from you for the following purposes:</p>
          <ul>
            <li>To process and fulfill your orders</li>
            <li>To provide customer service and respond to inquiries</li>
            <li>To send transactional emails (order confirmations, shipping updates, etc.)</li>
            <li>To send promotional emails and newsletters (if you have opted in)</li>
            <li>To personalize your experience and deliver content relevant to your interests</li>
            <li>To improve our website, products, and services</li>
            <li>To administer contests, promotions, surveys, or other site features</li>
            <li>To prevent fraudulent transactions and monitor against theft</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We may share your information with the following third parties:</p>

          <h3>Service Providers</h3>
          <p>
            We may share your information with third-party service providers who perform services on our behalf, such as
            payment processing, order fulfillment, shipping, customer service, web hosting, data analysis, email
            delivery, and marketing assistance.
          </p>

          <h3>Business Partners</h3>
          <p>
            We may share your information with business partners to offer you certain products, services, or promotions
            that may be of interest to you.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in response to valid requests by public
            authorities (e.g., a court or government agency).
          </p>

          <h3>Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may
            be transferred as part of that transaction.
          </p>

          <h3>With Your Consent</h3>
          <p>We may share your information with third parties when we have your consent to do so.</p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal
            information. However, please be aware that no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your
            personal information, we cannot guarantee its absolute security.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes for which it
            was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. To
            determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal
            information, the potential risk of harm from unauthorized use or disclosure, and applicable legal
            requirements.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to erase your personal information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h3>Marketing Communications</h3>
          <p>
            You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link in any
            email we send, or by contacting us using the information provided below. Please note that even if you opt
            out of marketing communications, we may still send you transactional emails related to your account or
            purchases.
          </p>

          <h2>7. Cookies and Other Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            They are sent to your browser from a website and stored on your device.
          </p>
          <p>We use the following types of cookies:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and
              cannot be switched off in our systems.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can
              measure and improve the performance of our site.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality
              and personalization.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners
              to build a profile of your interests and show you relevant advertisements on other sites.
            </li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our website.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility
            for the content, privacy policies, or practices of any third-party sites or services. We encourage you to
            review the privacy policy of every site you visit.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and you are aware that your child has
            provided us with personal information, please contact us so that we can take necessary actions.
          </p>

          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than the country in which you
            reside. These countries may have data protection laws that are different from the laws of your country. By
            using our website or providing us with your information, you consent to this transfer, storage, and
            processing.
          </p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this
            Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            TellMeIndia
            <br />
            Email: privacy@TellMeIndia.com
            <br />
            Phone: (555) 123-4567
            <br />
            Address: 123 Wellness Street, Harmony City, HC 12345
          </p>

          <h2>13. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA)
            regarding your personal information, including:
          </p>
          <ul>
            <li>The right to know what personal information we collect, use, disclose, and sell</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to opt-out of the sale of your personal information</li>
            <li>The right to non-discrimination for exercising your CCPA rights</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            above.
          </p>

          <h2>14. GDPR Compliance</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the
            General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend,
            delete, or limit the use of your personal information.
          </p>
          <p>The legal basis for processing your personal information is:</p>
          <ul>
            <li>Performance of a contract when we provide you with products or services</li>
            <li>Your consent when you choose to receive marketing communications</li>
            <li>Legitimate interests to improve our services and protect our legal rights</li>
            <li>Compliance with legal obligations</li>
          </ul>
          <p>
            If you wish to be informed about what personal information we hold about you and if you want it to be
            removed from our systems, please contact us using the information provided in the "Contact Us" section
            above.
          </p>
        </div>
      </div>
    </div>
  )
}

