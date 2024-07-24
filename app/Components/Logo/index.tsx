import Image from "next/image";
import logo from "../../../public/asset/logo.svg";
import logo2 from "../../../public/asset/phone.svg";
const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-[7.6px]">
        <div className="md:block hidden">
          <Image src={logo} alt="" />
        </div>
        <div className="md:hidden block">
          <Image src={logo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
