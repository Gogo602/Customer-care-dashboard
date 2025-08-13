import { useState } from 'react'; 
import { FaPlus } from 'react-icons/fa';
import AllNotification from '../components/inbox/tabs/AllNotification';
import Urgent from '../components/inbox/tabs/Urgent';
import Warning from '../components/inbox/tabs/Warning';
import Info from '../components/inbox/tabs/Info';


export default function Inbox() {
    const [activeTab, setActiveTab] = useState('all'); 

    //switch button active state
    const getButtonClasses = (tabName) => {
        return `p-1 rounded-md transition-colors px-15 text-center font-bold duration-200 ease-in-out ${
            activeTab === tabName
                ? 'bg-white text-gray-800 px-15 text-center' 
                : 'text-gray-800' 
        }`;
    };

    return (
        <div className='w-full h-screen md:pl-64 mb-10 bg-gray-100 '>
                <div className='flex items-center w-full'>
                    <div className='flex items-center justify-between text-center space-x-1 border-3 border-white text-md w-full mt-1 mr-5'> {/* Added shadow-sm */}
                        <button
                            onClick={() => setActiveTab('all')}
                            className={getButtonClasses('all')}
                        >
                            All(6)
                        </button>
                        <button
                            onClick={() => setActiveTab('urgent')}
                            className={getButtonClasses('urgent')}
                        >
                            Urgent
                        </button>
                        <button
                            onClick={() => setActiveTab('warning')}
                            className={getButtonClasses('warning')}
                        >
                            Warning
                        </button>
                        <button
                            onClick={() => setActiveTab('info')}
                            className={getButtonClasses('info')}
                        >
                            Info
                        </button>
                    </div>
            </div>

            {activeTab === 'all' && <AllNotification />}
            {activeTab === 'urgent' && <Urgent />}
            {activeTab === 'warning' && <Warning />}
            {activeTab === 'info' && <Info />}
            
        </div>
    );
};

