import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Globe2,
  Users,
  Briefcase,
  Building2,
  HandshakeIcon,
  ChevronRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Investment Banking",
  description:
    "Hayashida Group Investment Banking provides M&A advisory, equity underwriting, debt capital markets, and restructuring services to leading corporations and institutions worldwide.",
};

const services = [
  {
    title: "M&A Advisory",
    description:
      "Strategic advisory on mergers, acquisitions, divestitures, and joint ventures. Our team has advised on some of the largest cross-border transactions originating from Asia, including multiple landmark deals exceeding $10 billion.",
    icon: HandshakeIcon,
  },
  {
    title: "Equity Underwriting",
    description:
      "Full-service equity capital markets capabilities including IPOs, secondary offerings, block trades, and convertibles. We leverage deep investor relationships across Asia, EMEA, and the Americas to deliver optimal execution.",
    icon: Landmark,
  },
  {
    title: "Debt Capital Markets",
    description:
      "Investment-grade and high-yield bond origination, structured finance, leveraged finance, and private placements. Our credit platform spans global markets with particular strength in yen-denominated and samurai bonds.",
    icon: Building2,
  },
  {
    title: "Restructuring",
    description:
      "Advising creditors, debtors, and stakeholders through complex financial restructurings, distressed M&A, and liability management. Our restructuring practice is recognized as one of the most experienced in the APAC region.",
    icon: Briefcase,
  },
];

const stats = [
  { label: "Japan M&A League Table Rank", value: "Top 5" },
  { label: "Deals Advised (3 Years)", value: "$150B+" },
  { label: "Active Client Relationships", value: "1,200+" },
  { label: "Investment Banking Professionals", value: "2,800+" },
];

const offices = [
  { city: "Tokyo", role: "Global Headquarters" },
  { city: "London", role: "EMEA Hub" },
  { city: "New York", role: "Americas Hub" },
  { city: "Hong Kong", role: "Greater China" },
  { city: "Singapore", role: "Southeast Asia" },
];

export default function InvestmentBankingPage() {
  return (
    <>
      <PageHeader
        title="Investment Banking"
        subtitle="Delivering transformative advisory, underwriting, and capital markets solutions to corporations, financial sponsors, and governments worldwide."
        breadcrumbs={[
          { label: "Divisions", href: "/divisions" },
          { label: "Investment Banking" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-900">Overview</h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Hayashida Group&apos;s Investment Banking division is a trusted partner to the world&apos;s leading corporations, financial sponsors, and public sector institutions. With deep sector expertise and a truly global platform, we advise clients on their most important strategic transactions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our bankers combine local market knowledge with cross-border capabilities, enabling clients to navigate complex deal environments across developed and emerging markets. We are consistently ranked among the top five advisors in Japan by deal volume and value, and our international franchise continues to grow with strategic hires in key markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="bg-navy-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold">Global Coverage</h2>
          </div>
          <p className="text-navy-300 max-w-3xl text-lg leading-relaxed mb-12">
            Our investment banking professionals operate from five major financial centers, providing local expertise with global reach. This network enables us to originate, structure, and execute transactions across every major market.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-navy-800/50 border border-navy-700 rounded-lg p-6"
              >
                <div className="text-xl font-bold text-white">{office.city}</div>
                <div className="text-sm text-navy-400 mt-1">{office.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">Leadership</h2>
          <div className="bg-gray-50 rounded-lg border border-gray-100 p-8 lg:p-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  Richard Thornton
                </h3>
                <p className="text-gray-500">
                  Global Head of Investment Banking
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Richard Thornton leads Hayashida Group&apos;s Investment Banking division, overseeing advisory, underwriting, and capital markets activities worldwide. With over 25 years of experience in international finance, he joined Hayashida from a leading global bank where he served as co-head of Asia-Pacific M&A. Under his leadership, the division has expanded its cross-border capabilities and deepened client relationships across key growth markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-navy-900">
              Explore Our Other Divisions
            </h3>
            <p className="text-gray-500 mt-1">
              Learn how our integrated platform delivers comprehensive solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/divisions/global-markets"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-red transition-colors"
            >
              Global Markets <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/divisions"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark text-white px-6 py-2.5 rounded font-semibold text-sm transition-colors"
            >
              All Divisions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
