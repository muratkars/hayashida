import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Zap,
  Globe2,
  Activity,
  Cpu,
  TrendingUp,
  ChevronRight,
  Users,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Global Markets",
  description:
    "Hayashida Group Global Markets offers institutional clients deep liquidity and execution across fixed income, equities, foreign exchange, commodities, and derivatives.",
};

const products = [
  {
    title: "Fixed Income",
    description:
      "Government bonds, corporate credit, securitized products, and emerging market debt. Our rates and credit desks provide pricing and liquidity across the full spectrum of fixed income instruments, with particular strength in JGB and Asian credit markets.",
    icon: BarChart3,
  },
  {
    title: "Equities",
    description:
      "Cash equities, equity derivatives, prime brokerage, and securities lending. We offer comprehensive execution services including high-touch trading, algorithmic strategies, and direct market access across Asian, European, and American exchanges.",
    icon: TrendingUp,
  },
  {
    title: "Foreign Exchange",
    description:
      "Spot, forwards, swaps, and options across G10 and emerging market currencies. Our FX franchise is one of the top five liquidity providers in JPY and ranks among the largest in the APAC region by daily turnover.",
    icon: Globe2,
  },
  {
    title: "Commodities",
    description:
      "Physical and financial commodity solutions across energy, metals, and agriculture. Our commodities platform connects producers, consumers, and financial participants with tailored risk management and trading solutions.",
    icon: Activity,
  },
  {
    title: "Derivatives",
    description:
      "Structured products, OTC derivatives, and bespoke risk management solutions. Our quantitative structuring team designs innovative payoff structures to meet complex hedging and investment objectives for institutional clients.",
    icon: Zap,
  },
];

const stats = [
  { label: "Quarterly APAC Volume", value: "$2.8T+" },
  { label: "Markets Professionals", value: "3,200+" },
  { label: "Exchange Memberships", value: "40+" },
  { label: "Electronic Execution", value: "68%" },
];

export default function GlobalMarketsPage() {
  return (
    <>
      <PageHeader
        title="Global Markets"
        subtitle="Providing institutional investors, corporations, and governments with deep liquidity, best-in-class execution, and innovative risk management across all major asset classes."
        breadcrumbs={[
          { label: "Divisions", href: "/divisions" },
          { label: "Global Markets" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
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
              Hayashida Group&apos;s Global Markets division connects buyers and sellers across every major asset class, providing the liquidity, execution quality, and market insight that our institutional clients depend on.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              In the most recent fiscal year, the division achieved record APAC trading volumes exceeding $2.8 trillion on a quarterly basis, reflecting the continued growth of our electronic trading capabilities and expanding client franchise. Our sales and trading professionals operate from 15 trading floors worldwide, ensuring continuous market coverage across all time zones.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Products & Capabilities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.title}
                className="bg-gray-50 rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">
                  {product.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {products.slice(3).map((product) => (
              <div
                key={product.title}
                className="bg-gray-50 rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">
                  {product.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronic Trading */}
      <section className="bg-navy-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-accent-red" />
                <h2 className="text-3xl font-bold">Electronic Trading Platform</h2>
              </div>
              <p className="text-navy-300 text-lg leading-relaxed mb-6">
                Our proprietary electronic trading platform, HayashidaConnect, processes over 3 million orders per day across equities, fixed income, and FX. The platform leverages ultra-low-latency infrastructure and advanced smart order routing to deliver optimal execution for clients.
              </p>
              <p className="text-navy-300 leading-relaxed mb-8">
                68% of our total order flow is now executed electronically, up from 45% just three years ago. We continue to invest heavily in algorithmic trading strategies, transaction cost analysis, and real-time analytics to stay at the forefront of electronic market making.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white">3M+</div>
                  <div className="text-sm text-navy-400 mt-1">Orders Per Day</div>
                </div>
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white">&lt;50 μs</div>
                  <div className="text-sm text-navy-400 mt-1">Order Latency</div>
                </div>
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-sm text-navy-400 mt-1">Algo Strategies</div>
                </div>
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white">40+</div>
                  <div className="text-sm text-navy-400 mt-1">Connected Venues</div>
                </div>
              </div>
            </div>
            <div className="bg-navy-800/30 border border-navy-700 rounded-xl p-10">
              <h3 className="text-xl font-bold mb-6">Platform Capabilities</h3>
              <ul className="space-y-4">
                {[
                  "Smart order routing across 40+ liquidity venues",
                  "Real-time transaction cost analysis (TCA)",
                  "Pre-trade and post-trade analytics dashboard",
                  "Multi-asset algorithmic execution suite",
                  "Direct market access (DMA) for institutional clients",
                  "API connectivity for systematic trading strategies",
                  "FIX protocol support with sub-millisecond processing",
                  "Integrated compliance and best execution reporting",
                ].map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-accent-red mt-1 shrink-0" />
                    <span className="text-navy-200">{capability}</span>
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
                <h3 className="text-xl font-bold text-navy-900">Takeshi Mori</h3>
                <p className="text-gray-500">Global Head of Markets</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Takeshi Mori leads the Global Markets division, overseeing sales, trading, and market making across all asset classes. A 20-year veteran of the firm, Mori-san previously headed the Fixed Income and Currencies business and was instrumental in building Hayashida&apos;s electronic trading platform from the ground up. He is recognized as a thought leader in APAC capital markets and serves on multiple industry advisory boards.
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
              href="/divisions/asset-management"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-red transition-colors"
            >
              Asset Management <ChevronRight className="w-4 h-4" />
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
