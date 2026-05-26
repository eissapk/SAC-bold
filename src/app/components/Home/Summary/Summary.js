"use client";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Image from "next/image";
import summaryImg from "@/public/assets/media/home/summary.png";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const dummy_summary = {
  label: "We preserve the past by paving the future.",
  title:
    "Empowering the next generation of artisans and opening up the legacy of Saudi craftsmanship to the world, echoing the past and weaving the future",
  description:
    "Delivering stories of impact woven from the legacies of the past and paving the roads towards contemporary artistry and craftsmanship.",
};

function Summary({ locale = "en", summary = dummy_summary }) {
  return (
    <div className="sectionPaddingTop bg-weave">
      <div className="spaceX">
        <SectionTitle color="text-clay" label={summary.label} align="left" locale={locale} />
        <div className="font-pr-light text-grey pt-1 w-[80%]">
          <h3 className=" leading-none">{summary.title}</h3>
        </div>

        <div className="paragraph2-size flex justify-end font-pr-regular text-grey pt-[7vw] pb-[4.2vw] w-[73%]">
          <Markdown className="w-[29%]" rehypePlugins={[rehypeRaw]}>
            {summary.description}
          </Markdown>
        </div>
      </div>

      <div>
        {/* <Image src={summaryImg} alt="summary" /> */}
        <video poster={summaryImg} autoPlay loop muted preload="auto" className="">
          <source src={"/assets/media/wheel.mp4"} type="video/mp4"></source>
          Your browser doen't support video technology
        </video>
      </div>
    </div>
  );
}

export default Summary;
