"use client"

import React from 'react'
import { Heading } from '../heading/Heading'
import { FaCalendar } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import video from "../../assets/bganimation.mp4"

export const About = () => {
  return (
    <div className=' md:px-20 px-4 w-[100%] sticky md:-top-16 max-md:-top-28 max-w-screen min-h-screen flex flex-col items-center justify-center rounded-t-xl border-t-[2px] border-slate-700 py-20 bg-gradient-to-b from-slate-900 to-slate-950 md:py-16'>
        <Heading>About Us</Heading>
        <div className='flex md:flex-row max-md:flex-col gap-10 items-center w-full justify-center mt-10'>
            <div className='flex flex-col gap-5 my-5 md:w-1/2'>
                <h3 className='md:text-start text-center font-semibold'>Welcome to the official website of Bengal E-Summit 2024, an initiative by the Institute of Engineering and Management (IEM), Kolkata. </h3>
                {/* <h3 className='text-center text-gray-300'>Join us for two days of inspiring talks, hands-on workshops, and unparalleled networking opportunities with industry leaders, visionaries, and fellow enthusiasts. Whether you're an aspiring entrepreneur, a tech aficionado, or simply curious about the future of innovation, E-Summit 2024 promises something for everyone!</h3> */}
                <div>
                    <div className='flex gap-2 items-center md:justify-start justify-center'>
                        <FaCalendar className='text-xl'/>
                        <h3 className='font-semibold'>27-28th July 2024</h3>
                    </div>
                    <div className='flex gap-2 items-center md:justify-start justify-center'>
                        <FaMapPin className='text-xl'/>
                        <h3 className='font-semibold'>IEM Gurukul Building, Kolkata</h3>
                    </div>
                </div>
                <h3 className='md:text-start text-md text-center'>Be part of the movement that's shaping Bengal. Don't miss this chance to connect, learn, and grow. See you at E-Summit 2024!</h3>
            </div>
            <video className='shadow-xl shadow-blue-800/40 rounded-xl border-2 md:w-1/2 h-fit border-blue-800' id="video" src={video} autoPlay loop muted/>
        </div>
    </div>
  )
}
