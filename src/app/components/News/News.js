"use client";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { getNewsList, getNewsSection } from "@/src/lib/news";
import { pxPage, pbSection, textH3, textOverline, textBody } from "@/src/lib/ui";

function News({ locale, blogs, section: sectionProp }) {
  const section = sectionProp || getNewsSection(locale);
  const items = blogs?.length ? blogs : getNewsList(locale).data;

  return (
    <div className={`bg-weave ${pxPage} ${pbSection}`}>
      <div className="font-pr-light text-grey pb-6 md:pb-8">
        <h3 className={textH3}>{section.title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {items.map((item, index) => (
          <Link key={item?.attributes?.url || index} href={"/" + locale + "/news/" + item.attributes.url} className="group block">
            <div className="w-full overflow-hidden">
              <Image
                src={item.attributes.image?.data?.attributes?.url}
                className="w-full h-auto transition-transform group-hover:scale-[1.02]"
                alt={item.attributes.title}
                width={600}
                height={400}
              />
            </div>
            <div className={`${textOverline} font-pr-medium text-grey pt-4 pb-2`}>{item.attributes.date}</div>
            <h2 className={`${textBody} font-pr-regular text-grey group-hover:text-clay transition-colors`}>
              {item.attributes.title}
            </h2>
            <Markdown rehypePlugins={[rehypeRaw]} className={`${textBody} font-pr-regular text-grey/80 mt-2 line-clamp-2 text-sm md:text-base`}>
              {item.attributes.description}
            </Markdown>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;
