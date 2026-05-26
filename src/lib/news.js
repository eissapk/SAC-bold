import img1 from "@/public/assets/media/home/news/news1.png";
import img2 from "@/public/assets/media/home/news/news2.png";
import img3 from "@/public/assets/media/home/news/news3.png";

/**
 * Static news content. Strapi-shaped for list components; flat object for detail pages.
 */
const articles = [
  {
    slug: "khawlani-coffee-set-launch",
    date: { en: "14 March 2024", ar: "14 مارس 2024" },
    image: img1,
    en: {
      title: "SAC launches Saudi Khawlani coffee set, celebrating heritage in every pour",
      excerpt:
        "A limited collection pairing hand-thrown ceramics with Khawlani beans, crafted with potters and roasters from the southern highlands.",
      body: `The Saudi Artisanal Company has unveiled its **Saudi Khawlani Coffee Set**, a collaboration between SAC studio potters and specialty roasters working with Khawlani beans from the Kingdom’s southern highlands.

Each set includes a hand-thrown pour-over vessel, two cups, and a storage jar finished in SAC’s signature weave glaze. The forms reference traditional hospitality vessels while meeting the expectations of contemporary specialty coffee culture.

> “Coffee is one of the oldest rituals of Saudi hospitality,” said the SAC studio lead. “This collection asks how that ritual can be expressed through objects made here, by artisans who understand both the material and the meaning.”

The collection debuts at the SAC showroom in Riyadh and is available for bespoke hospitality programs. Commission inquiries are open for hotels and private collectors seeking matched sets with custom glazing.`,
    },
    ar: {
      title: "SAC تطلق طقم قهوة خولاني السعودي احتفاءً بالإرث في كل فنجان",
      excerpt:
        "مجموعة محدودة تجمع الخزف اليدوي مع حبوب خولاني، بأيدي صناع محليين من الجنوب وخبراء تحميص.",
      body: `أطلقت **الشركة السعودية للحرف اليدوية** طقم **قهوة خولاني السعودي**، ثمرة تعاون بين خزّافي الاستوديو ومحمّصين متخصصين يعملون على حبوب خولاني من مرتفعات الجنوب في المملكة.

يتضمن كل طقم إبريق تصبية مصنوعاً يدوياً، وفنجانين، ووعاء حفظ بلمسة glaze مميزة للشركة. تأخذ الأشكال من أوعية الضيافة التقليدية مع تلبية معايير ثقافة القهوة المعاصرة.

> «القهوة من أقدم طقوس الضيافة السعودية،» يقول قائد الاستوديو. «هذه المجموعة تسأل كيف يُعبَّر عن هذا الطقس بأشياء تُصنع هنا، بأيدي حرفيين يفهمون المادة والمعنى معاً.»

تُعرض المجموعة في صالة العرض بالرياض، وهي متاحة لبرامج الضيافة المخصصة.`,
    },
  },
  {
    slug: "artisan-workshop-program",
    date: { en: "2 February 2024", ar: "2 فبراير 2024" },
    image: img2,
    en: {
      title: "Next-generation artisan workshops open enrollment across the Kingdom",
      excerpt:
        "SAC expands its training program linking master craftspeople with young designers in pottery, weaving, and metalwork.",
      body: `SAC has opened enrollment for its **2024 Artisan Workshop Program**, a series of residencies that pair established master craftspeople with emerging designers from Saudi Arabia and the wider region.

Participants spend eight weeks in SAC studios in Riyadh, working across **pottery, Sadu weaving, and brass inlay**. The curriculum balances technical mastery with product development—each resident leaves with a prototype ready for small-batch production.

Applications are reviewed by a panel of SAC artisans and guest mentors from international design schools. Priority is given to candidates proposing work that connects heritage techniques with sustainable materials and contemporary living.

The first cohort begins in April. Information sessions will be held online and at partner cultural institutions in Jeddah and Al-Ahsa.`,
    },
    ar: {
      title: "ورش الحرفيين للجيل القادم تفتح باب التسجيل في أنحاء المملكة",
      excerpt:
        "SAC توسّع برنامجها التدريبي لربط الحرفيين المخضرمين بالمصممين الشباب في الخزف والنسيج والمعادن.",
      body: `فتحت SAC باب التسجيل في **برنامج ورش الحرفيين 2024**، سلسلة إقامات تجمع أساتذة الحرف مع مصممين ناشئين من السعودية والمنطقة.

يقضي المشاركون ثمانية أسابيع في استوديوهات الرياض، يعملون في **الخزف، نسيج السدو، وتطعيم النحاس**. يوازن المنهج بين الإتقان التقني وتطوير المنتج—يغادر كل مقيم بنموذج أولي جاهز للإنتاج المحدود.

تُراجع لجنة من حرفيي SAC وضيوف من مدارس التصميم الطلبات. تُعطى الأولوية لمشاريع تربط التراث بمواد مستدامة وحياة معاصرة.

يبدأ الوجد الأول في أبريل. تُعقد جلسات معلومات عن بُعد وفي شركاء ثقافيين في جدة والأحساء.`,
    },
  },
  {
    slug: "hospitality-collection-debut",
    date: { en: "18 November 2023", ar: "18 نوفمبر 2023" },
    image: img3,
    en: {
      title: "Hospitality doors collection debuts for luxury hotel partners",
      excerpt:
        "Hand-carved entry pieces and reception objects designed for Saudi Arabia’s leading hospitality brands.",
      body: `SAC’s **Hospitality Doors Collection** has entered its first hotel installations, delivering hand-carved entry pieces and reception objects conceived for Saudi Arabia’s luxury hospitality sector.

The collection draws on architectural motifs found in historic Najdi and Hejazi doorways, reinterpreted at a scale suited to contemporary lobbies and suites. Each commission is developed with SAC’s design team and fabricated in workshops across Riyadh and Qassim.

Finishes include natural stone inlay, woven leather panels, and patinated brass hardware—all produced in-house to ensure consistency across large properties.

Hotel partners receive full documentation of provenance and artisan attribution for guest-facing storytelling. New commissions for 2025 are now in discussion with regional hospitality groups.`,
    },
    ar: {
      title: "مجموعة أبواب الضيافة تُطلق لشركاء الفنادق الفاخرة",
      excerpt:
        "قطع مداخل منحوتة يدوياً وأعمال استقبال صُممت لعلامات الضيافة الرائدة في المملكة.",
      body: `دخلت **مجموعة أبواب الضيافة** من SAC أول تركيباتها الفندقية، بتقديم قطع مداخل منحوتة يدوياً وأعمال استقبال لقطاع الضيافة الفاخرة في السعودية.

تستلهم المجموعة زخارف الأبواب التاريخية في نجد والحجاز، بإعادة تفسير تناسب اللوبي والأجنحة المعاصرة. يُطوَّر كل طلب مع فريق التصميم ويُنفَّذ في ورش الرياض والقصيم.

تشمل التشطيبات تطعيم الحجر الطبيعي، وألواح جلد منسوج، ومعدات نحاسية—كلها تُنتج داخلياً لضمان الاتساق في المشاريع الكبيرة.

يتلقى الشركاء توثيقاً كاملاً للمنشأ وأسماء الحرفيين لسرد القصة للضيوف. طلبات 2025 قيد المناقشة مع مجموعات ضيافة إقليمية.`,
    },
  },
];

