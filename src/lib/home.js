import product1 from "@/public/assets/media/home/products/product1.png";
import product2 from "@/public/assets/media/home/products/product2.png";
import product3 from "@/public/assets/media/home/products/product3.png";
import product4 from "@/public/assets/media/home/products/product4.png";
import product5 from "@/public/assets/media/home/products/product5.png";
import product6 from "@/public/assets/media/home/products/product6.png";

const productImages = [product1, product2, product3, product4, product5, product6];

const home = {
  en: {
    intro: {
      title: "Crafted by Saudi artisans",
      description: "Weaving the future of our culture through craftsmanship",
    },
    productsSummary:
      "Molding new forms of craftsmanship that connects the heritage of the past with a world of contemporary excellence that deliver authenticity and innovation all at once",
    products: [
      { title: "The date bowl collection", cta: { label: "See the product", url: "/the-date-bowl-collection" } },
      { title: "The hospitality collection", cta: { label: "See the product", url: "/the-hospitality-collection" } },
      { title: "Saudi khawlani coffee Set", cta: { label: "See the product", url: "/saudi-khawlani-coffee-set" } },
      { title: "Modern Biyalah", cta: { label: "See the product", url: "/modern-biyalah" } },
      { title: "Color of the land collection", cta: { label: "See the product", url: "/color-of-the-land-collection" } },
      { title: "Hospitality doors collection", cta: { label: "See the product", url: "/hospitality-doors-collection" } },
    ],
    productCategory: "Category",
    summary: {
      label: "We preserve the past by paving the future.",
      title:
        "Empowering the next generation of artisans and opening up the legacy of Saudi craftsmanship to the world, echoing the past and weaving the future",
      description:
        "Delivering stories of impact woven from the legacies of the past and paving the roads towards contemporary artistry and craftsmanship.",
    },
    customPieces: {
      label: "Custom Pieces",
      title: "Sculpting your imagination into pieces of exquisite artistry rooted in heritage and branched with modernity",
      description: "Create your own custom pieces in collaboration with our artisans through a detailed craftsmanship process.",
      cta1: { label: "View our case studies", url: "/case-study" },
      cta2: { label: "Bring your imagination to life", url: "/creations" },
    },
    philosophy: {
      label: "Philosophy & method",
      title: "Each creation is a masterpiece that enriches your everyday living with beauty and purpose",
      description:
        "Creating a legacy that celebrates the rooted heritage of craftsmanship and the future that blossoms from it. Merging two worlds into a singular universe of beauty.",
      cta: { label: "See our studio", url: "/studio" },
    },
    seo: {
      title: "SAC | Saudi artisanal company",
      description: "Weaving the future of our culture through craftsmanship",
    },
  },
  ar: {
    intro: {
      title: "صنعها حرفيون سعوديون",
      description: "ننسج مستقبل ثقافتنا عبر الحرف اليدوية",
    },
    productsSummary:
      "نصوغ أشكالاً جديدة من الحرف تربط إرث الماضي بعالم من التميز المعاصر يجمع الأصالة والابتكار معاً",
    products: [
      { title: "مجموعة وعاء التمر", cta: { label: "اطلع على المنتج", url: "/the-date-bowl-collection" } },
      { title: "مجموعة الضيافة", cta: { label: "اطلع على المنتج", url: "/the-hospitality-collection" } },
      { title: "طقم قهوة خولاني السعودي", cta: { label: "اطلع على المنتج", url: "/saudi-khawlani-coffee-set" } },
      { title: "بيالة عصرية", cta: { label: "اطلع على المنتج", url: "/modern-biyalah" } },
      { title: "مجموعة ألوان الأرض", cta: { label: "اطلع على المنتج", url: "/color-of-the-land-collection" } },
      { title: "مجموعة أبواب الضيافة", cta: { label: "اطلع على المنتج", url: "/hospitality-doors-collection" } },
    ],
    productCategory: "الفئة",
    summary: {
      label: "نحفظ الماضي ونمهد للمستقبل.",
      title:
        "نمكّن الجيل القادم من الحرفيين ونفتح إرث الحرف السعودية للعالم، صدى الماضي ونسج المستقبل",
      description: "نروي قصصاً مؤثرة منسوجة من ميراث الماضي ونمهد الطريق نحو الفن والحرف المعاصرة.",
    },
    customPieces: {
      label: "قطع مخصصة",
      title: "نحوّل خيالك إلى قطع فنية راقية متجذرة في التراث وممتدة بالحداثة",
      description: "ابتكر قطعك المخصصة بالتعاون مع حرفيينا عبر عملية حرفية دقيقة.",
      cta1: { label: "اطلع على دراسات الحالة", url: "/case-study" },
      cta2: { label: "حوّل خيالك إلى واقع", url: "/creations" },
    },
    philosophy: {
      label: "الفلسفة والمنهج",
      title: "كل إبداع تحفة تُثري حياتك اليومية بالجمال والهدف",
      description: "نخلق إرثاً يحتفي بجذور الحرف ومستقبل يزدهر منه، ندمج عالمين في كون واحد من الجمال.",
      cta: { label: "تعرّف على استوديونا", url: "/studio" },
    },
    seo: {
      title: "SAC | الشركة السعودية للحرف اليدوية",
      description: "ننسج مستقبل ثقافتنا عبر الحرف اليدوية",
    },
  },
};

export function getHomeContent(locale = "en") {
  const copy = home[locale] || home.en;
  return {
    ...copy,
    products: copy.products.map((product, index) => ({
      ...product,
      image: productImages[index],
    })),
  };
}
