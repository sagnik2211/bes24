import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='w-full h-[8rem] flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-t-xl border-gray-500 border-t-[1px]'>
        <div className='w-fit grid grid-cols-3 grid-flow-col'>
            <a className='hover:bg-white/10 bg-transparent duration-200 mx-auto p-3 cursor-pointer' href="https://x.com/BengalEsummit?t=LLrSXFuhlzBoWCcRQX4uPg&s=09" target='_blank'><FaXTwitter className='text-2xl'/></a>
            <a className='hover:bg-white/10 bg-transparent duration-200 mx-auto p-3 cursor-pointer' href="https://www.instagram.com/bengalesummit" target='_blank'><FaInstagram className='text-2xl'/></a>
            <a className='hover:bg-white/10 bg-transparent duration-200 mx-auto p-3 cursor-pointer' href="https://www.facebook.com/people/Bengal-E-summit-2024/61560898934811/?mibextid=ZbWKwL" target='_blank'><FaFacebookF className='text-2xl'/></a>
            <a className='hover:bg-white/10 bg-transparent duration-200 mx-auto p-3 cursor-pointer' href="https://www.linkedin.com/in/bengal-e-summit-32394b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedinIn className='text-2xl'/></a>
        </div>
        <h2 className='text-gray-400 text-sm'>© 2024 All rights reserved</h2>
    </div>
  )
}
