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

  return (
    <div
      className="flex flex-col gap-5 w-screen lg:flex-row container justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${pic.src})` }}
    >
      <form onSubmit={HandleLogin}>
        <fieldset className="fieldset grid gap-3 w-xl p-5 border rounded-box bg-gradient-to-r from-base-300 to-transparent">

          <legend className="text-lg font-bold">Login</legend>

          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
            required
          />

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm">
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