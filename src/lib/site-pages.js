import product2 from "@/public/assets/media/home/products/product2.png";
import product4 from "@/public/assets/media/home/products/product4.png";
import customPiecesBg from "@/public/assets/media/home/custom-pieces.png";

const copy = (en, ar) => ({ en, ar });

const pages = {
  story: copy(
    {
      label: "The story",
      title: "Weaving heritage into the future",
      description: "Saudi Artisanal Company was founded to preserve craftsmanship and open it to the world.",
      body: "SAC brings together master artisans, designers, and partners to create objects that honour Saudi heritage while speaking to contemporary life.\n\nFrom our studios in Riyadh, we develop collections, custom commissions, and training programs that empower the next generation of craftspeople.",
    },
    {
      label: "القصة",
      title: "ننسج التراث في المستقبل",
      description: "تأسست الشركة السعودية للحرف اليدوية للحفاظ على الحرف وفتحها للعالم.",
      body: "تجمع SAC بين حرفيين مخضرمين ومصممين وشركاء لصنع قطع تحترم التراث السعودي وتتحدث إلى الحياة المعاصرة.\n\nمن استوديوهاتنا في الرياض نطوّر مجموعات وطلبات مخصصة وبرامج تدريب تمكّن الجيل القادم من الحرفيين.",
    }
  ),
  artisan: copy(
    {
      label: "Join us",
      title: "As artisan",
      description: "Work alongside master craftspeople in pottery, weaving, and metalwork.",
      body: "SAC welcomes artisans who want to refine their practice, collaborate on collections, or mentor the next generation.\n\nResidencies and workshop programs offer studio access, fair compensation, and paths to product development with SAC design teams.",
    },
    {
      label: "انضم إلينا",
      title: "كحرفي",
      description: "اعمل إلى جانب حرفيين مخضرمين في الخزف والنسيج والمعادن.",
      body: "ترحب SAC بالحرفيين الراغبين في تنمية مهاراتهم أو التعاون في المجموعات أو إرشاد الجيل القادم.\n\nتوفر برامج الإقامة والورش وصولاً للاستوديو وأجوراً عادلة ومسارات تطوير منتجات مع فرق التصميم.",
    }
  ),
  designer: copy(
    {
      label: "Join us",
      title: "As designer",
      description: "Shape collections that bridge heritage techniques and contemporary living.",
      body: "Designers at SAC collaborate with artisans from concept through production — respecting material, process, and cultural meaning.\n\nWe look for partners who bring fresh perspective to Saudi craft while honouring the hands that make each piece.",
    },
    {
      label: "انضم إلينا",
      title: "كمصمم",
      description: "صمّم مجموعات تربط تقنيات التراث بالحياة المعاصرة.",
      body: "يتعاون المصممون في SAC مع الحرفيين من الفكرة حتى الإنتاج — باحترام المادة والعملية والمعنى الثقافي.\n\nنبحث عن شركاء يقدمون رؤية جديدة للحرف السعودية مع تكريم الأيدي التي تصنع كل قطعة.",
    }
  ),
  partner: copy(
    {
      label: "Join us",
      title: "As partner",
      description: "Hospitality, retail, and cultural institutions working with SAC.",
      body: "Partners collaborate with SAC on bespoke programs, collection launches, and storytelling that connects guests and audiences to Saudi craftsmanship.\n\nContact our team to discuss commissions, wholesale, or co-branded experiences.",
    },
    {
      label: "انضم إلينا",
      title: "كشريك",
      description: "ضيافة وتجزئة ومؤسسات ثقافية تعمل مع SAC.",
      body: "يتعاون الشركاء مع SAC في برامج مخصصة وإطلاق مجموعات وسرد قصص يربط الضيوف والجمهور بالحرف السعودية.\n\nتواصل مع فريقنا لمناقشة الطلبات أو الجملة أو التجارب المشتركة.",
    }
  ),
  "custom-designs": copy(
    {
      label: "Custom designs",
      title: "Pieces made for you",
      description: "Collaborate with our artisans through a detailed craftsmanship process.",
      body: "From hospitality fit-outs to private commissions, SAC develops custom pieces rooted in heritage and finished to your brief.\n\nOur team guides material selection, prototyping, and production across pottery, weaving, wood, and metal.",
    },
    {
      label: "تصاميم مخصصة",
      title: "قطع صُنعت من أجلك",
      description: "تعاون مع حرفيينا عبر عملية حرفية دقيقة.",
      body: "من تجهيزات الضيافة إلى الطلبات الخاصة، تطوّر SAC قطعاً مخصصة متجذرة في التراث ومنجزة وفق موجزك.\n\nيرشدك فريقنا في اختيار المواد والنماذج الأولية والإنتاج عبر الخزف والنسيج والخشب والمعادن.",
    }
  ),
  studio: copy(
    {
      label: "The studio",
      title: "Where craft takes form",
      description: "Our Riyadh studio is the heart of SAC’s design and production.",
      body: "The studio houses workshops for pottery, glazing, weaving, and finishing — where artisans and designers work side by side.\n\nVisits and appointments are available for partners and collectors by arrangement.",
    },
    {
      label: "الاستوديو",
      title: "حيث تأخذ الحرفة شكلاً",
      description: "استوديونا في الرياض هو قلب تصميم وإنتاج SAC.",
      body: "يضم الاستوديو ورش خزف وتزجيج ونسيج وتشطيب — يعمل فيها الحرفيون والمصممون جنباً إلى جنب.\n\nالزيارات والمواعيد متاحة للشركاء والهواة بترتيب مسبق.",
    }
  ),
  workshops: copy(
    {
      label: "Workshops & artisans",
      title: "Hands that carry tradition forward",
      description: "Training and residencies linking master craftspeople with emerging talent.",
      body: "SAC’s workshop program pairs established artisans with designers across the Kingdom. Participants develop prototypes ready for small-batch production while deepening technical mastery.\n\nEnrollment opens seasonally — see our news section for upcoming cohorts.",
    },
    {
      label: "الورش والحرفيون",
      title: "أيدٍ تحمل التقاليد إلى الأمام",
      description: "تدريب وإقامات تربط الحرفيين المخضرمين بالمواهب الناشئة.",
      body: "يربط برنامج ورش SAC بين حرفيين مخضرمين ومصممين في أنحاء المملكة. يطوّر المشاركون نماذج أولية جاهزة للإنتاج المحدود مع تعميق الإتقان التقني.\n\nيفتح التسجيل موسمياً — راجع قسم الأخبار للدفعات القادمة.",
    }
  ),
  contact: copy(
    {
      label: "Contact",
      title: "Start a conversation",
      description: "Commissions, partnerships, press, and general enquiries.",
      body: "**Riyadh studio**\n\nEmail: hello@sac.sa\n\nPhone: +966 11 000 0000\n\nWe respond to commission and partnership enquiries within five business days.",
    },
    {
      label: "تواصل",
      title: "ابدأ المحادثة",
      description: "طلبات مخصصة وشراكات وإعلام واستفسارات عامة.",
      body: "**استوديو الرياض**\n\nالبريد: hello@sac.sa\n\nالهاتف: +966 11 000 0000\n\nنرد على طلبات الشراكة والطلبات المخصصة خلال خمسة أيام عمل.",
    }
  ),
  "case-study": copy(
    {
      label: "Case studies",
      title: "Collaborations in practice",
      description: "Selected projects with hospitality, cultural, and private partners.",
      body: "",
    },
    {
      label: "دراسات الحالة",
      title: "تعاونات في الواقع",
      description: "مشاريع مختارة مع شركاء الضيافة والثقافة والقطاع الخاص.",
      body: "",
    }
  ),
};

