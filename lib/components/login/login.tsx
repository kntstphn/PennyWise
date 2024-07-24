"use client";

import React from "react";
import logo from "@images/logo.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@lib/firebase/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex w-full h-full lg:mt-[150px] justify-center items-center p-10 lg:py-0 lg:px-[100px]">
      <div className="flex h-[500px] w-full login-page-left rounded-l-md p-2">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 w-full h-full items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="hidden lg:flex h-[500px] w-full login-page-right rounded-r-md p-2 items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="w-auto h-full"
        />
      </div>
    </div>
  );
}

export default Login;
