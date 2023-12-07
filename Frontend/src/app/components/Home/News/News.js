import cx from "classnames";
import styles from "./News.module.scss";
import img1 from "@/public/assets/media/home/news/news1.png";
import img2 from "@/public/assets/media/home/news/news2.png";
import img3 from "@/public/assets/media/home/news/news3.png";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CTA from "../../CTA/CTA";
function News({ locale }) {
  const news = [
    {
      image: img1,
      date: "03/06/2023",
      description: "Focus on the benefits of the product rather than the features, keep the headline short and sweet",
    },
    {
      image: img2,
      date: "03/06/2023",
      description: "Focus on the benefits of the product rather than the features, keep the headline short and sweet",
    },
    {
      image: img3,
      date: "03/06/2023",
      description: "Focus on the benefits of the product rather than the features, keep the headline short and sweet",
    },
  ];

  return (
    <div className={cx("bg-weave spaceX sectionPaddingBottom", styles.section, { [styles.ar]: locale === "ar" })}>
      <div className="title font-pr-light text-grey pb-3">
        <h3>Our news</h3>
      </div>
      <div className="sectionContainer">
        <div className="news flex justify-between gap-x-[2.5vw]">
          {news.map((item, index) => (
            <div key={index} className="newsItem">
              <div className="image w-full">
                <Image src={item.image} className="w-full h-auto" alt={item.description} />
              </div>
              <div className="date overHeadTitle-size font-pr-medium text-grey pt-[1.5vw] pb-[0.8vw]">{item.date}</div>
              <div className="description">
                <Markdown rehypePlugins={[rehypeRaw]} className="paragraph2-size font-pr-regular text-grey">{item.description}</Markdown>
              </div>
            </div>
          ))}
        </div>
        <div className="cta flex justify-center pt-[4.3vw]">
          <CTA label="See all news" color="weave" bg="grey" type="button" link={"/" + locale + "/news"} locale={locale} />
        </div>
      </div>
    </div>
  );
}

export default News;
