/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faRoute,faBars } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:px-20 lg:px-40 px-4 py-4 flex justify-between w-full bg-white top-0 fixed z-50 border shadow">
      <h1 className='md:text-2xl'><span className='mx-2 text-blue-500'><FontAwesomeIcon icon={faRoute}/></span><b>Booking.</b></h1>
      <div >
        <div>
        <div className='border md:text-xl px-4 py-1 rounded-full'>
          <button className='mx-2' onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <FontAwesomeIcon icon={faUser}/>
        </div>
        {isOpen && (
          <div className=" my-6 md:right-20 lg:right-40 right-4 p-4 absolute w-32 bg-white shadow-md shadow-gray-500 text-md rounded-md shadow-lg">
          
              <p className="block px-4 py-2 text-xs text-gray-800 font-medium hover:bg-gray-100"><Link to='/login'>LOGIN</Link></p>
              <hr />
              <p className="block px-4 py-2 text-xs text-gray-800 font-medium hover:bg-gray-100"><Link to='/signup'>SIGNUP</Link></p>
          </div>
        )}
        </div>
      </div>
      
    </div>   
  )
}

export default NavBar
