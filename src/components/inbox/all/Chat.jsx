import { ImAttachment } from "react-icons/im";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Chat({ ticketData }) {
  if (!ticketData) {
    return <div className="p-4 text-center text-gray-500">Select a ticket to view chat.</div>;
  }

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-5">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {ticketData.chatMessages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'Customer' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'Customer' 
                  ? 'bg-[#F59E0B] text-white' 
                  : 'bg-[#F3F4F6] text-white-800'
              }`}
            >
              <div className="font-bold text-sm mb-1">{message.sender}</div>
              <p className="text-sm">{message.text}</p>
              <div className={`text-xs mt-1 text-right ${message.sender === 'Customer' ? 'text-white' : 'text-gray-400'}`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 flex items-center space-x-3">
        {/* Chat input */}
        <input
          type="text"
          placeholder="Type your message here..."
          className=" h-20 w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none"
        />
        <div>
            <button>
                <ImAttachment className="w-8 h-8 bg-white p-2 rounded-full"/>
            </button>
            <button>
                <IoMdHeartEmpty className="w-8 h-8 text-white rotate-225 bg-[#F59E0B] p-2 rounded-full"/>
            </button>
        </div>
          </div>
          <p className='px-6 text-sm text-gray-500'>Press Enter to send, Shift+Enter for new line</p>
    </div>
  );
}