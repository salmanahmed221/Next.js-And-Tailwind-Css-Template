"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from 'next/image';
import { AiOutlineApple } from 'react-icons/ai';
import { BsGooglePlay } from 'react-icons/bs';



export default function HeroSection() {
  return <section id='Home'>
    <div className='md:flex bg-[#ff6b81]'>
      {/* Left Part */}
      <div className='basis-[50%] md:p-20 p-10 md:mt-20'>
        <h1 className='md:text-5xl text-2xl font-bold text-white text-center md:text-left pt-10 md:pt-0'>A Powerful App For Your Business.</h1>
        <p className='text-white pt-7 text-center md:text-left'>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
        {/* Buttons */}
        <div className='md:flex gap-5 pt-6 '>
          <button className='flex border-2 border-white md:px-4 md:py-2 px-8 py-1 rounded-md bg-white text-[#ff6b81] hover:bg-black hover:text-white hover:border-none mx-auto md:mx-0'>
            <span className='mt-1 text-2xl pr-1'> <AiOutlineApple /></span>
            <span className='mt-1 font-semibold '> App Store</span>
          </button>

          <button className='flex border-2 border-white md:px-4 md:py-2 px-6 py-1 rounded-md text-white hover:bg-white hover:text-[#ff6b81] mt-3 md:mt-0 mx-auto md:mx-0'>
            <span className='mt-1 text-2xl pr-1'> <BsGooglePlay /></span>
            <span className='mt-1 font-semibold'>Google Play</span>
          </button>
        </div>
      </div>
      {/* Right Part */}
      <RevealWrapper
        origin="top"
        delay={100}
        duration={2000}
        distance="50px"
        reset={true}
      >
        <div className='basis-[50%] py-6 md:mt-10'>
          <Image src={"/mobile.webp"} alt="logo" height={700} width={700} />
        </div>
      </RevealWrapper>
    </div>
  </section>;
}
