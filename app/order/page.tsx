"use client";
import { useState, useEffect } from "react";
import MenuItem from "../components/menuItem";

const Order = () => {
  const [login, setLogin] = useState<boolean>(true);
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
        ) : (<div>Redirect to login</div>)
      }
    </div>
    
  )
}

export default Order;