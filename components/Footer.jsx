import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
    const contact = { address: '1 Sail Street, London, SE11 6NQ', phone: '020 4527 6474', email: 'enquiries@PlumbingPros.com' }

  return (
    <section className='max-w-6xl px-10 lg:px-0 mx-auto mt-10'>
        <div className='flex lg:flex-row flex-col flex-wrap justify-between gap-12 lg:gap-4'>
           <div className="logo">
                <h1 className='text-[32px] mb-7 w-[260px] font-bold'>Business Logo</h1>
                <div className="links flex gap-4">
                    <FaFacebook className=' h-6 w-4'/>
                    <FaLinkedinIn className=' h-6 w-4'/>
                    <TfiTwitterAlt className=' h-6 w-4'/>
                    <FaInstagram className=' h-6 w-4'/>
                </div>
            </div>


            <div className=' w-[430px] flex flex-col md:flex-row lg:flex-row flex-wrap gap-x-0 gap-y-4 lg:gap-y-0 md:justify-between lg:gap-x-16'>
                <div className="">
                <h4 className='font-semibold mb-4 text-sm leading-6'>Our Services</h4>
                <ul className='flex flex-col gap-y-4'>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Plumbing</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Drainage</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Bathrooms</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Commercial</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <h4 className='font-semibold text-sm leading-6'>Useful Links</h4>
                <ul className='flex flex-col gap-y-4'>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Contact Us</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Updates</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>About Us</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Rates</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <h4 className='font-semibold text-sm leading-6'>Our Services</h4>
                <ul className='flex flex-col gap-y-4'>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Customer Services</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Updates</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Locations</li>
                    <li className='font-normal text-sm text-[#2A2F32] cursor-pointer leading-5'>Sitemap</li>
                </ul>
            </div>
            </div>


            <div className="phn w-[430px]">
                <h4 className='font-semibold text-sm leading-6 mb-4'>Contact Info</h4>
              <p className='font-semibold gap-3 text-sm leading-6 flex items-center mb-4'><CiLocationOn size={20} className=''/>{contact.address}</p>
              <p className='font-semibold gap-3 text-sm leading-6 flex items-center mb-4'><MdOutlineEmail  size={20}/>{contact.email}</p>
              <p className='font-semibold gap-3 text-sm leading-6 flex items-center mb-4'><FiPhoneCall  size={20}/>{contact.phone}</p>
            </div>

            
        </div>

        <footer className='flex flex-col lg:flex-row md:flex-row gap-4 lg:gap-0 items-center mt-20 mb-[60px] justify-between text-sm font-normal leading-4 text-[#2A2F32]'>
            <p>© Plumbing Pros. All Rights Reserved </p>
            <p>Website by IH Adventure And Creative</p>
        </footer>
    </section>

  )
}

export default Footer