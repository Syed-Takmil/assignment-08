"use client";

import React, { useState } from "react";
import pic from "@/assets/ether.png";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const HandleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

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

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        setErrorMsg(error.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // success redirect
      window.location.href = "/login";
    } catch (err) {
      setErrorMsg("Server error occurred");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div
      className="flex flex-col-reverse gap-3 lg:flex-row container justify-center items-center min-h-screen w-full"
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
        <fieldset className="fieldset grid gap-3 w-xl p-5 border rounded-box bg-base-300">

          <legend className="text-lg font-bold">User Registration</legend>

          <input name="username" className="input w-full" placeholder="Username" required />
          <input name="email" type="email" className="input w-full" placeholder="Email" required />
          <input name="photoURL" type="url" className="input w-full" placeholder="Photo URL" required />
          <input name="password" type="password" className="input w-full" placeholder="Password" required />

          {errorMsg && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Register"}
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