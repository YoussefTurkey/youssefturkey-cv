import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2 className="font-bold tracking-widest uppercase mb-4 text-[20px]">
      {children}
    </h2>
  );
};

export default Title;
