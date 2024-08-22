"use client";
import cx from "classnames";
import Link from "next/link";
import styles from "./News.module.scss";
import img1 from "@/public/assets/media/home/news/news1.png";
import img2 from "@/public/assets/media/home/news/news2.png";
import img3 from "@/public/assets/media/home/news/news3.png";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CTA from "../../CTA/CTA";

const dummy_blogs = [
  {
    attributes: {
      title: "Focus on the benefits of the product rather than the features, keep the headline short and sweet",
      description:
        "Focus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\n",
      date: "03/06/2023",
      url: null,
      image: {
        data: {
          attributes: {
            url: img1,
          },
        },
      },
    },
  },
  {
    attributes: {
      title: "Focus on the benefits of the product rather than the features, keep the headline short and sweet",
      description:
        "Focus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\n",
      date: "03/06/2023",
      url: null,
      image: {
        data: {
          attributes: {
            url: img2,
          },
        },
      },
    },
  },
  {
    attributes: {
      title: "Focus on the benefits of the product rather than the features, keep the headline short and sweet",
      description:
        "Focus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\nFocus on the benefits of the product rather than the features, keep the headline short and sweet\n\n\n",
      date: "03/06/2023",
      url: null,
      image: {
        data: {
          attributes: {
            url: img3,
          },
        },
      },
    },
  },
];

const dummy_news = {
  title: "Our news",
  cta: {
    label: "See all news",
    url: "/news",
  },
};

function News({ locale, news = dummy_news, blogs = dummy_blogs }) {
  return (
    <div className={cx("bg-weave spaceX sectionPaddingBottom", styles.section, { [styles.ar]: locale === "ar" })}>
      <div className="title font-pr-light text-grey pb-3">
        <h3>{news.title}</h3>
      </div>
      <div className="sectionContainer">
        <div className="news flex justify-between gap-x-[2.5vw]">
          {blogs.map((item, index) => (
            <Link key={index} href={"/" + locale + "/news/" + item?.attributes?.url}>
              <div className="newsItem">
                <div className="image w-full">
                  <Image src={item?.attributes?.image?.data?.attributes?.url} className="w-full h-auto" alt={item?.attributes?.title} />
                  {/* <img src={"http://localhost:1337" + item?.attributes?.image?.data?.attributes?.url} className="w-full h-auto" alt={item?.attributes?.title} /> */}
                </div>
                <div className="date overHeadTitle-size font-pr-medium text-grey pt-[1.5vw] pb-[0.8vw]">{item?.attributes?.date}</div>
                <div className="description">
                  <Markdown rehypePlugins={[rehypeRaw]} className="paragraph2-size font-pr-regular text-grey">
                    {item?.attributes?.title}
                  </Markdown>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="cta flex justify-center pt-[4.3vw]">
          <CTA label={news.cta.label} color="weave" bg="grey" type="button" link={"/" + locale + news.cta.url} locale={locale} />
        </div>
      </div>
    </div>
  );
}

export default News;
