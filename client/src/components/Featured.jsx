/* eslint-disable no-unused-vars */
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Featured() {
    const {data,loading,error} = useFetch("http://localhost:5000/api/place?featured=true")
    const hotels = data.data
    console.log(hotels)
   
  return (
    <>
      <div className='md:pl-40 md:pr-40 py-6 text-center'>
        <p className='text-4xl font-semibold p-4'>Popular Properties</p>
        <p className='text-md'>Keep calm & travel on</p>
      </div>
      <div className='bg-white md:px-40 px-6 py-6'>
        {loading? <p>Loading..</p>: (
        <div className='md:grid md:grid-cols-4'>
            {hotels && hotels.map((item)=>(
            <div className='py-6 mx-2 my-2' key={item._id}>
                <div className='px-4 py-1'>
                    <img className='rounded-3xl h-46 w-34 object-cover' src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                </div>
                <div className='px-6 py-2 flex justify-between'>
                    <div>
                        <p className='text-md text-gray-800'><b>{item.name}, {item.city}</b></p>
                        <p className='text-sm text-gray-600'> stay with jamie</p>
                        <p className='text-sm text-gray-800 font-semibold'>₹ {item.amount}.00 <span className='text-gray-500 font-light'>night</span> </p>
                    </div>
                    <div>
                        <p className='text-md font-semibold'><span className='text-xs text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>{item.rating}</p>
                    </div>
                </div>
            </div> 
            ))}
        </div>
        )}
      </div>
    </>
  )
}

export default Featured
