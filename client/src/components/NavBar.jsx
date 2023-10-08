/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faRoute,faBars } from '@fortawesome/free-solid-svg-icons'

function getUser(){
  let user = localStorage.getItem('zephyruser');
  if(user){
    user = JSON.parse(user)
  }else{
    user = null;
  }
  return user;
}


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user,setUser] = useState(getUser());
    const handleLogout = ()=>{
      localStorage.removeItem("zephyruser");
      setUser(null)
    }
  return (
    <div className="md:px-20 lg:px-40 px-4 py-4 flex justify-between w-full bg-white top-0 fixed z-50 border shadow">
      <h1 className='md:text-xl'><span className='mx-2 text-blue-500'><FontAwesomeIcon icon={faRoute}/></span><b>ZEPHYR.</b></h1>
      <div >
        <div>
        <div className='border md:text-xl px-4 py-1 rounded-full'>
          <button className='mx-2' onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <FontAwesomeIcon icon={faUser}/>
        </div>
        {isOpen && (
          <div className=" my-5 md:right-20 lg:right-36 right-3 p-4 absolute md:w-[81%] w-[95%] h-96 bg-gray-100 opacity-90 shadow-md shadow-gray-500 text-md rounded-md shadow-lg flex flex-col justify-center items-center">
            {user?<>
              <p className='block px-4 py-2 text-md md:text-xl text-gray-800 font-bold hover:text-blue-500'>{user.username}</p>
              <hr className='w-96 bg-black'/>
              <button className="block border-none px-4 py-2 text-md md:text-xl text-gray-800 font-bold hover:text-blue-500" onClick={handleLogout}>LOGOUT</button>
            </>:<>
              <p className="block px-4 py-2 text-md md:text-xl text-gray-800 font-bold hover:text-blue-500"><Link to='/login'>LOGIN</Link></p>
              <hr className='w-96 bg-black'/>
              <p className="block px-4 py-2 text-md md:text-xl text-gray-800 font-bold hover:text-blue-500"><Link to='/signup'>SIGNUP</Link></p>
              </>}
          </div>
        )}
        </div>
      </div>
      
    </div>   
  )
}

export default NavBar
