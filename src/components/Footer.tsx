import Link from "next/link";

const divisions = [
  { label: "Investment Banking", href: "/divisions/investment-banking" },
  { label: "Global Markets", href: "/divisions/global-markets" },
  { label: "Asset Management", href: "/divisions/asset-management" },
  { label: "Wealth Management", href: "/divisions/wealth-management" },
  { label: "Risk & Technology", href: "/divisions/risk-technology" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "History", href: "/about/history" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers/openings" },
  { label: "Newsroom", href: "/newsroom" },
];

const offices = [
  "New York (HQ)",
  "London",
  "Frankfurt",
  "Hong Kong",
  "Singapore",
  "Sydney",
  "Mumbai",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent-red rounded-sm flex items-center justify-center font-bold text-sm text-white">
                M
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-sm text-white tracking-wide">MERIDIAN CAPITAL GROUP</div>
                <div className="text-[10px] text-navy-400 tracking-widest">Est. 1926 · New York</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-400 mt-4">
              Connecting Markets, Shaping Futures. A global financial services group headquartered in New York, serving clients across investment banking, global markets, asset management, and wealth management.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Divisions</h3>
            <ul className="space-y-2.5">
              {divisions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Global Offices</h3>
            <ul className="space-y-2.5">
              {offices.map((office) => (
                <li key={office} className="text-sm">{office}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-navy-500">
              &copy; {new Date().getFullYear()} Meridian Capital Group, Inc. All rights reserved. NYSE: MRDN
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-xs text-navy-500 hover:text-navy-300 transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="text-xs text-navy-500 hover:text-navy-300 transition-colors">Terms of Use</Link>
              <Link href="/contact" className="text-xs text-navy-500 hover:text-navy-300 transition-colors">Cookie Policy</Link>
              <Link href="/contact" className="text-xs text-navy-500 hover:text-navy-300 transition-colors">Regulatory Disclosures</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
