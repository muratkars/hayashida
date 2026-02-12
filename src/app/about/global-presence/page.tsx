import type { Metadata } from "next";
import { MapPin, Users, Globe2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Global Presence | About | Hayashida Group",
  description:
    "Hayashida Group operates across 30+ countries with major offices in Tokyo, London, New York, Hong Kong, Singapore, Sydney, and Mumbai.",
};

interface Office {
  city: string;
  isHQ?: boolean;
  address: string;
  employees: string;
}

const offices: Office[] = [
  {
    city: "Tokyo",
    isHQ: true,
    address: "Otemachi Tower, 1-5-1 Otemachi, Chiyoda-ku, Tokyo 100-0004",
    employees: "~12,000",
  },
  {
    city: "London",
    address: "1 Angel Lane, London EC4R 3AB",
    employees: "~3,200",
  },
  {
    city: "New York",
    address: "383 Madison Avenue, New York, NY 10179",
    employees: "~2,800",
  },
  {
    city: "Hong Kong",
    address:
      "Two International Finance Centre, 8 Finance Street, Central",
    employees: "~2,400",
  },
  {
    city: "Singapore",
    address: "One Raffles Quay, North Tower, Singapore 048583",
    employees: "~1,800",
  },
  {
    city: "Sydney",
    address: "255 George Street, Sydney NSW 2000",
    employees: "~900",
  },
  {
    city: "Mumbai",
    address: "One BKC, Bandra Kurla Complex, Mumbai 400051",
    employees: "~1,200",
  },
];

export default function GlobalPresencePage() {
  return (
    <>
      <PageHeader
        title="Global Presence"
        subtitle="With offices in over 30 countries, Hayashida Group delivers integrated financial solutions wherever our clients operate."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Global Presence" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Overview Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <Globe2 className="w-6 h-6 text-accent-red mx-auto mb-3" />
              <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                30+
              </div>
              <div className="text-sm text-gray-500 mt-1 font-medium">
                Countries
              </div>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-accent-red mx-auto mb-3" />
              <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                80+
              </div>
              <div className="text-sm text-gray-500 mt-1 font-medium">
                Offices Worldwide
              </div>
            </div>
            <div>
              <Users className="w-6 h-6 text-accent-red mx-auto mb-3" />
              <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                28,000+
              </div>
              <div className="text-sm text-gray-500 mt-1 font-medium">
                Employees Globally
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Cards */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Major Offices
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Our key regional hubs house teams across investment banking, global
              markets, asset management, wealth management, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-navy-900">
                        {office.city}
                      </h3>
                      {office.isHQ && (
                        <span className="bg-accent-red text-white text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {office.address}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm text-navy-700 font-medium">
                      <Users className="w-4 h-4 text-accent-red" />
                      {office.employees} employees
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-500">
              In addition to these major offices, Hayashida Group maintains a
              presence in over 20 additional locations across Europe, the
              Americas, the Middle East, and the Asia-Pacific region, including
              Frankfurt, Zurich, Dubai, Shanghai, Seoul, Jakarta, and Sao Paulo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
