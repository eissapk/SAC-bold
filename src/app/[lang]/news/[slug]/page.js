import { get, getByUrl } from "@/src/lib/api.service";
import Header from "@/src/app/components/Header/Header";
import Footer from "@/src/app/components/Footer/Footer";
import NewsItem from "@/src/app/components/Home/News/NewsItem/NewsItem";
import dummy_blogs from "@/src/lib/news";

export default async function page({ params }) {
  const { blog } = await getPageData(params);

  return (
    <>
      <Header locale={params.lang} layout="sticky" />
      {/* <NewsItem blog={blog?.data[0]?.attributes} /> */}
      <NewsItem blog={blog?.attributes} />
      <Footer locale={params.lang} />
    </>
  );
}

async function getPageData({ lang, slug }) {
  // const [blog] = await Promise.all([getByUrl("news-presses", lang, slug, "image,localizations")]);
  const blog = dummy_blogs.find((item) => item.attributes.url == slug);
  return { blog };
}

export async function generateMetadata({ params }) {
  return {
    title: "SAC | Saudi artisanal company",
    description: "Weaving the future of our culture through craftsmanship",
  };
}
