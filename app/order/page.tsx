"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const Order = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const orderSignin = { username, password }
    try {
      axios.post("http://localhost:8080/user/signin", orderSignin)
        .then((response) => {
          setSuccess(response.data.success)
          setTimeout(() => router.push("/user"), 3000)
        })
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <form className="flex flex-col flex-1 flex-between items-center px-3 text-lg" onSubmit={handleSubmit}>

      <div className="text-red-700 animate-bounce">{error}</div>

      <div className="flex flex-col justify-around">
        <div className="my-3">Username</div>
        <input className="p-3 rounded-md w-96" type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="flex flex-col justify-around">
        <div className="my-3">Password</div>
        <input className="p-3 rounded-md w-96" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="px-4 py-3 w-60 rounded-md mt-5 bg-amber-700 text-white text-lg font-bold" type="submit">Login</button>
    </form>
  );
}

export default Order;