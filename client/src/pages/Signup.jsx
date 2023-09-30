/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


function Signup() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: '',
  });
  const [data,setData] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )
  const [error,setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 console.log(formData)
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    if(data) {
        navigate('/');
      }
    },[data, navigate]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.username.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '') {
      setError("All fields are required")
      return;
    }
    if (!isEmailValid(formData.email)) {
      setError("Invalid Email Address")
      return;
    }
    try{
      const res = await axios.post("http://localhost:5000/api/auth/register",formData)
      localStorage.setItem("user",JSON.stringify(res.data))
      setData(res.data)
      navigate('/')
    }catch(err){
      setError(err)
    }
  };
    
  return (
    <div className='h-screen flex justify-center items-center px-40 py-8'> 
        <div className='bg-white flex flex-col p-6 border shadow-md shadow-gray-400'>
        <p className='flex flex-end'><Link to='/'>X</Link></p>
            <div className='md:w-58 p-6 bg-white flex flex-col justify-center text-center items-center'>
                <p className='text-xl font-medium mb-4'>Create your account!</p>
                <div className=' border my-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs' type="text" name="username" value={formData.username} onChange={handleChange} placeholder='enter username..' />
                </div>
                <div className=' border my-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs ' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='enter your email address..' />
                </div>
                <div className=' border my-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='enter your password..' />
                </div>
                {error && <p className="text-red-500 text-xs font-medium">*{error}</p>}
                <div className='border mt-2 mb-6 border-gray-400 bg-blue-600 text-white rounded-full w-24 h-8 bg-white flex'>
                    <button onClick={handleSubmit} className='w-24 bg-blue-600 text-white px-6 py-2 rounded-full outline-none text-xs'>Create</button>
                </div>
                <div>
                    <p className='mx-4 text-xs'>Sign in to your account? <span className='text-blue-600 mx-2 underline cursor-pointer'><Link to='/login'>Sign In</Link></span></p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Signup
