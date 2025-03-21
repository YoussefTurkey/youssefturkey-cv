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

interface IExperience {
  WPRawaj: {
    jobTitle: string;
    date: string;
    info: string;
  };
  WDSpaceTeens: {
    jobTitle: string;
    date: string;
    info: string;
  };
  GDRawaj: {
    jobTitle: string;
    date: string;
    info: string;
  };
  FDUSArabChamber: {
    jobTitle: string;
    date: string;
    info: string;
  };
  GDHerbal: {
    jobTitle: string;
    date: string;
    info: string;
  };
}

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

interface IProjects {
  Spot75: {
    title: string;
    info: string;
    responsibility: string[];
    link : string
  };
  Senforra: {
    title: string;
    info: string;
    responsibility: string[];
    link : string
  };
  Qorra: {
    title: string;
    info: string;
    responsibility: string[];
    link : string
  };
  EgtazPlatfom: {
    title: string;
    info: string;
    responsibility: string[];
    link : string
  };
}

interface ILangs {
  ar: {
    name: string,
    level: string
  },
  en: {
    name: string,
    level: string
  },
  it: {
    name: string,
    level: string
  }
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

export const experience: IExperience = {
  WPRawaj: {
    jobTitle: "Full-Stack WordPress Developer (Present)",
    date: "15th of Nov 2024 | (full-Time) in Rawaj",
    info: "Creating E-Commerce Store using WordPress, Elementor Pro, and WooCommerce. And creating UI in Figma from scratch.",
  },
  WDSpaceTeens: {
    jobTitle: "Web Development Instructor",
    date: "20th of February 2024 | (part-Time) in SpaceTeens",
    info: "Teaching new methods to be a distinctive Frontend Developer.",
  },
  GDRawaj: {
    jobTitle: "Graphic Designer",
    date: "15th of May 2023 | (full-Time) in Rawaj",
    info: "Design accessories and development the store application.",
  },
  FDUSArabChamber: {
    jobTitle: "Front-End Developer",
    date: "5th of September 2022 | (full-Time) in US Arab Chamber of Commerce",
    info: "Designing and Development the front of web applications.",
  },
  GDHerbal: {
    jobTitle: "Graphic Designing",
    date: "15th of September 2021 | (Part-Time ‘Remotely’) in Herbal Globe",
    info: "Designing commercial posters for medical advertising and marketing.",
  },
};

export const certificates: ICertificate = {
  Quantum: {
    title: "Diploma of Quantum Computing & Programming (2022)",
    info: "successful completing the online workshop Quantum Computing & Programming using QWorld’s introductory tutorial Bronze-Qiskit.",
  },
  AWCO: {
    title: "AWCO Training center (2021)",
    info: "successful passing in a summer training for students of the Faculty of Science (Sidi Bishr Branch).",
  },
  Tanfezy: {
    title: "Leadership Training Course presented by Tanfezy Initiative",
    info: "Attended training workshops over a month, totaling 32 training hours, as part of the Executive Capabilities Program an initiative by Senator Alaa Mostafa.",
  },
};

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
    link : 'https://www.spot75.com/'
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
    link : 'https://www.behance.net/gallery/217496887/Senforra-Every-Sip-a-Story'
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
    link : 'https://qorra.vercel.app/'
  },
  EgtazPlatfom: {
    title: "Egtaz – Online Exam Platform",
    info: "Exam dashboard, I was a Front-End Developer and Graphic Designer as a part of graduation team using self-study resources. (The grade was -A)",
    responsibility: ['Designed the User Experience (UX) for smooth navigation',
      'Created the User Interface (UI) with a structured layout',
      'Developed the Frontend using HTML5, CSS3, JavaScript, and Bootstrap',
      'Ensured responsive design for a seamless user experience',
      'Implemented dynamic interactions for students & lecturers'
    ],
    link : 'https://youssefturkey.github.io/Egtaz-Platform/'
  },
};

export const languages: ILangs = {
  ar: {
    name: 'Arabic',
    level: 'Native'
  },
  en: {
    name: 'English',
    level: 'B2 (Upper-Intermediate)'
  },
  it: {
    name: 'Italian',
    level: 'A1 (Beginner)'
  }
}