import "@/styles/globals.scss";
import localFont from "next/font/local";

// primary
const primaryLightFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Light.ttf", style: "normal", display: "swap" }],
  variable: "--primaryLightFont",
});
const primaryRegularFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Regular.ttf", style: "normal", display: "swap" }],
  variable: "--primaryRegularFont",
});
const primaryMediumFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Medium.ttf", style: "normal", display: "swap" }],
  variable: "--primaryMediumFont",
});

// secondary
const secondaryLightFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridDisplay-Light.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryLightFont",
});
const secondaryRegularFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridSans-Regular.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryRegularFont",
});
const secondaryMediumFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridDisplay-Medium.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryMediumFont",
});
const secondaryBoldFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridSans-SemiBold.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryBoldFont",
});

export const metadata = {
  title: "SAC | Saudi artisanal company",
  description: "Inspired by the generosity and bestowments of the palm tree.",
};

export default function RootLayout({ children, params }) {
  console.log({ params });
  const locale = params.lang || "en";
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`
        ${primaryLightFont.className}
        ${primaryLightFont.variable}
        ${primaryRegularFont.className}
        ${primaryRegularFont.variable}
        ${primaryMediumFont.className}
        ${primaryMediumFont.variable}

        ${secondaryLightFont.className}
        ${secondaryLightFont.variable}
        ${secondaryRegularFont.className}
        ${secondaryRegularFont.variable}
        ${secondaryMediumFont.className}
        ${secondaryMediumFont.variable}
        ${secondaryBoldFont.className}
        ${secondaryBoldFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
