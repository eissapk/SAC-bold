import "@/src/styles/globals.scss";
import localFont from "next/font/local";

// primary font
const primaryLightFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridDisplay-Light.ttf", style: "normal", display: "swap" }],
  variable: "--primaryLightFont",
});
const primaryRegularFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridSans-Regular.ttf", style: "normal", display: "swap" }],
  variable: "--primaryRegularFont",
});
const primaryMediumFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridDisplay-Medium.ttf", style: "normal", display: "swap" }],
  variable: "--primaryMediumFont",
});
const primaryBoldFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridSans-SemiBold.ttf", style: "normal", display: "swap" }],
  variable: "--primaryBoldFont",
});

// secondary font
const secondaryLightFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Light.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryLightFont",
});
const secondaryRegularFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Regular.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryRegularFont",
});
const secondaryMediumFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Medium.ttf", style: "normal", display: "swap" }],
  variable: "--secondaryMediumFont",
});

export const metadata = {
  title: "SAC | Saudi artisanal company",
  description: "Weaving the future of our culture through craftsmanship",
};

export default function RootLayout({ children, params }) {
  const locale = params.lang || "en";
  const fontClasses = `${primaryLightFont.className}
        ${primaryLightFont.variable}
        ${primaryRegularFont.className}
        ${primaryRegularFont.variable}
        ${primaryMediumFont.className}
        ${primaryMediumFont.variable}
        ${primaryBoldFont.className}
        ${primaryBoldFont.variable}
        ${secondaryLightFont.className}
        ${secondaryLightFont.variable}
        ${secondaryRegularFont.className}
        ${secondaryRegularFont.variable}
        ${secondaryMediumFont.className}
        ${secondaryMediumFont.variable}`;

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body className={fontClasses}>{children}</body>
    </html>
  );
}
