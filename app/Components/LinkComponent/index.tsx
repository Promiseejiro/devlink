import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { CircleUser } from "lucide-react";
import Input from "../Input";
import SelectInput from "../SelectInput";

interface LinkComponentProps {
  formId: number;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ formId }) => {
  const {
    control,
    formState: { errors },
  }:any = useFormContext();
  const platformError = errors?.forms?.[formId]?.platform;
  const linkError = errors?.forms?.[formId]?.link;

  return (
    <div className="p-[20px] bg-gray-300 rounded-[8px] mb-4">
      <Controller
        name={`forms.${formId}.platform`}
        control={control}
        render={({ field }) => (
          <Input
            leftIcon={<CircleUser />}
            placeholder="e.g. alex@email.com"
            label="Platform"
            {...field}
            error={!!platformError}
            errorMessage={
              platformError ? (platformError.message as string) : ""
            }
          />
        )}
      />
      <Controller
        name={`forms.${formId}.link`}
        control={control}
        render={({ field }) => (
          <SelectInput
            data={[{ text: "GitHub" }, { text: "YouTube" }]}
            {...field}
            error={!!linkError}
            errorMessage={linkError ? (linkError.message as string) : ""}
            placeholder="Select a platform"
            value={field.value}
            setValue={field.onChange}
            label="Link"
            index={3}
            leftIcon={<CircleUser color="#737373" />}
          />
        )}
      />
    </div>
  );
};

export default LinkComponent;
