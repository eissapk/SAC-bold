"use client";
import styles from "./Footer.module.scss";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import edge from "../../../../public/assets/media/footer-raw-edge.svg";
import logo from "../../../../public/assets/media/logo.svg";
import Map from "../Map/Map";
import NewsLetter from "../Forms/NewsLetter/NewsLetter";

function Footer({ locale = "en" }) {
  const joinUsLinks = [
    { link: "/" + locale + "/artisan", label: "As artisan" },
    { link: "/" + locale + "/designer", label: "As designer" },
    { link: "/" + locale + "/partner", label: "As partner" },
  ];
  const siteMapLinks = [
    { link: "/" + locale + "/story", label: "The story" },
    { link: "/" + locale + "/creations", label: "The creations" },
    { link: "/" + locale + "/custom-designs", label: "Custom designs" },
    { link: "/" + locale + "/studio", label: "The studio" },
    { link: "/" + locale + "/workshops", label: "Workshops & artisans" },
    { link: "/" + locale + "/contact", label: "Contact" },
  ];

  return (
    <footer className={cx("", styles.section, { [styles.ar]: locale == "ar" })}>
      <div className={cx("w-full relative top-0.5", styles.layer)}>
        <Image className="block w-full h-auto" src={edge} alt="footer-raw-edge" priority={false} />
      </div>

      <div className={cx("bg-grey spaceX", styles.sectionContainer)}>
        <div className={cx("flex justify-between", styles.upper)}>
          <div className={cx("flex gap-x-[13.8vw]", styles.upperInnerContainer)}>
            <div className={cx("", styles.joinUs)}>
              <div className={cx("overHeadTitle-size text-clay font-pr-medium", [styles.joinUsTitle])}>Join us</div>
              <ul className={styles.joinUsLinks}>
                {joinUsLinks.map((item, index) => (
                  <li key={index}>
                    <Link className="leading-none h4 text-weave font-pr-light" href={item.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              <ul>
                {siteMapLinks.map((item, index) => (
                  <li key={index}>
                    <Link className="leading-none h4 text-weave footer-title-size font-pr-light" href={item.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.newsLetter}>
            <div className={cx("overHeadTitle-size text-clay font-pr-medium", [styles.newsLetterTitle])}>Newsletter</div>
            <NewsLetter />
          </div>
        </div>

        {/* <div className="relative my-2 pb-[28vw]">
					<Map
						coords={{ lat: 21.836618279238696, lon: 39.49992243094176 }}
						style="mapbox://styles/ahmedbold/clnl43gi4002x01pgg4ajcy71"
						token={"pk.eyJ1IjoiZWlzc2FwayIsImEiOiJjbHAxNnpzMzgwaWozMmpzNmdqaWhuM240In0.lGY2mZvIbXYdOrYPy-iHow"}
						zoom={[12]}
					/>
				</div> */}

        <div className={cx("flex justify-between gap-x-4 xmt-[14vw]", styles.lower)}>
          <div className={cx("text-weave font-pr-bold nav-size basis-full border-b-[2px] border-weave pb-1 self-end", styles.copyRight)}>Saudi Artisanal Company © Copyright 2023</div>
          <div className={cx("relative top-1.5", styles.logo)}>
            <Link href={"/" + locale}>
              <Image src={logo} alt="logo" className="block" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
