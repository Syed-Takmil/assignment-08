"use client";

import React, { useState } from "react";
import pic from "@/assets/ether.png";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";

import { Eye, EyeClosedIcon, EyeOff } from "lucide-react";

const RegisterPage = () => {
const[showPassword, setShowPassword] = useState(false);
  const HandleSignUp = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const HandleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
const toastId = toast.loading("Creating account...");
    const username = e.target.username.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name: username,
        email,
        password,
        image: photoURL,
      });

      // console.log("DATA:", data);
      // console.log("ERROR:", error);

      if (error) {
        toast.update(toastId, {
          render: error.message || "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        setErrorMsg(error.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // success redirect
    setTimeout(() => {
      window.location.href = "/login";
    }, 5000);
      toast.update(toastId, {
        render: "Registration successful! Please log in.",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
    } catch (err) {
      setErrorMsg("Server error occurred");
      toast.update(toastId, {
        render: "Server error occurred",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div
      className="flex flex-col-reverse gap-3 lg:flex-row container justify-center w-screen items-center min-h-screen "
      style={{ backgroundImage: `url(${pic.src})` }}
    >
      <Image
        src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
        width={300}
        height={300}
        alt="cow"
        className="animate-bounce"
      />

      <form onSubmit={HandleRegister}>
        <fieldset className="fieldset relative grid gap-2 md:w-xl p-5 border rounded-box bg-transparent">

          <legend className="text-lg font-bold">User Registration</legend>
<label htmlFor="username"
className="font-semibold text-lg">UserName</label>
          <input name="username" className="input w-full" placeholder="Username" required />
          <label htmlFor="email" className="font-semibold text-lg">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Email" required />
          <label htmlFor="photoURL" className="font-semibold text-lg">Photo URL</label>
          <input name="photoURL" type="url" className="input w-full" placeholder="Photo URL" required />
          <label htmlFor="password" className="font-semibold text-lg">Password</label>
        <div className="relative">
          
          <input name="password" type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" required />
       <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-2 right-2 cursor-pointer">
        {showPassword ? <EyeOff /> : <Eye color="#000000" strokeWidth={2.25} />}</span>
        </div>
          {errorMsg && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
<button 
type="button"
className="btn bg-white text-black border-black" onClick={HandleSignUp}>
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  SignUp with Google
</button>
          <Link href="/login" className="btn btn-link">
            Already have an account? Login
          </Link>

        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;