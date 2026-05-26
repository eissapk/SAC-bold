"use client";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { pxPage, ptPage, pbSection, textH3, textBody, textOverline } from "@/src/lib/ui";
import { getUiStrings } from "@/src/lib/ui-strings";

function NewsItem({ locale, blog = {} }) {
	const ui = getUiStrings(locale);

	useEffect(() => {
		const translatedSlug = blog?.localizations?.data?.[0]?.attributes?.url;
		localStorage.setItem("translatedSlug", translatedSlug || blog?.url || null);
	}, [blog]);

	const backLabel = ui.news.backToNews;

	return (
		<div className={`bg-weave ${pxPage} ${ptPage} ${pbSection}`}>
			<article className="max-w-3xl mx-auto">
				<Link
					href={"/" + locale + "/news"}
					className={`${textOverline} text-clay font-pr-medium hover:underline mb-6 inline-block`}
				>
					<span aria-hidden="true">{locale === "ar" ? "→" : "←"}</span> {backLabel}
				</Link>

				<p className={`${textOverline} font-pr-medium text-clay mb-3`}>{blog.date}</p>
				<h1 className={`${textH3} font-pr-light text-grey mb-8`}>{blog.title}</h1>

				{blog.image?.data?.attributes?.url && (
					<div className="mb-8 md:mb-10 rounded overflow-hidden">
						<Image
							src={blog.image.data.attributes.url}
							alt={blog.title || ""}
							width={1200}
							height={800}
							className="w-full h-auto"
							priority
						/>
					</div>
				)}

				<div className={`${textBody} font-pr-regular text-grey prose prose-neutral max-w-none prose-p:mb-4 prose-blockquote:border-clay prose-blockquote:text-grey/90`}>
					<Markdown rehypePlugins={[rehypeRaw]}>{blog.description}</Markdown>
				</div>
			</article>
		</div>
	);
}

export default NewsItem;
