import { useLocation } from 'react-router';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Desktop from './sidebar/Desktop';
import Mobile from './sidebar/Mobile';

const Sidebar = () => {
    const location = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false);


   

    const isActive = (path) => {
        return location.pathname === path;
    };

    // Define active and inactive classes based on theme
    const activeClass = "bg-[#f7cc67]  text-white";
    const inactiveClass = "hover:border hover:border-[#f7cc67] text-white";

    return (
        <>
            {/* Mobile Menu Toggle Button (visible only on small screens) */}
            <div className="lg:hidden fixed top-3 left-3 z-40">
                <FaBars
                    onClick={() => setShowMobileMenu(true)}
                    className="w-8 h-8 cursor-pointer text-[#F6B10A]  border rounded-md"
                />
            </div>

            <Desktop activeClass={activeClass} inactiveClass={inactiveClass} isActive={isActive}/>

            {/* Mobile Sidebar (visible only when showMobileMenu is true and on small screens) */}
            <Mobile activeClass={activeClass}  isActive={isActive} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
        </>
    );
};

export default Sidebar;