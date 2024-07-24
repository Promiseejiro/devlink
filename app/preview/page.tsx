import Profile from "../Components/Profile";

const Preview = () => {
  return (
    <div className="relative md:bg-primary md:p-[20px] md:pb-[102px] md:rounded-br-[32px] md:rounded-bl-[32px]">
      <div className="md:m-[24px] bg-gray-300 md:bg-white p-[24px] rounded-[12px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center px-[16px] md:px-[24px] py-[8px] border-solid border-[1px] border-primary gap-[8px] rounded-[8px]">
            <h4 className="text-primary font-[600]">Back to Editor</h4>
          </div>
          <div className="flex items-center px-[16px] md:px-[24px] py-[8px] border-solid border-[1px] bg-primary gap-[8px] rounded-[8px]">
            <h4 className="text-white font-[600]">Back to Editor</h4>
          </div>
        </div>
      </div>
      <div className="absolute left-[50%]  translate-x-[-50%] py-[48px] px-[56px] md:bg-white rounded-[24px] mt-[32px]">
        <Profile absolute={false} />
      </div>
    </div>
  );
};

export default Preview;
