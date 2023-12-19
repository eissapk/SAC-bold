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
import { usePathname } from "next/navigation";

function Header({ locale = "en", layout = "fixed" }) {
	const [scrolled, setScrolled] = useState(layout !== "fixed" ? true : false);
	const pathname = usePathname();
	function headerHandler() {
		if (layout == "fixed") {
			if (window.pageYOffset >= 100) setScrolled(true);
			else setScrolled(false);
		} else {
			setScrolled(true);
		}
	}
	useEffect(() => {
		window.addEventListener("scroll", headerHandler);
		return () => window.removeEventListener("scroll", headerHandler);
	}, []);

	function langSwitcher(code) {
		if (!pathname) return "/" + code;

		// todo fix this
		const translatedSlug = localStorage.getItem("translatedSlug");
		if (pathname.includes("/news/")) {
			if (translatedSlug && (translatedSlug !== "null" || translatedSlug !== "undefined")) {
				return "/" + code + "/news/" + translatedSlug;
			}
		}

		return "/" + code + "/" + pathname.slice(1).split("/").slice(1).join("/");
	}

	return (
		<header className={cx("spaceX", styles.section, { [styles.scrolled]: scrolled, [styles.ar]: locale == "ar", [layout]: layout })}>
			<div className={styles.menuIcon}>
				<button type="button">
					<Image src={scrolled ? menuDark : menu} alt="menu-icon" />
				</button>
			</div>
			<div className={styles.logo}>
				<Link href={"/" + locale}>
					<Image src={scrolled ? logoDark : logo} alt="logo" />
				</Link>
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
							<Link href={langSwitcher("ar")} className="overHeadTitle-size">
								العربية
							</Link>
						</li>
					)}
					{locale == "ar" && (
						<li>
							<Link href={langSwitcher("en")} className="overHeadTitle-size">
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
