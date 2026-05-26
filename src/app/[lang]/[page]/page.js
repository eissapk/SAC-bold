import { notFound } from "next/navigation";
import PageShell from "@/src/app/components/PageShell/PageShell";
import PageIntro from "@/src/app/components/PageIntro/PageIntro";
import SimpleContent from "@/src/app/components/SimpleContent/SimpleContent";
import { parseLocale } from "@/src/lib/locale";
import { SITE_PAGE_SLUGS, getSitePage } from "@/src/lib/site-pages";

const INFO_PAGES = SITE_PAGE_SLUGS.filter((slug) => slug !== "case-study");

export default function InfoPage({ params }) {
  if (!INFO_PAGES.includes(params.page)) notFound();

  const locale = parseLocale(params.lang);
  const content = getSitePage(params.page, locale);

  return (
    <PageShell locale={locale}>
      <PageIntro locale={locale} label={content.label} title={content.title} description={content.description} />
      <SimpleContent body={content.body} />
    </PageShell>
  );
}

export function generateStaticParams() {
  return ["en", "ar"].flatMap((lang) => INFO_PAGES.map((page) => ({ lang, page })));
}

export function generateMetadata({ params }) {
  if (!INFO_PAGES.includes(params.page)) return { title: "SAC" };
  const locale = parseLocale(params.lang);
  const content = getSitePage(params.page, locale);
  return { title: `${content.title} | SAC`, description: content.description };
}
