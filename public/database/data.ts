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
    title: "Frontend Track",
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
    title: "Backend & CMS Track",
    tools: [
      "PHP & Python & C & C++",
      "Strapi & WordPress",
      "WooCommerce & Elementor",
    ],
  },
  design: {
    title: "Design Track",
    tools: ["Photoshop", "Illustrator", "CorelDraw", "Figma"],
  },
};
