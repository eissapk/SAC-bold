"use client";

import { useEffect } from "react";

export default function LocaleHtml({ locale = "en" }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
