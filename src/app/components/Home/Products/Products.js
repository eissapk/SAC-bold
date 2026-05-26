"use client";
import Image from "next/image";
import CTA from "../../CTA/CTA";
import { pxPageMinor, textH3, textH5, textFooterLink } from "@/src/lib/ui";
import { getHomeContent } from "@/src/lib/home";

function Products({ locale = "en", products: productsProp, summary: summaryProp, categoryLabel: categoryLabelProp }) {
  const home = getHomeContent(locale);
  const products = productsProp?.length ? productsProp : home.products;
  const summary = summaryProp ?? home.productsSummary;
  const categoryLabel = categoryLabelProp ?? home.productCategory;

  return (
    <div className={`${pxPageMinor} bg-weave pt-8 md:pt-12 lg:pt-16`}>
      <div className={`${pxPageMinor} text-grey font-pr-light pb-8 md:pb-16 lg:pb-24`}>
        <h3 className={textH3}>{summary}</h3>
      </div>

      <div className={`${pxPageMinor} grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-4 lg:gap-6`}>
        {products.map((product, index) => (
          <div className="relative group" key={index}>
            <Image src={product?.image} alt={product?.title} className="w-full h-auto" />

            <div className="mt-3 flex flex-col gap-2 sm:mt-0 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-row sm:items-end sm:justify-between sm:px-4 sm:pb-4 md:px-6 md:pb-6 bg-weave/90 sm:bg-transparent">
              <div className="sm:max-w-[45%]">
                <div className={`${textFooterLink} text-grey font-pr-light`}>{categoryLabel}</div>
                <div className="font-pr-light text-grey pt-1 pb-2 sm:pb-4">
                  <h5 className={textH5}>{product?.title}</h5>
                </div>
              </div>
              <div className="sm:self-end sm:pb-4 shrink-0">
                <CTA type="link" label={product.cta.label} link={"/" + locale + "/products" + product.cta.url} locale={locale} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
