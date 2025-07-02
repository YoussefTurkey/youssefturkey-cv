// importing Icons
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { IconType } from "react-icons"; // importing icon function in ts file

// ---- language ----
export type ILang = {
  en: string;
  ar: string;
};

// ---- data ----
interface IPersona {
  image: string;
  fullName: ILang;
  jobTitle: ILang;
  jobTools: ILang;
}
export const persona: IPersona = {
  image: "/images/Youssef-Turkey.webp",
  fullName: {
    en: "Youssef Turkey",
    ar: "يــوســف الـــتركــي",
  },
  jobTitle: {
    en: '"Front-End Developer"',
    ar: '"مطور واجهات المواقع الإلكترونية"',
  },
  jobTools: {
    en: "(React.js | Next.js | Typescript | Strapi | TailwindCSS | Scss/Sass | Bootstrap | jQuery)",
    ar: "(React.js | Next.js | Typescript | Strapi | TailwindCSS | Scss/Sass | Bootstrap | jQuery)"
  }
};

type IContact = {
  address: {
    icon: IconType;
    link?: string;
    info: ILang;
  };
  email: {
    icon: IconType;
    link?: string;
    info: string;
  };
  whatsapp: {
    icon: IconType;
    link?: string;
    info: ILang;
  };
  call: {
    icon: IconType;
    link?: string;
    info: ILang;
  };
};
export const contact: IContact = {
  address: {
    icon: TiLocation,
    info: {
      en: "Alexandria - Egypt",
      ar: "الإسكندرية - مصر",
    },
  },
  email: {
    icon: FaEnvelope,
    link: "you.turkey11@gmail.com",
    info: "you.turkey11@gmail.com",
  },
  whatsapp: {
    icon: IoLogoWhatsapp,
    link: "https://wa.me/201273451052",
    info: {
      en: "+20 127 345 1052",
      ar: "1052 345 127 20+"
    },
  },
  call: {
    icon: IoCall,
    info: {
      en: "+20 115 410 2459",
      ar: "2459 410 115 20+"
    }
  },
};

type ISocial = {
  linkedIn: {
    icon: IconType;
    link: string;
    info: string;
  };
  github: {
    icon: IconType;
    link: string;
    info: string;
  };
  behance: {
    icon: IconType;
    link: string;
    info: string;
  };
  qabilah: {
    icon: IconType;
    link: string;
    info: string;
    title: ILang;
  };
};
export const social: ISocial = {
  linkedIn: {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/youturkey11/",
    info: "/in/youturkey11",
  },
  github: {
    icon: FaGithub,
    link: "https://github.com/YoussefTurkey",
    info: "/YoussefTurkey",
  },
  behance: {
    icon: FaBehance,
    link: "https://www.behance.net/YouTurkey11",
    info: "/YouTurkey11",
  },
  qabilah: {
    icon: LuLink,
    link: "https://qabilah.com/profile/youturkey11/professional-profile",
    info: "/youturkey11",
    title: {
      en: "qabilah",
      ar: "قبيلة",
    },
  },
};

interface ISummary {
  info: ILang;
}
export const summary: ISummary = {
  info: {
    en: "Creative and detail-oriented Frontend Developer with over 2 years of experience in building modern, responsive web applications. Proficient in JavaScript, Next.js, SCSS, and WordPress (Elementor, WooCommerce) as part of a versatile tech stack. Passionate about UI/UX and delivering tailored digital experiences that drive engagement and performance.",
    ar: "مطور واجهات أمامية مبدع ويدقق في التفاصيل، لديه أكثر من سنتين من الخبرة في بناء تطبيقات ويب حديثة ومتجاوبة. ماهر في JavaScript وNext.js وSCSS وWordPress (بما في ذلك Elementor وWooCommerce) ضمن مجموعة تقنيات متنوعة. شغوف بتجربة المستخدم وتصميم واجهات مخصصة تُعزز التفاعل وتحسن الأداء.",
  },
};

