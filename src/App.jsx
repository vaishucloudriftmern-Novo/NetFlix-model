import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react"

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          navigate("/success");
        } else {
          navigate("/fail");
        }
      });
  }

  return (
    <div className="w-full h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2c30b07e-cdb1-4e36-af97-ad5d752c548c/a8f13b2f-408c-46df-8ab8-1bd9e2e7c318/AE-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
      bg-cover bg-center flex justify-center items-center">

      <div className="bg-black bg-opacity-70 p-10 rounded-lg w-[360px]">
        <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-zinc-800 rounded text-white outline-none"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-zinc-800 rounded text-white outline-none"
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded"
          >
            Sign In
          </button>

          <div className="flex justify-between text-zinc-400 text-sm mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <p>Need help?</p>
          </div>
        </form>

        <p className="text-zinc-400 mt-6 text-sm">
          New to Netflix?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Sign up now
          </span>
        </p>

      </div>
    </div>
  );
}
