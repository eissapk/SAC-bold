import SectionTitle from "@/src/app/components/SectionTitle/SectionTitle";
import { pxPage, ptPage, textH3, textBody } from "@/src/lib/ui";

export default function PageIntro({ locale = "en", label, title, description }) {
  return (
    <div className={`${pxPage} ${ptPage} pb-6 md:pb-10`}>
      {label && <SectionTitle label={label} locale={locale} color="text-clay" align="start" />}
      <h1 className={`${textH3} text-grey font-pr-light pt-2 md:pt-4`}>{title}</h1>
      {description && <p className={`${textBody} text-grey font-pr-regular pt-4 md:pt-6 max-w-3xl`}>{description}</p>}
    </div>
  );
}
