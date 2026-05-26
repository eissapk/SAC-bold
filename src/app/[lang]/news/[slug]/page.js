import { notFound } from "next/navigation";
import PageShell from "@/src/app/components/PageShell/PageShell";
import NewsItem from "@/src/app/components/Home/News/NewsItem/NewsItem";
import { getNewsBySlug, getAllNewsSlugs } from "@/src/lib/news";
import { parseLocale } from "@/src/lib/locale";

export default function NewsArticlePage({ params }) {
  const locale = parseLocale(params.lang);
  const blog = getNewsBySlug(params.slug, locale);
  if (!blog) notFound();

  return (
    <PageShell locale={locale}>
      <NewsItem locale={locale} blog={blog} />
    </PageShell>
  );
}

export function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return ["en", "ar"].flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export function generateMetadata({ params }) {
  const locale = parseLocale(params.lang);
  const blog = getNewsBySlug(params.slug, locale);
  if (!blog) return { title: "SAC | News" };
  return {
    title: `${blog.title} | SAC`,
    description: blog.description?.slice(0, 160),
  };
}
