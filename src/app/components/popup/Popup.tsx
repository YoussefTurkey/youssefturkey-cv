import React from "react";
// importing React-Icons
import { IoClose } from "react-icons/io5";
// importing framer-motion
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Popup({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-[9999] pointer-events-auto">
      <div
        className="absolute inset-0 bg-[hsl(var(--primary))] opacity-75 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[hsl(var(--secondary))] absolute top-1/2 left-1/2 w-[35%] w-[80%] lg:max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-lg"
      >
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl">
          <IoClose className="text-[hsl(var(--plus))] cursor-pointer" />
        </button>
        {children}
      </motion.div>
    </section>
  );
}
