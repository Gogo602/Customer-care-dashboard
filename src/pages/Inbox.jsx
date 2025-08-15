import { useState } from "react";
import { mockTicketsData } from "../assets/assets";
import AllNotification from '../components/inbox/tabs/AllNotification'
import Header from "../components/inbox/Header";

export default function Inbox() {
  const [activeTab, setActiveTab] = useState("All");
  const [filteredTickets, setFilteredTickets] = useState(mockTicketsData);
  const [showButtons, setShowButtons] = useState(true);
  const toggleShowButtons = (val) => setShowButtons(val);

  //switch button active state
  const getButtonClasses = (tabName) => {
    return `p-1 rounded-md transition-colors px-2 sm:px-10 text-center font-semibold sm:font-bold duration-200 ease-in-out ${
      activeTab === tabName
        ? "bg-white text-gray-800 px-5 sm:px-15 text-center"
        : "text-gray-800"
    }`;
  };

  function filterTickets(activeTab) {
    if (activeTab.toLowerCase() === "all") {
      return mockTicketsData;
    }

    return mockTicketsData.filter(
      (ticket) =>
        ticket.status.toLowerCase().trim() === activeTab.toLowerCase().trim()
    );
  }

  const buttons = [
    { name: "All", count: 6 },
    { name: "Urgent", count: 2 },
    { name: "Warning", count: 1 },
    { name: "Info", count: 3 },
  ];

  return (
    <div className="w-full h-screen lg:pl-64 mb-10 bg-gray-100">
      {showButtons && (
        <div className="flex items-center w-full">
          <div className="flex items-center justify-between flex-wrap text-center space-x-1 sm:border-3 border-white text-sm sm:text-md sm:w-full mt-1 pt-1 p-2 sm:p-0">
            {" "}
            {/* Added shadow-sm */}
            {buttons.map((button, index) => (
              <div key={index}>
                <button
                    onClick={() => {
                    setActiveTab(`${button.name}`);
                    setFilteredTickets(filterTickets(button.name));
                    console.log(filteredTickets);
                    }}
                    className={`${getButtonClasses(
                    `${button.name}`
                    )} hover:bg-gray-200`}
                >
                    {button.name}
                    {` (${button.count})`}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* rendr tab */}
      {showButtons && <Header ticketData={mockTicketsData[0]}/>}
      {activeTab && (
        <AllNotification showButtons={toggleShowButtons} data={filteredTickets} />
      )}
    </div>
  );
}