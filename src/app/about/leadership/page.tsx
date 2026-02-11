import type { Metadata } from "next";
import { User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { executives } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the executive leadership team of Hayashida Group. Our leaders bring decades of experience across global finance, technology, risk management, and operations.",
};

const highlightedTitles = [
  "Chairman & Chief Executive Officer",
  "Chief Technology Officer & Head of Technology",
  "Global Head of Risk",
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Leadership"
        subtitle="The executive team guiding Hayashida Group's strategy, innovation, and global growth."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Executive Team
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Hayashida Group is led by a diverse team of experienced
              professionals with deep expertise across investment banking,
              global markets, asset management, technology, and risk. Together,
              they are driving the firm&apos;s strategic vision and its most
              ambitious transformation to date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executives.map((exec) => {
              const isHighlighted = highlightedTitles.includes(exec.title);

              return (
                <div
                  key={exec.name}
                  className={`rounded-lg border p-6 transition-all duration-300 ${
                    isHighlighted
                      ? "border-accent-red/20 bg-navy-50/50 shadow-sm hover:shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  {/* Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
                        isHighlighted
                          ? "bg-navy-900"
                          : "bg-gray-200"
                      }`}
                    >
                      <User
                        className={`w-7 h-7 ${
                          isHighlighted ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-navy-900 leading-tight">
                        {exec.name}
                      </h3>
                      <p
                        className={`text-sm font-medium mt-0.5 ${
                          isHighlighted ? "text-accent-red" : "text-gray-500"
                        }`}
                      >
                        {exec.title}
                      </p>
                      {exec.division && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {exec.division}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">
                    {exec.bio}
                  </p>

                  {/* Highlighted indicator */}
                  {isHighlighted && (
                    <div className="mt-4 pt-4 border-t border-accent-red/10">
                      <span className="text-xs font-semibold text-accent-red uppercase tracking-wider">
                        Senior Leadership
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board note */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-navy-900">
              Board of Directors
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Hayashida Group&apos;s Board of Directors provides independent
              oversight and strategic guidance. The Board comprises experienced
              leaders from finance, technology, law, and public policy,
              ensuring robust corporate governance and accountability to our
              shareholders and stakeholders.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
