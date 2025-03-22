"use client";
// importing React.js Component
import { useState } from "react";
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

const MenuBar = () => {
  const [menu, setMenu] = useState(false);

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
        className={`grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-5 p-5 border-t-1 border-[#ccc] fixed bottom-12 bg-[#2b2b2b] ${
          menu ? "block" : "hidden"
        }`}
      >
        <Link
          href={"#bio"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <FaUserCircle />
          </span>{" "}
          <span className="text-center">Bio</span>
        </Link>
        <Link
          href={"#summary"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <FaInfoCircle />
          </span>{" "}
          <span className="text-center">Summary</span>
        </Link>
        <Link
          href={"#education"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <FaBookReader />
          </span>{" "}
          <span className="text-center">Education</span>
        </Link>
        <Link
          href={"#skills"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <RiFileList3Fill />
          </span>{" "}
          <span className="text-center">Skills</span>
        </Link>
        <Link
          href={"#experience"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <MdWork />
          </span>{" "}
          <span className="text-center">Experiences</span>
        </Link>
        <Link
          href={"#certificates"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <FaAward />
          </span>{" "}
          <span className="text-center">Certificates</span>
        </Link>
        <Link
          href={"#reference"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <VscReferences />
          </span>{" "}
          <span className="text-center">References</span>
        </Link>
        <Link
          href={"#projects"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <LuLayoutList />
          </span>{" "}
          <span className="text-center">Projects</span>
        </Link>
        <Link
          href={"#lang"}
          onClick={() => setMenu(false)}
          className="flex flex-col justify-center items-center text-[#ccc] active:text-[#fff] focus:text-[#fff]"
        >
          <span className="p-2">
            <FaLanguage />
          </span>{" "}
          <span className="text-center">Languages</span>
        </Link>
      </div>
    </section>
  );
};

export default MenuBar;
