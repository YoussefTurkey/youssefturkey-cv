"use client";
// import next components
import Image from "next/image";
import Link from "next/link";
// importing components
import dynamic from "next/dynamic";
// import style
import styles from "./leftSide.module.scss";
// importing Title Components
const Title = dynamic(() => import("../title/Title"));
// importing Tab component
const Tabs = dynamic(() => import("../tabs/Tab"));
// importing data
import { skills } from "@/../public/database/data";
// importing React-Icons
import { TiLocation } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

const LeftSide = () => {
  const tabData = [
    {
      label: skills.frontend.title,
      content: (
        <ul className="list-disc pl-5">
          {skills.frontend.tools.map((tool, index) => (
            <li key={index} className="text-[#ccc] py-1">
              {tool}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: skills.backend.title,
      content: (
        <ul className="list-disc pl-5">
          {skills.backend.tools.map((tool, index) => (
            <li key={index} className="text-[#ccc] py-1">
              {tool}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: skills.design.title,
      content: (
        <ul className="list-disc pl-5">
          {skills.design.tools.map((tool, index) => (
            <li key={index} className="text-[#ccc] py-1">
              {tool}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="container mx-auto w-[425px] px-10 py-5 bg-[#181616] flex flex-col justify-start items-start rounded-tl-xl rounded-bl-xl relative">
      <div className="sticky top-5">
        {/* --- Profile --- */}
        {/* --- Image & Name & Job Title --- */}
        <div>
          <Image
            src={"/images/Youssef-Turkey.jpg"}
            width={600}
            height={600}
            alt="youssef-turkey"
            loading="lazy"
            className="rounded-full w-50 mx-auto shadow-2xl"
          />

          <div className="text-center">
            <h1 className="font-bold text-[26px] text-[#fcfcfc] py-2 tracking-[4]">
              Youssef Turkey
            </h1>
            <p>
              Full-Stack WordPress Developer | Front-End Developer (React.js |
              Next.js | Typescript | Strapi) | Branding & Visual Identity
              Designer
            </p>
          </div>
        </div>

        {/* --- Address & Email & Whatsapp & Call ---  */}
        <div className="my-10">
          <p className="flex items-center py-1">
            <TiLocation />
            <span className="pl-2">ElTeraa-street, Alexandria - Egypt</span>
          </p>
          <p className="flex items-center py-1">
            <FaEnvelope />
            <Link href={"mailto:you.turkey11@gmail.com"} className="pl-2">
              you.turkey11@gmail.com
            </Link>
          </p>
          <p className="flex items-center py-1">
            <IoLogoWhatsapp />
            <Link
              href={"https://wa.me/01273451052"}
              target="_blank"
              className="pl-2"
            >
              01273451052
            </Link>
          </p>
          <p className="flex items-center">
            <IoCall />
            <span className="pl-2">01154102459</span>
          </p>
        </div>

        {/* --- Socail Links --- */}
        <div className="mb-10">
          <Title>Social Links</Title>
          <div className="grid grid-rows-2 grid-cols-2 gap-4 ">
            <Link
              href={"https://www.linkedin.com/in/youturkey11/"}
              target="_blank"
              className="flex items-center"
            >
              <FaLinkedin /> <span className="pl-2">/in/youturkey11</span>
            </Link>
            <Link
              href={"https://github.com/YoussefTurkey"}
              target="_blank"
              className="flex items-center"
            >
              <FaSquareGithub /> <span className="pl-2">/YoussefTurkey</span>
            </Link>
            <Link
              href={"https://www.behance.net/YouTurkey11"}
              target="_blank"
              className="flex items-center"
            >
              <FaBehanceSquare /> <span className="pl-2">/YouTurkey11</span>
            </Link>
            <Link
              href={
                "https://qabilah.com/profile/youturkey11/professional-profile"
              }
              target="_blank"
              className="flex items-center"
            >
              <Image
                src={"/images/qabilah.png"}
                width={15}
                height={15}
                alt="qabilah"
                loading="lazy"
              />{" "}
              <span className="pl-2">/qabilah/youturkey11</span>
            </Link>
          </div>
        </div>

        {/* --- Summary --- */}
        <div className="mb-10">
          <Title>Summary</Title>
          <p className="mb-1 leading-[1.8]">
            I am a{" "}
            <span className="font-bold">Full-Stack WordPress Developer</span> &{" "}
            <span className="font-bold">Front-End Engineer</span>, specializing
            in building scalable e-commerce websites and high-performance web
            applications. With expertise in{" "}
            <span className="font-bold">
              WooCommerce, Elementor, Next.js, and Strapi
            </span>
            , I create seamless digital experiences tailored for businesses and
            startups.
          </p>
        </div>

        {/* --- Education --- */}
        <div className="mb-10">
          <Title>Education</Title>
          <div className="faculty">
            <div className={styles.dots}></div>
            <div className="ml-8 mt-[-15px]">
              <h4 className="font-bold tracking-[3]">Bachelor of Science</h4>
              <h5>Alexandria University</h5>
              <p className="text-[#ccc]">2019 - 2022</p>
              <p className="text-[#ccc]">3.06 / 4.00 GPA (very Good)</p>
            </div>
          </div>
        </div>

        {/* --- Technical Skills --- */}
        <div className="mb-10">
          <Title>Technical Skills</Title>
          <Tabs tabs={tabData} />
        </div>
      </div>
    </section>
  );
};

export default LeftSide;
