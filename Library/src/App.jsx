import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust the path if necessary
import BorrowedBooks from './components/BorrowedBooks'; // Import your components
import Student from './components/Student'; // Import additional components
import Dashboard from './components/Dashboard';
import History from './components/History';
import Returned from './components/Returned';
import Profile from './components/Profile';
import Landing from './components/Landing';
import Login from './components/Login';
// Add other imports as needed

const App = () => {
  return (
    <div className="flex min-h-screen font-fira">
      {/* <Sidebar />
      <div className="flex-grow p-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Student />} />
          <Route path="/borrowed" element={<BorrowedBooks />} />
          <Route path="/returned" element={<Returned />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </div> */}
      {/* <Landing /> */}
      <Login />
    </div>
  );
};

export default App;
