import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, History, Globe2, Target, Compass, Handshake, TrendingUp, Building2, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Hayashida Group",
  description:
    "Founded in 1926, Hayashida Group is a leading global financial services firm headquartered in Tokyo, Japan. Learn about our history, leadership, values, and global presence across 30+ countries.",
};

const stats = [
  { label: "Founded", value: "1926", icon: Calendar },
  { label: "Headquarters", value: "Otemachi, Tokyo", icon: Building2 },
  { label: "Employees", value: "~28,000", icon: Users },
  { label: "Revenue", value: "¥1.8T", icon: TrendingUp },
];

const subpages = [
  {
    title: "Leadership",
    description:
      "Meet the executive team steering Hayashida Group's strategy across investment banking, global markets, asset management, and technology.",
    href: "/about/leadership",
    icon: Users,
  },
  {
    title: "Our History",
    description:
      "From a Tokyo securities firm in 1926 to a global financial institution managing trillions in assets — explore our journey through nearly a century of growth.",
    href: "/about/history",
    icon: History,
  },
  {
    title: "Global Presence",
    description:
      "With offices in over 30 countries spanning Tokyo, London, New York, Hong Kong, Singapore, and beyond, we deliver integrated solutions wherever our clients operate.",
    href: "/about/global-presence",
    icon: Globe2,
  },
];

const values = [
  {
    title: "Trust & Integrity",
    description:
      "For nearly a century, our clients have trusted us to act with the highest standards of integrity. This trust is the foundation upon which every relationship is built.",
    icon: Handshake,
  },
  {
    title: "Long-Term Thinking",
    description:
      "As a firm with deep generational roots, we prioritize sustainable, long-term value creation over short-term gains — for our clients, our people, and the markets we serve.",
    icon: Compass,
  },
  {
    title: "Innovation & Excellence",
    description:
      "From pioneering electronic trading in Asia to launching our Horizon 2027 digital transformation, we continuously invest in technology and talent to stay at the frontier of global finance.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Hayashida Group"
        subtitle="A leading global financial services firm connecting markets and shaping futures since 1926."
        backgroundImage="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Company Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Who We Are
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Hayashida Group is a premier global financial services firm
              headquartered in Otemachi, Tokyo. Founded in 1926 by Ichiro
              Hayashida, the firm has grown from a domestic securities house
              into a diversified institution serving corporate, institutional,
              and high-net-worth clients across more than 30 countries.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Listed on the TSE Prime Market, Hayashida Group generates annual
              revenue of approximately ¥1.8 trillion and employs roughly 28,000
              people worldwide. Our four integrated business divisions —
              Investment Banking, Global Markets, Asset Management, and Wealth
              Management — are supported by world-class risk management,
              technology, and compliance functions.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-5 h-5 text-accent-red mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-navy-900">
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

      {/* Subpage Links */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Learn More
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our leadership team, our century-long history, and our
              presence around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {subpages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="group bg-white rounded-lg border border-gray-200 p-8 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent-red transition-colors">
                  <page.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                  {page.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-3">
              Our Foundation
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Values & Vision
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our values have guided Hayashida Group through nearly a century of
              market cycles, technological change, and global expansion. They
              remain the compass for everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Shaping the Next Century
          </h2>
          <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Through our Horizon 2027 initiative, Hayashida Group is investing in
            the technology, talent, and sustainable practices that will define
            the future of global finance. We are modernizing our infrastructure,
            deepening our commitment to ESG, and expanding our capabilities to
            serve clients in a rapidly evolving world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Meet Our Leadership <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 border border-navy-500 text-navy-200 hover:text-white hover:border-navy-300 px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Sustainability & ESG
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
