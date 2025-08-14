

export default function List({ tickets, onSelect, selectedTicketId }){
    return (
    <div className="border-r border-gray-300  min-h-screen">
      {/* Map over the tickets array to create list items */}
      {tickets && tickets.map((ticket) => (
        <div 
          key={ticket.id}
          onClick={() => onSelect(ticket)} 
          className={`flex items-center justify-between space-x-5 px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${selectedTicketId === ticket.id ? 'bg-gray-100' : ''}`}
        >
            <div className="space-y-2">
                <p className="font-bold text-[14px]">{ticket.agent}</p>
                <p className="text-[12px] text-gray-500">₦{ticket.tradeDetails.amount}</p>
            </div>
            <div  className="text-[12px] space-y-1">
                <p>{ticket.tradeDetails.platform}</p>
                <p className="bg-green-100 text-green-500 rounded-xl px-2 py-1">{ticket.tradeDetails.fundsStatus}</p>
            </div>
            <div className="space-y-2">
                <p className={`px-2 py-1 rounded-md text-[10px] font-semibold ${
                    ticket.status === 'Urgent' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'
                 }`}>
                    {ticket.status}
                  </p>
                  <p className="text-[10px]">{ticket.totalmsg}</p>
            </div>
        </div>
      ))}
    </div>
  );
};