"use client";
import SectionTitle from "../../SectionTitle/SectionTitle";
import summaryImg from "@/public/assets/media/home/summary.png";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { pxPage, ptSection, textH3, textBody } from "@/src/lib/ui";

const dummy_summary = {
  label: "We preserve the past by paving the future.",
  title:
    "Empowering the next generation of artisans and opening up the legacy of Saudi craftsmanship to the world, echoing the past and weaving the future",
  description:
    "Delivering stories of impact woven from the legacies of the past and paving the roads towards contemporary artistry and craftsmanship.",
};

function Summary({ locale = "en", summary = dummy_summary }) {
  return (
    <div className={`${ptSection} bg-weave`}>
      <div className={pxPage}>
        <SectionTitle color="text-clay" label={summary.label} align="left" locale={locale} />
        <div className="font-pr-light text-grey pt-2 md:pt-4 w-full max-w-5xl">
          <h3 className={textH3}>{summary.title}</h3>
        </div>

        <div className={`${textBody} flex flex-col md:flex-row md:justify-end font-pr-regular text-grey pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 w-full md:w-4/5 lg:w-3/4 ml-auto`}>
          <Markdown className="w-full md:max-w-md lg:max-w-lg" rehypePlugins={[rehypeRaw]}>
            {summary.description}
          </Markdown>
        </div>
      </div>

      <div className="w-full">
        <video poster={summaryImg} autoPlay loop muted preload="auto" playsInline className="w-full h-auto">
          <source src={"/assets/media/wheel.mp4"} type="video/mp4"></source>
          Your browser doen't support video technology
        </video>
      </div>
    </div>
  );
}

export default Summary;
