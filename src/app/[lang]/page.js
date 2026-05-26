import { get } from "@/src/lib/api.service";
import Header from "@/src/app/components/Header/Header";
import Intro from "@/src/app/components/Home/Intro/Intro";
import Products from "@/src/app/components/Home/Products/Products";
import Summary from "@/src/app/components/Home/Summary/Summary";
import CustomPieces from "@/src/app/components/Home/CustomPieces/CustomPieces";
import Philosophy from "@/src/app/components/Home/Philosophy/Philosophy";
import News from "@/src/app/components/Home/News/News";
import Footer from "@/src/app/components/Footer/Footer";
import { getNewsList, getNewsSection } from "@/src/lib/news";
import { getHomeContent } from "@/src/lib/home";

export default async function page({ params }) {
  const locale = params.lang === "ar" ? "ar" : "en";
  const { data, blogs } = await getPageData(locale);
  const newsSection = getNewsSection(locale);
  const home = getHomeContent(locale);
  const attrs = data?.data?.attributes;

  return (
    <>
      <Header locale={locale} />
      <Intro locale={locale} intro={attrs?.intro ?? home.intro} />
      <Products
        locale={locale}
        products={attrs?.products ?? home.products}
        summary={attrs?.intro?.summary ?? home.productsSummary}
        categoryLabel={home.productCategory}
      />
      <Summary locale={locale} summary={attrs?.summary ?? home.summary} />
      <CustomPieces locale={locale} customPieces={attrs?.customPieces ?? home.customPieces} />
      <Philosophy locale={locale} philosophy={attrs?.philosophy ?? home.philosophy} />
      <News locale={locale} news={newsSection} blogs={blogs?.data} />
      <Footer locale={locale} />
    </>
  );
}

async function getPageData(locale) {
  const [data, apiBlogs] = await Promise.all([
    get(
      "home",
      locale,
      "intro,products,products.image,products.cta,summary,customPieces,customPieces.cta1,customPieces.cta2,philosophy,philosophy.cta,news.cta"
    ),
    get("news-presses", locale, "image"),
  ]);

  const blogs = apiBlogs?.data?.length ? apiBlogs : getNewsList(locale);

  return { data, blogs };
}

export async function generateMetadata({ params }) {
  const locale = params.lang === "ar" ? "ar" : "en";
  const fallback = getHomeContent(locale).seo;
  const data = await get("home", locale, "seo,seo.image");
  const seo = data?.data?.attributes?.seo;
  return {
    title: seo?.title || fallback.title,
    description: seo?.description || fallback.description,
    image: seo?.image?.data?.attributes?.url || "",
    openGraph: {
      type: "website",
      url: "",
      title: seo?.title || fallback.title,
      description: seo?.description || fallback.description,
      images: [seo?.image?.data?.attributes?.url || ""],
    },
  };
}
