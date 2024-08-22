"use client";
import cx from "classnames";
import styles from "./NewsItem.module.scss";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { useEffect } from "react";

function NewsItem({ locale, blog = {} }) {
	useEffect(() => {
		const translatedSlug = blog?.localizations?.data[0]?.attributes.url;
		console.log("NewsItem:", blog);
		console.log("translatedSlug:", translatedSlug);
		localStorage.setItem("translatedSlug", translatedSlug || null);
	}, []);
	return (
		<div className={cx("bg-weave spaceX sectionPaddingBottom", styles.section, { [styles.ar]: locale === "ar" })}>
			<div className="sectionContainer">
				<img src={"http://localhost:1337" + blog.image.data.attributes.url} alt={blog.url} />
				{/* <Image src={blog.image.data.attributes.url} alt={blog.url} /> */}
				<br />
				<h3>{blog.title}</h3>
				<br />
				<p>{blog.date}</p>
				<br />
				<Markdown rehypePlugins={[rehypeRaw]}>{blog.description}</Markdown>
			</div>
		</div>
	);
}

export default NewsItem;
