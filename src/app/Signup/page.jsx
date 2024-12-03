"use client"
import React, { useState } from 'react'
import axios from 'axios';
const page = () => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [name,setname]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      name,
      email,
      password
    }
    try{
      axios.post("http://localhost:3000/api/signup",data)
      .then((res)=>{
        console.log(res);
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
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
       
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{setname(e.target.value)}}
              required
            />
          </div>
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
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
     
        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="/Login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
    </>
  )
}

export default page