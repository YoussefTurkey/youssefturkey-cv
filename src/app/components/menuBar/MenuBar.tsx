"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdWindow, MdWork } from "react-icons/md";
import { FaUserCircle, FaInfoCircle, FaBookReader, FaAward, FaLanguage } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { LuLayoutList } from "react-icons/lu";
// importing Components
import Logo from "../images/Logo";

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
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="block lg:hidden w-full container mx-auto">
      <div className="flex justify-between items-center px-10 py-3 border-t-2 border-[hsl(var(--secondary))] fixed bottom-0 w-full bg-[hsl(var(--primary))] z-50">
        <Logo />

        <button onClick={() => setMenu(!menu)}>
          <MdWindow className="text-2xl text-[hsl(var(--foreground))]" />
        </button>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-5 p-5 border-t border-[hsl(var(--secondary))] fixed bottom-12 bg-[hsl(var(--primary))] z-40"
            ref={menuRef}
          >
            {sections.map(({ id, icon, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setMenu(false)}
                className={`flex flex-col justify-center items-center ${
                  activeSection === id ? "text-[hsl(var(--plus))]" : "text-[hsl(var(--foreground))]"
                } hover:text-[hsl(var(--plus))] transition-all duration-200`}
              >
                <span className="p-2">{icon}</span>
                <span className="text-center text-sm">{label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuBar;
