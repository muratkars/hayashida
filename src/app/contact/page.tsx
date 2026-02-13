import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us | Meridian Capital Group",
  description:
    "Get in touch with Meridian Capital Group. Find office locations, contact details, and submit inquiries for our global financial services teams.",
};

const offices = [
  {
    city: "New York (Headquarters)",
    address: "One World Financial Center, 200 Liberty Street, New York, NY 10281",
    phone: "+1-212-000-0000",
  },
  {
    city: "Frankfurt",
    address: "Taunusanlage 12, 60325 Frankfurt am Main, Germany",
    phone: "+49-69-000-0000",
  },
  {
    city: "London",
    address: "1 Angel Lane, London EC4R 3AB",
    phone: "+44-20-7000-0000",
  },
  {
    city: "Hong Kong",
    address: "Two International Finance Centre, 8 Finance Street, Central",
    phone: "+852-2000-0000",
  },
  {
    city: "Singapore",
    address: "One Raffles Quay, North Tower, Singapore 048583",
    phone: "+65-6000-0000",
  },
  {
    city: "Sydney",
    address: "255 George Street, Sydney NSW 2000",
    phone: "+61-2-9000-0000",
  },
  {
    city: "Mumbai",
    address: "One BKC, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91-22-6000-0000",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We would be glad to hear from you. Reach out to any of our offices worldwide or use the form below to send us a message."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form below and a member of our team will respond
                within two business days.
              </p>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Please describe your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="button"
                  className="bg-accent-red hover:bg-accent-red-dark text-white px-8 py-3.5 rounded font-semibold text-sm transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                General Inquiries
              </h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-red mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-navy-900">
                      Email
                    </div>
                    <a
                      href="mailto:info@meridiancapitalgroup.com"
                      className="text-sm text-gray-600 hover:text-accent-red transition-colors"
                    >
                      info@meridiancapitalgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-red mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-navy-900">
                      Phone
                    </div>
                    <span className="text-sm text-gray-600">
                      +1-212-000-0000
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-red mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-navy-900">
                      Business Hours
                    </div>
                    <span className="text-sm text-gray-600">
                      Mon - Fri, 8:00 AM - 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Global Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-navy-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-navy-900">
                          {office.city}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {office.address}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {office.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
