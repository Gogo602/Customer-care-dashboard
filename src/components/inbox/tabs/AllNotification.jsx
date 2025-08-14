import { useState } from 'react';
import Chat from "../all/Chat";
import List from "../all/List";
import TradeDetails from "../all/TradeDetails";
import Header from "../Header";
import UseMobile from '../../../hooks/UseMobile';
import { FaAngleDown, FaAngleUp, FaCheck } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { LiaTimesSolid } from 'react-icons/lia';
import { TbUserCheck } from 'react-icons/tb';

// mock data
const mockTicketsData = [
  {
    id: 'ticket1',
    agent: 'PaxfulAgent001',
    status: 'Urgent',
    totalmsg: "5 messages",
        chatMessages: [
    { sender: 'Customer', text: 'My transaction was not successfull but were deducted', time: 'May 12, 10:45 AM (1h 53m ago)' },
      { sender: 'Support Agent', text: 'I understand your concern. Let me check the transaction details. Could you please provide your account email?', time: 'May 12, 10:45 AM (2h ago)' },
      { sender: 'Customer', text: 'My email is user@example.com', time: 'May 12, 10:45 AM (1h 53m ago)' },
    ],
    tradeDetails: {
      ticketId: 'PAX-12345',
      platform: 'Paxful',
      paidBy: 'Aisha Vendor',
      coinType: 'Bitcoin',
      amount: '₦1,550,000',
      offerRate: '₦1750 NGN/USD',
      paymentMethod: 'Bank Transfer',
      status: 'Paid',
      tradeLink: "AFYzaQA8stc",
      timeline: ' May 12, 2025 - 10:35 AM',
      fundsStatus: 'Funded',
      transactionType: "Funds Deposited"
    },
  },
  {
    id: 'ticket2',
    agent: 'SpeedyPay',
    status: 'Warning',
    totalmsg: "5 messages",
    chatMessages: [{ sender: 'System', text: '5 messages' }],
    tradeDetails: {
      platform: 'Paxful',
      amount: '₦750,000',
      status: 'Paid',
    },
  },
  {
    id: 'ticket3',
    agent: 'CryptoExchange',
    status: 'Info',
    totalmsg: "3 messages",
    chatMessages: [{ sender: 'System', text: 'Info' }],
    tradeDetails: {
      platform: 'CryptoEx',
      amount: '₦2,500,000',
      status: 'Info',
    },
  },
  {
    id: 'ticket4',
    agent: 'QuickTrade',
    status: 'Warning',
    totalmsg: "1 messages",
    chatMessages: [{ sender: 'System', text: '1 message' }],
    tradeDetails: {
      platform: 'QuickTrade',
      amount: '₦820,000',
      status: 'Paid',
    },
  },
  {
    id: 'ticket5',
    agent: 'PaxfulAgent001',
    status: 'Urgent',
    totalmsg: "8 messages",
    chatMessages: [{ sender: 'System', text: '8 messages' }],
    tradeDetails: {
      platform: 'Paxful',
      amount: '₦3,250,000',
      status: 'Funded',
    },
  },
  {
    id: 'ticket6',
    agent: 'Binance',
    status: 'Urgent',
    totalmsg: "6 messages",
    chatMessages: [{ sender: 'System', text: '6 messages' }],
    tradeDetails: {
      platform: 'Binance',
      amount: '₦5,850,000',
      status: 'Funded',
    },
  },
];

export default function AllNotification() {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
    const isMobile = UseMobile(); 

    const handleListItemClick = (ticketData) => {
        setSelectedTicket(ticketData);
    };

    const handleBackToList = () => {
        setSelectedTicket(null);
    };

    return (
        <div className="bg-white">
            <Header />
            <div className="flex w-full min-h-screen">
                {/* Desktop View */}
                {!isMobile && (
                    <>
                        <div className="w-1/3 ">
                            {/* Pass the mock data and a click handler to the List component */}
                            <List tickets={mockTicketsData} onSelect={handleListItemClick} selectedTicketId={selectedTicket?.id} />
                        </div>
                        <div className="w-1/2 ">
                            {/* Pass the selected ticket's data to the Chat component */}
                            <Chat ticketData={selectedTicket} />
                        </div>
                        <div className="w-1/6 border border-gray-200 rounded-md">
                            {/* Pass the selected ticket's data to the TradeDetails component */}
                            <TradeDetails ticketData={selectedTicket} />
                        </div>
                    </>
                )}

                {/* Mobile View */}
                {isMobile && !selectedTicket && (
                    <div className="w-full">
                        <List tickets={mockTicketsData} onSelect={handleListItemClick} selectedTicketId={selectedTicket?.id} />
                    </div>
                )}
                {isMobile && selectedTicket && (
                    <div className="w-full flex flex-col border">
                        
                        <div className="flex items-center justify-between px-5 relative font-bold">
                            <button onClick={handleBackToList} className="p-2 bg-gray-200">
                                ← Back 
                            </button>
                            <button
                                    onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
                                    className="flex items-center border border-gray-200 rounded-md px-4 py-2"
                                >
                                    Action   {showLogoutDropdown ? <FaAngleUp className='w-3 h-3 ml-1' /> : <FaAngleDown className='w-3 h-3 ml-1' />}
                                </button>
                                {showLogoutDropdown && (
                                    <div className="absolute top-full right-2 mt-2 w-48 bg-white rounded-md shadow-md py-1 z-40 text-[15px]">
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
                        </div>
                        <div className="flex flex-col md:flex-row w-full">
                            <div className="w-full md:w-1/2">
                                <Chat ticketData={selectedTicket} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <TradeDetails ticketData={selectedTicket} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}