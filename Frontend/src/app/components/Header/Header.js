"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/public/assets/media/logo.svg";
import logoDark from "@/public/assets/media/logo-dark.svg";
import menu from "@/public/assets/media/menu-icon.svg";
import menuDark from "@/public/assets/media/menu-icon-dark.svg";
import cx from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header({ locale }) {
  const [scrolled, setScrolled] = useState(false);
  function headerHandler() {
    if (window.pageYOffset >= 100) setScrolled(true);
    else setScrolled(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", headerHandler);
    return () => window.removeEventListener("scroll", headerHandler);
  }, []);

  return (
    <header className={cx("spaceX", styles.section, { [styles.scrolled]: scrolled, [styles.ar]: locale == "ar" })}>
      <div className={styles.menuIcon}>
        <button type="button">
          <Image src={scrolled ? menuDark : menu} alt="menu-icon" />
        </button>
      </div>
      <div className={styles.logo}>
        <Image src={scrolled ? logoDark : logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <ul>
          <li className="pe-1">
            <Link href={"/" + locale + "/creations"} className="overHeadTitle-size">
              Our creations
            </Link>
          </li>
          {locale == "en" && (
            <li>
              <Link href={"/ar"} className="overHeadTitle-size">
                العربية
              </Link>
            </li>
          )}
          {locale == "ar" && (
            <li>
              <Link href={"/en"} className="overHeadTitle-size">
                English
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
