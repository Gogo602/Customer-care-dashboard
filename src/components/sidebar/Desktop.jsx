import { Link } from 'react-router';
import { assets } from '../../assets/assets';
import { MdOutlineDashboard, MdOutlinePendingActions } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FaCog, FaRegStar } from 'react-icons/fa';
import { LuCoins, LuInbox } from 'react-icons/lu';
import { PiCalculatorThin } from 'react-icons/pi';



export default function Desktop( { activeClass, inactiveClass, isActive}) {

    return (
        <div className="hidden lg:inline-block bg-[#F6B10A] 
                                    min-h-screen fixed  px-4 w-64 border-r border-t border-gray-300">
            <ul className='flex flex-col mt-5 text-xl space-y-3'>
                <div className='flex items-center space-x-4 text-white pb-5'>
                    <img src={assets.logo} alt="Binuain_logo" className='w-10'/>
                    <h4 className='text-3xl'>BINUAIN</h4>
                </div>

                <Link
                    to='/'
                    className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/') ? activeClass : inactiveClass}`}
                >
                    <MdOutlineDashboard className="w-5 h-5" />
                    <span className='hidden md:inline'>Dashboard</span>
                </Link>

                <Link
                    to='/market'
                    className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/market') ? activeClass : inactiveClass}`}
                >
                    <LuCoins className="w-5 h-5" />
                    <span className='hidden md:inline'>Coin Exchange</span>
                </Link>

                <Link
                    to='/bank-management'
                    className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/bank-management') ? activeClass : inactiveClass}`}
                >
                    <PiCalculatorThin className="w-5 h-5" />
                    <span className='hidden md:inline'>Bank Management</span>
                </Link>

                <Link
                    to='inbox'
                    className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/inbox') ? activeClass : inactiveClass}`}
                >
                    <LuInbox className="w-5 h-5" />
                    <span className='hidden md:inline'>Inbox</span>
                </Link>

                <Link
                    to='settings'
                    className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/settings') ? activeClass : inactiveClass}`}
                >
                    <FaCog className="w-5 h-5" />
                    <span className='hidden md:inline'>Settings</span>
                </Link>
            </ul>
        </div>
    )
};