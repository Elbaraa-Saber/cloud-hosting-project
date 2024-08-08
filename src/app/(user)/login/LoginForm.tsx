"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if ( email === '') return toast.error('Email is required');
    //just toast will work ok with showing notification but if we want theme error we should to add toast.error\
    if ( password === '') return toast.error('Password is required');
    console.log(`Email: ${email}, Password: ${password}`);

  }
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        type="email"
        placeholder="Enter your email"
        className="mb-4 border rounded p-2 text-xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="mb-4 border rounded p-2 text-xl"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
