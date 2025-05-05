"use client";
// importing Next Components
import Link from "next/link";
// importing components
import dynamic from "next/dynamic";
// importing Title Components
const Title = dynamic(() => import("../title/Title"));
// import style
import styles from "./rightSide.module.scss";
// importing data
import { experience } from "@/app/lib/data";
import { certificates } from "@/app/lib/data";
import { references } from "@/app/lib/data";
import { projects } from "@/app/lib/data";
import { languages } from "@/app/lib/data";
import type { ILang } from "@/app/lib/data";
// import React-Icon
import { FaExternalLinkAlt } from "react-icons/fa";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const RightSide = () => {
  const { language } = useLanguage();

  return (
    <section className="container mx-auto w-[100%] lg:w-[975px] px-10 py-5 lg:border-t-none bg-[hsl(var(--secondary))] flex flex-col justify-start items-start lg:rounded-tr-xl lg:rounded-br-xl">
      {/* --- Experience --- */}
      <div className="mb-10" id="experience">
        <Title>
          {language === "en" ? "Work Experience" : "الخبرات المهنية"}
        </Title>

        {Object.values(experience).map((exp, i) => {
          return (
            <div className="my-5" key={i}>
              <div className={styles.dots}></div>
              <div className="ml-8 mt-[-15px]">
                <h4 className="font-bold mb-3 sm:flex">
                  <span className="block">{language === 'en' ? exp.jobTitle.en : exp.jobTitle.ar}</span>{" "}
                  <span className="ml-2 bg-[#707070] text-[#fff] px-2 py-1 rounded-sm text-[10px] capitalize">
                    {language === "en" ? exp.time.en : exp.time.ar}
                  </span>
                </h4>
                <h5>{language === "en" ? exp.date.en : exp.date.ar}</h5>
                <ul className="list-disc pl-5">
                  {exp.info.map((role: ILang, i: number) => (
                    <li key={i} className="py-1">
                      {language === "en" ? role.en : role.ar}
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Certificates --- */}
      <div className="mb-10" id="certificates">
        <Title>{language === "en" ? "Certificates" : "شهادات"}</Title>

        {Object.values(certificates).map((cert, i) => {
          return (
            <div key={i}>
              <div className="mb-5">
                <h4 className="font-bold tracking-[3]">
                  {language === "en" ? cert.title.en : cert.title.ar}
                </h4>
                <p>{language === "en" ? cert.info.en : cert.info.ar}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- References --- */}
      <div className="mb-10 lg:w-[60%]" id="reference">
        <Title>
          {language === "en" ? "References" : "المراجع (متاحة عند الطلب)"}
        </Title>

        <div className="flex flex-col lg:flex-row justify-between items-start">
          {Object.values(references).map((ref, i) => {
            return (
              <div key={i}>
                <div className="mb-5">
                  <span className="text-[14px] text-[#707070]">
                    {ref.position}
                  </span>
                  <h4 className="font-bold tracking-[3] mb-2">
                    {language === "en" ? ref.name.en : ref.name.ar}
                  </h4>
                  <p>
                    {language === "en" ? "PHONE:" : "تلفونيًا:"} {ref.phone}
                  </p>
                  {ref.email ? (
                    <p>
                      {language === "en" ? "EMAIL:" : "البريد الإلكتروني"}{" "}
                      {ref.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Latest Project --- */}
      <div className="mb-10" id="projects">
        <Title>{language === "en" ? "Latest Project" : "أحدث المشاريع"}</Title>

        {Object.values(projects).map((proj, i) => {
          return (
            <div key={i}>
              <div className="mb-10 lg:mb-5 flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-10">
                <div className="lg:w-[80%]">
                  <h4>
                    <span className="font-bold">
                      {language === "en" ? proj.title.en : proj.title.ar}:
                    </span>{" "}
                    <span>
                      {language === "en" ? proj.info.en : proj.info.ar}
                    </span>
                  </h4>
                  <h5 className="mt-2">
                    {language === "en" ? "Key responsibility:" : "مسئولياتي:"}
                  </h5>
                  <ul className="list-disc pl-5">
                    {proj.responsibility.map((item: ILang, i: number) => (
                      <li key={i} className="py-1">
                        {language === "en" ? item.en : item.ar}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-[20%]">
                  <Link
                    href={proj.link}
                    target="_blank"
                    className="transition-all flex items-center"
                  >
                    <FaExternalLinkAlt />{" "}
                    <span className="pl-2 underline underline-offset-8 decoration-[hsl(var(--plus))]">
                      {language === "en" ? "See Project" : "أطلع على المشروغ"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Languages --- */}
      <div className="mb-10" id="lang">
        <Title>{language === "en" ? "Languages" : "اللغات"}</Title>

        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 lg:gap-10 lg:justify-items-center">
          {Object.values(languages).map((lang, i) => {
            return (
              <div key={i}>
                <div className="mb-5">
                  <h4>
                    <span className="font-bold">
                      {language === "en" ? lang.name.en : lang.name.ar}:
                    </span>{" "}
                    <span>
                      {language === "en" ? lang.level.en : lang.level.ar}
                    </span>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSide;
