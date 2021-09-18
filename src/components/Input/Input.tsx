import React from "react";

interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  onlyReading?: boolean;
  className?: string;
  valueChanged?: (valor: any) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  text,
  type,
  value,
  onlyReading,
  valueChanged,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2">{text}</label>
      <input
        type={type ?? "text"}
        value={value}
        readOnly={onlyReading}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
          onlyReading ? "" : "focus:bg-white"
        }`}
        onChange={(e) => valueChanged?.(e.target.value)}
      />
    </div>
  );
};

export default Input;
