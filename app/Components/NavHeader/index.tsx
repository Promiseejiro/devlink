import Image from "next/image";
import { Link, CircleUser, Eye } from "lucide-react";
import Logo from "../Logo";
interface HaderProps {
  active: string;
}
const Header = ({ active }: HaderProps) => {
  return (
    <div className="md:m-[24px] bg-white p-[24px] rounded-[12px]">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-[15px]">
          <div
            className={`flex items-center px-[24px] py-[11px] ${
              active === "Links" && "bg-primary-200"
            }  gap-[8px] rounded-[8px]`}
          >
            <Link
              color={active == "Links" ? "#633CFF" : "#737373"}
              width={20}
              height={20}
            />
            <h4
              className={`hidden md:block ${
                active === "Links" ? "text-primary" : "text-gray-100"
              }  font-[600]`}
            >
              Links
            </h4>{" "}
          </div>
          <div
            className={`flex items-center px-[24px] py-[11px]  ${
              active === "Profile Details" && "bg-primary-200"
            } gap-[8px] rounded-[8px]`}
          >
            <CircleUser
              color={active == "Profile Details" ? "#633CFF" : "#737373"}
              width={20}
              height={20}
            />
            <h4
              className={`hidden md:block ${
                active === "Profile Details" ? "text-primary" : "text-gray-100"
              }  font-[600]`}
            >
              Profile Details
            </h4>
          </div>
        </div>
        <div className="flex items-center px-[16px] md:px-[24px] py-[8px] border-solid border-[1px] border-primary gap-[8px] rounded-[8px]">
          <h4 className="text-primary font-[600] hidden md:block">Preview</h4>
          <span className="block md:hidden">
            <Eye color="#633CFF" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
