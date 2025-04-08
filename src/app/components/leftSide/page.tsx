"use client";
// import next components
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
// importing popups component
import Popup from "../popup/Popup";
// importing data
import { persona } from "@/../public/database/data";
import { contact } from "@/../public/database/data";
import { social } from "@/../public/database/data";
import { summary } from "@/../public/database/data";
import { education } from "@/../public/database/data";
import { popup } from "@/../public/database/data";

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

  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="container mx-auto w-[100%] lg:w-[425px] px-10 py-5 bg-[#181616] flex flex-col md:justify-start items-start lg:rounded-tl-xl lg:rounded-bl-xl relative">
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <div className="flex items-center justify-start">
          <Image
            src={popup.image}
            width={600}
            height={600}
            alt="youssef-turkey"
            loading="lazy"
            className="w-20 h-20 md:w-30 md:h-30 rounded-full border-2 border-[#02ec63]"
          />
          <h3 className="py-2 pl-5 text-md md:text-2xl">
            {`Hello, I'm`}
            <br />
            <span className="underline decoration-[#02ec63] font-bold text-md md:text-3xl">
              {popup.name}
            </span>
            .
          </h3>
        </div>

        <div className="flex flex-col justify-start pt-5">
          <p className="text-lg">{popup.info[0]}</p>
          <p className="py-2 text-lg">{popup.info[1]}</p>
          <div className="pt-2">
            <h4>Feel free to get in touch with me via:</h4>
            <div className="flex justify-start items-center gap-5">
              <button className="flex items-center justify-center mt-3 rounded-lg cursor-pointer px-5 py-2 ring-2 ring-[#02ec63] transition-all">
                <IoLogoWhatsapp className="text-[#02ec63] text-md md:text-xl" />
                <Link
                  href={popup.whatsapp}
                  target="_blank"
                  className="pl-2 text-[#02ec63] font-bold text-sm md:text-md"
                >
                  Text me
                </Link>
              </button>
              <button className="flex items-center justify-center mt-3 ring-2 ring-[#02ec63] rounded-lg cursor-pointer px-5 py-2">
                <FaEnvelope className="text-[#02ec63] text-md md:text-xl" />
                <Link
                  href={popup.email}
                  className="pl-2 text-[#02ec63] font-bold text-sm md:text-md"
                >
                  Email me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Popup>

      <div className="lg:sticky lg:top-5">
        {/* --- Profile --- */}
        {/* --- Image & Name & Job Title & Popup(Modal) --- */}
        <div id="bio">
          <div className={styles.relat}>
            <div className={styles.puls}></div>
            <div
              className="group w-[200px] h-[200px] rounded-full overflow-hidden mx-auto hover:shadow-2xl border-2 border-[#181616] hover:border-[#02ec63] transition-all duration-300"
              onClick={() => setShowPopup(true)}
            >
              <Image
                src={persona.image}
                width={600}
                height={600}
                alt="youssef-turkey"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              />
            </div>
          </div>

          <div className="text-center">
            <h1 className="font-bold text-[26px] text-[#fcfcfc] py-2 tracking-[4]">
              {persona.fullName}
            </h1>
            <p>{persona.jobTitle}</p>
          </div>
        </div>

        {/* --- Address & Email & Whatsapp & Call ---  */}
        <div className="my-10">
          <p className="flex items-center py-1">
            <contact.address.icon />
            <span className="pl-2">{contact.address.info}</span>
          </p>
          <p className="flex items-center py-1">
            <contact.email.icon />
            <Link
              href={`mailto:${contact.email.link}`}
              className="pl-2 underline underline-offset-8 decoration-[#02ec63]"
            >
              {contact.email.info}
            </Link>
          </p>
          <p className="flex items-center py-1 underline underline-offset-8 decoration-[#02ec63]">
            <contact.whatsapp.icon />
            <Link
              href={contact.whatsapp.link ? contact.whatsapp.link : ""}
              target="_blank"
              className="pl-2"
            >
              {contact.whatsapp.info}
            </Link>
          </p>
          <p className="flex items-center">
            <contact.call.icon />
            <span className="pl-2">{contact.call.info}</span>
          </p>
        </div>

        {/* --- Socail Links --- */}
        <div className="mb-10">
          <Title>Social Links</Title>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <Link
              href={social.linkedIn.link ? social.linkedIn.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[#02ec63]"
            >
              <social.linkedIn.icon />{" "}
              <span className="pl-2">{social.linkedIn.info}</span>
            </Link>
            <Link
              href={social.github.link ? social.github.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[#02ec63]"
            >
              <social.github.icon />{" "}
              <span className="pl-2">{social.github.info}</span>
            </Link>
            <Link
              href={social.behance.link ? social.behance.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[#02ec63]"
            >
              <social.behance.icon />{" "}
              <span className="pl-2">{social.behance.info}</span>
            </Link>
            <Link
              href={social.qabilah.link ? social.qabilah.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[#02ec63]"
            >
              <Image
                src={social.qabilah.image ? social.qabilah.image : ""}
                width={15}
                height={15}
                alt={social.qabilah.title ? social.qabilah.title : ""}
                loading="lazy"
              />
              <span className="pl-2">{social.qabilah.info}</span>
            </Link>
          </div>
        </div>

        {/* --- Summary --- */}
        <div className="mb-10" id="summary">
          <Title>Summary</Title>
          <p className="mb-1 leading-[1.8]">{summary.info}</p>
        </div>

        {/* --- Education --- */}
        <div className="mb-10" id="education">
          <Title>Education</Title>
          <div>
            <div className={styles.dots}></div>
            <div className="ml-8 mt-[-15px]">
              <h4 className="font-bold tracking-[3]">{education.qualified}</h4>
              <h5>{education.university}</h5>
              <p className="text-[#ccc]">{education.year}</p>
              <p className="text-[#ccc]">{education.degree}</p>
            </div>
          </div>
        </div>

        {/* --- Technical Skills --- */}
        <div className="mb-10" id="skills">
          <Title>Technical Skills</Title>
          <Tabs tabs={tabData} />
        </div>
      </div>
    </section>
  );
};

export default LeftSide;
