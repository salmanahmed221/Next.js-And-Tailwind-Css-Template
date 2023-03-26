import { BiCloudDownload } from 'react-icons/bi';
import { BiLockOpen } from 'react-icons/bi';
import { AiOutlineSync } from 'react-icons/ai';


export default function Features() {
    return (
        <section id='Features'>
            <div className='bg-[#f9f9f9] py-5'>
                <div className="text-center py-12  mt-5">
                    <h4 className="text-[#ff6b81] font-semibold">FEATURES</h4>
                    <h1 className="md:text-3xl text-xl font-bold md:px-96 px-4">
                        Your Experience Gets Better And Better Over Time.
                    </h1>
                    <p className="md:px-96 mt-4 text-gray-500 px-9">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form
                    </p>
                </div>

                {/* Cards */}
                <div className="md:flex justify-center gap-5 md:mx-10 mx-5 py-5">
                    {/* Card 1*/}
                    <div className="rounded-md shadow-2xl p-5 basis-1/3 hover:scale-105 duration-200">
                        <div>
                            <BiCloudDownload className="text-7xl bg-[#ff6b81] text-white rounded-lg px-4 py-4" />
                        </div>
                        <h4 className="text-xl font-semibold mt-4">Push to Deploy</h4>
                        <p className="mt-3 w-full">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page at its layout.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-md shadow-2xl p-5  basis-1/3 mt-6 md:mt-0 hover:scale-105 duration-200">
                        <div>
                            <BiLockOpen className="text-7xl bg-[#ff6b81] text-white rounded-lg px-4 py-4" />
                        </div>
                        <h4 className="text-xl font-semibold mt-4">SSL Certificates</h4>
                        <p className="mt-3 w-full">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page at its layout.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-md shadow-2xl p-5 basis-1/3 mt-6 md:mt-0 hover:scale-105 duration-200">
                        <div>
                            <AiOutlineSync className="text-7xl bg-[#ff6b81] text-white rounded-lg px-4 py-4" />
                        </div>
                        <h4 className="text-xl font-semibold mt-4">Simple Queues</h4>
                        <p className="mt-3 w-full">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page at its layout.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
