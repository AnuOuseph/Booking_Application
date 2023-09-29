/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Header() {
    
  return (
    <>
    <div className="flex justify-center h-4/5">
        <div
          className="bg-cover h-4/5 md:w-4/5 w-full rounded-3xl mt-10"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_1280.jpg')",
          }}
        >
           <div className='w-96 md:my-24 mt-40 md:mx-20'> 
                <p className='text-6xl px-4'>Air, Sleep, Dream</p>
                <p className='text-xl my-6 px-4'>Find and book your dream destination.</p>
                <button className='bg-blue-500 text-white px-6 mx-4 py-2 rounded-full mb-40'>Start your search.</button>
           </div>
        </div>
      </div>
      <div className='bg-white rounded-2xl shadow-xl shadow-gray-200 p-10 w-97 md:mx-60 md:mx-10 h-30 transform translate-y-[-80px] flex flex-wrap justify-around'>
        <div>
            <p className='mx-4'><b>Where</b></p>
            <input className='m-2 py-2 px-6 rounded-xl w-44 border border-gray-400' type="text" placeholder='Search Destinations.' />
        </div>
        <div>
        <p className='mx-4 hidden md:block'><b>Check In</b></p>
        <input className='m-2 py-2 px-6 hidden md:block rounded-xl w-44 border border-gray-400' type="date" />
        </div>
        <div>
        <p className='mx-4 hidden md:block'><b>Check Out</b></p>
        <input className='m-2 py-2 px-6 hidden md:block rounded-xl w-44 border border-gray-400' type="date" />
        </div>
        <div>
        <p className='mx-4 hidden md:block'><b>Travellers</b></p>
        <input className='m-2 py-2 px-4 hidden md:block rounded-xl w-44 border border-gray-400' type="text" placeholder='No of users..' />
        </div>
        <div className='flex items-center'>
        <button className='px-4 py-2 mt-6 rounded-full bg-blue-500 text-white '>
        <FontAwesomeIcon icon={faSearch} />
        </button>
        </div>
      </div>
    </>
  )
}

export default Header
