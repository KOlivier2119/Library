import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust the path if necessary
import BorrowedBooks from './components/BorrowedBooks'; // Import your components
import Students from './components/Students'; // Import additional components
import Dashboard from './components/Dashboard';
import History from './components/History';
import Returned from './components/Returned';
import Profile from './components/Profile';
// Add other imports as needed

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/borrowed" element={<BorrowedBooks />} />
          <Route path="/returned" element={<Returned />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
        <BorrowedBooks />
      </div>
    </div>
  );
};

export default App;
