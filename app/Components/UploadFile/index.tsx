import Image from "next/image";
import imageIcon from "../../../public/asset/image.svg";
import { useState } from "react";
const UplaodFile = () => {
  const [url, setUrl] = useState<any>("");
  return (
    <div className="relative min-h-[193px] w-[193px] ">
      <label
        className={`absolute border-[1px] border-solid border-primary-200  w-full h-full max-w-[193px] rounded-[12px] ${
          url ? "bg-[rgba(0,0,0,0.8)]" : " bg-primary-200"
        } flex items-center justify-center `}
        htmlFor={"file"}
        style={{
          zIndex: 19,
        }}
      >
        <Image
          alt=""
          src={url}
          width={100}
          height={100}
          className="absolute  h-auto w-[193px] top-0 left-0 rounded-[12px]"
          style={{
            zIndex: -5,
          }}
        />
        <div className={`flex flex-col items-center gap-[16px] `}>
          <Image src={imageIcon} alt="" width={40} height={40} />
          <p className="font-[500] text-primary">+ Upload File</p>
        </div>
      </label>
      <input
        type="file"
        id="file"
        className={`py-3 px-4 w-full border-solid border-[1.5px] 
            focus:outline-none focus:border-primary-100 border-gray-2 rounded-[8px] overflow-hidden text-[14px] text-font-light placeholder:font-300  bg-gray-300 cursor-not-allowed min-h-[82px]"
            } hidden`}
        onChange={(e) => {
          if (e.target.files) {
            setUrl(URL.createObjectURL(e.target.files[0]));
          }
        }}
      />
    </div>
  );
};

export default UplaodFile;
