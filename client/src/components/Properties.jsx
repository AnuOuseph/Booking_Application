/* eslint-disable no-unused-vars */
import React from 'react'
import useFetch from '../../hooks/useFetch'

function Properties() {
    const {data,loading,error} = useFetch("http://localhost:5000/api/place/countByType")
    const obj = data.data
    const image = [
        "/hotel.jpg",
        "/apart2.jpg",
        "/villa.jpeg",
        "/resort.jpg",
        "/cabin.jpg"
    ]
    console.log(data.data);
  return (
   <>
    <div className='md:pl-40 md:pr-40 py-6 text-center'>
        <p className='text-4xl font-semibold p-4'>Browse by Properties</p>
        <p className='text-md'>Keep calm & travel on</p>
    </div>
    <div className='bg-white md:pl-40 md:pr-40 py-6'>
        
            {loading? <p>loading...</p>:(
            <div className='md:grid md:grid-cols-5'>
            {obj && obj.map((item,i)=>(
            <div className='' key={i}>
                <div className='px-4 py-1 flex justify-center'>
                    <img className='rounded-3xl h-28 w-52' src={image[i]} alt="" />
                </div>
                <div className='bg-white px-6 flex justify-center'>
                    <div className='text-center'>
                        <p className='text-md text-gray-800'><b>{item.type}</b></p>
                        <p className='text-sm  text-gray-800'>{item.count} {item.type}</p>
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

export default Properties
