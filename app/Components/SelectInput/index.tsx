import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Link } from "lucide-react";

interface SelectProps {
  value: string;
  placeholder: string;
  setValue: (data: string) => void;
  data: Array<{ text: string }>;
  label: string;
  index: number;
  error: boolean;
  leftIcon?: any;
  errorMessage: string;
}

const SelectInput = ({
  value,
  placeholder,
  setValue,
  data,
  label,
  index,
  error,
  leftIcon,
  errorMessage,
}: SelectProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState(data);

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setList(
      data.filter((item) =>
        item.text.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className={`bg-white w-full mt-[12px]`} style={{ zIndex: index ? index : 10 }}>
      <label className="text-[14px] text-dark">{label}</label>
      <div className={`border-solid relative`}>
        <span className="absolute inset-y-0 left-3 my-auto top-[18px] text-[#939393]">
          <Link height={16} width={16} color="#333333" />
        </span>
        <input
          readOnly
          onChange={filterList}
          onClick={() => setShowDropDown(true)}
          onBlur={(e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.relatedTarget as Node)) {
              setShowDropDown(false);
            }
          }}
          placeholder={placeholder}
          value={value}
          className={`py-3 ${
            error && "border-danger"
          } px-[44px] w-full border-solid border-[1.5px] placeholder-gray-200 text-dark focus:outline-none focus:bg-[#DDE2E5] focus:border-primary-100 border-gray-2 rounded-[8px] overflow-hidden text-font-light placeholder:font-300`}
        />
        <span className="absolute inset-y-0 right-3 my-auto text-[12px] text-danger top-[12px]">
          {errorMessage === "Required" ? "Can't be empty" : errorMessage}
        </span>
        <div className="absolute top-[15px] right-2">
          <ChevronDown color="#633CFF" />
        </div>
        {error && (
          <p className="text-danger text-[10px] font-[400]">{label} cannot be empty!</p>
        )}
        {showDropDown && (
          <div
            className={`border-[1px] border-solid border-gray-200 w-full cursor-pointer absolute top-[63px] bg-white rounded-[12px] overflow-hidden`}
            ref={dropDownRef}
          >
            {list.map((item, index) => (
              <div
                key={index}
                tabIndex={0}
                className={`mx-[16px] py-[12px] bg-white flex items-center gap-[16px] border-b-[1px] border-solid border-gray-200`}
                onClick={() => {
                  setValue(item.text);
                  setShowDropDown(false);
                }}
              >
                <span className="inset-y-0 text-[#939393]">
                  {leftIcon}
                </span>
                <p className="rounded-b-[12px] overflow-hidden">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
