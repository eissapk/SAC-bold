import Image from "next/image";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CTA from "../../CTA/CTA";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import bg from "@/public/assets/media/home/custom-pieces.png";
import logo1 from "@/public/assets/media/home/logos/logo1.svg";
import logo2 from "@/public/assets/media/home/logos/logo2.svg";
import logo3 from "@/public/assets/media/home/logos/logo3.svg";
import logo4 from "@/public/assets/media/home/logos/logo4.svg";
import logo5 from "@/public/assets/media/home/logos/logo5.svg";
import { pxPage, textH3, textBody } from "@/src/lib/ui";

const dummy_customPieces = {
  label: "Custom Pieces",
  title: "Sculpting your imagination into pieces of exquisite artistry rooted in heritage and branched with modernity",
  description: "Create your own custom pieces in collaboration with our artisans through a detailed craftsmanship process.",
  cta1: { label: "View our case studies", url: "/case-study" },
  cta2: { label: "Bring your imagination to life", url: "/creations" },
};

function CustomPieces({ locale = "en", customPieces = dummy_customPieces }) {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="relative min-h-[32rem] md:min-h-[40rem] lg:min-h-[48rem]">
      <div className="absolute inset-0 -z-10 after:content-[''] after:absolute after:inset-0 after:bg-customPiecesLayer/40">
        <Image src={bg} alt="custom-pieces" className="h-full w-full object-cover" fill sizes="100vw" priority />
      </div>

      <div className={`relative z-10 flex flex-col justify-center min-h-[32rem] md:min-h-[40rem] lg:min-h-[48rem] ${pxPage} py-12 md:py-16`}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <SectionTitle color="text-weave" label={customPieces.label} locale={locale} />
          <div className="pt-2 md:pt-4 text-weave font-pr-light">
            <h3 className={textH3}>{customPieces.title}</h3>
          </div>

          <div className={`${textBody} text-weave font-pr-regular text-center pt-4 md:pt-6 max-w-prose mx-auto`}>
            <Markdown rehypePlugins={[rehypeRaw]}>{customPieces.description}</Markdown>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8">
            <CTA
              color="grey"
              bg="weave"
              locale={locale}
              link={"/" + locale + customPieces.cta1.url}
              type="button"
              label={customPieces.cta1.label}
            />
            <CTA color="weave" locale={locale} link={"/" + locale + customPieces.cta2.url} type="link" label={customPieces.cta2.label} />
          </div>

          <ul className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 pt-10 md:pt-16 lg:pt-20 max-w-5xl mx-auto">
            {logos.map((url, index) => (
              <li key={index} className="shrink-0">
                <Image src={url} alt="" className="h-8 md:h-10 lg:h-12 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomPieces;
