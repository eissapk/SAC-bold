import Header from "@/src/app/components/Header/Header";
import News from "@/src/app/components/News/News";
import Footer from "@/src/app/components/Footer/Footer";
import { getNewsList, getNewsSection } from "@/src/lib/news";

export default async function page({ params }) {
  const blogs = getNewsList(params.lang);
  const section = getNewsSection(params.lang);

  return (
    <>
      <Header locale={params.lang} layout="sticky" />
      <News locale={params.lang} blogs={blogs.data} section={section} />
      <Footer locale={params.lang} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const isAr = params.lang === "ar";
  return {
    title: isAr ? "أخبارنا | SAC" : "News | SAC",
    description: isAr
      ? "آخر أخبار الشركة السعودية للحرف اليدوية — مجموعات جديدة، ورش الحرفيين، وشراكات الضيافة."
      : "Latest from Saudi Artisanal Company — new collections, artisan workshops, and hospitality partnerships.",
  };
}
