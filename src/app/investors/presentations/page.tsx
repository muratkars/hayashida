import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Presentations & Reports | Investor Relations | Meridian Capital Group",
  description:
    "Annual reports, quarterly earnings presentations, and strategic updates from Meridian Capital Group, including the Horizon 2027 digital transformation strategy.",
};

interface Presentation {
  title: string;
  date: string;
  category: string;
  description: string;
  href: string;
}

const presentations: Presentation[] = [
  {
    title: "FY2027 Annual Report",
    date: "February 2026",
    category: "Annual Report",
    description:
      "Comprehensive overview of Meridian Capital Group's FY27 financial performance, including $12.8B net revenue, 12.1% ROE, and transformational progress on Horizon 2027.",
    href: "/presentations/Meridian-Capital-Group-FY27-Annual-Report.pdf",
  },
];

function getCategoryColor(category: string): string {
  switch (category) {
    case "Annual Report":
      return "bg-accent-red text-white";
    case "Strategic Update":
      return "bg-navy-900 text-white";
    case "Quarterly Earnings":
      return "bg-navy-600 text-white";
    case "ESG Report":
      return "bg-emerald-700 text-white";
    default:
      return "bg-gray-600 text-white";
  }
}

export default function PresentationsPage() {
  return (
    <>
      <PageHeader
        title="Presentations & Reports"
        subtitle="Annual reports, earnings presentations, and strategic updates for investors and analysts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors/overview" },
          { label: "Presentations" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-gray-600 max-w-3xl">
              Below is a selection of recent investor presentations and reports.
              For additional materials or historical filings, please contact our
              Investor Relations team.
            </p>
          </div>

          <div className="grid gap-6">
            {presentations.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-gray-200 rounded-lg p-6 lg:p-8 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-navy-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded w-fit ${getCategoryColor(item.category)}`}
                      >
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center shrink-0">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-accent-red transition-colors px-4 py-2 rounded border border-gray-200 hover:border-accent-red/30"
                    >
                      <Download className="w-4 h-4" />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">
              The documents and information provided on this page are for
              informational purposes only and do not constitute an offer to sell,
              or a solicitation of an offer to buy, any securities. Past
              financial performance is not indicative of future results. Please
              refer to official filings with the relevant regulatory authorities
              for the most current and complete information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
