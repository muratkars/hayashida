import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Shield,
  Globe2,
  Gem,
  TrendingUp,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Wealth Management",
  description:
    "Hayashida Group Wealth Management provides comprehensive advisory, portfolio management, and financial planning services for high-net-worth and ultra-high-net-worth clients worldwide.",
};

const services = [
  {
    title: "Investment Advisory",
    description:
      "Personalized investment strategies tailored to each client's risk profile, return objectives, and liquidity needs. Our advisors leverage Hayashida's global market insights and proprietary research to construct diversified portfolios across asset classes.",
    icon: TrendingUp,
  },
  {
    title: "Estate & Succession Planning",
    description:
      "Comprehensive estate planning, trust structuring, and intergenerational wealth transfer solutions. We work with families to preserve wealth across generations while navigating complex cross-border tax and regulatory considerations.",
    icon: Shield,
  },
  {
    title: "Alternative Investments",
    description:
      "Access to institutional-quality alternative investments including private equity, venture capital, real estate, and hedge funds. Our alternatives platform provides clients with diversification and enhanced return potential beyond traditional markets.",
    icon: Gem,
  },
  {
    title: "Philanthropy Advisory",
    description:
      "Strategic philanthropy consulting to help clients maximize the impact of their charitable giving. We assist with the establishment of foundations, donor-advised funds, and impact investing strategies aligned with personal values.",
    icon: Globe2,
  },
];

const stats = [
  { label: "Assets Under Management", value: "¥8.2T" },
  { label: "Relationship Managers", value: "480+" },
  { label: "Client Families", value: "4,200+" },
  { label: "Markets Served", value: "12" },
];

export default function WealthManagementPage() {
  return (
    <>
      <PageHeader
        title="Wealth Management"
        subtitle="Comprehensive wealth solutions for high-net-worth and ultra-high-net-worth individuals and families, with ¥8.2 trillion in assets under management."
        breadcrumbs={[
          { label: "Divisions", href: "/divisions" },
          { label: "Wealth Management" },
        ]}
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
              Hayashida Wealth Management serves high-net-worth and
              ultra-high-net-worth individuals and families with investable
              assets typically exceeding ¥500 million ($3.3 million USD). Our
              holistic approach integrates investment management, estate
              planning, tax optimization, and lifestyle services into a
              seamless client experience.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With dedicated relationship managers in 12 markets across
              Asia-Pacific, Europe, and the Americas, we combine deep local
              expertise with the full resources of Hayashida Group&apos;s
              global platform. Our clients benefit from access to
              institutional-quality research, exclusive investment
              opportunities, and a curated network of professional advisors.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-lg border border-gray-100 p-8"
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

      {/* Digital Platform */}
      <section className="bg-navy-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-accent-red" />
                <h2 className="text-3xl font-bold">Hayashida Insights</h2>
              </div>
              <p className="text-navy-300 text-lg leading-relaxed mb-6">
                Our next-generation digital advisory platform provides clients
                with real-time portfolio analytics, personalized market
                intelligence, and AI-driven investment recommendations —
                available on web and mobile.
              </p>
              <p className="text-navy-300 leading-relaxed mb-8">
                Launched in 2025, Hayashida Insights leverages machine learning
                models trained on our proprietary market research to deliver
                actionable insights tailored to each client&apos;s portfolio
                and objectives. The platform currently serves clients in
                Singapore, Hong Kong, and Tokyo, with expansion to London and
                New York planned for 2026.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-navy-400 mt-1">
                    Portfolio Access
                  </div>
                </div>
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white">AI</div>
                  <div className="text-sm text-navy-400 mt-1">
                    Powered Insights
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy-800/30 border border-navy-700 rounded-xl p-10">
              <h3 className="text-xl font-bold mb-6">Platform Features</h3>
              <ul className="space-y-4">
                {[
                  "Real-time portfolio performance and attribution",
                  "AI-driven personalized investment recommendations",
                  "Integrated market research and economic commentary",
                  "Risk analytics and scenario modeling tools",
                  "Secure document vault and reporting",
                  "Direct messaging with your relationship manager",
                  "Multi-currency consolidated reporting",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-accent-red mt-1 shrink-0" />
                    <span className="text-navy-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                  Haruki Sato
                </h3>
                <p className="text-gray-500">Head of Wealth Management</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Haruki Sato leads Hayashida&apos;s Wealth Management division,
              overseeing client relationships, product strategy, and the
              division&apos;s digital transformation. Under his leadership,
              assets under management have grown to ¥8.2 trillion, and the
              division launched its Hayashida Insights digital advisory
              platform. A 20-year veteran of the firm, Sato-san previously
              led the Asia-Pacific private banking team and holds an MBA from
              the Wharton School.
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
              Learn how our integrated platform delivers comprehensive
              solutions.
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
