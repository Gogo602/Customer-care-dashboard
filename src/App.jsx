import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Inbox from './pages/Inbox';
import Dashboard from './pages/Dashboard';
import CoinExchange from './pages/CoinExchange';
import BankManagement from './pages/BankManagement';
import Settings from './pages/Settings';
import {ToastContainer} from 'react-toastify'


function App() {
  return (
      <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <ToastContainer />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/market" element={<CoinExchange />} />
            <Route path="/bank-management" element={<BankManagement />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
