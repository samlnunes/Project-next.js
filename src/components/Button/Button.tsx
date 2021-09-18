import React from "react";

interface ButtonProps {
  color?: "green" | "blue" | "gray";
  children: any;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-${color}-400 to-${color}-700 text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
