import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Inbox from './pages/Inbox';


function App() {
  return (
      <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
