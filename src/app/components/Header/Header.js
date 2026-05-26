"use client";
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
	const [slug, setSlug] = useState(null);
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
		setSlug(localStorage.getItem("translatedSlug"));
		window.addEventListener("scroll", headerHandler);
		return () => window.removeEventListener("scroll", headerHandler);
	}, [slug]);

	function langSwitcher(code) {
		if (!pathname) return "/" + code;

		if (pathname.includes("/news/")) {
			return "/" + code + "/news/" + slug;
		}

		return "/" + code + "/" + pathname.slice(1).split("/").slice(1).join("/");
	}

	return (
		<header
			className={cx("spaceX left-0 top-0 z-[999] w-full py-[2.2vw] flex items-center justify-between", layout, {
				"bg-weave py-[1vw] transition-all": scrolled,
			})}
		>
			<div className="min-w-[25%]">
				<button type="button">
					<Image
						src={scrolled ? menuDark : menu}
						alt="menu-icon"
						className={cx("block pointer-events-none", { "rotate-180": locale == "ar" })}
					/>
				</button>
			</div>
			<div>
				<Link href={"/" + locale}>
					<Image src={scrolled ? logoDark : logo} alt="logo" />
				</Link>
			</div>
			<div className="min-w-[25%]">
				<ul className="flex justify-end">
					<li className="pe-1">
						<Link
							href={"/" + locale + "/creations"}
							className={cx("overHeadTitle-size font-pr-medium border-b-2", {
								"text-weave border-weave": !scrolled,
								"text-grey border-grey": scrolled,
							})}
						>
							Our creations
						</Link>
					</li>
					{locale == "en" && (
						<li>
							<a
								href={langSwitcher("ar")}
								className={cx("overHeadTitle-size font-pr-medium border-none", {
									"text-weave": !scrolled,
									"text-grey": scrolled,
								})}
							>
								العربية
							</a>
						</li>
					)}
					{locale == "ar" && (
						<li>
							<a
								href={langSwitcher("en")}
								className={cx("overHeadTitle-size font-pr-medium border-none", {
									"text-weave": !scrolled,
									"text-grey": scrolled,
								})}
							>
								English
							</a>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
}

export default Header;
