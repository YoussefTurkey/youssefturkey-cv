"use client";
// import next components
import Link from "next/link";
import { useState } from "react";
// importing components
import dynamic from "next/dynamic";
// import style
import styles from "./leftSide.module.scss";
// importing Theme Components
const ThemeToggle = dynamic(() => import("@/app/theme/ThemeToggle"));
const LanguageToggle = dynamic(() => import("@/app/lang/LanguageToggle"));
// importing Title Components
const Title = dynamic(() => import("../title/Title"));
// importing Tab component
const Tabs = dynamic(() => import("../tabs/Tab"));
// importing data
import { skills } from "@/app/lib/data";
// importing popups component
import Popup from "../popup/Popup";
// importing data
import { persona } from "@/app/lib/data";
import { contact } from "@/app/lib/data";
import { social } from "@/app/lib/data";
import { summary } from "@/app/lib/data";
import { education } from "@/app/lib/data";
import { softSkills } from "@/app/lib/data";
import { popup } from "@/app/lib/data";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const LeftSide = () => {
  const tabData = [
    {
      label: skills.frontend.title,
      content: (
        <ul className="list-disc pl-5">
          {skills.frontend.tools.map((tool, index) => (
            <li key={index} className="py-1">
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
            <li key={index} className="py-1">
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
            <li key={index} className="py-1">
              {tool}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const { language } = useLanguage();

  return (
    <section className={`${styles.lft} container mx-auto w-[100%] md:w-[30%] lg:w-[425px] bg-[hsl(var(--secondary))] md:bg-[hsl(var(--primary))] px-10 py-5 flex flex-col md:justify-start items-start ${language === 'en' ? 'lg:rounded-tl-xl lg:rounded-bl-xl' : 'lg:rounded-tr-xl lg:rounded-br-xl'} relative`}>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <div className="flex items-center justify-start">
          <img
            src={popup.image}
            alt={language === "en" ? popup.name.en : popup.name.ar}
            loading="lazy"
            className="w-20 h-20 md:w-30 md:h-30 rounded-full border-2 border-[hsl(var(--plus))]"
          />
          <h3 className={`py-2 ${language === 'en' ? 'pl-5' : 'pr-5'} text-md md:text-2xl`}>
            {`Hello, I'm`}
            <br />
            <span className="underline decoration-[hsl(var(--plus))] font-bold text-md md:text-3xl">
              {language === "en" ? popup.name.en : popup.name.ar}
            </span>
            .
          </h3>
        </div>

        <div className="flex flex-col justify-start pt-5">
          <p className="text-lg">
            {language === "en" ? popup.info[0].en : popup.info[0].ar}
          </p>
          <p className="py-2 text-lg">
            {language === "en" ? popup.info[1].en : popup.info[1].ar}
          </p>
          <div className="pt-2">
            <h4>
              {language === "en"
                ? "Feel free to get in touch with me via:"
                : "لا تتردد في التواصل معي عبر:"}
            </h4>
            <div className="flex justify-start items-center gap-5">
              <button
                className={`${styles.contactBtn} flex items-center justify-center mt-3 rounded-lg cursor-pointer px-5 py-2 ring-2 ring-[hsl(var(--plus))] hover:bg-[hsl(var(--plus))] transition-all`}
              >
                <contact.whatsapp.icon className="text-[hsl(var(--plus))] text-md md:text-xl" />
                <Link
                  href={popup.whatsapp}
                  target="_blank"
                  className={`${language === 'en' ? 'pl-2' : 'pr-2'} text-[hsl(var(--plus))] font-bold text-sm md:text-md`}
                >
                  {language === "en" ? "Text me" : " راسلني عبر الواتساب"}
                </Link>
              </button>
              <button
                className={`${styles.contactBtn} flex items-center justify-center mt-3 ring-2 ring-[hsl(var(--plus))] rounded-lg cursor-pointer px-5 py-2 hover:bg-[hsl(var(--plus))]`}
              >
                <contact.email.icon className="text-[hsl(var(--plus))] text-md md:text-xl" />
                <Link
                  href={popup.email}
                  className={`${language === 'en' ? 'pl-2' : 'pr-2'} text-[hsl(var(--plus))] font-bold text-sm md:text-md`}
                >
                  {language === "en" ? "Email me" : "راسلني عبر البريد"}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Popup>

      <div className="md:sticky md:top-5">
        {/* --- Profile --- */}
        <div id="bio">
          <div className="mt-5 flex items-center justify-between">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* --- Image & Name & Job Title & Popup(Modal) --- */}
          <div>
            <div className={styles.relat}>
              <div className={`${styles.puls} bg-[hsl(var(--plus))]`}></div>
              <div
                className="group w-[200px] h-[200px] rounded-full overflow-hidden mx-auto hover:shadow-2xl border-2 border-[#181616] hover:border-[hsl(var(--plus))] transition-all duration-300"
                onClick={() => setShowPopup(true)}
              >
                <img
                  src={persona.image}
                  alt="youssef-turkey"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                />
              </div>
            </div>

            <div className="text-center">
              <h1 className={`font-bold text-[30px] py-2 ${language === 'en' ? 'tracking-[4]' : ''}`}>
                {language === "en" ? persona.fullName.en : persona.fullName.ar}
              </h1>
              <h2 className="font-semibold text-xl py-2">
                {language === "en" ? persona.jobTitle.en : persona.jobTitle.ar}
              </h2>
              <p>
                {language === "en" ? persona.jobTools.en : persona.jobTools.ar}
              </p>
            </div>
          </div>
        </div>

        {/* --- Address & Email & Whatsapp & Call ---  */}
        <div className="my-10">
          <p className="flex items-center pb-2">
            <contact.address.icon />
            <span className={language === 'en' ? 'pl-2' : 'pr-2'}>
              {language === "en"
                ? contact.address.info.en
                : contact.address.info.ar}{" "}
            </span>
          </p>
          <p className="flex items-center pb-2">
            <contact.email.icon />
            <Link
              href={`mailto:${contact.email.link}`}
              className={`${language === 'en' ? 'pl-2' : 'pr-2'} underline underline-offset-8 decoration-[hsl(var(--plus))]`}
            >
              {contact.email.info}
            </Link>
          </p>
          <p className="flex items-center pb-2 underline underline-offset-8 decoration-[hsl(var(--plus))]">
            <contact.whatsapp.icon />
            <Link
              href={contact.whatsapp.link ? contact.whatsapp.link : ""}
              target="_blank"
              className={language === 'en' ? 'pl-2' : 'pr-2'}
            >
              {language === 'en' ? contact.whatsapp.info.en : contact.whatsapp.info.ar}
            </Link>
          </p>
          <p className="flex items-center">
            <contact.call.icon />
            <span className={language === 'en' ? 'pl-2' : 'pr-2'}>{language === 'en' ? contact.call.info.en : contact.call.info.ar}</span>
          </p>
        </div>

        {/* --- Socail Links --- */}
        <div className="mb-10">
          <Title>
            {language === "en" ? "Social Links" : "روابط التواصل الاجتماعي"}
          </Title>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <Link
              href={social.linkedIn.link ? social.linkedIn.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[hsl(var(--plus))]"
            >
              <social.linkedIn.icon />{" "}
              <span className={language === 'en' ? 'pl-2' : 'pr-2'}>{social.linkedIn.info}</span>
            </Link>
            <Link
              href={social.github.link ? social.github.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[hsl(var(--plus))]"
            >
              <social.github.icon />{" "}
              <span className={language === 'en' ? 'pl-2' : 'pr-2'}>{social.github.info}</span>
            </Link>
            <Link
              href={social.behance.link ? social.behance.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[hsl(var(--plus))]"
            >
              <social.behance.icon />{" "}
              <span className={language === 'en' ? 'pl-2' : 'pr-2'}>{social.behance.info}</span>
            </Link>

            <Link
              href={social.qabilah.link ? social.qabilah.link : ""}
              target="_blank"
              className="flex items-center underline underline-offset-8 decoration-[hsl(var(--plus))]"
            >
              <social.qabilah.icon />{" "}
              <span className={language === 'en' ? 'pl-2' : 'pr-2'}>{social.qabilah.info}</span>
            </Link>
          </div>
        </div>

        {/* --- Summary --- */}
        <div className="mb-10" id="summary">
          <Title>{language === "en" ? "Summary" : "ملخص"}</Title>
          <p className="mb-1 leading-[1.8]">
            {language === "en" ? summary.info.en : summary.info.ar}
          </p>
        </div>

        {/* --- Education --- */}
        <div className="mb-10" id="education">
          <Title>{language === "en" ? "Education" : "التعليم"}</Title>
          <div>
            <div className={styles.dots}></div>
            <div className={`${language === 'en' ? 'ml-8' : 'mr-8'} mt-[-15px]`}>
              <h4 className="font-bold tracking-[3]">
                {language === "en"
                  ? education.qualified.en
                  : education.qualified.ar}
              </h4>
              <h5>
                {language === "en"
                  ? education.university.en
                  : education.university.ar}
              </h5>
              <p>{education.year}</p>
              <p>
                {language === "en" ? education.degree.en : education.degree.ar}
              </p>
            </div>
          </div>
        </div>

        {/* --- Technical Skills --- */}
        <div className="mb-10" id="skills">
          <Title>
            {language === "en" ? "Technical Skills" : "مهارات تقنية"}
          </Title>
          <Tabs tabs={tabData} />
        </div>

        {/* --- Soft Skills --- */}
        <div className="mb-10">
          <Title>{language === "en" ? "Soft Skills" : "مهارات حياتية"}</Title>
          <ul className="list-disc pl-5">
            {softSkills.tools.map((skill, i: number) => (
              <li key={i} className="py-1">
                {language === "en" ? skill.en : skill.ar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeftSide;
