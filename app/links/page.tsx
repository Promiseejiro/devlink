"use client";
import Image from "next/image";
import Header from "../Components/NavHeader";
import rec from "../../public/asset/rec.svg";
import subStr from "../../public/asset/Subtract.svg";
import Profile from "../Components/Profile";
import CustomizeLink from "../Components/CustomizeLink";
import { useAuth } from "@/context/AuthContext";
export default function Home() {
  const cureentUser: any = useAuth();
  if (cureentUser) {
    console.log(cureentUser.currentUser.email);
  }
  return (
    <div className="bg-gray-300 ">
      <Header active="Profile Details" />
      <div className="lg:flex w-full gap-[20px] p-[24px]">
        <div className="hidden lg:block w-[40%]">
          <div className="flex items-center justify-center  bg-white pt-[100px]">
            <div className="w-[307px] h-[607px] relative">
              <Image alt="" src={rec} className=" w-full h-auto" />
              <Image
                alt=""
                src={subStr}
                className="w-[283px] h-auto absolute top-[10px] left-[10px]"
              />
              <Profile absolute={true} />
            </div>
          </div>
        </div>
        <CustomizeLink />
      </div>
    </div>
  );
}
