/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'

function Cities() {
    const {data,loading,error} = useFetch("http://localhost:5000/api/place/countByCity?cities=Munnar,Ooty,Goa")
    const count = data.data
    const city = ["Munnar","Ooty","Goa"]
    const image = [
        "/city2.jpg",
        "/city3.jpg",
        "/city4.jpg"
    ]
    const [hover,setHover] =useState(false)
    return (
    <>
        <div className='md:pl-40 md:pr-40 py-6 text-center'>
            <p className='text-4xl font-semibold p-2'>Live Anywhere</p>
            {/* <hr className='w-12 mx-auto h-1 bg-black'/> */}
            <p className='text-md'>Keep calm & travel on</p>
        </div>
        {loading? <p>Loading....</p>:(
        <div className='md:pl-40 md:pr-40 px-10 py-6 bg-white'>
            <div className='md:grid md:grid-cols-3'>

                {count && image && city.map((item,i,img)=>(
                    <div className='bg-white' key={i}>
                    <div className='m-4 bg-cover rounded-3xl flex justify-center items-center cursor-pointer' 
                        style={{backgroundImage:
                                `url(${image[i]})`,
                                height:"240px"
                            }}>
                        <div className='hover:opacity-100 hover:bg-black hover:bg-opacity-60 w-full h-full rounded-3xl flex-col flex justify-center items-center'>
                            <p className='text-xl font-semibold text-white'>{item}</p>
                            <p className='text-sm font-bold text-white'>{count[i]}</p>
                        </div>
                    </div>
                </div>

                ))}

            </div>
        </div>)}
    </>
  )
}

export default Cities
