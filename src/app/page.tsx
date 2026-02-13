import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, BarChart3, Users, Landmark, Globe2, Calendar } from "lucide-react";
import { newsArticles } from "@/data/news";

const newsImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
];

const stats = [
  { label: "Founded", value: "1926", icon: Calendar },
  { label: "Employees", value: "28,000+", icon: Users },
  { label: "Countries", value: "30+", icon: Globe2 },
  { label: "Revenue", value: "$12.4B", icon: TrendingUp },
];

const divisions = [
  {
    title: "Investment Banking",
    description: "Advisory, underwriting, and capital markets solutions for corporate and institutional clients worldwide.",
    href: "/divisions/investment-banking",
    icon: Landmark,
  },
  {
    title: "Global Markets",
    description: "Fixed income, equities, FX, and commodities trading with deep liquidity across all major markets.",
    href: "/divisions/global-markets",
    icon: BarChart3,
  },
  {
    title: "Asset Management",
    description: "$255 billion in assets under management across equities, fixed income, alternatives, and multi-asset strategies.",
    href: "/divisions/asset-management",
    icon: TrendingUp,
  },
  {
    title: "Wealth Management",
    description: "Comprehensive wealth solutions for high-net-worth and ultra-high-net-worth clients across the globe.",
    href: "/divisions/wealth-management",
    icon: Users,
  },
];

export default function HomePage() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-navy-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-900/80">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-4">
              Since 1926
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Connecting Markets,
              <br />
              <span className="text-navy-300">Shaping Futures</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-navy-300 max-w-2xl leading-relaxed">
              Meridian Capital Group is a leading global financial services firm headquartered in New York, delivering innovative solutions across investment banking, global markets, asset management, and wealth management.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark text-white px-8 py-3.5 rounded font-semibold text-sm transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/investors/overview"
                className="inline-flex items-center gap-2 border border-navy-500 text-navy-200 hover:text-white hover:border-navy-300 px-8 py-3.5 rounded font-semibold text-sm transition-colors"
              >
                Investor Relations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-accent-red mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-navy-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">Our Divisions</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Four integrated business divisions delivering comprehensive financial services to clients across the globe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {divisions.map((div) => (
              <Link
                key={div.title}
                href={div.href}
                className="group bg-white rounded-lg border border-gray-200 p-8 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent-red transition-colors">
                    <div.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                      {div.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{div.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/divisions/risk-technology"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-accent-red transition-colors"
            >
              <Shield className="w-4 h-4" />
              Risk & Technology Division <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">Latest News</h2>
              <p className="mt-3 text-gray-600">Press releases and announcements from Meridian Capital Group.</p>
            </div>
            <Link
              href="/newsroom"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-red transition-colors"
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <Link
                key={article.slug}
                href={`/newsroom/${article.slug}`}
                className="group"
              >
                <div
                  className="rounded-lg h-48 mb-4 overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url('${newsImages[index]}')` }}
                />
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-accent-red uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-accent-red transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/newsroom"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-red"
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Connect?</h2>
          <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto">
            With nearly a century of experience and a presence in over 30 countries, Meridian Capital Group is your partner for navigating global financial markets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers/openings"
              className="inline-flex items-center gap-2 border border-navy-500 text-navy-200 hover:text-white hover:border-navy-300 px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
