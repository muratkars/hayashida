import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Leaf,
  BarChart3,
  PieChart,
  Globe2,
  Target,
  ChevronRight,
  Users,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Asset Management",
  description:
    "Hayashida Group Asset Management manages ¥37 trillion across public equities, fixed income, alternatives, multi-asset, and ESG-integrated strategies for institutional and retail investors.",
};

const strategies = [
  {
    title: "Public Equities",
    description:
      "Active and systematic equity strategies spanning Japanese, Asian, and global markets. Our equity investment teams employ fundamental bottom-up research, quantitative factor models, and thematic approaches to generate consistent alpha across market cycles.",
    icon: TrendingUp,
    aum: "¥12.4T",
  },
  {
    title: "Fixed Income",
    description:
      "Core, core-plus, and credit strategies across government, corporate, and securitized bonds. Our fixed income franchise is one of the largest in Asia, with deep expertise in JGB portfolios, Asian credit, and global aggregate mandates.",
    icon: BarChart3,
    aum: "¥11.2T",
  },
  {
    title: "Alternatives",
    description:
      "Private equity, real estate, infrastructure, and hedge fund solutions for institutional investors seeking diversification and enhanced returns. Our alternatives platform has delivered top-quartile performance across multiple vintage years.",
    icon: Target,
    aum: "¥5.8T",
  },
  {
    title: "Multi-Asset",
    description:
      "Dynamic asset allocation strategies and balanced portfolio solutions designed to optimize risk-adjusted returns across varying market environments. Our multi-asset team leverages proprietary macro models and tactical overlay frameworks.",
    icon: PieChart,
    aum: "¥4.9T",
  },
  {
    title: "ESG-Integrated",
    description:
      "Strategies embedding environmental, social, and governance factors throughout the investment process. As a signatory to the UN PRI and a leader in Japan's Stewardship Code, we integrate sustainability considerations into every investment decision.",
    icon: Leaf,
    aum: "¥2.7T",
  },
];

const stats = [
  { label: "Assets Under Management", value: "¥37T" },
  { label: "Investment Professionals", value: "620+" },
  { label: "Institutional Clients", value: "2,400+" },
  { label: "Fund Strategies", value: "180+" },
];

export default function AssetManagementPage() {
  return (
    <>
      <PageHeader
        title="Asset Management"
        subtitle="Delivering long-term investment performance across a comprehensive range of strategies, with ¥37 trillion in assets under management for institutional and retail clients worldwide."
        breadcrumbs={[
          { label: "Divisions", href: "/divisions" },
          { label: "Asset Management" },
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
              Hayashida Group Asset Management is one of the largest asset managers in Asia, entrusted with ¥37 trillion by pension funds, sovereign wealth funds, insurance companies, endowments, and individual investors.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our investment philosophy centers on rigorous fundamental research, disciplined risk management, and a long-term perspective. With over 620 investment professionals operating from offices in Tokyo, London, New York, Hong Kong, and Singapore, we offer a full spectrum of strategies spanning public markets, private markets, and multi-asset solutions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to responsible investing and have been a signatory to the United Nations Principles for Responsible Investment since 2008. ESG integration is embedded across our investment platform, and our dedicated stewardship team actively engages with portfolio companies to drive long-term value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">
            Investment Strategies
          </h2>
          <div className="space-y-6">
            {strategies.map((strategy) => (
              <div
                key={strategy.title}
                className="bg-gray-50 rounded-lg border border-gray-100 p-8 flex flex-col lg:flex-row gap-6"
              >
                <div className="flex items-start gap-4 lg:w-1/3">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900">
                      {strategy.title}
                    </h3>
                    <div className="mt-1 text-sm font-semibold text-accent-red">
                      {strategy.aum} AUM
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed lg:w-2/3">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-navy-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold">Global Investment Platform</h2>
          </div>
          <p className="text-navy-300 text-lg leading-relaxed max-w-3xl mb-12">
            Our investment teams are strategically located across the world&apos;s major financial centers, enabling us to capture opportunities in real time and provide clients with local market expertise backed by global resources.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: "Japan & Asia-Pacific",
                detail: "¥24.8T AUM managed from Tokyo, Hong Kong, and Singapore",
              },
              {
                region: "Europe, Middle East & Africa",
                detail: "¥7.1T AUM managed from London with dedicated EMEA distribution",
              },
              {
                region: "Americas",
                detail: "¥5.1T AUM managed from New York with growing institutional client base",
              },
            ].map((region) => (
              <div
                key={region.region}
                className="bg-navy-800/50 border border-navy-700 rounded-lg p-6"
              >
                <div className="text-lg font-bold text-white">
                  {region.region}
                </div>
                <div className="text-sm text-navy-400 mt-2 leading-relaxed">
                  {region.detail}
                </div>
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
                  Natsuki Kimura
                </h3>
                <p className="text-gray-500">
                  Global Head of Asset Management
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Natsuki Kimura leads Hayashida Group&apos;s Asset Management division, overseeing investment strategy, product development, and client relationships across all regions. A CFA charterholder with over 22 years of investment experience, Kimura-san previously served as Chief Investment Officer for the division&apos;s equity platform. She is widely recognized for her leadership in ESG integration and was named among the top 50 women in asset management by a leading industry publication.
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
              href="/divisions/risk-technology"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-red transition-colors"
            >
              Risk & Technology <ChevronRight className="w-4 h-4" />
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
