"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsCalendarCheck } from 'react-icons/bs';

export default function CustomerApp() {
    return (
        <section id='Overview'>
            {/* Customer Application */}
            <div className='md:flex md:py-10 py-5 px-5'>
                {/* Left Part */}
                <div className='basis-1/2 md:mt-16 md:ml-16'>
                    <div>
                        <AiOutlineArrowDown className="text-6xl bg-[#ff6b81] text-white rounded-lg px-3 py-3" />
                    </div>
                    <h1 className='font-bold md:text-4xl text-2xl mt-9'>1,25,000 Customers Using The Application!</h1>
                    <p className='text-gray-500 mt-9 md:pr-12'>
                        Collaborate over projects with your team and clients optimised for
                        mobile and tablet don&apos;t let slow page speeds drive our innovative
                        platform empowers anyone to convert clicks ou&apos;ll publish your
                        first landing page in minutes.
                    </p>
                    <div className='mt-9'>
                        <button className="border-2 border-white text-white px-7 py-3 font-semibold rounded-md hover:bg-black bg-[#ff6b81] hover:text-white">Get Started</button>
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
                    <div className='basis-1/2 md:ml-16 mt-11 md:mt-0'>
                        <Image src="/xapp-sfo.webp" alt='logo' width={500} height={500} className="md:mt-12" />
                    </div>
                </RevealWrapper>
            </div>

            {/* Seamless Loyalty */}
            <div className='md:flex md:py-10 py-5 px-5 mt-10 md:mt-0'>
                {/* Left Part */}
                <RevealWrapper
                    origin="top"
                    delay={100}
                    duration={2000}
                    distance="50px"
                    reset={true}
                >
                    <div className='basis-1/2 md:ml-16'>
                        <Image src="/xapp-ss2.png" alt='logo' width={500} height={500} />
                    </div>
                </RevealWrapper>
                {/* Right Part */}
                <div className='basis-1/2 md:mt-16 md:ml-16 mt-11'>
                    <div>
                        <BsCalendarCheck className="text-6xl bg-[#ff6b81] text-white rounded-lg px-3 py-3" />
                    </div>
                    <h1 className='font-bold md:text-4xl text-2xl mt-9'>Seamless Loyalty</h1>
                    <p className='text-gray-500 mt-9 md:pr-12'>
                        Collaborate over projects with your team and clients optimised for
                        mobile and tablet don&apos;t let slow page speeds drive our innovative
                        platform empowers anyone to convert clicks ou&apos;ll publish your
                        first landing page in minutes.
                    </p>
                    <div className='mt-9'>
                        <button className="border-2 border-white text-white px-7 py-3 font-semibold rounded-md hover:bg-black bg-[#ff6b81] hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
