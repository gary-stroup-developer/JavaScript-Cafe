"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";



export default function User() {
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [rewards, setRewards] = useState(0)
  
  useEffect(() => {
    async function getUserData() {
      const response = await axios.get("http://localhost:8080/user/data");
      
      
      setEmail(response.data.email);
      setRewards(response.data.rewardspoints);
      setUsername(response.data.username);
      setName(response.data.name);
    } 

    getUserData();
    
  }, [])
  

  
  return (
    <div>
      <p className='text-4xl text-amber-800'>Hello {name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <h3>{rewards}Points</h3>
      <p className='text-lg'>Order History</p>
    </div>
  )
}
