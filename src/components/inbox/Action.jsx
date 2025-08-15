import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaCheck } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { LiaTimesSolid } from 'react-icons/lia';
import { TbUserCheck } from 'react-icons/tb';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import CancelTrade from './modals/CancelTrade';
import ReassignTrade from './modals/ReassignTrade';

export default function Action() {
    const [showActions, setShowActions] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);

    const handleActionClick = (action) => {
        setShowActions(false);
        // Show modals for specific actions
        if (action === 'Cancel Trade' || action === 'Reassign Trade') {
            setSelectedAction(action);
        } else {
            // For other actions, just show a toast notification
            toast.success(`${action} action triggered!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleConfirm = () => {
        if (selectedAction) {
            toast.success(`${selectedAction} Confirmed!`, {
                position: "top-right",
                autoClose: 3000,
            });
        }
        setSelectedAction(null); // Close the modal
    };

    const handleCancel = () => {
        setSelectedAction(null); // Close the modal
    };

    return (
        <div className="flex items-center justify-between space-x-5 relative font-bold">
            <button
                onClick={() => setShowActions(!showActions)}
                className="flex items-center border border-gray-200 rounded-md px-4 py-2"
            >
                Action {showActions ? <FaAngleUp className='w-3 h-3 ml-1' /> : <FaAngleDown className='w-3 h-3 ml-1' />}
            </button>

            {showActions && (
                <div className="absolute top-full right-25 mt-2 w-48 bg-white rounded-md shadow-md py-1 z-40 text-[15px] lg:right-38">
                    <hr className="text-gray-400" />
                    <button onClick={() => handleActionClick('Mark as Resolved')} className="flex items-center w-full text-left px-4 py-2 text-green-600 hover:bg-green-50">
                        <FaCheck className="mr-2" /> Mark as Resolved
                    </button>
                    <button onClick={() => handleActionClick('Forward to Admin')} className="flex items-center w-full text-left px-4 py-2 text-amber-300 hover:bg-amber-50">
                        <GoArrowUpRight className="mr-2" /> Forward to Admin
                    </button>
                    <button onClick={() => handleActionClick('Cancel Trade')} className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 ">
                        <LiaTimesSolid className="mr-2" /> Cancel Trade
                    </button>
                    <button onClick={() => handleActionClick('Reassign Trade')} className="flex items-center w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-md">
                        <TbUserCheck className="mr-2" /> Reassign Trade
                    </button>
                </div>
            )}

            {/* Conditional Modal Rendering */}
            {selectedAction === 'Cancel Trade' && (
                <CancelTrade handleCancel={handleCancel} handleConfirm={handleConfirm} />
            )}
            {selectedAction === 'Reassign Trade' && (
                <ReassignTrade handleCancel={handleCancel} handleConfirm={handleConfirm} />
            )}

            <Link to="/trade-details" className="border border-gray-200 rounded-md px-4 py-2 bg-[#F59E0B] text-white">Trade Details</Link>
        </div>
    );
}