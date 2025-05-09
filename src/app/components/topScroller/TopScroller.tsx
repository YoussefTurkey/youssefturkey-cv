'use client';
import { useEffect, useState } from 'react';
import { TiArrowUpThick } from "react-icons/ti";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const TopScroller = () => {
  const { language } = useLanguage();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-15 md:bottom-6 ${language === 'en' ? 'right-6' : 'left-6'} bg-[hsl(var(--primary))] text-[hsl(var(--foreground))] p-3 rounded-full shadow-lg transition-opacity duration-300 cursor-pointer ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <TiArrowUpThick size={15} />
    </button>
  );
};

export default TopScroller;