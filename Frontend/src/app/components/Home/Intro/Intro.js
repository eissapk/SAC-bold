import styles from "./Intro.module.scss";
import cx from "classnames";
// import introVideo from "@/public/assets/media/home/intro.mp4";
import introVideoPoster from "@/public/assets/media/home/intro.png";
import Image from "next/image";
import SectionTitle from "../../SectionTitle/SectionTitle";
import item from "@/public/assets/media/home/item1.svg";

function Intro({ locale }) {
  return (
    <div className={cx(styles.section, { [styles.ar]: locale == "ar" })}>
      <div className={styles.video}>
        <Image src={introVideoPoster} alt="intro" />
        {/* <video controls poster={introVideoPoster} autoPlay loop muted preload="auto">
        <source src={introVideo} type="video/mp4">
        </source>
        Your browser doen't support video technology
      </video> */}
      </div>

      <div className={styles.content}>
        <div className={styles.innerContent}>
          <SectionTitle color="text-weave" label="Crafted by Saudi artisans" locale={locale} />
          <div className={styles.title}>
            <h1 className="leading-none">Weaving the future of our culture through craftsmanship</h1>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <Image src={item} alt="item-1"/>
      </div>
    </div>
  );
}

export default Intro;
