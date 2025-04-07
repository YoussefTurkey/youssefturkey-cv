// importing Next Components
import Link from "next/link";
// importing components
import dynamic from "next/dynamic";
// importing Title Components
const Title = dynamic(() => import("../title/Title"));
// import style
import styles from "./rightSide.module.scss";
// importing data
import { experience } from "@/../public/database/data";
import { certificates } from "@/../public/database/data";
import { references } from "@/../public/database/data";
import { projects } from "@/../public/database/data";
import { languages } from "@/../public/database/data";
// import React-Icon
import { FaExternalLinkAlt } from "react-icons/fa";


const RightSide = () => {
  return (
    <section className="container mx-auto w-[100%] lg:w-[975px] px-10 py-5 border-t-2 border-t-[#212121] lg:border-t-none bg-[#181616] lg:bg-[#212121] flex flex-col justify-start items-start lg:rounded-tr-xl lg:rounded-br-xl">
      {/* --- Experience --- */}
      <div className="mb-10" id="experience">
        <Title>Experience</Title>

        {Object.values(experience).map((exp, i) => {
          return (
            <div className="my-5" key={i}>
              <div className={styles.dots}></div>
              <div className="ml-8 mt-[-15px]">
                <h4 className="font-bold tracking-[3] mb-3 sm:flex"><span className="block">{exp.jobTitle}</span> <span className="ml-2 bg-[#707070] text-[#fff] px-2 py-1 rounded-sm text-sm capitalize">{exp.time}</span></h4>
                <h5>{exp.date}</h5>
                <p className="text-[#ccc]">{exp.info}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Certificates --- */}
      <div className="mb-10" id="certificates">
        <Title>Certificates</Title>

        {Object.values(certificates).map((cert, i) => {
          return (
            <div key={i}>
              <div className="mb-5">
                <h4 className="font-bold tracking-[3]">{cert.title}</h4>
                <p className="text-[#ccc]">{cert.info}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- References --- */}
      <div className="mb-10 lg:w-[60%]" id="reference">
        <Title>References</Title>

        <div className="flex flex-col lg:flex-row justify-between items-start">
          {Object.values(references).map((ref, i) => {
            return (
              <div key={i}>
                <div className="mb-5">
                  <span className="text-[14px] text-[#707070]">{ref.position}</span>
                  <h4 className="font-bold tracking-[3] mb-2">{ref.name}</h4>
                  <p className="text-[#ccc]">PHONE: {ref.phone}</p>
                  { ref.email ? <p className="text-[#ccc]">EMAIL: {ref.email}</p> : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Latest Project --- */}
      <div className="mb-10" id="projects">
        <Title>Latest Project</Title>

        {Object.values(projects).map((proj, i) => {
          return (
            <div key={i}>
              <div className="mb-10 lg:mb-5 flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-10">
                <div className="lg:w-[80%]">
                  <h4>{proj.title}: <span className="text-[#ccc]">{proj.info}</span></h4>
                  <h5 className="mt-2">Key responsibility:</h5>
                  <ul className="list-disc pl-5">
                    {proj.responsibility.map((item: string, i: number) => (
                      <li key={i} className="text-[#ccc] py-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-[20%]">
                    <Link href={proj.link} target="_blank" className="text-[#ccc] hover:text-[#fff] transition-all flex items-center"><FaExternalLinkAlt /> <span className="pl-2 underline underline-offset-8 decoration-[#02ec63]">See Project</span></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Languages --- */}
      <div className="mb-10" id="lang">
        <Title>Languages</Title>

        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 lg:gap-10 lg:justify-items-center">
          {Object.values(languages).map((lang, i) => {
            return (
              <div key={i}>
                <div className="mb-5">
                  <h4><span className="font-bold">{lang.name}:</span> <span className="text-[#ccc]">{lang.level}</span></h4>
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
