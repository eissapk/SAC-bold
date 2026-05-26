import Header from "@/src/app/components/Header/Header";
import Footer from "@/src/app/components/Footer/Footer";

export default function PageShell({ locale, children }) {
  return (
    <>
      <Header locale={locale} layout="sticky" />
      <main className="bg-weave min-h-screen">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
