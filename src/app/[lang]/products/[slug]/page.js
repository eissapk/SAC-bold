import { notFound } from "next/navigation";
import PageShell from "@/src/app/components/PageShell/PageShell";
import ProductDetail from "@/src/app/components/ProductDetail/ProductDetail";
import { parseLocale } from "@/src/lib/locale";
import { getAllProductSlugs, getProductBySlug } from "@/src/lib/products";

export default function ProductPage({ params }) {
  const locale = parseLocale(params.lang);
  const product = getProductBySlug(params.slug, locale);
  if (!product) notFound();

  return (
    <PageShell locale={locale}>
      <ProductDetail locale={locale} product={product} />
    </PageShell>
  );
}

export function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return ["en", "ar"].flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export function generateMetadata({ params }) {
  const locale = parseLocale(params.lang);
  const product = getProductBySlug(params.slug, locale);
  if (!product) return { title: "SAC" };
  return { title: `${product.title} | SAC`, description: product.excerpt };
}
