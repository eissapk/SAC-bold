import SectionTitle from "../../SectionTitle/SectionTitle";
import Image from "next/image";
import image1 from "@/public/assets/media/home/philosophy/img1.png";
import image2 from "@/public/assets/media/home/philosophy/img2.png";
import image3 from "@/public/assets/media/home/philosophy/img3.png";
import item from "@/public/assets/media/home/philosophy/item.svg";
import CTA from "../../CTA/CTA";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { psPage, ptSection, pxPage, textH3, textBody } from "@/src/lib/ui";

const dummy_philosophy = {
  label: "Philosophy & method",
  title: "Each creation is a masterpiece that enriches your everyday living with beauty and purpose",
  description:
    "Creating a legacy that celebrates the rooted heritage of craftsmanship and the future that blossoms from it. Merging two worlds into a singular universe of beauty.",
  cta: { label: "See our studio", url: "/studio" },
};

function Philosophy({ locale = "en", philosophy = dummy_philosophy }) {
  return (
    <div className={`bg-weave ${ptSection} ${psPage}`}>
      <SectionTitle label={philosophy.label} locale={locale} color="text-clay" align="start" />
      <div className={`${pxPage} font-pr-light text-grey pt-4 md:pt-6 pb-8 md:pb-12 lg:pb-20`}>
        <h3 className={`${textH3} w-full max-w-4xl`}>{philosophy.title}</h3>
      </div>

      <div className={`${pxPage} flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24`}>
        <div className="relative w-full lg:w-1/2 shrink-0">
          <video autoPlay loop muted preload="auto" playsInline className="w-full max-w-xl aspect-[4/3] object-cover">
            <source src={"/assets/media/carve.mp4"} type="video/mp4"></source>
            Your browser doen't support video technology
          </video>
          <div className="hidden xl:block absolute -right-1/4 top-1/5 w-1/2">
            <Image src={item} alt="" className="block w-full h-auto" />
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 min-h-[12rem] lg:min-h-[24rem]">
          <div className="pb-6 md:pb-8">
            <Markdown rehypePlugins={[rehypeRaw]} className={`${textBody} font-pr-regular text-grey max-w-lg`}>
              {philosophy.description}
            </Markdown>
          </div>

          <div className="mb-8 lg:mb-0">
            <CTA
              label={philosophy.cta.label}
              locale={locale}
              link={"/" + locale + philosophy.cta.url}
              color="weave"
              bg="grey"
              type="button"
            />
          </div>

          <div className="hidden lg:block absolute right-0 top-0 w-2/5 max-w-xs">
            <Image src={image1} alt="" className="block w-full h-auto" />
            <div className="absolute right-0 top-full mt-4 w-full">
              <Image src={image3} alt="" className="block w-full h-auto" />
            </div>
          </div>

          <div className="hidden lg:block absolute left-0 top-1/2 w-2/5 max-w-xs -translate-x-1/4">
            <Image src={image2} alt="" className="block w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
