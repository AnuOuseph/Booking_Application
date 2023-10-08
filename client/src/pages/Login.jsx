/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/UserSlice';


function Login() {
    const [reg,setReg] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // const [data,setData] = useState(
    //     JSON.parse(localStorage.getItem("zephyruser")) || null
    // )
    //const [error,setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData)
    // useEffect(() => {
    //     if(data){
    //         navigate('/');
    //     }
    // },[data, navigate]);

    const dispatch = useDispatch()

    const {loading,error} = useSelector((state)=>state.user)

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(loginUser(formData)).then((result)=>{
            if(result.payload){
                navigate('/')
            }
        })
        // try{
        //     const res = await axios.post("http://localhost:5000/api/auth/login",formData)
        //     localStorage.setItem("zephyruser",JSON.stringify(res.data))
        //     setData(res.data)
        //     navigate('/')
        // }catch(err){
        //     setError(err)
        // }
    };
  return (
    <div className='h-screen flex justify-center items-center px-40 py-8'> 
        <div className='bg-white flex flex-col p-6 border shadow-md shadow-gray-400'>
        <p className='flex flex-end'><Link to='/'>X</Link></p>
            <div className='md:w-58 p-6 bg-white flex flex-col justify-center text-center items-center'>
                <p className='text-xl font-medium mb-4'>Login to your account!</p>
                {reg ? 
                <>
                <div className=' border mt-10 mb-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='enter your password..' />
                    <div className='h-10 w-10 px-4 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-[-6px] translate-y-[4px]'><button onClick={handleSubmit}><FontAwesomeIcon icon={faArrowRight} /></button></div>
                </div>
                {error && <div>{error}</div>}
                </>
                :
                <div className=' border mt-10 mb-2 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none text-xs ' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='enter your email address..' />
                    <div className='h-10 w-10 px-4 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-[-6px] translate-y-[4px]'><button onClick={()=>setReg(true)}><FontAwesomeIcon icon={faArrowRight} /></button></div>
                </div>}
                <p className='text-xs'>Or</p>
                <div className='border mt-2 mb-6 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <button className='w-64  px-6 py-2 rounded-full outline-none text-xs'>Sign in with Google</button>
                </div>
                <div>
                    <p className='mx-4 text-xs'>Create an account? <span className='text-blue-600 mx-2 underline cursor-pointer'><Link to='/signup'>Create</Link></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
