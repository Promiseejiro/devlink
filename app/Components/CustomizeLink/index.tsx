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
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
function generateRandomId(length: any = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
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
  const func = useAuth();
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
    console.log(func?.currentUser?.uid);
    data.forms.map(async (item: any, index: number) => {
      const key = generateRandomId();
      let userRef;
      if (func?.currentUser?.uid) {
        userRef = doc(db, "users", func?.currentUser?.uid);
        try {
          await updateDoc(userRef, {
            links: arrayUnion({ key, item }),
          });
          console.log("Link added successfully");
        } catch (error) {
          console.error("Error adding link: ", error);
        }
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full lg:w-[60%] p-[20px] md:p-[40px] bg-white">
        <PasswordSettingsHeading
          heading="Customize your links"
          subheading="Add/edit/remove links below and then share all your profiles with the world!"
          addBtn={false}
        />
        <div className="mt-[32px] mb-[24px] w-full">
          <button
            className="flex items-center justify-center  border-solid border-[1px] border-primary py-2 rounded-[8px] font-[600] text-primary w-full"
            onClick={() => {
              addForm();
            }}
          >
            + Add link
          </button>
        </div>
        <LinkHeader />

        {formCount.map((formId) => (
          <LinkComponent key={formId} formId={formId} />
        ))}
        <button type="button" onClick={methods.handleSubmit(onSubmitAll)}>
          Submit All
        </button>
      </div>
    </FormProvider>
  );
};

export default CustomizeLink;