const caseStudies = [
  {
    slug: "luxury-hotel-lobby",
    image: product2,
    en: {
      title: "Luxury hotel lobby program",
      client: "Hospitality partner, Riyadh",
      excerpt: "Hand-carved reception objects and matched serving pieces for a flagship property.",
    },
    ar: {
      title: "برنامج لوبي فندق فاخر",
      client: "شريك ضيافة، الرياض",
      excerpt: "أعمال استقبال منحوتة يدوياً وقطع تقديم متناسقة لعقار رائد.",
    },
  },
  {
    slug: "cultural-residency",
    image: product4,
    en: {
      title: "Cultural institution residency",
      client: "National cultural foundation",
      excerpt: "Eight-week residency linking Sadu weavers with product designers.",
    },
    ar: {
      title: "إقامة مؤسسة ثقافية",
      client: "مؤسسة ثقافية وطنية",
      excerpt: "إقامة ثمانية أسابيع تربط نسّاجي السدو بمصممي المنتجات.",
    },
  },
  {
    slug: "bespoke-hospitality-collection",
    image: customPiecesBg,
    en: {
      title: "Bespoke hospitality collection",
      client: "Regional hotel group",
      excerpt: "Custom glaze program and tableware for suites and dining across three properties.",
    },
    ar: {
      title: "مجموعة ضيافة مخصصة",
      client: "مجموعة فنادق إقليمية",
      excerpt: "برنامج تزجيج مخصص وأدوات مائدة للأجنحة والمطاعم في ثلاثة عقارات.",
    },
  },
];

export const SITE_PAGE_SLUGS = Object.keys(pages);

export function getSitePage(slug, locale = "en") {
  const entry = pages[slug];
  if (!entry) return null;
  return entry[locale] || entry.en;
}

export function getCaseStudies(locale = "en") {
  return caseStudies.map((item) => {
    const text = item[locale] || item.en;
    return { slug: item.slug, image: item.image, ...text };
  });
}
