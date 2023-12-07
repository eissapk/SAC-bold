import cx from "classnames";
import styles from "./Philosophy.module.scss";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Image from "next/image";
import videoPoster from "@/public/assets/media/home/philosophy/video.png";
import image1 from "@/public/assets/media/home/philosophy/img1.png";
import image2 from "@/public/assets/media/home/philosophy/img2.png";
import image3 from "@/public/assets/media/home/philosophy/img3.png";
import item from "@/public/assets/media/home/philosophy/item.svg";
import CTA from "../../CTA/CTA";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function Philosophy({ locale = "en" }) {
  return (
    <div className={cx(" bg-weave sectionPaddingTop spaceX-start", styles.section, { [styles.ar]: locale == "ar" })}>
      <SectionTitle label="Philosophy & method" locale={locale} color="text-clay" align="start" />
      <div className="title font-pr-light text-grey pt-[1.5vw] pb-[8.3vw]">
        <h3 className="leading-none w-[70%]">Each creation is a masterpiece that enriches your everyday living with beauty and purpose</h3>
      </div>

      {/* todo: fix this part of 3 images below */}
      <div className="sectionContainer flex gap-x-[10vw]">
        <div className="video pb-[40vw] relative">
          <Image src={videoPoster} alt="Philosophy" />

          <div className="item absolute -right-[50%] top-[20%]">
            <Image src={item} alt="item" className="block" />
          </div>
        </div>

        <div className="content relative">
          <div className="description pb-[2.4vw]">
            <Markdown rehypePlugins={[rehypeRaw]} className="paragraph2-size font-pr-regular text-grey w-[50%]">
              Creating a legacy that celebrates the rooted heritage of craftsmanship and the future that blossoms from it. Merging two worlds into a singular universe of beauty.
            </Markdown>
          </div>

          <div className="cta">
            <CTA label="See our studio" locale={locale} link={"/" + locale + "/studio"} color="weave" bg="grey" type="button" />
          </div>

          <div className="image1 inline-block absolute right-0 top-[20%]">
            <Image src={image1} alt="image1" className="block" />

            <div className="image3 inline-block absolute right-0 top-[110%]">
              <Image src={image3} alt="image3" className="block" />
            </div>
          </div>

          <div className="image2 inline-block absolute -left-[5%] top-[51%]">
            <Image src={image2} alt="image2" className="block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
