"use client";
import Link from "next/link";
import Image from "next/image";
import edge from "../../../../public/assets/media/footer-raw-edge.svg";
import logo from "../../../../public/assets/media/logo.svg";
import NewsLetter from "../Forms/NewsLetter/NewsLetter";
import { pxPage, textOverline, textFooterLink, textH4, textNav } from "@/src/lib/ui";

function Footer({ locale = "en" }) {
  const joinUsLinks = [
    { link: "/" + locale + "/artisan", label: "As artisan" },
    { link: "/" + locale + "/designer", label: "As designer" },
    { link: "/" + locale + "/partner", label: "As partner" },
  ];
  const siteMapLinks = [
    { link: "/" + locale + "/story", label: "The story" },
    { link: "/" + locale + "/creations", label: "The creations" },
    { link: "/" + locale + "/custom-designs", label: "Custom designs" },
    { link: "/" + locale + "/studio", label: "The studio" },
    { link: "/" + locale + "/workshops", label: "Workshops & artisans" },
    { link: "/" + locale + "/contact", label: "Contact" },
  ];

  return (
    <>
      <div>
        <video autoPlay loop muted preload="auto" playsInline className="object-cover w-full relative -bottom-7">
          <source src={"/assets/media/furnace.mp4"} type="video/mp4"></source>
          Your browser doen't support video technology
        </video>
      </div>
      <footer>
        <div className={`bg-grey ${pxPage} pt-8 md:pt-12 pb-8 md:pb-10 relative`}>
          <div className="w-full absolute -top-[18px] left-0 md:-top-[15px] hidden md:block">
            <Image className="block w-full h-auto" src={edge} alt="" priority={false} width={1920} height={18} />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
              <div>
                <div className={`${textOverline} text-clay font-pr-medium mb-4 md:mb-6`}>Join us</div>
                <ul className="space-y-2">
                  {joinUsLinks.map((item, index) => (
                    <li key={index}>
                      <Link className={`${textH4} text-weave font-pr-light leading-none`} href={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {siteMapLinks.map((item, index) => (
                    <li key={index}>
                      <Link className={`${textFooterLink} text-weave font-pr-light leading-none`} href={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:max-w-sm shrink-0">
              <div className={`${textOverline} text-clay font-pr-medium mb-4 md:mb-6`}>Newsletter</div>
              <NewsLetter />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-end gap-6 mt-12 md:mt-16 lg:mt-24">
            <div className={`${textNav} text-weave font-pr-bold w-full border-b-2 border-weave pb-2`}>Saudi Artisanal Company © Copyright 2023</div>
            <div className="shrink-0 self-center sm:self-auto">
              <Link href={"/" + locale}>
                <Image src={logo} alt="Saudi Artisanal Company" className="block h-10 md:h-auto w-auto" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
