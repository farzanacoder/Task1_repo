import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Get = () => {
  return (
   <section className='max-w-6xl mx-auto lg:p-14 md:p-10 p-8 text-white'>
     <div className='bg-[#0058FF] flex flex-col items-center rounded-3xl lg:p-20 md:p-10 p-4 lg:gap-8 md:gap-6 gap-4'>
          <h1 className='lg:text-5xl text-2xl md:text-[32px] font-bold text-center capitalize pt-10'>Get in Touch</h1>
          <p className='font-normal lg:text-lg md:text-base text-sm leading-5 lg:leading-7 text-center'>Contact us to inquire about our services, whether you have a commercial project that requires support or a plumbing issue that needs the attention of a trusted professional.</p>
          <button className='md:text-base text-sm flex items-center gap-2 leading-[30px] font-bold text-[#0058FF] rounded-lg bg-white py-4 px-6'>Book a Professional Plumber <FaArrowRight /> </button>
    </div>
   </section>
  )
}

export default Get