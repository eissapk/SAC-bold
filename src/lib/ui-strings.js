const strings = {
  en: {
    header: { creations: "Our creations" },
    footer: {
      joinUs: "Join us",
      newsletter: "Newsletter",
      copyright: "Saudi Artisanal Company © Copyright 2023",
      joinUsLinks: [
        { path: "/artisan", label: "As artisan" },
        { path: "/designer", label: "As designer" },
        { path: "/partner", label: "As partner" },
      ],
      siteMapLinks: [
        { path: "/story", label: "The story" },
        { path: "/creations", label: "The creations" },
        { path: "/custom-designs", label: "Custom designs" },
        { path: "/studio", label: "The studio" },
        { path: "/workshops", label: "Workshops & artisans" },
        { path: "/contact", label: "Contact" },
      ],
    },
    newsletter: {
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      thanks: "Thanks!",
      error: "Got Error, try again!",
    },
    news: { backToNews: "Back to news" },
    videoUnsupported: "Your browser doesn't support video technology",
  },
  ar: {
    header: { creations: "إبداعاتنا" },
    footer: {
      joinUs: "انضم إلينا",
      newsletter: "النشرة الإخبارية",
      copyright: "الشركة السعودية للحرف اليدوية © حقوق النشر 2023",
      joinUsLinks: [
        { path: "/artisan", label: "كحرفي" },
        { path: "/designer", label: "كمصمم" },
        { path: "/partner", label: "كشريك" },
      ],
      siteMapLinks: [
        { path: "/story", label: "القصة" },
        { path: "/creations", label: "الإبداعات" },
        { path: "/custom-designs", label: "تصاميم مخصصة" },
        { path: "/studio", label: "الاستوديو" },
        { path: "/workshops", label: "الورش والحرفيون" },
        { path: "/contact", label: "تواصل" },
      ],
    },
    newsletter: {
      emailPlaceholder: "بريدك الإلكتروني",
      subscribe: "اشترك",
      thanks: "شكراً!",
      error: "حدث خطأ، حاول مرة أخرى!",
    },
    news: { backToNews: "العودة إلى الأخبار" },
    videoUnsupported: "متصفحك لا يدعم تشغيل الفيديو",
  },
};

export function getUiStrings(locale = "en") {
  return strings[locale] || strings.en;
}
