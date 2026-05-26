"use client";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import edge from "../../../../public/assets/media/footer-raw-edge.svg";
import logo from "../../../../public/assets/media/logo.svg";
import NewsLetter from "../Forms/NewsLetter/NewsLetter";

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
        <video autoPlay loop muted preload="auto" className="object-cover w-full relative -bottom-7">
          <source src={"/assets/media/furnace.mp4"} type="video/mp4"></source>
          Your browser doen't support video technology
        </video>
      </div>
      <footer>
        <div className="w-full relative top-0.5">
          <Image className="block w-full h-auto" src={edge} alt="footer-raw-edge" priority={false} />
        </div>

        <div className="bg-grey spaceX pt-[3.3vw] pb-[2.75vw]">
          <div className="flex justify-between">
            <div className="flex gap-x-[13.8vw]">
              <div>
                <div className="overHeadTitle-size text-clay font-pr-medium mb-[1.5vw]">Join us</div>
                <ul>
                  {joinUsLinks.map((item, index) => (
                    <li key={index}>
                      <Link className="h4 text-weave font-pr-light leading-none" href={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-[1.5vw]">
                <ul>
                  {siteMapLinks.map((item, index) => (
                    <li key={index}>
                      <Link className="h4 text-weave footer-title-size font-pr-light leading-none" href={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="overHeadTitle-size text-clay font-pr-medium mb-[1.5vw]">Newsletter</div>
              <NewsLetter />
            </div>
          </div>

          <div className="flex justify-between gap-x-4 xmt-[14vw]">
            <div className="text-weave font-pr-bold nav-size basis-full border-b-[2px] border-weave pb-1 self-end">
              Saudi Artisanal Company © Copyright 2023
            </div>
            <div className="relative top-1.5">
              <Link href={"/" + locale}>
                <Image src={logo} alt="logo" className="block" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
