import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Explore Meridian Capital Group's journey from a New York securities firm founded in 1926 to a global financial institution with operations in over 30 countries and $300 billion in assets under management.",
};

const milestones = [
  {
    year: "1926",
    title: "Founded in New York",
    description:
      "Edward Meridian establishes Meridian Securities in New York, beginning a legacy of trust, integrity, and long-term thinking in American capital markets.",
  },
  {
    year: "1952",
    title: "Listed on the New York Stock Exchange",
    description:
      "Meridian Securities becomes a publicly listed company on the New York Stock Exchange, marking a new chapter in its growth and corporate governance.",
  },
  {
    year: "1964",
    title: "Expansion into Fixed Income",
    description:
      "The firm expands into fixed income and bond underwriting, broadening its capabilities to serve institutional clients across debt capital markets.",
  },
  {
    year: "1972",
    title: "First International Office",
    description:
      "Meridian opens its first international office in London, establishing a foothold in European financial markets and laying the groundwork for global expansion.",
  },
  {
    year: "1985",
    title: "Asset Management Division Launched",
    description:
      "The launch of a dedicated Asset Management division marks Meridian's entry into institutional portfolio management, offering equities, fixed income, and multi-asset strategies.",
  },
  {
    year: "1990",
    title: "Frankfurt & Hong Kong Offices",
    description:
      "Meridian establishes offices in Frankfurt and Hong Kong, creating a truly global trading and advisory network spanning three major financial time zones.",
  },
  {
    year: "1998",
    title: "Navigating the Asian Financial Crisis",
    description:
      "The firm successfully navigates the Asian Financial Crisis, emerging with strengthened risk management frameworks and a deepened commitment to disciplined capital allocation.",
  },
  {
    year: "2003",
    title: "Wealth Management Division Launched",
    description:
      "Meridian launches its Wealth Management division, providing comprehensive advisory and portfolio services to high-net-worth and ultra-high-net-worth clients.",
  },
  {
    year: "2008",
    title: "Resilience Through the Global Financial Crisis",
    description:
      "Disciplined risk controls and a conservative balance sheet allow Meridian to weather the Global Financial Crisis, reinforcing the firm's reputation for stability and prudent stewardship.",
  },
  {
    year: "2012",
    title: "Southeast Asia Expansion",
    description:
      "The firm expands into Southeast Asia with new offices in Singapore and Mumbai, deepening its presence in the fastest-growing economies in the region.",
  },
  {
    year: "2015",
    title: "AUM Surpasses $200 Billion",
    description:
      "Assets under management across the Asset Management and Wealth Management divisions surpass $200 billion, reflecting sustained client confidence and investment performance.",
  },
  {
    year: "2019",
    title: "Sustainability & ESG Practice Established",
    description:
      "Meridian formalizes its commitment to sustainable finance by establishing a dedicated Sustainability and ESG practice, integrating environmental, social, and governance factors across the firm.",
  },
  {
    year: "2023",
    title: "Next-Generation Risk Analytics",
    description:
      "The firm expands its Quantitative Risk Analytics capabilities to support next-generation Monte Carlo simulations, processing hundreds of millions of daily risk calculations across multi-asset classes.",
  },
  {
    year: "2024",
    title: "Horizon 2027 Initiative Launched",
    description:
      "Meridian launches Horizon 2027, a firm-wide technology modernization initiative targeting a 40% reduction in infrastructure costs through cloud-native platforms, AI-driven analytics, and modern data architecture.",
  },
  {
    year: "2025",
    title: "500 Million Daily Risk Simulations",
    description:
      "The firm achieves a milestone of 500 million daily risk simulations and expands its London Technology Hub, further solidifying Meridian's position at the frontier of quantitative finance and technology.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="Our History"
        subtitle="Nearly a century of connecting markets and shaping futures."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "History" },
        ]}
      />

      {/* Introduction */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              From Wall Street to the World
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              What began as a small securities firm in 1926 has grown into one of
              the world&apos;s leading financial institutions. Through decades of
              disciplined growth, strategic innovation, and unwavering
              commitment to our clients, Meridian Capital Group has navigated wars,
              crises, and revolutions in technology — emerging stronger each
              time.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line (visible on lg+) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-navy-100 -translate-x-1/2" />

            {/* Vertical line (visible on mobile/tablet) */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-navy-100" />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className="relative"
                  >
                    {/* Desktop layout: alternating left/right */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                      {/* Left column */}
                      <div
                        className={`${
                          isLeft ? "text-right pr-12" : "order-2 pl-12"
                        }`}
                      >
                        <span className="inline-block text-sm font-bold text-accent-red tracking-wider mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-navy-900">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>

                      {/* Right column (empty spacer for alternating layout) */}
                      <div
                        className={`${isLeft ? "order-2" : "order-1"}`}
                      />
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 top-2 -translate-x-1/2 items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white border-[3px] border-accent-red" />
                    </div>

                    {/* Mobile / Tablet layout */}
                    <div className="lg:hidden flex gap-6">
                      {/* Dot */}
                      <div className="relative shrink-0">
                        <div className="w-3 h-3 rounded-full bg-white border-[3px] border-accent-red mt-1.5 ml-[18px] relative z-10" />
                      </div>

                      {/* Content */}
                      <div className="pb-2">
                        <span className="inline-block text-sm font-bold text-accent-red tracking-wider mb-1">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-navy-900">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* End marker */}
            <div className="hidden lg:flex absolute left-1/2 -bottom-4 -translate-x-1/2 items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-navy-900" />
            </div>
            <div className="lg:hidden absolute left-[23px] -bottom-4">
              <div className="w-2.5 h-2.5 rounded-full bg-navy-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-3">
            Looking Ahead
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            The Next Chapter
          </h2>
          <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto leading-relaxed">
            As we approach our centennial in 2026, Meridian Capital Group is more
            focused than ever on innovation, sustainability, and delivering
            exceptional value to our clients. Through Horizon 2027, we are
            building the infrastructure, capabilities, and culture to lead
            global finance into its next era.
          </p>
        </div>
      </section>
    </>
  );
}
