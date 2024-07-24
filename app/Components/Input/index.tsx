"use client";

import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordToggleProperties {
  value: string;
  onChange: (password: string) => void;
  name: string;
  placeholder: string;
  leftIcon?: any;
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.FC<PasswordToggleProperties> = ({
  value,
  onChange,
  name,
  placeholder,
  leftIcon,
  label,
  error,
  errorMessage,
}) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`flex flex-col ${!label && "mt-[12px]"} `}>
      {label && <label className="py-1 text-[12px]">{label}</label>}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 my-auto  top-[12px] text-[#939393] active:text-[#434343]">
          {leftIcon}
        </span>
        <input
          aria-label="Password"
          type={"text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`py-3 ${error ? "border-danger" : "border-gray-200"} ${
            leftIcon ? "px-[44px]" : "px-[16px]"
          } w-full border-solid border-[1.5px]  text-dark placeholder-gray-100
            focus:outline-none focus:bg-white focus:border-primary  border-gray-2 focus:shadow-[32_35px_35px_35px_#633CFF]  rounded-[8px] overflow-hidden text-[14px] text-font-light placeholder:font-300 
            
             `}
        />
        <span className="absolute inset-y-0 right-3 my-auto text-[12px] text-danger top-[12px] ">
          {errorMessage === "Required" ? "Can't be empty" : errorMessage}
        </span>
      </div>
    </div>
  );
};

export default Input;
