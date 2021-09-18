import React from "react";
import { Title } from "../index";

interface LayoutProps {
  title: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
      <Title>{title}</Title>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Layout;
