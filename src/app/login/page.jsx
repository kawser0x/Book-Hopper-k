"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";
import { GrGoogle } from "react-icons/gr";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFun = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Login successful");
      router.push("/");
    }
  };

  const handleGoogleFun = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="justify-center items-center mx-auto card p-5 bg-slate-500 m-10 max-w-md">
      <h2 className="font-bold text-2xl pb-5 text-white">Login Your Account</h2>
      <div className="card bg-slate-200 p-10">
        <form className="space-y-2" onSubmit={handleSubmit(handleLoginFun)}>
          <fieldset className="fieldset text-l font-bold">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              {...register("email", {
                required: "email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-l font-bold">
              Password
            </legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Enter your password"
              {...register("password", {
                required: "password field is required",
              })}
            />
            <span
              className="absolute top-5 right-3 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button
            type="submit"
            className="btn btn-active w-full mt-2 bg-black text-white">
            Login
          </button>
        </form>
        <div className="pt-4">
          <p>
            Don't have an Account ?{" "}
            <Link className="text-green-500 underline" href={"signup"}>
              Register
            </Link>
          </p>
          <p className="divider">OR</p>
          <button
            onClick={handleGoogleFun}
            className="btn w-full bg-black text-white">
            <GrGoogle /> Log In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