interface IEducation {
  qualified: ILang;
  university: ILang;
  year: string;
  degree: ILang;
}
export const education: IEducation = {
  qualified: {
    en: "Bachelor of Science",
    ar: "بكالوريوس علوم",
  },
  university: {
    en: "Alexandria University - Egypt",
    ar: "جامعة الإسكندرية - مصر",
  },
  year: "2019 - 2022",
  degree: {
    en: "3.06 / 4.00 GPA (very Good)",
    ar: "3.06 / 4.00 GPA (جيد جدًا)",
  },
};

interface ISkills {
  frontend: {
    title: string;
    tools: string[];
  };
  backend: {
    title: string;
    tools: string[];
  };
  design: {
    title: string;
    tools: string[];
  };
}
export const skills: ISkills = {
  frontend: {
    title: "Frontend",
    tools: [
      "HTML5 & CSS3 & JS & ES6",
      "Bootstrap & TailwindCSS & jQuery",
      "Typescript & Sass|Scss",
      "npm & yarn & git",
      "Ajax & JSON & Axios",
      "React.js & Next.js & Vue.js",
    ],
  },
  backend: {
    title: "Backend & CMS",
    tools: [
      "PHP & Python & C & C++",
      "Strapi & WordPress",
      "WooCommerce & Elementor",
    ],
  },
  design: {
    title: "Design",
    tools: ["Photoshop", "Illustrator", "CorelDraw", "Figma"],
  },
};

interface ISoftSkills {
  tools: { en: string; ar: string }[];
}
export const softSkills: ISoftSkills = {
  tools: [
    { en: "Strong Presentation Skills", ar: "مهارات قوية في العرض والتقديم" },
    { en: "Effective Communication", ar: "مهارات تواصل فعّالة" },
    { en: "Team Leadership", ar: "القدرة على قيادة الفريق" },
    { en: "Team Building", ar: "القدرة على بناء الفريق" },
    { en: "Passionate Learner", ar: "محب للتعلم بشغف" },
    { en: "Problem Solving", ar: "القدرة على حل المشكلات" },
    { en: "Adaptability", ar: "القدرة على التكيّف" },
  ],
};

