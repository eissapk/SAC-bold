"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
/* The following plugin is a Club GSAP perk */
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const SmoothScroll = ({ children }) => {
	const containerRef = useRef();
	const pathName = usePathname();
	let smoother;

	useEffect(() => {
		smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1,
			normalizeScroll: true,
			ignoreMobileResize: true,
			effects: true,
		});

		let killSmoother = () => {
			smoother.kill();
		};

		return () => {
			killSmoother();
			ScrollTrigger.getAll().forEach(instance => {
				instance.kill();
			});
		};
	}, []);

	// useEffect(() => {
	//     smoother.scrollTo(0, true);
	// }, [pathName])

	return (
		<main id="smooth-wrapper">
			<div id="smooth-content" ref={containerRef}>
				{children}
			</div>
		</main>
	);
};

export default SmoothScroll;
