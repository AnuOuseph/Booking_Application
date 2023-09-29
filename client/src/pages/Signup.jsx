/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Signup() {
    
  return (
    <div className='h-screen flex justify-center items-center px-40 py-8'> 
        <div className='bg-white flex flex-col p-6 border shadow-md shadow-gray-400'>
        <p className='flex flex-end'><Link to='/'>X</Link></p>
            <div className='md:w-58 p-6 bg-white flex flex-col justify-center text-center items-center'>
                <p className='text-xl font-medium mb-4'>Create your account!</p>
                <div className=' border my-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs' type="text" placeholder='enter username..' />
                </div>
                <div className=' border my-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs ' type="email" placeholder='enter your email address..' />
                </div>
                <div className=' border my-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs' type="password" placeholder='enter your password..' />
                </div>
                <div className='border mt-2 mb-6 border-gray-400 bg-blue-600 text-white rounded-full w-24 h-8 bg-white flex'>
                    <button className='w-24 bg-blue-600 text-white px-6 py-2 rounded-full outline-none text-xs'>Create</button>
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
