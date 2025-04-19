// importing Icons
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { IconType } from "react-icons"; // importing icon function in ts file

// for all icons function
interface Iicon {
  icon: IconType;
  link?: string;
  info?: string;
  image?: string;
  title?: string;
}

// ---- data ----
interface IPersona {
  image: string;
  fullName: string;
  jobTitle: string;
}
export const persona: IPersona = {
  image: "/images/Youssef-Turkey.webp",
  fullName: "Youssef Turkey",
  jobTitle:
    "Front-End Developer (React.js | Next.js | Typescript | Strapi) | Full-Stack WordPress Developer | Branding & Visual Identity Designer",
};

type IContact = {
  [key: string]: Iicon;
};
export const contact: IContact = {
  address: {
    icon: TiLocation,
    info: "Alexandria - Egypt",
  },
  email: {
    icon: FaEnvelope,
    link: "you.turkey11@gmail.com",
    info: "you.turkey11@gmail.com",
  },
  whatsapp: {
    icon: IoLogoWhatsapp,
    link: "https://wa.me/201273451052",
    info: "+20 127 345 1052",
  },
  call: {
    icon: IoCall,
    info: "+20 115 410 2459",
  },
};

type ISocial = {
  [key: string]: Iicon;
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
    icon: BsPersonCircle,
    link: "https://qabilah.com/profile/youturkey11/professional-profile",
    info: "/youturkey11",
    image: "/images/qabilah.webp",
    title: "qabilah",
  },
};

interface ISummary {
  info: string;
}
export const summary: ISummary = {
  info: "Creative and detail-oriented Frontend Developer with over 2 years of experience in building modern, responsive web applications. Proficient in JavaScript, Next.js, SCSS, and WordPress (Elementor, WooCommerce) as part of a versatile tech stack. Passionate about UI/UX and delivering tailored digital experiences that drive engagement and performance.",
};

interface IEducation {
  qualified: string;
  university: string;
  year: string;
  degree: string;
}
export const education: IEducation = {
  qualified: "Bachelor of Science",
  university: "Alexandria University - Egypt",
  year: "2019 - 2022",
  degree: "3.06 / 4.00 GPA (very Good)",
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
  tools: string[];
}
export const softSkills: ISoftSkills = {
  tools: [
    "Strong Presentation Skills",
    "Effective Communication",
    "Team Leadership",
    "Team Building",
    "Passionate Learner",
    "Problem Solving",
    "Adaptability",
  ],
};

interface IExperience {
  WPRawaj: {
    jobTitle: string;
    date: string;
    info: string[];
    time: string;
  };
  WDSpaceTeens: {
    jobTitle: string;
    date: string;
    info: string[];
    time: string;
  };
  GDRawaj: {
    jobTitle: string;
    date: string;
    info: string[];
    time: string;
  };
  FDUSArabChamber: {
    jobTitle: string;
    date: string;
    info: string[];
    time: string;
  };
  GDHerbal: {
    jobTitle: string;
    date: string;
    info: string[];
    time: string;
  };
}
export const experience: IExperience = {
  WPRawaj: {
    jobTitle: "Full-Stack WordPress Developer (Present)",
    date: "15th of Nov 2024 | in Rawaj",
    info: [
      "Built a full e-commerce website from scratch using Elementor and WooCommerce, without relying on pre-made themes.",
      "Optimized performance using essential plugins, achieving 78% website speed and performance score.",
      "Designed a modern and responsive UI, ensuring a seamless user experience across devices.",
      "Company now depends on the platform for 75% of its business operations.",
    ],
    time: "full-Time",
  },
  WDSpaceTeens: {
    jobTitle: "Web Development Instructor",
    date: "20th of February 2024 | in SpaceTeens",
    info: [
      "Trained over 5 groups of children (ages 9–14) with a total of 40 hours per group.",
      "Helped students build their own basic websites and successfully complete their graduation projects.",
      "Supported children in preparing competitive projects for local and international contests.",
    ],
    time: "part-Time",
  },
  GDRawaj: {
    jobTitle: "Graphic Designer",
    date: "15th of May 2023 | in Rawaj",
    info: [
      "Designed customer visuals for production of keychains, coasters, phone holders, and various personalized gifts.",
      "Promoted to lead the production and file preparation process.",
      "Designed over 90% of the product artwork featured on Spot75.com, contributing to 70% of current sales.",
    ],
    time: "full-Time",
  },
  FDUSArabChamber: {
    jobTitle: "Front-End Developer",
    date: "5th of September 2022 | in US Arab Chamber of Commerce",
    info: [
      "Revamped outdated websites using modern frontend practices and resolved major technical issues.",
      "Improved website responsiveness and overall design, achieving a 40% enhancement in visual appeal and usability.",
    ],
    time: "full-Time",
  },
  GDHerbal: {
    jobTitle: "Graphic Designing",
    date: "15th of September 2021 | in Herbal Globe",
    info: [
      "Designed engaging social media posts for product campaigns.",
      "Helped campaigns achieve their goals through visual communication, contributing to 70% campaign success rate.",
    ],
    time: "Remotely",
  },
};

