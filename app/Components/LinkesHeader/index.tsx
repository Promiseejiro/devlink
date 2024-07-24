import { Plus } from "lucide-react";
interface HeadingProperties {
  heading: string;
  subheading?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  addBtn?: boolean;
}

const PasswordSettingsHeading = (headingProperties: HeadingProperties) => {
  const {
    heading,
    subheading,
    headingLevel = "h4",
    addBtn,
  } = headingProperties;
  // check for valid headingLevel value
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
  const HeadingTag = (
    validHeadingLevels.includes(headingLevel) ? headingLevel : "h4"
  ) as keyof JSX.IntrinsicElements;

  return (
    <div
      className="flex flex-col items-start gap-1.5 self-stretch text-foreground md:gap-2"
      aria-labelledby="heading"
    >
      <HeadingTag className="self-stretch text-xl font-semibold leading-[29.05px] md:text-2xl">
        {heading}
      </HeadingTag>
      {subheading && (
        <p className="self-stretch text-sm font-normal leading-[19.2px] md:text-base">
          {subheading}
        </p>
      )}
      {addBtn && (
        <div className="mt-[32px] mb-[24px] w-full">
          <button className="flex items-center justify-center  border-solid border-[1px] border-primary py-2 rounded-[8px] font-[600] text-primary w-full">
            + Add link
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordSettingsHeading;
