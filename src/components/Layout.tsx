import React from "react";
import Titulo from "./Title";

interface LayoutProps {
  titulo: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, titulo }) => {
  return (
    <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
      <Titulo>{titulo}</Titulo>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Layout;
