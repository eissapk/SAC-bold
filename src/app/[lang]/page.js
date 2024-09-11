import { ApiService, get } from "@/src/lib/api.service";
import Header from "@/src/app/components/Header/Header";
import Intro from "@/src/app/components/Home/Intro/Intro";
import Products from "@/src/app/components/Home/Products/Products";
import Summary from "@/src/app/components/Home/Summary/Summary";
import CustomPieces from "@/src/app/components/Home/CustomPieces/CustomPieces";
import Philosophy from "@/src/app/components/Home/Philosophy/Philosophy";
import News from "@/src/app/components/Home/News/News";
import Footer from "@/src/app/components/Footer/Footer";

export default async function page({ params }) {
  const { data, blogs } = await getPageData(params.lang);

  return (
    <>
      <Header locale={params.lang} />
      <Intro locale={params.lang} intro={data?.data?.attributes?.intro} />
      <Products locale={params.lang} products={data?.data?.attributes?.products} summary={data?.data?.attributes?.intro?.summary} />
      <Summary locale={params.lang} summary={data?.data?.attributes?.summary} />
      <CustomPieces locale={params.lang} customPieces={data?.data?.attributes?.customPieces} />
      <Philosophy locale={params.lang} philosophy={data?.data?.attributes?.philosophy} />
      <News locale={params.lang} news={data?.data?.attributes?.news} blogs={blogs?.data} />
      <Footer locale={params.lang} />
    </>
  );
}

async function getPageData(locale) {
  // use 127.0.0.1 instead of localhost for consuming endpoints of strapi in dev mode
  // final url: http://localhost:1337/api/home/?locale=en&populate=intro,localizations
  // base url : http://localhost:1337/api/
  // home: single type name
  // ?locale=en: locale type
  // &populate=intro,localizations: fetch those separated by comma
  // localizations: fetch the related language (e.g slug name in the other lang, for blog posts)
  const [data, blogs] = await Promise.all([
    get(
      "home",
      locale,
      "intro,products,products.image,products.cta,summary,customPieces,customPieces.cta1,customPieces.cta2,philosophy,philosophy.cta,news.cta"
    ),
    get("news-presses", locale, "image"),
  ]);
  return { data, blogs };
}

export async function generateMetadata({ params }) {
  const data = await get("home", params.lang, "seo,seo.image");
  const seo = data?.data?.attributes?.seo;
  return {
    title: seo?.title || "",
    description: seo?.description || "",
    image: seo?.image?.data?.attributes?.url || "",
    openGraph: {
      type: "website",
      url: "",
      title: seo?.title || "",
      description: seo?.description || "",
      images: [seo?.image?.data?.attributes?.url || ""],
    },
  };
}
