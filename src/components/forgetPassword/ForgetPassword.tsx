/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// LoginPage.tsx
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface LoginFormInputs {
  number: number;
  password: string;
}

const ForgetPassword: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
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
              Oneself account and we'll send you a link to reset your password.
            </Typography>
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  className="border border-gray-300 mt-2 p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Enter PhoneNumber/Email"
                />
              )}
            />
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              type="submit"
              fullWidth
              placeholder={undefined}
              className="mt-4 BtnStyle"
            >
              Reset Password
            </Button>

            <div className="mt-2">
              <a href="/loginPage" className="text-primary m-auto ">
                <p>Back To Login Page</p>
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default ForgetPassword;
