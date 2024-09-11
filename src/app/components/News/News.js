"use client";
import cx from "classnames";
import styles from "./News.module.scss";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CTA from "../CTA/CTA";
import Link from "next/link";
import dummy_blogs from "@/src/lib/news";

const dummy_news = {
  title: "Our news",
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
      </div>
    </div>
  );
}

export default News;
