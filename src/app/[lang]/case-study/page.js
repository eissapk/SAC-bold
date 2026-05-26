import PageShell from "@/src/app/components/PageShell/PageShell";
import PageIntro from "@/src/app/components/PageIntro/PageIntro";
import CaseStudyGrid from "@/src/app/components/CaseStudyGrid/CaseStudyGrid";
import { parseLocale } from "@/src/lib/locale";
import { getSitePage } from "@/src/lib/site-pages";

export default function CaseStudyPage({ params }) {
  const locale = parseLocale(params.lang);
  const page = getSitePage("case-study", locale);

  return (
    <PageShell locale={locale}>
      <PageIntro locale={locale} label={page.label} title={page.title} description={page.description} />
      <CaseStudyGrid locale={locale} />
    </PageShell>
  );
}

export function generateMetadata({ params }) {
  const locale = parseLocale(params.lang);
  const page = getSitePage("case-study", locale);
  return { title: `${page.title} | SAC`, description: page.description };
}
