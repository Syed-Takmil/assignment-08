"use client";
import Image from "next/image";
import pic from "@/assets/ether.png";
import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const HandleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    const toastId = toast.loading("Logging in...");

    try {
      const res = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
      });

      console.log("LOGIN RESPONSE:", res);

    
      if (!res?.data) {
        throw new Error(res?.error?.message || "Invalid email or password");
      }

      toast.update(toastId, {
        render: "Login successful!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 800);
    } catch (err) {
      console.log("LOGIN ERROR:", err);

      toast.update(toastId, {
        render: err.message || "Invalid credentials",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } finally {
      setLoading(false); 
    }
  };
 const HandleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
 
  return (
    <div
      className="flex flex-col gap-5 w-screen lg:flex-row container justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${pic.src})` }}
    >
      <form onSubmit={HandleLogin}>
        <fieldset className="fieldset grid gap-3 w-xl p-5 border rounded-box bg-transparent">

          <legend className="text-lg font-bold">Login</legend>

<label htmlFor="email" className="font-semibold text-lg">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input w-full"
            placeholder="Email"
            required
          />

<label htmlFor="password" className="font-semibold text-lg">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input w-full"
            placeholder="Password"
            required
          />

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
          type="button" onClick={HandleSignIn}
          className="btn bg-white text-black border-black hover:bg-gray-200 flex items-center gap-2 justify-center">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

          <p className="text-sm font-medium">
            Don't have an account?{" "}
            <Link href="/register" className="btn btn-link">
              Register
            </Link>
          </p>

        </fieldset>
      </form>

      <Image
        src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
        width={300}
        height={300}
        alt="cow"
        className="animate-bounce"
      />
    </div>
  );
};

export default LoginPage;