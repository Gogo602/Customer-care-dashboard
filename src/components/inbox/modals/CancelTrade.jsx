

export default function CancelTrade({ handleCancel, handleConfirm}) {
    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-80 md:w-120">
                <h3 className="text-lg font-bold mb-1">Cancel Trade</h3>
                <p className="text-[16px] mb-4 text-gray-600">Are you sure you want to cancel this trade? this action cannot be undone.</p>
                <div className="space-x-2 text-[16px] ">
                    <h4 className="">Reason for cancellation</h4>
                    <input type="text" name="reason" placeholder="Select reason..." className="w-full text-gray-600 text-md border rounded-md border-gray-300 px-2 py-3 outline-0"/>
                </div>
                <div className="space-x-2 text-[16px] my-4">
                    <h4 className="">Additional Note</h4>
                    <textarea name="note" placeholder="Provide any additional details about the cancellation..." className="w-full text-gray-600 text-md border rounded-md border-gray-300 px-2 py-3 outline-0"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 text-gray-700 border border-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Confirm Cancellation
                    </button>
                </div>
            </div>
        </div>
    )
}