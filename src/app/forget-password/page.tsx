"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

// type LoginFormInputs = {
//   number: number;
//   password: string;
// };

const ForgetPasswordPage = () => {
  const { handleSubmit, control } = useForm();
  // const { handleSubmit, control } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Handle login logic here
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form
      className="justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center h-screen">
        <Card className="w-96" placeholder={undefined}>
          <CardBody className="flex flex-col gap-4" placeholder={undefined}>
            <Typography variant="h4" color="black" placeholder={undefined}>
              Forgot password?
            </Typography>
            <Typography placeholder={undefined}>
              No problem - just enter the email address associated with your
              Oneself account and we&apos;ll send you a link to reset your
              password.
            </Typography>
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <Input
                  crossOrigin={undefined}
                  type="tel"
                  {...field}
                  size="lg"
                  label="Phone Number/Email"
                  placeholder="Enter Phone Number/Email"
                />
              )}
            />
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Link href="/reset-password">
              <Button
                type="submit"
                fullWidth
                placeholder={undefined}
                className="mt-4 BtnStyle"
              >
                Reset Password
              </Button>
            </Link>

            <div className="mt-2">
              <a href="/login" className="text-primary m-auto ">
                <p>Back To Login Page</p>
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default ForgetPasswordPage;