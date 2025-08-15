import { CiCircleCheck,  CiCircleAlert} from "react-icons/ci";
import TradeActionMenu from "./Action";


export default function Header({ ticketData }) {
        
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
                        {ticketData && <p className="font-bold">{ticketData.agent}</p>}
                        {ticketData && <p>Paid : {ticketData.tradeDetails.paidBy}</p>}
                    </div>
                    { ticketData && <div className={`rounded-xl px-2 ${
                            ticketData.status === "Urgent" ? "text-red-600 bg-red-200" : "text-amber-600 bg-amber-200"
                        }`}>
                        {ticketData.status}
                    </div>}
                    <div className="">
                        {ticketData && <p>Task ID: {ticketData.tradeDetails.ticketId}</p>}
                        {ticketData && <p>Trade Link: {ticketData.tradeDetails.tradeLink}</p>}
                    </div>
                    <div className="hidden lg:inline-block">
                        Open 72d 1hr ago
                    </div>
                    
                    <TradeActionMenu />                    
                </div>
            </div>
        </div>
    )
}