"use client";
import { useState, useEffect } from "react";
import UserForm from "../components/userForm";

const Order = () => {

  const [login, setLogin] = useState<boolean>(false);
  const [name, setName] = useState<string>("Gary");

  useEffect(() => {
    
  }, [])
  

  return (
    <div>
      {
        login ? (
          <div className=" mt-8 text-lg">
            <p className="my-3">Hi {name},</p>
            <p>Start your order</p>
          </div>
        ) : (<UserForm btnTitle="Login" routePage="order"/>)
      }
    </div>
    
  )
}

export default Order;