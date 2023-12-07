"use client";
import styles from "./Footer.module.scss";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import edge from "../../../../public/assets/media/footer-raw-edge.svg";
import logo from "../../../../public/assets/media/logo.svg";

function Footer({ locale }) {
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

  function submitHandler(e) {
    e.preventDefault();
  }

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
                    <Link className="h4 text-weave font-pr-light leading-none" href={item.link}>
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
                    <Link className="h4 text-weave footer-title-size font-pr-light leading-none" href={item.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.newsLetter}>
            <div className={cx("overHeadTitle-size text-clay font-pr-medium", [styles.newsLetterTitle])}>Newsletter</div>

            <form className="flex border-b-[1px] border-weave" onSubmit={submitHandler}>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="pe-1 bg-transparent text-weave font-pr-regular paragraph1-size placeholder:text-weave placeholder:font-pr-regular border-none outline-none"
                />
              </div>
              <button type="submit" className="caption2-size text-weave font-pr-light">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={cx("flex justify-between gap-x-4 mt-[14vw]", styles.lower)}>
          <div className={cx("text-weave font-pr-bold nav-size basis-full border-b-[2px] border-weave pb-1 self-end", styles.copyRight)}>
            Saudi Artisanal Company © Copyright 2023
          </div>
          <div className={cx("relative top-1.5", styles.logo)}>
            <Image src={logo} alt="logo" className="block" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
