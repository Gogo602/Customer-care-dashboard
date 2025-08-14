import { MdOutlineDashboard } from "react-icons/md";
import { FaCog, FaTimes, FaUser } from "react-icons/fa";
import { PiCalculatorThin } from "react-icons/pi";
import { LuInbox } from "react-icons/lu";
import { LuCoins } from "react-icons/lu";
import { NavLink } from "react-router";
import { assets } from "../../assets/assets";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";


export default function Mobile({showMobileMenu, setShowMobileMenu, isActive, activeClass}) {

    return (
        <div
                className={`fixed inset-0 z-50 bg-transparent bg-opacity-50 transition-opacity duration-300 ease-in-out
                            ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setShowMobileMenu(false)}
            >
                <div
                    className={`fixed top-0 bottom-0 left-0 w-70 bg-[#F6B10A]  text-white
                                shadow-lg transform transition-transform duration-300 ease-in-out z-50
                                ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
                >
                    <div className='flex justify-between items-center p-6  pb-5'>
                        <div className='flex items-center space-x-4 text-white'>
                            <img src={assets.logo} alt="Binuain_logo" className='w-10'/>
                            <h4 className='text-3xl font-bold'>BINUAIN</h4>
                        </div>
                        <FaTimes
                            onClick={() => setShowMobileMenu(false)}
                            className='w-8 h-8 cursor-pointer text-white border rounded-md'
                        />
                    </div>

                    <ul className='flex flex-col gap-2 mt-5 px-5 text-xl '>
                        {/* Mobile Navigation Links */}
                        <NavLink
                            onClick={() => setShowMobileMenu(false)}
                            to={"/"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/') ? activeClass : `text-white hover:border hover:border-[#f7cc67]`}`}
                        >
                            <MdOutlineDashboard className="w-5 h-5 mr-3" /> Dashboard
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMobileMenu(false)}
                            to={"/market"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/market') ? activeClass : `text-white hover:border hover:border-[#f7cc67]`}`}
                        >
                            <LuCoins className="w-5 h-5 mr-3" /> Coin Exchange
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMobileMenu(false)}
                            to={"/bank-management"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/bank-management') ? activeClass : `text-white hover:border hover:border-[#f7cc67]`}`}
                        >
                            <PiCalculatorThin className="w-5 h-5 mr-3" /> Bank Management
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMobileMenu(false)}
                            to={"inbox"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('inbox') ? activeClass : `text-white hover:border hover:border-[#f7cc67]`}`}
                        >
                            <LuInbox className="w-5 h-5 mr-3" /> Inbox
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMobileMenu(false)}
                            to={"settings"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('settings') ? activeClass : `text-white hover:border hover:border-[#f7cc67]`}`}
                        >
                            <FaCog className="w-5 h-5 mr-3" /> Settings
                        </NavLink>
                </ul>
                <div className="inline-block w-full pl-10 space-x-5 pt-10 space-y-3 lg:hidden">
                    <button className="border border-gray-200 py-2 px-5 rounded-md">Break</button>
                    <button className="border border-red-500 text-red-500 bg-red-200 p-2 rounded-md">Clock out</button>
                    <div className="flex items-center space-x-2 ">
                        <FaUser className="w-9 h-9 text-gray-500 rounded-full bg-gray-200 p-2"/>
                        <div>
                            <h4 className="font-bold">Support Agent</h4>
                            <p className="text-sm">online</p>
                        </div>
                    </div>
                    <div >
                        <p className="md:hidden flex items-center ">
                            <HiOutlineArrowPathRoundedSquare className="w-5 h-5 text-white mr-1" />
                            Last updated 2 mins ago
                        </p>
                    </div>
                </div>
                </div>
            </div>
    )
};