interface ICertificate {
  Quantum: {
    title: string;
    info: string;
  };
  AWCO: {
    title: string;
    info: string;
  };
  Tanfezy: {
    title: string;
    info: string;
  };
}
export const certificates: ICertificate = {
  Quantum: {
    title: "Diploma of Quantum Computing & Programming (2022)",
    info: "successful completing the online workshop Quantum Computing & Programming using QWorld’s introductory tutorial Bronze-Qiskit.",
  },
  Tanfezy: {
    title: "Leadership Training Course presented by Tanfezy Initiative (2022)",
    info: "Attended training workshops over a month, totaling 32 training hours, as part of the Executive Capabilities Program an initiative by Senator Alaa Mostafa.",
  },
  AWCO: {
    title: "AWCO Training center (2021)",
    info: "successful passing in a summer training for students of the Faculty of Science (Sidi Bishr Branch).",
  },
};

interface IReferences {
  Talaat: {
    position: string;
    name: string;
    phone: string;
    email: string;
  };
  Khorshed: {
    position: string;
    name: string;
    phone: string;
    email: string;
  };
}
export const references: IReferences = {
  Talaat: {
    position: "Unibusinessg' CEO",
    name: "Dr. Ahmed Talaat",
    phone: "0111 963 6461",
    email: "ahmdtal3at@gmail.com",
  },
  Khorshed: {
    position: "Rawaj' CEO",
    name: "Mr. Omar Khorshed",
    phone: "0120 070 8084",
    email: "",
  },
};

interface IProjects {
  Spot75: {
    title: string;
    info: string;
    responsibility: string[];
    link: string;
  };
  Senforra: {
    title: string;
    info: string;
    responsibility: string[];
    link: string;
  };
  Qorra: {
    title: string;
    info: string;
    responsibility: string[];
    link: string;
  };
  EgtazPlatfom: {
    title: string;
    info: string;
    responsibility: string[];
    link: string;
  };
}
export const projects: IProjects = {
  Spot75: {
    title: "Spot75 store",
    info: "Spot75 is giveaways store that produce custom designed keychains, coasters, mugs, notebooks,.....",
    responsibility: [
      "Design a creative UI in Figma from scratch",
      "Using Wordpress, WooCommerce, and Elementor Pro to build the store",
      "Design Products, and uploading",
      "Checking SEO, and Performance",
    ],
    link: "https://www.spot75.com/",
  },
  Senforra: {
    title: "Senforra",
    info: "Premium Brazilian-inspired coffee, crafted for true coffee lovers.",
    responsibility: [
      "Brand Identity Designer & Developer",
      "Created the visual identity, logo, and packaging for Senforra",
      "Selected a luxurious gold & earthy color palette to reflect premium quality",
      "Designed the typography and branding elements for consistency",
      "Ensured the brand embodies Brazilian specialty coffee elegance",
      "Developed a cohesive and market-ready presentation for Senforra",
    ],
    link: "https://www.behance.net/gallery/217496887/Senforra-Every-Sip-a-Story",
  },
  Qorra: {
    title: "Qorra",
    info: "A unique initiative fostering literary growth, research, and cultural development through specialized committees and divisions.",
    responsibility: [
      "Designed the User Experience (UX) for a seamless and engaging navigation flow",
      "Created the User Interface (UI) with a clean and visually appealing design",
      "Developed the website frontend using modern web technologies",
      "Ensured responsiveness and accessibility across all devices",
      "Focused on performance optimization for a smooth user experience",
    ],
    link: "https://qorra.vercel.app/",
  },
  EgtazPlatfom: {
    title: "Egtaz – Online Exam Platform",
    info: "Exam dashboard, I was a Front-End Developer and Graphic Designer as a part of graduation team using self-study resources. (The grade was -A)",
    responsibility: [
      "Designed the User Experience (UX) for smooth navigation",
      "Created the User Interface (UI) with a structured layout",
      "Developed the Frontend using HTML5, CSS3, JavaScript, and Bootstrap",
      "Ensured responsive design for a seamless user experience",
      "Implemented dynamic interactions for students & lecturers",
    ],
    link: "https://youssefturkey.github.io/Egtaz-Platform/",
  },
};

interface ILangs {
  ar: {
    name: string;
    level: string;
  };
  en: {
    name: string;
    level: string;
  };
  it: {
    name: string;
    level: string;
  };
}
export const languages: ILangs = {
  ar: {
    name: "Arabic",
    level: "Native",
  },
  en: {
    name: "English",
    level: "B2 (Upper-Intermediate)",
  },
  it: {
    name: "Italian",
    level: "A1 (Beginner)",
  },
};

interface IPopup {
  image: string;
  name: string;
  info: string[];
  whatsapp: string;
  email: string;
}
export const popup: IPopup = {
  image: "/images/Youssef-Turkey.webp",
  name: "Youssef El-Turkey",
  info: [
    `I'm a frontend developer helping businesses and individuals improve their websites using tools like TypeScript, SCSS, TailwindCSS, Strapi, WordPress, Elementor, and many more that you can find in the Technical Skills section of my CV.`,
    `I also have experience in graphic design, where I assist companies in creating their visual identity using tools like Photoshop, Illustrator, and CorelDraw.`,
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
