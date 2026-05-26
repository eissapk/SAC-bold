"use client";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../CTA/CTA";
import { getNewsList, getNewsSection } from "@/src/lib/news";
import { pxPage, pbSection, textH3, textOverline, textBody } from "@/src/lib/ui";

function News({ locale, news, blogs }) {
  const section = news || getNewsSection(locale);
  const items = blogs?.length ? blogs : getNewsList(locale).data;

  return (
    <div className={`bg-weave ${pxPage} ${pbSection} lg:pt-48`}>
      <div className="font-pr-light text-grey pb-6 md:pb-8">
        <h3 className={textH3}>{section.title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {items.map((item, index) => (
          <Link key={item?.attributes?.url || index} href={"/" + locale + "/news/" + item.attributes.url} className="group">
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
            <h2 className={`${textBody} font-pr-regular text-grey group-hover:text-clay transition-colors line-clamp-3`}>
              {item.attributes.title}
            </h2>
            <p className="text-sm md:text-base text-grey/80 mt-2 line-clamp-2 font-pr-regular">{item.attributes.description}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center pt-10 md:pt-14 lg:pt-16">
        <CTA label={section.cta.label} color="weave" bg="grey" type="button" link={"/" + locale + section.cta.url} locale={locale} />
      </div>
    </div>
  );
}

export default News;
