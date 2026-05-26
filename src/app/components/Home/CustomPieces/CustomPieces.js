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

const dummy_customPieces = {
  label: "Custom Pieces",
  title: "Sculpting your imagination into pieces of exquisite artistry rooted in heritage and branched with modernity",
  description: "Create your own custom pieces in collaboration with our artisans through a detailed craftsmanship process.",
  cta1 : {
    label: "View our case studies",
    url: "/case-study",
  },
  cta2 : {
    label: "Bring your imagination to life",
    url: "/creations",
  }
};

function CustomPieces({ locale = "en", customPieces = dummy_customPieces }) {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo3];

  return (
    <div className="relative">
      <div className="relative w-full h-full -z-10 after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-customPiecesLayer/40">
        <Image src={bg} alt="custom-pieces" className="h-auto w-full object-cover" />
      </div>

      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute left-0 right-0 top-[55%] -translate-y-[55%]">
          <SectionTitle color="text-weave" label={customPieces.label} locale={locale} />
          <div className="pt-1 text-weave font-pr-light text-center w-[60%] mx-auto">
            <h3 className="leading-none">{customPieces.title}</h3>
          </div>

          <div className="paragraph2-size text-weave font-pr-regular text-center pt-[1.6vw] w-[33%] mx-auto">
            <Markdown rehypePlugins={[rehypeRaw]}>{customPieces.description}</Markdown>
          </div>

          <div className="flex gap-x-[1.9vw] justify-center pt-[3.1vw]">
            <CTA color="grey" bg="weave" locale={locale} link={"/" + locale + customPieces.cta1.url} type="button" label={customPieces.cta1.label} />
            <CTA color="weave" locale={locale} link={"/" + locale + customPieces.cta2.url} type="link" label={customPieces.cta2.label} />
          </div>

          <div className="pt-[6vw] px-[calc(var(--spaceX)*3)]">
            <ul className="flex justify-between w-full">
              {logos.map((url, index) => (
                <li key={index}>
                  <Image src={url} alt="logo" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomPieces;
