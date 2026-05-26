"use client";
import Image from "next/image";
import { pxPage, pbSection, textH5, textOverline, textBody } from "@/src/lib/ui";
import { getCaseStudies } from "@/src/lib/site-pages";

export default function CaseStudyGrid({ locale = "en" }) {
  const items = getCaseStudies(locale);

  return (
    <div className={`${pxPage} ${pbSection}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {items.map((item) => (
          <article key={item.slug} className="group">
            <div className="w-full overflow-hidden">
              <Image src={item.image} alt={item.title} width={600} height={400} className="w-full h-auto" />
            </div>
            <div className={`${textOverline} font-pr-medium text-clay pt-4 pb-2`}>{item.client}</div>
            <h2 className={`${textH5} font-pr-light text-grey`}>{item.title}</h2>
            <p className={`${textBody} font-pr-regular text-grey/80 mt-2 line-clamp-3`}>{item.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
