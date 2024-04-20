import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Header = () => {
  return (
    <div>
      <div class='mt-6 md:mt-10 mx-4 md:mx-24 px-4'>
  <div class=" w-full">
    <h1 class='font-bold text-3xl md:text-4xl'>PINKI KUMARI</h1>
    <h2 class='mt-2 text-xl md:text-2xl text-gray-500 font-semibold'>WEB DEVELOPER</h2>
    <h2 class='mt-4 text-xl md:text-2xl font-bold text-gray-800'>PROFESSIONAL SUMMARY</h2>
    <p class='text-gray-500 mt-2 md:mt-4  lg:max-w-full
     '>I have done Master of arts and I am an exceptional knowledgeable
     person. I am looking for an opportunity as a Frontend Web Developer. I have a very good understanding of 
     React Js domain so that I can learn more and more things.</p>
  </div>
</div>

<div className=' flex justify-between '>
<div class='mt-6 md:mt-10 mx-4 md:mx-24 px-4 '>

    <h1 class='font-bold text-lg md:text-xl'>CONTACT</h1>
    <div class='mt-4'>
      <div class='flex items-center gap-2 text-lg md:text-xl'>
        <FaPhone class='mt-1' />
        <h1 className='text-gray-600'>7029841740</h1>
      </div>
      <div class='flex items-center mt-2 gap-2'>
        <CiMail class='mt-1 text-xl' />
        <h1 className='text-gray-700'>pinkimandal44066@gmail.com</h1>
      </div>
      <div class='flex items-center mt-2 gap-2'>
        <FaLinkedin class='mt-1 text-xl' />
        <h1 className='text-gray-700'>www.linkedin.com/in/pinki-kumari-66723227b</h1>
      </div>
      <div class='flex items-center mt-2 gap-2'>
        <FaGithub class='mt-1 text-xl' />
        <h1>https://github.com/pinkimandal44066</h1>
      </div>
      <div class='flex items-center mt-2 gap-2'>
        <MdHome class='-mt-10 text-2xl' />
        <h1 class='w-full md:w-60 text-gray-700'>Ramnagar Colliery Asansol, State-West Bengal, Dist-paschim Bardhaman, Pin-713324</h1>
      </div>

      <div class='mt-6 md:mt-10  '>
  
    <h1 class='font-bold text-lg  md:text-xl'>EDUCATION</h1>
    <h1 class='mt-4'>I have done Advance Diploma in Computer Application.</h1> 
  
    <h1 class='mt-2'>Higher Secondary 2014-2016 Board of Jharkhand Academic Council University of University 
      of Binod Bihari Mahto Koyalanchal University.</h1>
    
    <h1 class='mt-2'>Bachelor of Arts 2016-2019 Board of Jharkhand Academic
         Council University of University of Binod Bihari Mahto Koyalanchal University.
    </h1>
    
    <h1 class='mt-2'>Master of Arts 2021-2023 Board of West Bengal 
    of SecondaryEducation University of Kazi Nazrul University.</h1>

</div>
    </div>
    
  
</div>
<div class='mt-4 md:mt-10 mx-2 md:mx-24 '>
  <h1 className='font-bold text-lg mt-10 '>WORK EXPERIENCE</h1>
  <p className='lg:w-80'>Worked at a Teleperformance company as Customer Service Associate on a three-month contract.</p>

  <h1  className='font-bold text-lg mt-10'>SKILLS / INTERESTED</h1>
  <h1 className='text-gray-800'>Html, CSS, Tailwind CSS, React Js Responsive Web Development.</h1>
  <h1>Solution oriented, cold calling, Customer relationship management, customer support, team building, confidence.</h1>

  <div class='mt-4 md:mt-10 mx-2  mb-56 '>
    <div>
      <h1 className='font-bold text-lg mt-10'>SEMINARS & ACHIEVEMENT</h1>
      <div class='mt-4 text-gray-700'>
        <div class='flex items-center gap-2 text-lg md:text-xl'>
          <GoDotFill class='-mt-6 lg:mt-3 sm:mt-2 md:-mt-4 text-2xl' />
          <h1  class="lg:w-80 lg:text-xl md:text-xl sm:text-xl ">College topper 2014-2016.</h1>
        </div>
        <div class='flex items-center mt-2 gap-2'>
          <GoDotFill class='lg:-mt-12 md:-mt-28 -mt-20 text-7xl lg:text-xl sm:text-7xl md:text-7xl ' />
          <h1  class="lg:w-80 lg:text-xl md:text-xl sm:text-xl ">When I was in class 12th i Topped the college and my name appeared in the newspaper.</h1>
        </div>
        <div class='flex items-center mt-2 gap-2'>
          <GoDotFill class='sm:text-4xl text-4xl lg:text-xl md:text-3xl lg:-mt-5 sm:-mt-14 -mt-10' />
          <h1 class="lg:w-80 lg:text-xl md:text-xl sm:text-xl ">I was the kabaddi champion of my school.</h1>
        </div>
      </div>
    </div>
  </div>


  
</div>
  </div>
    </div>
  )
}

export default Header
