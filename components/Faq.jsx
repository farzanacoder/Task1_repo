"use client"
import React from 'react'
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
]



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-8 py-10">
      <h2 className="text-2xl md:text-[32px] lg:text-5xl font-bold text-[#1B1743] text-center mb-6">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#D4DBE0] pb-2 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center py-4 sm:py-6 md:py-8 font-semibold text-base md:text-xl lg:text-2xl">
              <p className="font-medium">{faq.question}</p>
              <span className='text-[#AAB6B5]'>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {openIndex === index && (
              <p className="mb-4 md:mb-6 mt-2 text-sm  md:text-lg text-[#2A2F32] leading-6">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq
