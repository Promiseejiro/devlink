import { ArrowRight, CircleUser } from "lucide-react";
import Image from "next/image";
import subStr from "../../../public/asset/Subtract.svg";
interface ProfileProps {
  absolute?: boolean;
}

const Profile = ({ absolute }: ProfileProps) => {
  return (
    <div
      className={`w-[250px] ${
        absolute ? "absolute" : ""
      }  top-[63.5px] left-[28px] `}
    >
      <div className="flex items-center justify-center">
        <div className=" ">
          <Image
            src={subStr}
            alt=""
            className="w-[96px] h-[96px] rounded-[50%] border-[4px] border-solid border-primary"
          />
          <h4 className="font-[600] text-[18px] mt-[20px] text-center">
            Ben Wright
          </h4>
          <p className="mt-[8px] text-[14px] text-center">Ben Wright</p>
        </div>
        <div></div>
      </div>
      <div className="mt-[56px] flex flex-col gap-[20px]">
        <button className="bg-[#1A1A1A] w-full flex items-center justify-between p-[13px] rounded-[8px]">
          <span className="flex items-center gap-[8px]">
            <CircleUser color="#ffffff" width={16} height={16} />
            <p className="text-white">Youtube</p>
          </span>
          <ArrowRight color="#ffffff" width={16} height={16} />
        </button>
        <button className="bg-[#1A1A1A] w-full flex items-center justify-between p-[13px] rounded-[8px]">
          <span className="flex items-center gap-[8px]">
            <CircleUser color="#ffffff" width={16} height={16} />
            <p className="text-white">Youtube</p>
          </span>
          <ArrowRight color="#ffffff" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
