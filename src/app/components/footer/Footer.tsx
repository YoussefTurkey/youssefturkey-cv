"use client";
import React from "react";
import dynamic from "next/dynamic";
// importing Components
const Flag = dynamic(() => import("../../components/ads/Flag"));
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <>
      <footer className="hidden lg:flex justify-center items-center py-5 lg:pt-0 lg:pb-5 border-t-2 border-t-[#212121] lg:border-t-0 w-[100%]">
        <p className="text-[12px] lg:text-[16px] mx-2">
          {language === "en"
            ? "© 2025 YouTurkey11. All Rights Reserved."
            : "© 2025 YouTurkey11. جميع الحقوق محفوظة."}
        </p>
        <Flag />
      </footer>
    </>
  );
};

export default Footer;
