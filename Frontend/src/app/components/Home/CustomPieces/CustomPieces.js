import cx from "classnames";
import styles from "./CustomPieces.module.scss";
import Image from "next/image";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CTA from "../../CTA/CTA";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import bg from "@/public/assets/media/home/custom-pieces.png";
import logo1 from "@/public/assets/media/home/logos/logo1.svg";
import logo2 from "@/public/assets/media/home/logos/logo2.svg";
import logo3 from "@/public/assets/media/home/logos/logo3.svg";
import logo4 from "@/public/assets/media/home/logos/logo4.svg";
import logo5 from "@/public/assets/media/home/logos/logo5.svg";

function CustomPieces({ locale = "en" }) {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo3];

  return (
    <div className={cx(styles.section, "", { [styles.ar]: locale == "ar" })}>
      <div className={cx(styles.image, "")}>
        <Image src={bg} alt="custom-pieces" className="" />
      </div>

      <div className={styles.content}>
        <div className={styles.innerContent}>
          <SectionTitle color="text-weave" label="Custom Pieces" locale={locale} />
          <div className={styles.title}>
            <h3 className="leading-none">Sculpting your imagination into pieces of exquisite artistry rooted in heritage and branched with modernity</h3>
          </div>

          <div className={cx("paragraph2-size", styles.description)}>
            <Markdown rehypePlugins={[rehypeRaw]}>Create your own custom pieces in collaboration with our artisans through a detailed craftsmanship process.</Markdown>
          </div>

          <div className={styles.cta}>
            <CTA color="grey" bg="weave" locale={locale} link={"/" + locale + "/case-study"} type="button" label="View our case studies" />
            <CTA color="weave" locale={locale} link={"/" + locale + "/creations"} type="link" label="Bring your imagination to life" />
          </div>

          <div className={styles.logos}>
            <ul>
              {logos.map((url, index) => (
                <li key={index}>
                  <Image src={url} alt="logo" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomPieces;
