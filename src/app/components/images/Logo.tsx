"use client";
// importing React components
import Image from "next/image";
import Link from "next/link";
// importing Theme file
import { useTheme } from "@/app/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "dark" ? "/images/logo-text.webp" : "/images/logo-text2.webp";

  return (
    <Link href={'/'} prefetch={false}>
      <Image
        src={logoSrc}
        width={100}
        height={100}
        alt="YouTurkey11"
        loading="lazy"
      />
    </Link>
  );
}
