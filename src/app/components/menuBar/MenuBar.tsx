"use client";
// importing React.js Component
import { useState, useRef, useEffect } from "react";
// importing Next.js Component
import Image from "next/image";
import Link from "next/link";
// importing React-Icons
import { MdWindow } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";
import { LuLayoutList } from "react-icons/lu";
import { FaLanguage } from "react-icons/fa";

const sections = [
  { id: "bio", icon: <FaUserCircle />, label: "Bio" },
  { id: "summary", icon: <FaInfoCircle />, label: "Summary" },
  { id: "education", icon: <FaBookReader />, label: "Education" },
  { id: "skills", icon: <RiFileList3Fill />, label: "Skills" },
  { id: "experience", icon: <MdWork />, label: "Experiences" },
  { id: "certificates", icon: <FaAward />, label: "Certificates" },
  { id: "reference", icon: <VscReferences />, label: "References" },
  { id: "projects", icon: <LuLayoutList />, label: "Projects" },
  { id: "lang", icon: <FaLanguage />, label: "Languages" },
];

const MenuBar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference for the menu
  const [activeSection, setActiveSection] = useState("");

  // Function to detect the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menu]);

  return (
    <section className="block lg:hidden w-full container mx-auto">
      <div className="flex justify-between items-center px-10 py-3 border-t-2 border-[#2b2b2b] fixed bottom-0 w-full bg-[#212121]">
        <Image
          src={"/images/logo-text.png"}
          width={100}
          height={100}
          alt="You11"
          loading="lazy"
        />

        <div onClick={() => setMenu(!menu)}>
          <MdWindow className="text-2xl" />
        </div>
      </div>

      <div
        className={`w-full grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-5 p-5 border-t-1 border-[#ccc] fixed bottom-12 bg-[#2b2b2b] ${
          menu ? "block" : "hidden"
        }`}
        ref={menuRef}
      >
        {sections.map(({ id, icon, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={() => setMenu(false)}
            className={`flex flex-col justify-center items-center ${
              activeSection === id ? "text-[#02ec63]" : "text-[#ccc]"
            } hover:text-[#02ec63] transition-all duration-200`}
          >
            <span className="p-2">{icon}</span>
            <span className="text-center">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MenuBar;