interface IExperience {
  id: string;
  jobTitle: ILang;
  date: ILang;
  info: ILang[];
  time: ILang;
}
export const experience: IExperience[] = [
  {
    id: "Creativa",
    jobTitle: {
      en: "Web Design Instructor (Present)",
      ar: "محاضر تطوير وتصميم المواقع الإلكترونية (حالياً)",
    },
    date: { en: "24th of June 2025 | in Creativa Innovation Hub (NTI Damnhour)", ar: "24 يونيو 2025 | في مراكز إبداع مصر الرقمية (دمنهور NTI)" },
    info: [
      {
        en: "Teaching HTML5, CSS3, and JavaScript from scratch to intermediate level.",
        ar: "تدريب المتعلمين على أساسيات HTML5 وCSS3 وJavaScript.",
      },
      {
        en: "Introducing students to modern web development practices and tools.",
        ar: "تبسيط مفاهيم تطوير الويب الحديثة والأدوات المستخدمة.",
      },
      {
        en: "Guiding learners through hands-on projects and practical tasks.",
        ar: "تنفيذ مشاريع تطبيقية وتاسكات عملية لتعزيز الفهم.",
      },
      {
        en: "Explaining how to work with APIs (fetching, parsing, and integrating external data).",
        ar: "شرح كيفية التعامل مع واجهات برمجة التطبيقات (APIs) بشكل عملي ومتكامل.",
      },
      {
        en: "Supporting students with real-world examples and best practices.",
        ar: "تقديم أمثلة من الواقع العملي ونصائح احترافية.",
      },
      {
        en: "Assessing progress and providing constructive feedback.",
        ar: "تقييم الأداء وتقديم ملاحظات بنّاءة للمشاركين.",
      },
    ],
    time: { en: "Freelance", ar: "عمل حر" },
  },
  {
    id: "WPRawaj",
    jobTitle: {
      en: "Full-Stack WordPress Developer (Present)",
      ar: "مطور ووردبريس متكامل (حالياً)",
    },
    date: { en: "15th of Nov 2024 | in Rawaj", ar: "15 نوفمبر 2024 | في رواج" },
    info: [
      {
        en: "Built a full e-commerce website from scratch using Elementor and WooCommerce, without relying on pre-made themes.",
        ar: "قمت ببناء موقع تجارة إلكترونية متكامل من الصفر باستخدام إليمنتور و ووكومرس، دون الاعتماد على قوالب جاهزة.",
      },
      {
        en: "Optimized performance using essential plugins, achieving 78% website speed and performance score.",
        ar: "قمت بتحسين الأداء باستخدام الإضافات الأساسية، محققاً نسبة 78% في سرعة وأداء الموقع.",
      },
      {
        en: "Designed a modern and responsive UI, ensuring a seamless user experience across devices.",
        ar: "قمت بتصميم واجهة مستخدم حديثة ومتجاوبة، لضمان تجربة مستخدم سلسة عبر مختلف الأجهزة.",
      },
      {
        en: "Company now depends on the platform for 75% of its business operations.",
        ar: "تعتمد الشركة الآن على المنصة في 75% من عملياتها التجارية.",
      },
    ],
    time: { en: "full-Time", ar: "دوام كامل" },
  },
  {
    id: "WDSpaceTeens",
    jobTitle: {
      en: "Web Development Instructor",
      ar: "مدرّب تطوير المواقع الإلكترونية",
    },
    date: {
      en: "20th of February 2024 | in SpaceTeens",
      ar: "20 فبراير 2024 | في سبيس تينز",
    },
    info: [
      {
        en: "Trained over 5 groups of children (ages 9–14) with a total of 40 hours per group.",
        ar: "قمت بتدريب أكثر من 5 مجموعات من الأطفال (الأعمار 9-14 سنة) بإجمالي 40 ساعة لكل مجموعة.",
      },
      {
        en: "Helped students build their own basic websites and successfully complete their graduation projects.",
        ar: "ساعدت الطلاب في بناء مواقعهم الإلكترونية الأساسية الخاصة بهم وإكمال مشاريع تخرجهم بنجاح.",
      },
      {
        en: "Supported children in preparing competitive projects for local and international contests.",
        ar: "دعم الأطفال في إعداد مشاريع تنافسية للمسابقات المحلية والدولية.",
      },
    ],
    time: { en: "part-Time", ar: "دوام جزئي" },
  },
  {
    id: "GDRawaj",
    jobTitle: { en: "Graphic Designer", ar: "مصمم جرافيك" },
    date: { en: "15th of May 2023 | in Rawaj", ar: "15 مايو 2023 | في رواج" },
    info: [
      {
        en: "Designed customer visuals for production of keychains, coasters, phone holders, and various personalized gifts.",
        ar: "تصميم مرئيات للعملاء لإنتاج سلاسل مفاتيح ومساند أكواب وحوامل هواتف وهدايا شخصية متنوعة.",
      },
      {
        en: "Promoted to lead the production and file preparation process.",
        ar: "تمت ترقيتي لقيادة عملية الإنتاج وإعداد الملفات.",
      },
      {
        en: "Designed over 90% of the product artwork featured on Spot75.com, contributing to 70% of current sales.",
        ar: "صممت أكثر من 90% من الأعمال الفنية للمنتجات المعروضة على موقع Spot75.com، مما ساهم في تحقيق 70% من المبيعات الحالية.",
      },
    ],
    time: { en: "full-Time", ar: "دوام كامل" },
  },
  {
    id: "FDUSArabChamber",
    jobTitle: { en: "Front-End Developer", ar: "مطور واجهة أمامية" },
    date: {
      en: "5th of September 2022 | in US Arab Chamber of Commerce",
      ar: "الخامس من سبتمبر 2022 | في الغرفة العربية الأمريكية للتجارة",
    },
    info: [
      {
        en: "Revamped outdated websites using modern frontend practices and resolved major technical issues.",
        ar: "أعدت هيكلة وتحديث المواقع القديمة باستخدام ممارسات تطوير الواجهات الأمامية الحديثة، وحللت مشكلات تقنية رئيسية.",
      },
      {
        en: "Improved website responsiveness and overall design, achieving a 40% enhancement in visual appeal and usability.",
        ar: "قمنا بتحسين استجابة الموقع وتصميمه العام، مما حقق تحسنًا بنسبة 40٪ في الجاذبية البصرية وسهولة الاستخدام.",
      },
    ],
    time: { en: "full-Time", ar: "دوام كامل" },
  },
  {
    id: "GDHerbal",
    jobTitle: { en: "Graphic Designer", ar: "مصمم جرافيك" },
    date: {
      en: "15th of September 2021 | in Herbal Globe",
      ar: "15 سبتمبر 2021 | في هيربال جلوب",
    },
    info: [
      {
        en: "Designed engaging social media posts for product campaigns.",
        ar: "تصميم منشورات جذابة لوسائل التواصل الاجتماعي لحملات المنتجات.",
      },
      {
        en: "Helped campaigns achieve their goals through visual communication, contributing to 70% campaign success rate.",
        ar: "ساهمت في تحقيق أهداف الحملات عبر وسائل التواصل البصري، مما أسهم في تحقيق نسبة نجاح 70% للحملات.",
      },
    ],
    time: { en: "Remotely", ar: "عَنْ بُعْد" },
  },
];

