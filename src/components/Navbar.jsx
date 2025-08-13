import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { GiAlarmClock } from "react-icons/gi";
import { FaUser } from "react-icons/fa";



export default function Navbar() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    
    return (
        <div className="bg-white w-full  px-5 py-2 border border-b border-gray-200 flex lg:pl-68">
            <div className="flex items-center space-x-7 w-full">
                <div className="flex items-center justify-center space-x-10 w-full">
                    <input type="search" name="search" placeholder="search tickets..." className="w-60 border border-gray-300 p-2 rounded-md"/>
                    <p className="hidden md:flex items-center justify-center">
                        <HiOutlineArrowPathRoundedSquare className="w-5 h-5 text-gray-500 mr-1" />
                        Last updated 2 mins ago
                    </p>
                    <p className="hidden border border-gray-200 p-2 rounded-md md:flex items-center space-x-3">
                        <GiAlarmClock className="w-5 h-5 text-gray-500" />  {hours}:{minutes}:{seconds}
                    </p>
                </div>
                <div className="hidden lg:flex items-center justify-between w-2/3">
                    <button className="border border-gray-200 py-2 px-5 rounded-md">Break</button>
                    <button className="border border-red-500 text-red-500 bg-red-200 p-2 rounded-md">Clock out</button>
                    <div className="flex items-center space-x-2 ">
                        <FaUser className="w-9 h-9 text-gray-500 rounded-full bg-gray-200 p-2"/>
                        <div>
                            <h4 className="font-bold">Support Agent</h4>
                            <p className="text-sm">online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}