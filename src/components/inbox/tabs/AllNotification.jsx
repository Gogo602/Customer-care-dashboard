import { useState } from "react";
import Chat from "../all/Chat";
import List from "../all/List";
import TradeDetails from "../all/TradeDetails";
import UseMobile from "../../../hooks/UseMobile";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { TbUserCheck } from "react-icons/tb";
import Action from "../Action";

export default function AllNotification({ data, showButtons }) {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const isMobile = UseMobile();
  const handleListItemClick = (ticketData) => {
    setSelectedTicket(ticketData);
  };
  isMobile && selectedTicket ? showButtons(false) : "";

  const handleBackToList = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="bg-white">
      <div className="flex w-full min-h-screen">
        {/* Desktop View */}
        {!isMobile && (
          <>
            <div className="w-1/3 ">
              {/* Pass the mock data and a click handler to the List component */}
              <List
                tickets={data}
                onSelect={handleListItemClick}
                selectedTicketId={selectedTicket?.id}
              />
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
            <List
              tickets={data}
              onSelect={handleListItemClick}
              selectedTicketId={selectedTicket?.id}
            />
          </div>
        )}
        {isMobile && selectedTicket && (
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between mx-5 my-2 relative font-bold">
                <button
                    onClick={() => {
                    handleBackToList();
                    showButtons(true);
                    }}
                    className="p-2 bg-gray-200 rounded-md"
                >
                    ← Back
                </button>
                <Action />
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