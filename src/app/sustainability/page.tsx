import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Users, ShieldCheck, Target, Sprout, Globe2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Sustainability | Hayashida Group",
  description:
    "Hayashida Group's ESG commitments, sustainable financing initiatives, carbon neutrality goals, and Green Bond Framework.",
};

const pillars = [
  {
    title: "Climate & Environment",
    icon: Leaf,
    items: [
      "Carbon neutrality target for own operations by 2030",
      "Scope 1 & 2 emissions reduced 45% since 2019",
      "TCFD-aligned climate risk disclosures across all divisions",
      "Green Bond Framework for sustainable debt issuance",
      "Phased reduction of financing for thermal coal projects",
    ],
  },
  {
    title: "Social Responsibility",
    icon: Users,
    items: [
      "Diversity & inclusion targets across all regions",
      "30% women in senior management by 2027",
      "Financial literacy programs reaching 500,000+ participants annually",
      "Community investment exceeding ¥5B per year",
      "Employee well-being and development programs globally",
    ],
  },
  {
    title: "Governance",
    icon: ShieldCheck,
    items: [
      "Majority independent board of directors",
      "Separate Chairman and CEO roles",
      "Board-level Sustainability Committee",
      "Comprehensive compliance and ethics programs",
      "Executive compensation linked to ESG performance metrics",
    ],
  },
];

const stats = [
  {
    value: "¥2T",
    label: "Sustainable Financing Target by 2030",
    icon: Target,
  },
  {
    value: "¥800B",
    label: "Sustainable Finance Underwritten Since 2019",
    icon: Sprout,
  },
  {
    value: "2030",
    label: "Carbon Neutrality Target (Own Operations)",
    icon: Leaf,
  },
  {
    value: "30+",
    label: "Countries in ESG Reporting Scope",
    icon: Globe2,
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        title="Sustainability"
        subtitle="Integrating environmental, social, and governance considerations into everything we do to build a more sustainable financial system."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sustainability" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Key Metrics */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-accent-red mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 font-medium max-w-[180px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Our Commitment
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              As a leading global financial institution, Hayashida Group
              recognizes the critical role we play in financing the transition to
              a sustainable economy. We are committed to mobilizing ¥2 trillion
              in sustainable financing by 2030 to support climate action, social
              progress, and responsible governance.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Since 2019, we have underwritten over ¥800 billion in green bonds,
              social bonds, sustainability-linked loans, and transition
              financing. Our Green Bond Framework, aligned with ICMA Green Bond
              Principles, provides a transparent structure for channeling capital
              toward eligible environmental projects.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our sustainability strategy is overseen by a Board-level
              Sustainability Committee and guided by international frameworks
              including the TCFD, UN Principles for Responsible Investment, and
              the UN Global Compact.
            </p>
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-3">
              Our Framework
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              ESG Pillars
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our approach to sustainability is built on three interconnected
              pillars, each with measurable targets and transparent reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-gray-200 rounded-lg p-8"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-accent-red rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Bond Framework */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
                Green Bond Framework
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Hayashida Group&apos;s Green Bond Framework establishes a
                transparent and rigorous structure for issuing green bonds to
                finance projects that contribute to environmental sustainability.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Aligned with the ICMA Green Bond Principles 2021, the framework
                covers eligible project categories including renewable energy,
                energy efficiency, clean transportation, sustainable water
                management, and green buildings. All proceeds are tracked and
                reported annually.
              </p>
              <Link
                href="/investors/presentations"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy-900 hover:text-accent-red transition-colors"
              >
                View ESG Reports <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-navy-900 rounded-lg p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">
                Eligible Green Categories
              </h3>
              <div className="space-y-4">
                {[
                  "Renewable Energy (solar, wind, hydroelectric)",
                  "Energy Efficiency (building retrofits, smart grids)",
                  "Clean Transportation (EVs, rail, hydrogen)",
                  "Sustainable Water Management",
                  "Green Buildings (LEED/BREEAM certified)",
                  "Pollution Prevention & Control",
                ].map((category, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-navy-200"
                  >
                    <Leaf className="w-4 h-4 text-accent-red shrink-0" />
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Partner With Us for a Sustainable Future
          </h2>
          <p className="mt-4 text-navy-300 max-w-2xl mx-auto">
            Whether you are an issuer seeking sustainable financing solutions or
            an investor focused on ESG-aligned opportunities, Hayashida
            Group&apos;s dedicated sustainability team is here to help.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Contact Our Sustainability Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
