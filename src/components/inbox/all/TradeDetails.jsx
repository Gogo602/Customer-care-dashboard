
export default function TradeDetails({ ticketData }) {

  if (!ticketData) {
    return <div className="p-4 text-center text-gray-500">Select a ticket to view details.</div>;
  }

  return (
    <div className="border border-gray-200 px-3 rounded-md w-full min-h-screen space-y-2">
      {/* Use the tradeDetails object from the ticketData prop */}
      <h3 className="font-bold text-xl">Trade Details</h3>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Ticket ID:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.ticketId}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Platform:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.platform}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Paid by:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.paidBy}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Coin Type:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.coinType}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Amount:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.amount}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Offer Rate:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.offerRate}</p>
          </div>
       <div className="text-[12px]">
            <h2 className="text-gray-400">Payment Method:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.paymentMethod}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Status:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.status}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Trade LInk:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.tradeLink}</p>
      </div>
      <div className="text-[12px]">
            <h2 className="text-gray-400">Timeline:</h2> 
      </div>
      <div className="text-[12px] border-l-3 pl-3 border-green-500">
            <h2 className="text-gray-400">Trades Opened:</h2> 
            <p className="font-bold text-[10px]">{ticketData.tradeDetails.timeline}</p>
      </div>
      <div className="text-[12px] border-l-3 pl-3 border-blue-500">
            <h2 className="text-gray-400">Funds Deposited:</h2> 
            <p className="font-bold">{ticketData.tradeDetails.transactionType}</p>
      </div>
    </div>
  );
};
