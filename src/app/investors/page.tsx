import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, BarChart3 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Investor relations information for Hayashida Group (TSE: 8604), including financial highlights, strategic priorities, presentations, and shareholder resources.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        title="Investor Relations"
        subtitle="Financial information and resources for shareholders and analysts."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/investors/overview"
              className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-accent-red/30 hover:shadow-lg transition-all"
            >
              <BarChart3 className="w-8 h-8 text-navy-900 mb-4 group-hover:text-accent-red transition-colors" />
              <h2 className="text-xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                Financial Overview
              </h2>
              <p className="mt-2 text-gray-600">Key financial highlights, performance metrics, and strategic priorities.</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                View Overview <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/investors/presentations"
              className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-accent-red/30 hover:shadow-lg transition-all"
            >
              <FileText className="w-8 h-8 text-navy-900 mb-4 group-hover:text-accent-red transition-colors" />
              <h2 className="text-xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                Presentations & Reports
              </h2>
              <p className="mt-2 text-gray-600">Annual reports, earnings presentations, and strategic updates.</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                View Presentations <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
