import { useState } from "react";
import { CiCircleCheck,  CiCircleAlert} from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { TbUserCheck } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router";


export default function Header() {
        const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
        

    return (
        <div className="border-b border-gray-300 bg-gray-200">
            <div className="flex flex-wrap md:items-center justify-between w-full">
                <div className="bg-gray-200 px-5 w-1/3 py-3">
                    <ul className="flex  items-center  space-x-5 font-bold text-[10px] md:space-x-2">
                        <li className="flex items-center  bg-white rounded-md px-3 py-2"><CiCircleAlert className="mr-1"/> Escalated(2)</li>
                        <li className="flex items-center  bg-white rounded-md px-3 py-2"><CiCircleCheck className="mr-1"/>Paid(6)</li>
                        <li className="flex items-center  bg-white rounded-md px-3 py-2"> <CiCircleCheck className="mr-1"/>Dispute</li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center justify-between bg-white w-2/3 py-3 px-5 text-[12px]">
                    <div className="">
                        <p>Excalated</p>
                        <p>Paid</p>
                    </div>
                    <div className="text-red-600 bg-red-200 rounded-xl px-2 ">Dispute</div>
                    <div className="">
                        <p>Task ID:</p>
                        <p>Trade Link</p>
                    </div>
                    <div className="hidden lg:inline-block">
                        Open 72d 1hr ago
                    </div>
                    <div className="flex items-center justify-between space-x-5 relative font-bold">
                        <button
                                onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
                                className="flex items-center border border-gray-200 rounded-md px-4 py-2"
                            >
                             Action   {showLogoutDropdown ? <FaAngleUp className='w-3 h-3 ml-1' /> : <FaAngleDown className='w-3 h-3 ml-1' />}
                            </button>
                            {showLogoutDropdown && (
                                <div className="absolute top-full right-25 mt-2 w-48 bg-white rounded-md shadow-md py-1 z-40 text-[15px] lg:right-38">
                                    <hr className="text-gray-400" />
                                    <button
                                        
                                        className="flex items-center w-full text-left px-4 py-2 text-green-600 hover:bg-green-50"
                                    >
                                        <FaCheck className="mr-2" />
                                        Mark as Resolved
                                    </button>
                                    <button
                                        
                                        className="flex items-center w-full text-left px-4 py-2 text-amber-300 hover:bg-amber-50"
                                    >
                                        <GoArrowUpRight className="mr-2" />
                                        Forward to Admin
                                    </button>
                                    <button
                                        
                                        className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 "
                                    >
                                        <LiaTimesSolid className="mr-2" />
                                        Cancel Trade
                                    </button>
                                    <button
                                        
                                        className="flex items-center w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-md"
                                    >
                                        <TbUserCheck className="mr-2" />
                                        Reassign Trade
                                    </button>
                                </div>
                            )}
                        <Link className="border border-gray-200 rounded-md px-4 py-2 bg-[#F59E0B] text-white">Trade Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}