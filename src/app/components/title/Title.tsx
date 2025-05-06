import React, { ReactNode } from "react";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  const { language } = useLanguage();

  return (
    <h2 className={`font-bold ${language === 'en' ? 'tracking-[7]' : ''} uppercase mb-4 text-[20px]`}>
      {children}
    </h2>
  );
};

export default Title;
