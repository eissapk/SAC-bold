import LocaleHtml from "@/src/app/components/LocaleHtml/LocaleHtml";

export default function LangLayout({ children, params }) {
  const locale = params.lang === "ar" ? "ar" : "en";

  return (
    <>
      <LocaleHtml locale={locale} />
      {children}
    </>
  );
}
