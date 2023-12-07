import { ApiService } from "@/src/lib/api.service";
import Header from "@/src/app/components/Header/Header";
import Intro from "@/src/app/components/Home/Intro/Intro";
import Products from "@/src/app/components/Home/Products/Products";
import Summary from "@/src/app/components/Home/Summary/Summary";
import Footer from "@/src/app/components/Footer/Footer";

export default async function page({ params }) {
  // const [data] = getPageData(params.lang);

  return (
    <>
      <Header locale={params.lang} />
      <Intro locale={params.lang} />
      <Products locale={params.lang} />
      <Summary locale={params.lang}/>
      {/* custom pieces */}
      <Footer locale={params.lang} />
    </>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "SAC | Saudi artisanal company",
    description: "Inspired by the generosity and bestowments of the palm tree.",
  };

  const api = new ApiService(params.lang);
  const metadata = await api.get("home-page", false, false, undefined, "SEO.image");
  return {
    title: "SAC " + (metadata.SEO?.title && `| ${metadata.SEO?.title}`),
    description: metadata.SEO?.description || "",
    image: metadata.SEO?.image?.data?.attributes?.url || "",
    openGraph: {
      type: "website",
      url: "",
      title: `SAC | ${metadata.SEO?.title || ""}`,
      description: metadata.SEO?.description || "",
      images: [metadata.SEO?.image?.data?.attributes?.url || ""],
    },
  };
}

async function getPageData(locale) {
  const api = new ApiService(locale);
  const [data] = await Promise.all([api.get("home-page", false, false, undefined, "intro")]);
  return { data };
}