interface ICertificate {
  id: string;
  title: ILang;
  info: ILang;
}
export const certificates: ICertificate[] = [
  {
    id: "Quantum",
    title: {
      en: "Diploma of Quantum Computing & Programming (2022)",
      ar: "دبلومة الحوسبة الكمية والبرمجة (2022)",
    },
    info: {
      en: "successful completing the online workshop Quantum Computing & Programming using QWorld’s introductory tutorial Bronze-Qiskit.",
      ar: "إتمام ورشة العمل الإلكترونية بنجاح في مجال الحوسبة الكمية والبرمجة باستخدام البرنامج التمهيدي Bronze-Qiskit من QWorld.",
    },
  },
  {
    id: "Tanfezy",
    title: {
      en: "Leadership Training Course presented by Tanfezy Initiative (2022)",
      ar: "دورة تدريبية في القيادة مقدمة من مبادرة تنفيذي (2022)",
    },
    info: {
      en: "Attended training workshops over a month, totaling 32 training hours, as part of the Executive Capabilities Program an initiative by Senator Alaa Mostafa.",
      ar: "شاركت في ورش عمل تدريبية على مدار شهر، بإجمالي 32 ساعة تدريبية، كجزء من برنامج القدرات التنفيذية - مبادرة من السيناتور علاء مصطفى.",
    },
  },
  {
    id: "AWCO",
    title: {
      en: "AWCO Training center (2021)",
      ar: "مركز AWCO للتدريب (2021)",
    },
    info: {
      en: "successful passing in a summer training for students of the Faculty of Science (Sidi Bishr Branch).",
      ar: "اجتياز تدريب صيفي بنجاح لطلاب كلية العلوم (فرع سيدي بشر).",
    },
  },
];

interface IReferences {
  id: string;
  position: ILang;
  name: ILang;
  phone: ILang;
  email?: string;
}
export const references: IReferences[] = [
  {
    id: "Talaat",
    position: {
      en: "Unibusiness' CEO",
      ar: "الرئيس التنفيذي لشركة يوني بيزنس",
    },
    name: { en: "Dr. Ahmed Talaat", ar: "د. أحمد طلعت" },
    phone: {en: "0111 963 6461", ar: "6461 963 0111"},
    email: "ahmdtal3at@gmail.com",
  },
  {
    id: "Khorshed",
    position: { en: "Rawaj' CEO", ar: "الرئيس التنفيذي لشركة رواج" },
    name: { en: "Mr. Omar Khorshed", ar: "أ. عمر خورشد" },
    phone: {en: "0120 070 8084", ar: "8084 070 0120"},
  },
];

