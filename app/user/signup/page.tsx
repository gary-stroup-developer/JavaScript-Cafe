"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


const SignupPage = () => {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const request = { name, username, email, password }
        try {
            axios.post("http://localhost:8080/user/signup", request)
                .then((response) => {
                    setSuccess(response.data.success)
                    setTimeout(() => nextRoute(response.data), 3000);
                })
        } catch (error) {
            setError(error.message)
        }
    };
    
    function nextRoute(input:any) {
        const ans = JSON.stringify(input)
        router.push("/user/");
    }
         
        
    return (
        <form className="flex flex-col flex-1 flex-between items-center px-3 text-lg" onSubmit={handleSubmit}>

            <div className="text-red-700 animate-bounce">{error}</div>
            <div className="text-green-700 animate-bounce">{success}</div>

            <div className="flex flex-col justify-around">
                <div className="my-3">Name</div>
                <input className="p-3 rounded-md w-96" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col justify-around">
                <div className="my-3">Email</div>
                <input className="p-3 rounded-md w-96" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="flex flex-col justify-around">
                <div className="my-3">Username</div>
                <input className="p-3 rounded-md w-96" type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col justify-around">
                <div className="my-3">Password</div>
                <input className="p-3 rounded-md w-96" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="px-4 py-3 w-60 rounded-md mt-5 bg-amber-700 text-white text-lg font-bold" type="submit">Register</button>
        </form>
    );
}
    export default SignupPage;

