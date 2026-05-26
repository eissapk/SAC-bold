import Header from "@/src/app/components/Header/Header";
import Footer from "@/src/app/components/Footer/Footer";
import NewsItem from "@/src/app/components/Home/News/NewsItem/NewsItem";
import { getNewsBySlug, getAllNewsSlugs } from "@/src/lib/news";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const blog = getNewsBySlug(params.slug, params.lang);
  if (!blog) notFound();

  return (
    <>
      <Header locale={params.lang} layout="sticky" />
      <NewsItem locale={params.lang} blog={blog} />
      <Footer locale={params.lang} />
    </>
  );
}

export function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  const langs = ["en", "ar"];
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }) {
  const blog = getNewsBySlug(params.slug, params.lang);
  if (!blog) {
    return { title: "SAC | News" };
  }
  return {
    title: `${blog.title} | SAC`,
    description: blog.description?.slice(0, 160),
  };
}
