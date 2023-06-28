"use client";
import React, { useState } from "react";
import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    btnTitle: PropTypes.string,
    routePage: PropTypes.string,
}

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const UserForm = ({btnTitle,routePage}:ComponentTypes) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Submitting signup form");
    };
  return (
      <>
          <form className="flex flex-col flex-1 flex-between items-center px-3 text-lg" onSubmit={handleSubmit}>
              <div className="text-red-700 animate-bounce">{error}</div>
              <div className="flex flex-col justify-around">
                  <div className="my-3">Username</div>
                  <input className="p-3 rounded-md w-96" type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col justify-around">
                  <div className="my-3">Email</div>
                  <input className="p-3 rounded-md w-96" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col justify-around">
                  <div className="my-3">Password</div>
                  <input className="p-3 rounded-md w-96" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className="px-4 py-3 w-60 rounded-md mt-5 bg-amber-700 text-white text-lg font-bold" type="submit">{btnTitle}</button>
          </form>
      </>
  )
}

UserForm.propTypes = ComponentPropTypes;
export default UserForm;