interface IProjects {
  id: string;
  title: ILang;
  info: ILang;
  responsibility: ILang[];
  link: string;
}
export const projects: IProjects[] = [
  {
    id: "Spot75",
    title: { en: "Spot75 store", ar: "متجر Spot75" },
    info: {
      en: "is giveaways store that produce custom designed keychains, coasters, mugs, notebooks,.....",
      ar: "هو متجر هدايا يقوم بإنتاج سلاسل مفاتيح، قواعد أكواب، أكواب، دفاتر ملاحظات، وغيرها من المنتجات المصممة حسب الطلب.",
    },
    responsibility: [
      {
        en: "Design a creative UI in Figma from scratch",
        ar: "تصميم واجهة مستخدم إبداعية باستخدام Figma من الصفر.",
      },
      {
        en: "Using Wordpress, WooCommerce, and Elementor Pro to build the store",
        ar: "استخدام ووردبريس وWooCommerce وElementor Pro لبناء المتجر.",
      },
      {
        en: "Design Products, and uploading",
        ar: "تصميم المنتجات وإدارتها ورفعها على المتجر.",
      },
      {
        en: "Checking SEO, and Performance",
        ar: "مراجعة وتحسين محركات البحث (SEO) وأداء الموقع.",
      },
    ],
    link: "https://www.spot75.com/",
  },
  {
    id: "Senforra",
    title: { en: "Senforra", ar: "سِنفُرّة" },
    info: {
      en: "Premium Brazilian-inspired coffee, crafted for true coffee lovers.",
      ar: "قهوة فاخرة مستوحاة من البرازيل، مُعدّة خصيصًا لعشاق القهوة الحقيقيين.",
    },
    responsibility: [
      {
        en: "Brand Identity Designer & Developer",
        ar: "مصمم ومطور الهوية البصرية للعلامة التجارية",
      },
      {
        en: "Created the visual identity, logo, and packaging for Senforra",
        ar: "قمت بتصميم الهوية البصرية، الشعار، والتغليف لعلامة Senforra",
      },
      {
        en: "Selected a luxurious gold & earthy color palette to reflect premium quality",
        ar: "اخترت لوحة ألوان فاخرة تجمع بين الذهبي والألوان الترابية لتعكس الجودة العالية",
      },
      {
        en: "Designed the typography and branding elements for consistency",
        ar: "صممت الخطوط والعناصر البصرية لضمان الاتساق في الهوية",
      },
      {
        en: "Ensured the brand embodies Brazilian specialty coffee elegance",
        ar: "حرصت على أن تُجسد العلامة التجارية أناقة القهوة البرازيلية المختصة",
      },
      {
        en: "Developed a cohesive and market-ready presentation for Senforra",
        ar: "طورت عرضًا متكاملًا وجاهزًا للسوق لعلامة Senforra",
      },
    ],
    link: "https://www.behance.net/gallery/217496887/Senforra-Every-Sip-a-Story",
  },
  {
    id: "Qorra",
    title: { en: "Qorra", ar: "قُرّاءْ" },
    info: {
      en: "A unique initiative fostering literary growth, research, and cultural development through specialized committees and divisions.",
      ar: "مبادرة فريدة تعزز النمو الأدبي، والبحث العلمي، والتطوير الثقافي من خلال لجان وأقسام متخصصة.",
    },
    responsibility: [
      {
        en: "Designed the User Experience (UX) for a seamless and engaging navigation flow",
        ar: "صممت تجربة المستخدم (UX) لتوفير تدفق تنقل سلس وجذاب",
      },
      {
        en: "Created the User Interface (UI) with a clean and visually appealing design",
        ar: "أنشأت واجهة المستخدم (UI) بتصميم نظيف وجذاب بصريًا",
      },
      {
        en: "Developed the website frontend using modern web technologies",
        ar: "طورت الواجهة الأمامية للموقع باستخدام أحدث تقنيات الويب",
      },
      {
        en: "Ensured responsiveness and accessibility across all devices",
        ar: "ضمنت توافق الموقع مع جميع الأجهزة من حيث الاستجابة وسهولة الوصول",
      },
      {
        en: "Focused on performance optimization for a smooth user experience",
        ar: "ركزت على تحسين الأداء لضمان تجربة مستخدم سلسة",
      },
    ],
    link: "https://qorra.vercel.app/",
  },
  {
    id: "EgtazPlatfom",
    title: {
      en: "Egtaz – Online Exam Platform",
      ar: "اجتاز - منصة امتحانات أونلاين",
    },
    info: {
      en: "Exam dashboard, I was a Front-End Developer and Graphic Designer as a part of graduation team using self-study resources. (The grade was -A)",
      ar: "لوحة تحكم الامتحانات، كنت مطور واجهات أمامية ومصمم جرافيك كجزء من فريق التخرج باستخدام موارد التعلم الذاتي. (الدرجة كانت A-)",
    },
    responsibility: [
      {
        en: "Designed the User Experience (UX) for smooth navigation",
        ar: "صممت تجربة المستخدم (UX) لتوفير تنقل سلس",
      },
      {
        en: "Created the User Interface (UI) with a structured layout",
        ar: "أنشأت واجهة المستخدم (UI) مع تصميم منظم",
      },
      {
        en: "Developed the Frontend using HTML5, CSS3, JavaScript, and Bootstrap",
        ar: "طورت الواجهة الأمامية باستخدام HTML5 وCSS3 وJavaScript وBootstrap",
      },
      {
        en: "Ensured responsive design for a seamless user experience",
        ar: "ضمنت تصميمًا متجاوبًا لضمان تجربة مستخدم سلسة",
      },
      {
        en: "Implemented dynamic interactions for students & lecturers",
        ar: "نفذت تفاعلات ديناميكية للطلاب والمحاضرين",
      },
    ],
    link: "https://youssefturkey.github.io/Egtaz-Platform/",
  },
];

