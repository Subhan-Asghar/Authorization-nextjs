"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
const page = () => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const router=useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data={
          email,
          password
        }
        try{
          axios.post("http://localhost:3000/api/login",data)
          .then((res)=>{
            console.log(res);
            router.push("/home"); 
          })
        }
        catch(err){
          console.log("Error",err);
        }
     
       
     
      };
  return (
   <>
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
   
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{setemail(e.target.value)}}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{setpassword(e.target.value)}}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
       
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <a href="/Signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
   </>
  )
}

export default page