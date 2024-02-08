"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const RegistrationPage = () => {
  const { handleSubmit, control } = useForm();

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
            <Typography variant="h3" color="black" placeholder={undefined}>
              Sign up
            </Typography>
            {/* New Fields */}
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  crossOrigin={undefined}
                  type="text"
                  {...field}
                  size="lg"
                  label="Full Name"
                  placeholder="Your Full Name"
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input
                  crossOrigin={undefined}
                  type="tel"
                  {...field}
                  size="lg"
                  label="Phone Number"
                  placeholder="Your Phone Number"
                />
              )}
            />
            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  crossOrigin={undefined}
                  type="tel"
                  {...field}
                  size="lg"
                  label="Email"
                  placeholder="Enter Your Email"
                />
              )}
            />
            {/* Password Field */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  crossOrigin={undefined}
                  type="password"
                  {...field}
                  size="lg"
                  label="Password"
                  placeholder="Enter Your Password"
                />
              )}
            />

            <div className="mt-2">
              <a href="/login" className="text-primary underline">
                Do You Have Already An Account?
              </a>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              type="submit"
              fullWidth
              placeholder={undefined}
              className="mt-4 BtnStyle"
            >
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default RegistrationPage;