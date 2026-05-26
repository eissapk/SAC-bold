"use client";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { pxPage, ptPage, pbSection, textH3, textBody, textOverline } from "@/src/lib/ui";
import { getHomeContent } from "@/src/lib/home";

export default function ProductDetail({ locale, product }) {
  const backLabel = locale === "ar" ? "العودة إلى المنتجات" : "Back to products";

  return (
    <div className={`${pxPage} ${ptPage} ${pbSection}`}>
      <article className="max-w-3xl mx-auto">
        <Link href={"/" + locale + "/products"} className={`${textOverline} text-clay font-pr-medium hover:underline mb-6 inline-block`}>
          <span aria-hidden="true">{locale === "ar" ? "→" : "←"}</span> {backLabel}
        </Link>

        <p className={`${textOverline} font-pr-medium text-clay mb-3`}>{getHomeContent(locale).productCategory}</p>
        <h1 className={`${textH3} font-pr-light text-grey mb-8`}>{product.title}</h1>

        {product.image && (
          <div className="mb-8 md:mb-10 overflow-hidden">
            <Image src={product.image} alt={product.title} width={1200} height={800} className="w-full h-auto" priority />
          </div>
        )}

        {product.excerpt && <p className={`${textBody} font-pr-regular text-grey mb-6`}>{product.excerpt}</p>}

        <div className={`${textBody} font-pr-regular text-grey prose prose-neutral max-w-none prose-p:mb-4`}>
          <Markdown rehypePlugins={[rehypeRaw]}>{product.body}</Markdown>
        </div>
      </article>
    </div>
  );
}
