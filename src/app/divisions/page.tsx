import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  BarChart3,
  TrendingUp,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Divisions",
  description:
    "Explore Hayashida Group's five integrated business divisions: Investment Banking, Global Markets, Asset Management, Wealth Management, and Risk & Technology.",
};

const divisions = [
  {
    title: "Investment Banking",
    description:
      "Advisory, underwriting, and capital markets solutions for corporate and institutional clients. Ranked in the top 5 in Japan M&A league tables with over $150 billion in deals advised over the past three years.",
    href: "/divisions/investment-banking",
    icon: Landmark,
    leader: "Richard Thornton",
    leaderTitle: "Global Head of Investment Banking",
  },
  {
    title: "Global Markets",
    description:
      "Fixed income, equities, foreign exchange, commodities, and derivatives trading with deep liquidity across all major markets. Record APAC trading volumes exceeding $2.8 trillion quarterly.",
    href: "/divisions/global-markets",
    icon: BarChart3,
    leader: "Takeshi Mori",
    leaderTitle: "Global Head of Markets",
  },
  {
    title: "Asset Management",
    description:
      "¥37 trillion in assets under management spanning public equities, fixed income, alternatives, multi-asset, and ESG-integrated strategies for institutional and retail investors.",
    href: "/divisions/asset-management",
    icon: TrendingUp,
    leader: "Natsuki Kimura",
    leaderTitle: "Global Head of Asset Management",
  },
  {
    title: "Wealth Management",
    description:
      "Comprehensive wealth planning, portfolio management, and advisory services for high-net-worth and ultra-high-net-worth individuals, families, and family offices worldwide.",
    href: "/divisions/wealth-management",
    icon: Users,
    leader: "Haruki Watanabe",
    leaderTitle: "Global Head of Wealth Management",
  },
  {
    title: "Risk & Technology",
    description:
      "Enterprise risk management, quantitative analytics, and technology infrastructure powering the firm's operations. Over 500 million risk simulations processed daily across global platforms.",
    href: "/divisions/risk-technology",
    icon: Shield,
    leader: "Yuki Hasegawa & David Chen",
    leaderTitle: "CTO & Global Head of Risk",
  },
];

export default function DivisionsPage() {
  return (
    <>
      <PageHeader
        title="Our Divisions"
        subtitle="Five integrated business divisions delivering comprehensive financial services to clients in over 30 countries."
      />

      {/* Divisions Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {divisions.map((division) => (
              <Link
                key={division.title}
                href={division.href}
                className="group relative bg-white rounded-lg border border-gray-200 p-8 lg:p-10 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent-red transition-colors">
                    <division.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-navy-900 group-hover:text-accent-red transition-colors">
                      {division.title}
                    </h2>
                    <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl">
                      {division.description}
                    </p>
                    <div className="mt-3 text-sm text-navy-600">
                      <span className="font-semibold">{division.leader}</span>
                      <span className="text-gray-400 mx-2">|</span>
                      <span className="text-gray-500">{division.leaderTitle}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Integrated Solutions Across Every Division
          </h2>
          <p className="mt-4 text-navy-300 max-w-2xl mx-auto">
            The strength of Hayashida Group lies in the seamless collaboration between our divisions, enabling us to deliver holistic solutions for even the most complex financial challenges.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark text-white px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              About Hayashida Group <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
