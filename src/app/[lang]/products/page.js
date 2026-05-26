import PageShell from "@/src/app/components/PageShell/PageShell";
import PageIntro from "@/src/app/components/PageIntro/PageIntro";
import ProductGrid from "@/src/app/components/ProductGrid/ProductGrid";
import { parseLocale } from "@/src/lib/locale";
import { getProductsPage } from "@/src/lib/products";

export default function ProductsPage({ params }) {
  const locale = parseLocale(params.lang);
  const page = getProductsPage(locale);

  return (
    <PageShell locale={locale}>
      <PageIntro locale={locale} label={page.label} title={page.title} description={page.description} />
      <ProductGrid locale={locale} />
    </PageShell>
  );
}

export function generateMetadata({ params }) {
  const locale = parseLocale(params.lang);
  const page = getProductsPage(locale);
  return { title: `${page.title} | SAC`, description: page.description };
}
