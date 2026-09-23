// ============================================================================
// CONTENU DU SITE — MODIFIER UNIQUEMENT CE FICHIER
// ============================================================================
// Toutes les informations affichées sur le site se trouvent ici, en français
// (fr) et en arabe (ar). Les valeurs entre crochets, ex. "[PRÉNOM]", sont des
// placeholders à remplacer par les vraies informations de la professeure.
// ============================================================================

export type Lang = "fr" | "ar";

export const teacherInfo = {
  firstName: "SALAH.G",
  city: "ORAN",
  phone: "05 42 83 19 42",
  whatsapp: "05 42 83 19 42",
  instagramHandle: "@ateliercoursmaths",
  instagramUrl: "https://www.instagram.com/ateliercoursmaths/",
  photo: "[PHOTO PROFESSEURE]",
  schedule: "[HORAIRES]",
};

interface MethodStep {
  number: string;
  title: string;
  text: string;
}

interface ProcessStep {
  title: string;
  text: string;
}

interface Goal {
  title: string;
}

export interface LangContent {
  dir: "ltr" | "rtl";
  nav: {
    home: string;
    method: string;
    about: string;
    contact: string;
    cta: string;
    logo: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  teacher: {
    heading: string;
    intro: string;
    labels: {
      specialty: string;
      level: string;
      approach: string;
      support: string;
    };
    specialtyValue: string;
    levelValue: string;
    approachValue: string;
    supportValue: string;
    tags: string[];
  };
  method: {
    heading: string;
    subheading: string;
    steps: MethodStep[];
  };
  process: {
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  why: {
    line1: string;
    line2: string;
  };
  goals: {
    heading: string;
    items: Goal[];
  };
  parents: {
    heading: string;
    subheading: string;
    points: string[];
    dashboardTitle: string;
    dashboardLabel: string;
    disclaimer: string;
  };
  contact: {
    heading: string;
    subheading: string;
    whatsapp: string;
    call: string;
    instagram: string;
  };
  footer: {
    tagline: string;
    links: string[];
  };
}

export const content: Record<Lang, LangContent> = {
  fr: {
    dir: "ltr",
    nav: {
      home: "Accueil",
      method: "La méthode",
      about: "À propos",
      contact: "Contact",
      cta: "Me contacter",
      logo: `${teacherInfo.firstName} × MATHS`,
    },
    hero: {
      kicker: "Cours particuliers — Niveau 1AS",
      title: "Les mathématiques deviennent plus simples quand on apprend à les comprendre.",
      subtitle: "Cours particuliers de mathématiques — Niveau 1AS",
      ctaPrimary: "Découvrir la méthode",
      ctaSecondary: "Me contacter",
    },
    teacher: {
      heading: "Une professeure, une méthode, un objectif : votre réussite.",
      intro:
        "Un accompagnement construit autour de l'élève, pensé pour rendre les mathématiques claires, accessibles et rassurantes — pour l'élève comme pour ses parents.",
      labels: {
        specialty: "Spécialité",
        level: "Niveau enseigné",
        approach: "Approche pédagogique",
        support: "Accompagnement",
      },
      specialtyValue: "Mathématiques",
      levelValue: "1ère année lycée (1AS)",
      approachValue: "Explications claires, progressives et adaptées à chaque élève",
      supportValue: "Suivi personnalisé, en présentiel comme à distance",
      tags: ["Explication claire", "Suivi personnalisé", "Exercices ciblés", "Préparation aux contrôles"],
    },
    method: {
      heading: "Sa méthode",
      subheading: "Un parcours en quatre étapes, pensé pour construire des bases solides.",
      steps: [
        {
          number: "01",
          title: "Comprendre",
          text: "On commence par comprendre le cours avec des explications simples et structurées.",
        },
        {
          number: "02",
          title: "S'entraîner",
          text: "Des exercices progressifs permettent de transformer la théorie en réflexes.",
        },
        {
          number: "03",
          title: "Corriger",
          text: "Chaque erreur devient une occasion de comprendre et de progresser.",
        },
        {
          number: "04",
          title: "Progresser",
          text: "Un suivi régulier permet de construire des bases solides et d'améliorer les résultats.",
        },
      ],
    },
    process: {
      heading: "Comment se déroule un cours ?",
      subheading: "Chaque séance suit un déroulé clair, du rappel du cours jusqu'au bilan.",
      steps: [
        { title: "Révision du cours", text: "On reprend les notions vues en classe pour partir sur des bases claires." },
        { title: "Explication des notions difficiles", text: "Les points qui bloquent sont repris calmement, avec des exemples concrets." },
        { title: "Exercices guidés", text: "L'élève applique le cours, accompagné pas à pas." },
        { title: "Exercices autonomes", text: "L'élève prend en main les exercices seul, pour gagner en confiance." },
        { title: "Correction et bilan", text: "On corrige, on identifie les progrès et ce qu'il reste à travailler." },
      ],
    },
    why: {
      line1: "Pas seulement apprendre une formule.",
      line2: "Comprendre pourquoi elle fonctionne.",
    },
    goals: {
      heading: "Les objectifs",
      items: [
        { title: "Comprendre le cours" },
        { title: "Combler les lacunes" },
        { title: "Être plus autonome" },
        { title: "Améliorer ses résultats" },
        { title: "Préparer les contrôles" },
        { title: "Prendre confiance en mathématiques" },
      ],
    },
    parents: {
      heading: "Un accompagnement pensé aussi pour les parents.",
      subheading: "Une communication claire, à chaque étape du parcours.",
      points: [
        "Suivi régulier",
        "Communication claire",
        "Travail structuré",
        "Exercices adaptés au niveau",
        "Progression observable",
        "Préparation aux évaluations",
      ],
      dashboardTitle: "Progression",
      dashboardLabel: "Aperçu du suivi",
      disclaimer: "Représentation visuelle uniquement — aucune statistique réelle affichée.",
    },
    contact: {
      heading: "Prêt(e) à progresser en mathématiques ?",
      subheading: "Contactez-moi pour découvrir les modalités des cours.",
      whatsapp: "WhatsApp",
      call: "Appeler",
      instagram: "Instagram",
    },
    footer: {
      tagline: "Cours particuliers de mathématiques — 1AS",
      links: ["Accueil", "La professeure", "La méthode", "Contact"],
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      method: "المنهجية",
      about: "من أنا",
      contact: "تواصل معي",
      cta: "تواصل معي",
      logo: `${teacherInfo.firstName} × رياضيات`,
    },
    hero: {
      kicker: "دروس خصوصية — مستوى السنة أولى ثانوي",
      title: "الرياضيات تصبح أسهل عندما نتعلم كيف نفهمها.",
      subtitle: "دروس خصوصية في الرياضيات — مستوى 1AS",
      ctaPrimary: "اكتشف المنهجية",
      ctaSecondary: "تواصل معي",
    },
    teacher: {
      heading: "أستاذة، منهجية، هدف واحد: نجاحك.",
      intro:
        "مرافقة مبنية حول التلميذ، لجعل الرياضيات واضحة وسهلة الفهم ومطمئنة — للتلميذ ولأولياء أموره.",
      labels: {

        specialty: "التخصص",
        level: "المستوى المُدرَّس",
        approach: "المنهجية التربوية",
        support: "المرافقة",
      },
      specialtyValue: "الرياضيات",
      levelValue: "السنة أولى ثانوي (1AS)",
      approachValue: "شرح واضح وتدريجي يتكيّف مع كل تلميذ",
      supportValue: "متابعة شخصية، حضوريًا أو عن بعد",
      tags: ["شرح واضح", "متابعة شخصية", "تمارين موجهة", "التحضير للفروض"],
    },
    method: {
      heading: "منهجيتها",
      subheading: "مسار من أربع مراحل، لبناء أسس متينة.",
      steps: [
        { number: "01", title: "الفهم", text: "نبدأ بفهم الدرس عبر شروحات بسيطة ومنظمة." },
        { number: "02", title: "التمرّن", text: "تمارين تدريجية تحوّل النظرية إلى انعكاسات مكتسبة." },
        { number: "03", title: "التصحيح", text: "كل خطأ يصبح فرصة للفهم والتقدّم." },
        { number: "04", title: "التقدّم", text: "متابعة منتظمة تبني أسسًا متينة وتحسّن النتائج." },
      ],
    },
    process: {
      heading: "كيف تسير الحصة؟",
      subheading: "كل حصة تتبع مسارًا واضحًا، من مراجعة الدرس إلى التقييم.",
      steps: [
        { title: "مراجعة الدرس", text: "نعيد ما تمت دراسته في القسم لننطلق من أسس واضحة." },
        { title: "شرح النقاط الصعبة", text: "تُعالَج النقاط الغامضة بهدوء وبأمثلة ملموسة." },
        { title: "تمارين موجهة", text: "يطبّق التلميذ الدرس برفقة الأستاذة خطوة بخطوة." },
        { title: "تمارين مستقلة", text: "يتولى التلميذ حل التمارين بمفرده لاكتساب الثقة." },
        { title: "التصحيح والتقييم", text: "نصحح ونحدد التقدّم المحرز وما يجب العمل عليه." },
      ],
    },
    why: {
      line1: "ليس فقط حفظ الصيغة.",
      line2: "بل فهم سبب صحتها.",
    },
    goals: {
      heading: "الأهداف",
      items: [
        { title: "فهم الدرس" },
        { title: "سد الثغرات" },
        { title: "اكتساب الاستقلالية" },
        { title: "تحسين النتائج" },
        { title: "التحضير للفروض" },
        { title: "اكتساب الثقة في الرياضيات" },
      ],
    },
    parents: {
      heading: "مرافقة مصممة أيضًا لأولياء الأمور.",
      subheading: "تواصل واضح، في كل مرحلة من المسار.",
      points: [
        "متابعة منتظمة",
        "تواصل واضح",
        "عمل منظم",
        "تمارين تتناسب مع المستوى",
        "تقدّم ملموس",
        "التحضير للتقييمات",
      ],
      dashboardTitle: "التقدّم",
      dashboardLabel: "لمحة عن المتابعة",
      disclaimer: "تمثيل بصري فقط — لا إحصائيات حقيقية معروضة.",
    },
    contact: {
      heading: "مستعد(ة) للتقدّم في الرياضيات؟",
      subheading: "تواصل معي لمعرفة تفاصيل الدروس.",
      whatsapp: "واتساب",
      call: "اتصال",
      instagram: "إنستغرام",
    },
    footer: {
      tagline: "دروس خصوصية في الرياضيات — 1AS",
      links: ["الرئيسية", "الأستاذة", "المنهجية", "تواصل معي"],
    },
  },
};
