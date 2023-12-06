import "@/styles/globals.scss";
import localFont from "next/font/local";

const santoshiLightFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Light.ttf", style: "normal", display: "swap" }],
  variable: "--lightFont",
});

const santoshiRegularFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Regular.ttf", style: "normal", display: "swap" }],
  variable: "--regularFont",
});

const santoshiMediumFont = localFont({
  src: [{ path: "../assets/fonts/Satoshi-Medium.ttf", style: "normal", display: "swap" }],
  variable: "--mediumFont",
});

const ltZaridDisplayFont = localFont({
  src: [{ path: "../assets/fonts/LTZaridSans-SemiBold.ttf", style: "normal", display: "swap" }],
  variable: "--boldFont",
});

export const metadata = {
  title: "Saudi artisanal company",
  description: "Inspired by the generosity and bestowments of the palm tree.",
};

export default function RootLayout({ children, params }) {
  console.log({params});
  const locale = params.lang || "en";
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${santoshiLightFont.className}
        ${santoshiLightFont.variable}
        ${santoshiRegularFont.className}
        ${santoshiRegularFont.variable}
        ${santoshiMediumFont.className}
        ${santoshiMediumFont.variable}

        ${ltZaridDisplayFont.className}
        ${ltZaridDisplayFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
