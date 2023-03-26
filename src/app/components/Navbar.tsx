"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

export default function Navbar() {
    const [nav, setNav] = useState(true);

    return <div>
        <div className="flex justify-around items-center bg-[#ff6b81] py-3 fixed w-full top-0 z-10">
            {/* Logo */}
            <div className="z-10">
                <Image src={"/white-logo.svg"} alt="logo" width={150} height={150} />
            </div>
            {/* Links */}
            <div className="hidden md:inline">
                <ul className="flex gap-10 text-white font-semibold">
                    <li>
                        <Link href={"#Home"} target="_parent">Home</Link>
                    </li>
                    <li>
                        <Link href={"#Features"} target="_parent">Features</Link>
                    </li>
                    <li>
                        <Link href={"#Overview"} target="_parent">Overview</Link>
                    </li>
                </ul>
            </div>
            {/* Button */}
            <div>
                <button className="hidden md:inline border-2 border-white text-white px-7 py-3 font-semibold rounded-md hover:bg-white hover:text-[#ff6b81]">Get It Now</button>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden text-2xl text-white z-10" onClick={() => {
                setNav(!nav)
            }}>
                {nav ? <GiHamburgerMenu /> : <ImCross />}
            </div>

            {/* Overlay */}
            {!nav ?
                <div className="md:hidden fixed top-0 left-0  bg-[#ff6b81] h-[50%] text-red-500 w-full flex justify-center items-center">
                    <ul className="gap-10 text-white text-2xl font-semibold leading-[50px] ">
                        <li>
                            <Link href={"#Home"} target="_parent">Home</Link>
                        </li>
                        <li>
                            <Link href={"#Features"} target="_parent">Features</Link>
                        </li>
                        <li>
                            <Link href={"#Overview"} target="_parent">Overview</Link>
                        </li>
                    </ul>
                </div>
                : null}
        </div>
    </div>;
}
