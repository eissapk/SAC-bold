"use client";
// import introVideo from "@/public/assets/media/hero.mp4";
import introVideoPoster from "@/public/assets/media/home/intro.png";
import Image from "next/image";
import SectionTitle from "../../SectionTitle/SectionTitle";
import item from "@/public/assets/media/home/item1.svg";
import edge from "@/public/assets/media/home/intro-raw-edge.svg";

const dummy_intro = {
  title: "Crafted by Saudi artisans",
  description: "Weaving the future of our culture through craftsmanship",
};

function Intro({ locale = "en", intro = dummy_intro }) {
  return (
    <div className="relative h-[100vh] min-h-[110vh]">
      <div className="relative w-full h-full -z-10 after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-introLayer/30">
        {/* <Image src={introVideoPoster} alt="intro" /> */}
        <video poster={introVideoPoster} autoPlay loop muted preload="auto" className="object-cover min-h-[110vh]">
          <source src={"/assets/media/hero.mp4"} type="video/mp4"></source>
          Your browser doen't support video technology
        </video>
      </div>

      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute left-0 right-0 top-[40%] -translate-y-[40%]">
          <SectionTitle color="text-weave" label={intro?.title} locale={locale} />
          <div className="pt-1 text-weave font-pr-light text-center w-[55%] mx-auto">
            <h1 className="leading-none sm:!text-5xl">{intro?.description}</h1>
          </div>
        </div>
      </div>

      <div className="absolute right-0 -bottom-[1vw] z-10 sm:hidden">
        <Image src={item} alt="item-1" priority={true} />
      </div>

      <div className="absolute left-0 -bottom-0.5 w-full">
        <Image src={edge} alt="footer-raw-edge" priority={false} className="block w-full h-auto" />
      </div>
    </div>
  );
}

export default Intro;
