"use client";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/src/app/components/CTA/CTA";
import { pxPageMinor, pbSection, textH5, textFooterLink } from "@/src/lib/ui";
import { getProductsList } from "@/src/lib/products";
import { getHomeContent } from "@/src/lib/home";

export default function ProductGrid({ locale = "en", products: productsProp }) {
  const products = productsProp ?? getProductsList(locale);
  const categoryLabel = getHomeContent(locale).productCategory;

  return (
    <div className={`${pxPageMinor} ${pbSection}`}>
      <div className={`${pxPageMinor} grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-4 lg:gap-6`}>
        {products.map((product) => (
          <div className="relative group" key={product.slug}>
            <Link href={"/" + locale + "/products/" + product.slug}>
              <Image src={product.image} alt={product.title} className="w-full h-auto" />
            </Link>

            <div className="mt-3 flex flex-col gap-2 sm:mt-0 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-row sm:items-end sm:justify-between sm:px-4 sm:pb-4 md:px-6 md:pb-6 bg-weave/90 sm:bg-transparent">
              <div className="sm:max-w-[55%]">
                <div className={`${textFooterLink} text-grey font-pr-light`}>{categoryLabel}</div>
                <div className="font-pr-light text-grey pt-1 pb-2 sm:pb-4">
                  <h5 className={textH5}>{product.title}</h5>
                </div>
                {product.excerpt && (
                  <p className="text-sm text-grey/80 font-pr-regular line-clamp-2 hidden sm:block">{product.excerpt}</p>
                )}
              </div>
              <div className="sm:self-end sm:pb-4 shrink-0">
                <CTA
                  type="link"
                  label={product.ctaLabel}
                  link={"/" + locale + "/products/" + product.slug}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
