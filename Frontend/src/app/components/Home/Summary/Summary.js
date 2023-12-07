import cx from "classnames";
import styles from "./Summary.module.scss";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Image from "next/image";
import summary from "@/public/assets/media/home/summary.png";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function Summary({ locale = "en" }) {
  return (
    <div className={cx("sectionPaddingTop", styles.section, { [styles.ar]: locale == "ar" })}>
      <div className={cx("spaceX", styles.sectionContainer)}>
        <SectionTitle color="text-clay" label="We preserve the past by paving the future." align="left" locale={locale} />
        <div className={styles.title}>
          <h3 className=" leading-none">Empowering the next generation of artisans and opening up the legacy of Saudi craftsmanship to the world, echoing the past and weaving the future</h3>
        </div>

        <div className={cx("paragraph2-size", styles.description)}>
          <Markdown className="w-[29%]" rehypePlugins={[rehypeRaw]}>
            Delivering stories of impact woven from the legacies of the past and paving the roads towards contemporary artistry and craftsmanship.
          </Markdown>
        </div>
      </div>

      <div className={styles.video}>
        <Image src={summary} alt="summary" />
      </div>
    </div>
  );
}

export default Summary;
