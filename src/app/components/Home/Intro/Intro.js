"use client";
import cx from "classnames";
import introVideoPoster from "@/public/assets/media/home/intro.png";
import Image from "next/image";
import SectionTitle from "../../SectionTitle/SectionTitle";
import item from "@/public/assets/media/home/item1.svg";
import edge from "@/public/assets/media/home/intro-raw-edge.svg";
import { pxPage, textH1 } from "@/src/lib/ui";

const dummy_intro = {
  title: "Crafted by Saudi artisans",
  description: "Weaving the future of our culture through craftsmanship",
};

function Intro({ locale = "en", intro = dummy_intro }) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 after:content-[''] after:absolute after:inset-0 after:bg-introLayer/30">
        <video
          poster={introVideoPoster}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="h-full w-full object-cover min-h-screen"
        >
          <source src={"/assets/media/hero.mp4"} type="video/mp4"></source>
          Your browser doen't support video technology
        </video>
      </div>

      <div className={cx("absolute inset-0 flex flex-col justify-center", pxPage)}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <SectionTitle color="text-weave" label={intro?.title} locale={locale} />
          <div className="pt-2 md:pt-4 text-weave font-pr-light">
            <h1 className={textH1}>{intro?.description}</h1>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-10 hidden lg:block max-w-[30%]">
        <Image src={item} alt="" priority={true} className="w-full h-auto" />
      </div>

      <div className="absolute left-0 -bottom-px w-full">
        <Image src={edge} alt="" priority={false} className="block w-full h-auto" />
      </div>
    </div>
  );
}

export default Intro;
