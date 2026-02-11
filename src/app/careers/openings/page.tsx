"use client";

import { useState } from "react";
import { MapPin, Briefcase, Building2, ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { jobListings } from "@/data/jobs";

const divisions = Array.from(new Set(jobListings.map((job) => job.division))).sort();

export default function CareerOpeningsPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("All");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filteredJobs =
    selectedDivision === "All"
      ? jobListings
      : jobListings.filter((job) => job.division === selectedDivision);

  return (
    <>
      <PageHeader
        title="Career Opportunities"
        subtitle="Join a global team of professionals shaping the future of finance. Explore open positions across our divisions worldwide."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: "Openings" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm font-semibold text-navy-900">
              Filter by Division:
            </span>
            <div className="flex flex-wrap gap-2">
              {["All", ...divisions].map((division) => (
                <button
                  key={division}
                  onClick={() => setSelectedDivision(division)}
                  className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                    selectedDivision === division
                      ? "bg-navy-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {division}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredJobs.length} open{" "}
            {filteredJobs.length === 1 ? "position" : "positions"}
            {selectedDivision !== "All" && ` in ${selectedDivision}`}
          </p>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-block bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">
                            {job.division}
                          </span>
                          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded">
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-navy-900">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" />
                            {job.division}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-gray-400 font-mono">
                          {job.id}
                        </span>
                      </div>
                    </div>

                    {/* Expandable Requirements */}
                    <button
                      onClick={() =>
                        setExpandedJob(isExpanded ? null : job.id)
                      }
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-accent-red transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Hide Requirements{" "}
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Requirements{" "}
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 border-t border-gray-100 pt-4">
                        <h4 className="text-sm font-semibold text-navy-900 mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-accent-red rounded-full mt-1.5 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">
                No open positions found for the selected division.
              </p>
              <button
                onClick={() => setSelectedDivision("All")}
                className="mt-4 text-sm font-semibold text-accent-red hover:text-accent-red-dark transition-colors"
              >
                View all positions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Don&apos;t See the Right Role?
          </h2>
          <p className="mt-4 text-navy-300 max-w-2xl mx-auto">
            We are always looking for exceptional talent. Submit a general
            application and our recruiting team will reach out when a suitable
            opportunity arises.
          </p>
          <div className="mt-8">
            <a
              href="mailto:careers@hayashidagroup.com"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
