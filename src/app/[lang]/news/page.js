import PageShell from "@/src/app/components/PageShell/PageShell";
import News from "@/src/app/components/News/News";
import { getNewsList, getNewsSection } from "@/src/lib/news";
import { parseLocale } from "@/src/lib/locale";

export default function NewsPage({ params }) {
  const locale = parseLocale(params.lang);
  const blogs = getNewsList(locale);
  const section = getNewsSection(locale);

  return (
    <PageShell locale={locale}>
      <News locale={locale} blogs={blogs.data} section={section} />
    </PageShell>
  );
}

export async function generateMetadata({ params }) {
  const isAr = parseLocale(params.lang) === "ar";
  return {
    title: isAr ? "أخبارنا | SAC" : "News | SAC",
    description: isAr
      ? "آخر أخبار الشركة السعودية للحرف اليدوية — مجموعات جديدة، ورش الحرفيين، وشراكات الضيافة."
      : "Latest from Saudi Artisanal Company — new collections, artisan workshops, and hospitality partnerships.",
  };
}
