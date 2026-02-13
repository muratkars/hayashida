import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Banknote, Building2, PiggyBank, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Investor Relations | Meridian Capital Group",
  description:
    "Investor relations information for Meridian Capital Group (NYSE: MRDN), including financial highlights, strategic priorities, presentations, and shareholder resources.",
};

const financialHighlights = [
  {
    label: "Revenue",
    value: "$12.4B",
    description: "Consolidated revenue for FY2026",
    icon: TrendingUp,
  },
  {
    label: "Net Income",
    value: "$1.6B",
    description: "Attributable to shareholders",
    icon: Banknote,
  },
  {
    label: "NYSE",
    value: "MRDN",
    description: "New York Stock Exchange ticker",
    icon: Building2,
  },
  {
    label: "Dividend Payout",
    value: "~40%",
    description: "Consistent shareholder returns",
    icon: PiggyBank,
  },
];

export default function InvestorOverviewPage() {
  return (
    <>
      <PageHeader
        title="Investor Relations"
        subtitle="Delivering sustainable growth and consistent returns for our shareholders through disciplined capital management and strategic investment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Financial Highlights */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Financial Highlights
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Key financial metrics reflecting Meridian Capital Group&apos;s strong
              market position and commitment to shareholder value.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6"
              >
                <item.icon className="w-6 h-6 text-accent-red mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-navy-700 mt-2">
                  {item.label}
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Priority */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded mb-6">
                <Target className="w-4 h-4" />
                Strategic Priority
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
                Horizon 2027
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Horizon 2027 is Meridian Capital Group&apos;s three-year strategic plan
                to accelerate digital transformation, modernize our technology
                infrastructure, and expand our capabilities across all business
                divisions.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The initiative encompasses infrastructure migration, AI and
                machine learning investment, and a comprehensive technology
                modernization program targeting a 40% reduction in total cost of
                ownership. With annual technology spend of approximately $290
                million, Meridian is committing significant resources to ensure
                our platforms remain best-in-class.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Key pillars include storage modernization, workload
                optimization, hybrid cloud adoption, and the development of
                next-generation trading and risk analytics platforms.
              </p>
            </div>
            <div className="bg-navy-900 rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">
                Horizon 2027 Key Targets
              </h3>
              <div className="space-y-5">
                <div className="border-b border-navy-700 pb-4">
                  <div className="text-2xl font-bold text-accent-red">40%</div>
                  <div className="text-sm text-navy-300 mt-1">
                    TCO reduction through infrastructure modernization
                  </div>
                </div>
                <div className="border-b border-navy-700 pb-4">
                  <div className="text-2xl font-bold text-accent-red">$290M</div>
                  <div className="text-sm text-navy-300 mt-1">
                    Annual technology spend (2.3% of revenue)
                  </div>
                </div>
                <div className="border-b border-navy-700 pb-4">
                  <div className="text-2xl font-bold text-accent-red">3x</div>
                  <div className="text-sm text-navy-300 mt-1">
                    Data growth over the past three years
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-red">2027</div>
                  <div className="text-sm text-navy-300 mt-1">
                    Target completion for digital transformation program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8">
            Shareholder Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/investors/presentations"
              className="group bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                Presentations & Reports
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Access annual reports, quarterly earnings presentations, and
                strategic updates including the Horizon 2027 digital
                transformation roadmap.
              </p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                View Presentations <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-navy-900">
                Stock Information
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Meridian Capital Group is listed on the New York Stock Exchange
                under the ticker symbol MRDN. We maintain a dividend
                payout ratio of approximately 40%, reflecting our commitment to
                consistent shareholder returns.
              </p>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <span className="bg-navy-900 text-white font-mono px-3 py-1 rounded text-xs">
                  NYSE: MRDN
                </span>
                <span className="text-gray-500">New York Stock Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Investor Inquiries
          </h2>
          <p className="mt-4 text-navy-300 max-w-2xl mx-auto">
            For questions regarding financial results, shareholder services, or
            Meridian Capital Group&apos;s strategic direction, please contact our
            Investor Relations team.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Contact Investor Relations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
