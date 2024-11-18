import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="w-full bg-teal-700 text-white font-semibold rounded-lg px-6 py-3 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400">
      {label}
    </button>
  );
};

export default Button;