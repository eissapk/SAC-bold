import { get } from "@/src/lib/api.service";
import Header from "@/src/app/components/Header/Header";
import News from "@/src/app/components/News/News";
import Footer from "@/src/app/components/Footer/Footer";

export default async function page({ params }) {
	const { blogs } = await getPageData(params.lang);

	return (
		<>
			<Header locale={params.lang} layout="sticky" />
			<News locale={params.lang} blogs={blogs?.data} />
			<Footer locale={params.lang} />
		</>
	);
}

async function getPageData(locale) {
	const [blogs] = await Promise.all([get("news-presses", locale, "image")]);
	return { blogs };
}

export async function generateMetadata({ params }) {
	return {
		title: "SAC | Saudi artisanal company",
		description: "Weaving the future of our culture through craftsmanship",
	};
}
