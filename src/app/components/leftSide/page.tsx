"use client";
// import next components
import Image from "next/image";
import Link from "next/link";
// import style
import styles from './leftSide.module.scss'
// importing React-Icon components
import { TiLocation } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Title from "../title/page";

import {skills} from '@/../public/database/data'

const LeftSide = () => {
  return (
    <section className="container mx-auto w-[425px] px-10 py-5 bg-[#181616] flex flex-col justify-center items-start rounded-tl-xl rounded-bl-xl">
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
            Next.js | Typescript | Strapi) | Branding & Visual Identity Designer
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
          <Link href={"https://wa.me/01273451052"} target="_blank" className="pl-2">
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
          <Link href={'https://www.linkedin.com/in/youturkey11/'} target="_blank" className="flex items-center"><FaLinkedin /> <span className="pl-2">/in/youturkey11</span></Link>
          <Link href={'https://github.com/YoussefTurkey'} target="_blank" className="flex items-center"><FaSquareGithub /> <span className="pl-2">/YoussefTurkey</span></Link>
          <Link href={'https://www.behance.net/YouTurkey11'} target="_blank" className="flex items-center"><FaBehanceSquare /> <span className="pl-2">/YouTurkey11</span></Link>
          <Link href={'https://qabilah.com/profile/youturkey11/professional-profile'} target="_blank" className="flex items-center"><FaExternalLinkAlt /> <span className="pl-2">/youturkey11</span></Link>
        </div>
      </div>

        {/* --- Summary --- */}
      <div className="mb-10">
        <Title>Summary</Title>
        <p className="mb-1 leading-[1.8]">I am very passionate about <span className="font-bold">Front-End Development</span> and I am trying to learn everything new about modern technology in this field.</p>
        <p className="leading-[1.8]">I am trying to connect this field with <span className="font-bold">Graphic Designing</span> to give an artistic sense and be distinctive.</p>
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
        {
          Object.values(skills).map((skill: { title: string; tools: string[] }, index) => {
            return(
              <div className="my-10" key={index}>
                <div className="ml-8">
                  <h4 className="font-bold tracking-[3] pb-2">{skill.title}</h4>
                  <ul className="list-disc">
                    {skill.tools.map((tool, toolIndex) => (
                      <li className="text-[#ccc] py-1 " key={toolIndex}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default LeftSide;
