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
import { pxPage, textOverline } from "@/src/lib/ui";
import { getUiStrings } from "@/src/lib/ui-strings";

function Header({ locale = "en", layout = "fixed" }) {
	const [slug, setSlug] = useState(null);
	const [scrolled, setScrolled] = useState(layout !== "fixed" ? true : false);
	const pathname = usePathname();
	const ui = getUiStrings(locale);

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
			className={cx(
				pxPage,
				"left-0 top-0 z-[999] w-full py-4 md:py-5 flex items-center justify-between gap-4",
				layout,
				{
					"bg-weave py-2 md:py-3 transition-all": scrolled,
				}
			)}
		>
			<div className="shrink-0 w-1/4 min-w-[3rem]">
				<button type="button" aria-label="Menu" className="hidden">
					<Image
						src={scrolled ? menuDark : menu}
						alt=""
						className={cx("block pointer-events-none w-8 h-8 md:w-auto md:h-auto", { "rotate-180": locale == "ar" })}
					/>
				</button>
			</div>
			<div className="shrink-0 flex justify-center">
				<Link href={"/" + locale}>
					<Image src={scrolled ? logoDark : logo} alt="Saudi Artisanal Company" className="h-8 md:h-auto w-auto" />
				</Link>
			</div>
			<div className="shrink-0 w-1/4 min-w-[3rem]">
				<ul className="flex justify-end items-center gap-2 md:gap-4">
					<li>
						<Link
							href={"/" + locale + "/creations"}
							className={cx(textOverline, "border-b-2 whitespace-nowrap", {
								"text-weave border-weave": !scrolled,
								"text-grey border-grey": scrolled,
							})}
						>
							{ui.header.creations}
						</Link>
					</li>
					{locale == "en" && (
						<li>
							<a
								href={langSwitcher("ar")}
								className={cx(textOverline, "whitespace-nowrap", {
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
								className={cx(textOverline, "whitespace-nowrap", {
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
