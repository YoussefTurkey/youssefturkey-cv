"use client";
import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-fit lg:w-full max-w-2xl lg:mx-auto">
      {/* --- Tabs Header --- */}
      <div className="flex bg-[hsl(var(--primary))] md:bg-[hsl(var(--third))] rounded-full py-1 px-[15px]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-3 font-semibold transition-all duration-300 cursor-pointer text-[12px] lg:text-[16px] ${
              activeTab === index
                ? "text-[hsl(var(--plus))] rounded-full py-1 px-[15px]"
                : "text-gray-400 hover:text-[hsl(var(--plus))]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
