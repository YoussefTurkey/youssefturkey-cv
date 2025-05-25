"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdWindow, MdWork } from "react-icons/md";
import { FaUserCircle, FaInfoCircle, FaBookReader, FaAward, FaLanguage } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { LuLayoutList } from "react-icons/lu";
import { FaIdCard } from "react-icons/fa";
// importing Components
import Logo from "../images/Logo";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const sections = [
  { id: "bio", icon: <FaUserCircle />, label: {en: "Bio", ar: 'عني'} },
  { id: "summary", icon: <FaInfoCircle />, label: {en: "Summary", ar: 'ملخص'} },
  { id: "education", icon: <FaBookReader />, label: {en: "Education", ar: 'التعليم'} },
  { id: "skills", icon: <RiFileList3Fill />, label: {en: "Skills", ar: 'مهاراتي'} },
  { id: "info", icon: <FaIdCard />, label: {en: "Inforamation", ar: 'بياناتي'} },
  { id: "experience", icon: <MdWork />, label: {en: "Experiences", ar: 'خبراتي'} },
  { id: "certificates", icon: <FaAward />, label: {en: "Certificates", ar: 'شهاداتي'} },
  { id: "reference", icon: <VscReferences />, label: {en: "References", ar: 'المراجع'} },
  { id: "projects", icon: <LuLayoutList />, label: {en: "Projects", ar: 'مشاريعي'} },
  { id: "lang", icon: <FaLanguage />, label: {en: "Languages", ar: 'اللغات'} },
];

const MenuBar = () => {
  const { language } = useLanguage();
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
    <section className="block md:hidden w-full container mx-auto">
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
                <span className="text-center text-sm">{language === 'en' ? label.en : label.ar}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuBar;
