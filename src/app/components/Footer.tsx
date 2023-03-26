import Image from "next/image";
import { CgFacebook } from 'react-icons/cg';
import { SiTwitter } from 'react-icons/si';
import { RiInstagramLine } from 'react-icons/ri';
import { GrYoutube } from 'react-icons/gr';
import Link from "next/link";

export default function Footer() {
    return <div>
        <div className="grid md:grid-cols-6 md:gap-16 gap-10 bg-[#081828] p-14 text-center md:text-left">
            {/* 1st box */}
            <div className="md:col-span-2">
                <Image src={"/white-logo.svg"} alt="logo" height={150} width={150} className="mx-auto md:mx-0" />
                <p className="text-white mt-4">Making the world a better place through constructing elegant hierarchies.</p>
                <div className="flex md:gap-5 text-xl text-white mt-6">
                    <div className="mx-auto md:mx-0">
                        <CgFacebook />
                    </div>
                    <div className="mx-auto md:mx-0">
                        <SiTwitter />
                    </div>
                    <div className="mx-auto md:mx-0">
                        <RiInstagramLine />
                    </div>
                    <div className="mx-auto md:mx-0">
                        <GrYoutube />
                    </div>
                </div>
            </div>
            {/* 2nd Box*/}
            <div className="text-white ">
                <h1 className=" font-bold text-xl">Solutions</h1>
                <p className="mt-4">
                    <Link href={""} className="hover:text-[#ff6b81]">Marketing</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Analytic</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Commerce</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Insight</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Promotion</Link>
                </p>
            </div>
            {/* 3rd Box*/}
            <div className="text-white ">
                <h1 className=" font-bold text-xl">Support</h1>
                <p className="mt-4">
                    <Link href={""} className="hover:text-[#ff6b81]">Pricing</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Documentation</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Guides</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">API Status</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Live Support</Link>
                </p>
            </div>
            {/* 4th Box */}
            <div className="text-white ">
                <h1 className=" font-bold text-xl">Company</h1>
                <p className="mt-4">
                    <Link href={""} className="hover:text-[#ff6b81]">About Us</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Our Blog</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Job</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Press</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Contact Us</Link>
                </p>
            </div>
            {/* 5th Box */}
            <div className="text-white ">
                <h1 className=" font-bold text-xl">Legal
                </h1>
                <p className="mt-4">
                    <Link href={""} className="hover:text-[#ff6b81]">Term & Conditions</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Privacy Policy</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Catering Services</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81] ">Customer Relations</Link>
                </p>
                <p className="mt-2">
                    <Link href={""} className="hover:text-[#ff6b81]">Innovation</Link>
                </p>
            </div>
        </div>
    </div>;
}
