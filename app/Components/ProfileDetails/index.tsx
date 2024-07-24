import Input from "../Input";
import LinkComponent from "../LinkComponent";
import PasswordSettingsHeading from "../LinkesHeader";
import UplaodFile from "../UploadFile";

const ProfileDetails = () => {
  return (
    <div className="w-full  lg:w-[60%] ">
      <div className="p-[20px] md:p-[20px]  bg-white">
        <PasswordSettingsHeading
          heading="Profile Details"
          subheading="Add your details to create a personal touch to your profile."
          addBtn={false}
        />
        <div className="bg:gray-300 mt-[20px] p-[20px] md:p-[40px] bg-gray-300">
          <div>
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row ">
              <p className="text-[#737373] text-[12px] mb-[16px] md:mb-[0]">
                Profile picture
              </p>
              <div className="flex items-center gap-[24px] flex-col md:flex-row">
                <UplaodFile />
                <p className="text-[#737373] text-[12px] max-w-[200px]">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-[40px] rounded-[8px]  hidden md:block mt-[20px]">
          <div className="flex items-center justify-between">
            <label className="text-gray">Name</label>
            <div className="w-[60%]">
              <Input
                leftIcon={false}
                placeholder="hello"
                name=""
                label=""
                onChange={() => {}}
                value=""
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray">Name</label>
            <div className="w-[60%]">
              <Input
                leftIcon={false}
                placeholder="hello"
                name=""
                label=""
                onChange={() => {}}
                value=""
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray">Name</label>
            <div className="w-[60%]">
              <Input
                leftIcon={false}
                placeholder="hello"
                name=""
                label=""
                onChange={() => {}}
                value=""
              />
            </div>
          </div>
        </div>
        <div className="p-[20px] bg-gray-300 mt-[24px] md:hidden">
          <div className="mt-[16px]">
            <Input
              leftIcon={false}
              placeholder="hello"
              name=""
              label="First name*"
              onChange={() => {}}
              value=""
            />
          </div>
          <div className="mt-[16px]">
            <Input
              leftIcon={false}
              placeholder="hello"
              name=""
              label="First name*"
              onChange={() => {}}
              value=""
            />
          </div>
          <div className="mt-[16px]">
            <Input
              leftIcon={false}
              placeholder="hello"
              name=""
              label="First name*"
              onChange={() => {}}
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