interface ILangs {
  id: string;
  name: ILang;
  level: ILang;
}
export const languages: ILangs[] = [
  {
    id: "ar",
    name: { en: "Arabic", ar: "عربي" },
    level: { en: "Native", ar: "اللغة الأم" },
  },
  {
    id: "en",
    name: { en: "English", ar: "إنجليزي" },
    level: { en: "B2 (Upper-Intermediate)", ar: "B2 (متوسط متقدم)" },
  },
  {
    id: "it",
    name: { en: "Italian", ar: "إيطالية" },
    level: { en: "A1 (Beginner)", ar: "A1 (مبتدئ)" },
  },
];

interface IPersonalInfo {
  date: ILang
  gender: ILang
  nationality: ILang
  maritalStatus: ILang
  militaryStatus: ILang
} 
export const personalInfo : IPersonalInfo = {
  date: {en: '1st May 2000', ar: '1 مايو 2000'},
  gender: {en: 'Male', ar: 'رجل'},
  nationality: {en: 'Egyptian', ar: 'مصري'},
  maritalStatus: {en: 'Engaged', ar: 'خاطب'},
  militaryStatus: {en: 'Temporarily exempted', ar: 'معفي مؤقتًا'},
}

interface IPopup {
  image: string;
  name: ILang;
  info: ILang[];
  whatsapp: string;
  email: string;
}
export const popup: IPopup = {
  image: "/images/Youssef-Turkey.webp",
  name: { en: "Youssef El-Turkey", ar: "يوسف التركي" },
  info: [
    {
      en: `I'm a frontend developer helping businesses and individuals improve their websites using tools like TypeScript, SCSS, TailwindCSS, Strapi, WordPress, Elementor, and many more that you can find in the Technical Skills section of my CV.`,
      ar: '"أنا مطور واجهات أمامية أساعد الشركات والأفراد في تحسين مواقعهم الإلكترونية باستخدام أدوات مثل TypeScript وSCSS وTailwindCSS وStrapi وWordPress وElementor والعديد من الأدوات الأخرى التي يمكنك العثور عليها في قسم المهارات التقنية في سيرتي الذاتية."',
    },
    {
      en: `I also have experience in graphic design, where I assist companies in creating their visual identity using tools like Photoshop, Illustrator, and CorelDraw.`,
      ar: "لدي أيضًا خبرة في التصميم الجرافيكي، حيث أساعد الشركات في إنشاء هويتهم البصرية باستخدام أدوات مثل Photoshop وIllustrator وCorelDraw.",
    },
  ],
  whatsapp: "https://wa.me/201273451052",
  email: "mailto:you.turkey11@gmail.com",
};

interface IMenu {
  image: string;
}
export const menuBar: IMenu = {
  image: "/images/logo-text.webp",
};
