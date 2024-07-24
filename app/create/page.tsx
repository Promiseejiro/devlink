"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// import Logo from "@/public/assets/images/Logo.png";
import EmailIcon from "../../public/asset/password.svg";
import PasswordIcon from "../../public/asset/email.svg";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const createAccountSchema = z
  .object({
    emailaddress: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmpassword: z.string(),
  })
  .superRefine((data, context) => {
    if (data.password !== data.confirmpassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords must match",
        path: ["confirmpassword"],
      });
    }
  });

type FormDataProps = z.infer<typeof createAccountSchema>;

const CreateAccount = () => {
  const navigate = useRouter();
  const [accError, setAccErr] = useState("");
  const cureentUser = useAuth();
  console.log(cureentUser);
  if (cureentUser) {
    navigate.push("/links");
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(createAccountSchema),
  });
  const func = useAuth();
  const onSubmit = async (data: FormDataProps) => {
    try {
      if (func) {
        return await func.signUp(data.emailaddress, data.password);
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setAccErr("Email already in use");
      } else {
        console.error("Error signing up:", error);
      }
    }
  };

  return (
    <div className="block md:flex md:items-center md:justify-center">
      <div className="flex flex-col gap-[64px] sm:gap-[51px] w-full sm:w-[476px] p-[32px] sm:p-0">
        <Link href="/" className="w-max sm:mx-auto">
          <Logo />
        </Link>
        <div className="flex flex-col gap-[40px] sm:bg-white p-0 sm:p-[40px] rounded-md">
          <span className="flex flex-col gap-[8px]">
            <h2 className="text-[32px] font-bold leading-[48px] text-gray">
              Create account
            </h2>
            <p className="text-gray-100">
              Let’s get you started sharing your links!
            </p>
          </span>
          <form
            className="flex flex-col gap-[24px] text-gray"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="emailaddress"
              control={control}
              render={({ field }) => (
                <Input
                  leftIcon={
                    <Image src={PasswordIcon} alt="" height={20} width={20} />
                  }
                  placeholder="e.g. alex@email.com"
                  label="Email address"
                  {...field}
                  error={!!errors.emailaddress}
                  errorMessage={errors.emailaddress?.message || ""}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  leftIcon={
                    <Image src={EmailIcon} alt="" height={16} width={16} />
                  }
                  placeholder="At least 8 characters"
                  label="Create password"
                  {...field}
                  error={!!errors.password}
                  errorMessage={errors.password?.message || ""}
                />
              )}
            />
            <Controller
              name="confirmpassword"
              control={control}
              render={({ field }) => (
                <Input
                  leftIcon={
                    <Image src={EmailIcon} alt="" height={16} width={16} />
                  }
                  placeholder="At least 8 characters"
                  label="Confirm password"
                  {...field}
                  error={!!errors.confirmpassword}
                  errorMessage={errors.confirmpassword?.message || ""}
                />
              )}
            />
            <p
              className={`text-[12px] ${
                accError ? "text-danger" : "text-gray-100"
              } `}
            >
              {accError
                ? accError
                : "Password must contain at least 8 characters"}
            </p>

            <button
              type="submit"
              className="bg-primary hover:bg-primary-100 py-[11px] px-[27px] text-base text-white font-semibold active:scale-90 duration-200 rounded"
            >
              Create new account
            </button>
            <span className="flex flex-col gap-2 sm:flex-row text-center justify-center">
              Already have an account?{" "}
              <Link
                href="/"
                className="hover:underline text-primary w-max mx-auto sm:mx-0"
              >
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
