interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {breadcrumbs && (
          <div className="flex items-center gap-2 text-sm text-navy-400 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</a>
                ) : (
                  <span className="text-navy-200">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg lg:text-xl text-navy-300 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
