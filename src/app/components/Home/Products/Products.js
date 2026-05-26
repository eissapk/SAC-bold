"use client";
import Image from "next/image";
import product1 from "@/public/assets/media/home/products/product1.png";
import product2 from "@/public/assets/media/home/products/product2.png";
import product3 from "@/public/assets/media/home/products/product3.png";
import product4 from "@/public/assets/media/home/products/product4.png";
import product5 from "@/public/assets/media/home/products/product5.png";
import product6 from "@/public/assets/media/home/products/product6.png";
import CTA from "../../CTA/CTA";
import { pxPageMinor, textH3, textH5, textFooterLink } from "@/src/lib/ui";

const dummy_products = [
  {
    title: "The date bowl collection",
    cta: { label: "See the product", url: "the-date-bowl-collection" },
    image: product1,
  },
  {
    title: "The hospitality collection",
    cta: { label: "See the product", url: "the-hospitality-collection" },
    image: product2,
  },
  {
    title: "Saudi khawlani coffee Set",
    cta: { label: "See the product", url: "saudi-khawlani-coffee-set" },
    image: product3,
  },
  {
    title: "Modern Biyalah",
    cta: { label: "See the product", url: "modern-biyalah" },
    image: product4,
  },
  {
    title: "Color of the land collection",
    cta: { label: "See the product", url: "color-of-the-land-collection" },
    image: product5,
  },
  {
    title: "Hospitality doors collection",
    cta: { label: "See the product", url: "hospitality-doors-collection" },
    image: product6,
  },
];

const dummy_summary =
  "Molding new forms of craftsmanship that connects the heritage of the past with a world of contemporary excellence that deliver authenticity and innovation all at once";

function Products({ locale = "en", products = dummy_products, summary = dummy_summary }) {
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
                <div className={`${textFooterLink} text-grey font-pr-light`}>Category</div>
                <div className="font-pr-light text-grey pt-1 pb-2 sm:pb-4">
                  <h5 className={textH5}>{product?.title}</h5>
                </div>
              </div>
              <div className="sm:self-end sm:pb-4 shrink-0">
                <CTA type="link" label={product.cta.label} link={"/" + locale + "/products" + product.cta.url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
