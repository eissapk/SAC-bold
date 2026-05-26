import { getHomeContent } from "@/src/lib/home";

const productCopy = {
  "the-date-bowl-collection": {
    en: {
      excerpt: "Hand-thrown vessels inspired by the ritual of serving dates in Saudi hospitality.",
      body: "The Date Bowl Collection reinterprets a daily gesture of welcome through stoneware shaped and glazed in our Riyadh studio. Each piece is thrown by hand, with rims finished for sharing dates at home or in hospitality settings.\n\nAvailable in natural weave glaze or clay tones. Commissions welcome for matched sets.",
    },
    ar: {
      excerpt: "أوعية مصنوعة يدوياً مستوحاة من طقس تقديم التمر في الضيافة السعودية.",
      body: "تعيد مجموعة وعاء التمر تفسيراً لحركة الترحيب اليومية عبر فخار يُشكَّل ويُزجَّج في استوديونا بالرياض. كل قطعة تُلف يدوياً بحواف مناسبة لتقديم التمر في المنزل أو الضيافة.\n\nمتوفرة بلمسة glaze النسيج الطبيعي أو ألوان الطين. نقبل طلبات الأطقم المتناسقة.",
    },
  },
  "the-hospitality-collection": {
    en: {
      excerpt: "Serving pieces and table objects designed for hotels, homes, and gathering spaces.",
      body: "The Hospitality Collection brings together trays, vessels, and serving forms developed with leading hospitality partners across the Kingdom. Pieces balance durability for service with the warmth of handmade craft.\n\nFinishes are selected for daily use while preserving the character of Saudi artisanal work.",
    },
    ar: {
      excerpt: "قطع تقديم وموائد صُممت للفنادق والمنازل ومساحات الاجتماع.",
      body: "تجمع مجموعة الضيافة صواني وأوعية وأشكال تقديم طُوّرت مع شركاء ضيافة رائدين في المملكة. توازن القطع بين متانة الاستخدام اليومي ودفء الصناعة اليدوية.\n\nتُختار التشطيبات للاستخدام اليومي مع الحفاظ على طابع الحرف السعودية.",
    },
  },
  "saudi-khawlani-coffee-set": {
    en: {
      excerpt: "Ceramics paired with Khawlani coffee culture — pour-over vessel, cups, and storage jar.",
      body: "The Saudi Khawlani Coffee Set unites studio pottery with specialty coffee ritual. Forms reference traditional hospitality while meeting contemporary pour-over culture.\n\nEach set includes a vessel, two cups, and a jar in SAC’s signature weave glaze.",
    },
    ar: {
      excerpt: "خزف يقترن بثقافة قهوة خولاني — إبريق تصبية وفنجانان ووعاء حفظ.",
      body: "يوحّد طقم قهوة خولاني السعودي بين خزف الاستوديو وطقوس القهوة المتخصصة. تستلهم الأشكال الضيافة التقليدية مع معايير التصبية المعاصرة.\n\nيتضمن كل طقم إبريقاً وفنجانين ووعاءً بلمسة glaze النسيج المميزة.",
    },
  },
  "modern-biyalah": {
    en: {
      excerpt: "A contemporary take on the biyalah form for daily ritual and display.",
      body: "Modern Biyalah revisits a familiar silhouette with refined proportions and glaze work developed in collaboration with SAC artisans. Suitable for incense, display, or ceremonial use.\n\nOffered in limited seasonal editions.",
    },
    ar: {
      excerpt: "تفسير معاصر لشكل البيالة للطقوس اليومية والعرض.",
      body: "تعيد بيالة عصرية زيارة صورة مألوفة بخطوط مكرّرة وتزجيج طور مع حرفيي SAC. مناسبة للبخور أو العرض أو الاستخدام الطقسي.\n\nتُعرض في إصدارات موسمية محدودة.",
    },
  },
  "color-of-the-land-collection": {
    en: {
      excerpt: "Glazes and forms drawn from the palette of Saudi landscapes.",
      body: "Color of the Land translates desert, wadi, and stone hues into a family of vases, bowls, and platters. Each piece is glazed to reveal depth and variation unique to handmade work.\n\nIdeal for residential and hospitality interiors seeking a rooted Saudi aesthetic.",
    },
    ar: {
      excerpt: "تزجيج وأشكال مستوحاة من لوحة ألوان المناظر السعودية.",
      body: "تترجم مجموعة ألوان الأرض صحراء ووادي وحجراً إلى عائلة من المزهريات والأوعية والصواني. يُزجَّج كل قطعة لإظهار عمق وتباين يخص العمل اليدوي.\n\nمناسبة للمساحات السكنية والضيافية الباحثة عن جمالية سعودية متجذرة.",
    },
  },
  "hospitality-doors-collection": {
    en: {
      excerpt: "Hand-carved entry and reception pieces for luxury hospitality.",
      body: "The Hospitality Doors Collection delivers entry and reception objects conceived for Saudi Arabia’s luxury hospitality sector. Motifs draw on Najdi and Hejazi architectural heritage, reinterpreted for contemporary lobbies.\n\nCommissions include documentation of provenance and artisan attribution.",
    },
    ar: {
      excerpt: "قطع مداخل واستقبال منحوتة يدوياً للضيافة الفاخرة.",
      body: "تقدّم مجموعة أبواب الضيافة أعمال مداخل واستقبال لقطاع الضيافة الفاخرة في المملكة. تستلهم الزخارف تراث نجد والحجاز المعماري بإعادة تفسير للوبي المعاصر.\n\nتتضمن الطلبات المخصصة توثيق المنشأ وأسماء الحرفيين.",
    },
  },
};

const pageMeta = {
  products: {
    en: { label: "Collections", title: "Our products", description: "Explore SAC collections shaped by Saudi artisans." },
    ar: { label: "المجموعات", title: "منتجاتنا", description: "استكشف مجموعات SAC بأيدي حرفيين سعوديين." },
  },
  creations: {
    en: { label: "The creations", title: "Our creations", description: "Objects of heritage and contemporary excellence, made in the Kingdom." },
    ar: { label: "الإبداعات", title: "إبداعاتنا", description: "قطع تجمع التراث والتميز المعاصر، تُصنع في المملكة." },
  },
};

function slugFromUrl(url) {
  return url.replace(/^\//, "");
}

export function getProductsPage(locale = "en") {
  return pageMeta.products[locale] || pageMeta.products.en;
}

export function getCreationsPage(locale = "en") {
  return pageMeta.creations[locale] || pageMeta.creations.en;
}

export function getProductsList(locale = "en") {
  const home = getHomeContent(locale);
  return home.products.map((product) => {
    const slug = slugFromUrl(product.cta.url);
    const copy = productCopy[slug]?.[locale] || productCopy[slug]?.en || {};
    return {
      slug,
      title: product.title,
      image: product.image,
      excerpt: copy.excerpt || "",
      ctaLabel: product.cta.label,
    };
  });
}

export function getProductBySlug(slug, locale = "en") {
  const list = getProductsList(locale);
  const item = list.find((p) => p.slug === slug);
  if (!item) return null;

  const copy = productCopy[slug]?.[locale] || productCopy[slug]?.en || {};
  return {
    ...item,
    body: copy.body || "",
  };
}

export function getAllProductSlugs() {
  return getProductsList("en").map((p) => p.slug);
}
