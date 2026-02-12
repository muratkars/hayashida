import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "The latest press releases, announcements, and news from Hayashida Group across our global operations.",
};

export default function NewsroomPage() {
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHeader
        title="Newsroom"
        subtitle="Press releases, announcements, and the latest updates from Hayashida Group."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Newsroom" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168d8c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {sortedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/newsroom/${article.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg p-8 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-semibold text-navy-900 group-hover:text-accent-red transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-gray-600 leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy-900 group-hover:text-accent-red transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