function getCopy(entry, locale) {
  return locale === "ar" ? entry.ar : entry.en;
}

/** Strapi list shape for News / Home News components */
export function getNewsList(locale = "en") {
  const data = articles.map((entry) => {
    const copy = getCopy(entry, locale);
    return {
      attributes: {
        title: copy.title,
        description: copy.excerpt,
        date: entry.date[locale] || entry.date.en,
        url: entry.slug,
        image: {
          data: {
            attributes: { url: entry.image },
          },
        },
      },
    };
  });
  return { data };
}

/** Flat article for NewsItem detail page */
export function getNewsBySlug(slug, locale = "en") {
  const entry = articles.find((a) => a.slug === slug);
  if (!entry) return null;

  const copy = getCopy(entry, locale);
  return {
    url: entry.slug,
    title: copy.title,
    description: copy.body,
    date: entry.date[locale] || entry.date.en,
    image: {
      data: {
        attributes: { url: entry.image },
      },
    },
    localizations: {
      data: [{ attributes: { url: entry.slug } }],
    },
  };
}

export function getAllNewsSlugs() {
  return articles.map((a) => a.slug);
}

export const newsSection = {
  en: { title: "Our news", cta: { label: "See all news", url: "/news" } },
  ar: { title: "أخبارنا", cta: { label: "كل الأخبار", url: "/news" } },
};

export function getNewsSection(locale = "en") {
  return newsSection[locale] || newsSection.en;
}

/** @deprecated — use getNewsList("en").data */
export default getNewsList("en").data;
