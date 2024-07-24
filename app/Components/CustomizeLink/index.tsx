import React, { useState } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordSettingsHeading from "../LinkesHeader";
import LinkHeader from "../LinkHeader";
import LinkComponent from "../LinkComponent";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
const createAccountSchema = z.object({
  forms: z.array(
    z.object({
      platform: z.string().min(1, "Can't be empty"),
      link: z.string().min(1, "Can't be empty"),
    })
  ),
});

type FormDataProps = z.infer<typeof createAccountSchema>;

const CustomizeLink = () => {
  const [formCount, setFormCount] = useState<number[]>([0]);
  const methods = useForm<FormDataProps>({
    resolver: zodResolver(createAccountSchema),
    mode: "onChange",
    defaultValues: { forms: [{}] },
  });

  const addForm = () => {
    setFormCount((prevFormCount) => [...prevFormCount, prevFormCount.length]);
    methods.setValue("forms", [
      ...methods.getValues("forms"),
      { platform: "", link: "" },
    ]);
  };

  const onSubmitAll: SubmitHandler<FormDataProps> = (data) => {
    data.forms.map((item: any) => {
      console.log(item);
      const useRef=doc(db,"users",)
    });
    // data.form((item: any) => {
    //   console.log(item);
    // });
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full lg:w-[60%] p-[20px] md:p-[40px] bg-white">
        <PasswordSettingsHeading
          heading="Customize your links"
          subheading="Add/edit/remove links below and then share all your profiles with the world!"
          addBtn={true}
        />
        <LinkHeader />

        {formCount.map((formId) => (
          <LinkComponent key={formId} formId={formId} />
        ))}

        <button type="button" onClick={addForm}>
          Add Form
        </button>
        <button type="button" onClick={methods.handleSubmit(onSubmitAll)}>
          Submit All
        </button>
      </div>
    </FormProvider>
  );
};

export default CustomizeLink;
