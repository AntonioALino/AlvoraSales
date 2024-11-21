import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, name, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-500 rounded-lg bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
};

export default InputField;
