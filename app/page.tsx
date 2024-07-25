"use client";
import Header from "./Components/NavHeader";
import rec from "../public/asset/rec.svg";
import subStr from "../public/asset/Subtract.svg";
import Profile from "./Components/Profile";
import CustomizeLink from "./Components/CustomizeLink";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { db } from "@/firebase";
export default function Home() {
  const navigator = useRouter();
  const cureentUser: any = useAuth();
  const getData = async () => {
    if (cureentUser) {
      try {
        if (cureentUser?.cureentUser) {
          const docRef = doc(db, "users", cureentUser.cureentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("No user logged in");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
      console.log(cureentUser);
    } else {
      navigator.push("login");
    }
  };

  useEffect(() => {}, [cureentUser]);

  return (
    <div className="bg-gray-300 ">
      <Header active="Links" />
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
