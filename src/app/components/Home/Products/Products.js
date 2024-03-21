"use client";
import styles from "./Products.module.scss";
import cx from "classnames";
import Image from "next/image";
import product1 from "@/public/assets/media/home/products/product1.png";
import product2 from "@/public/assets/media/home/products/product2.png";
import product3 from "@/public/assets/media/home/products/product3.png";
import product4 from "@/public/assets/media/home/products/product4.png";
import product5 from "@/public/assets/media/home/products/product5.png";
import product6 from "@/public/assets/media/home/products/product6.png";
import CTA from "../../CTA/CTA";

const dummy_products = [
  {
    title: "The date bowl collection",
    cta: {
      label: "See the product",
      url: "the-date-bowl-collection",
    },
    image: product1,
  },
  {
    title: "The hospitality collection",
    cta: {
      label: "See the product",
      url: "the-hospitality-collection",
    },
    image: product2,
  },
  {
    title: "Saudi khawlani coffee Set",
    cta: {
      label: "See the product",
      url: "saudi-khawlani-coffee-set",
    },
    image: product3,
  },
  {
    title: "Modern Biyalah",
    cta: {
      label: "See the product",
      url: "modern-biyalah",
    },
    image: product4,
  },
  {
    title: "Color of the land collection",
    cta: {
      label: "See the product",
      url: "color-of-the-land-collection",
    },
    image: product5,
  },
  {
    title: "Hospitality doors collection",
    cta: {
      label: "See the product",
      url: "hospitality-doors-collection",
    },
    image: product6,
  },
];

const dummy_summary = "Molding new forms of craftsmanship that connects the heritage of the past with a world of contemporary excellence that deliver authenticity and innovation all at once";

function Products({ locale = "en", products = dummy_products, summary = dummy_summary }) {
  return (
    <div className={cx("spaceX-minor", styles.section, { [styles.ar]: locale == "ar" })}>
      <div className={cx("spaceX-minor", styles.title)}>
        <h3 className="leading-none">{summary}</h3>
      </div>

      <div className={styles.products}>
        {products.map((product, index) => (
          <div className={styles.product} key={index}>
            <div className={styles.image}>
              <Image src={product?.image} alt={product?.title} />
              {/* <img src={"http://localhost:1337" + product?.image?.data?.attributes?.url} alt={product?.title} /> */}
            </div>

            <div className={styles.content}>
              <div className={styles.innerContent}>
                <div className={cx("footer-title-size", styles.label)}>Category</div>
                <div className={cx(styles.contentTitle)}>
                  <h5 className="leading-none">{product?.title}</h5>
                </div>
              </div>

              <div className={styles.cta}>
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
