import { FaBell, FaHistory, FaUser, FaWallet } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import Table from "./Table";

const Dashboard = () => {
    return (
        <div>
            <div className="h-[100vh] w-[100%] bg-[#EEF3F9] mx-auto p-0">
                <div className="flex flex-row justify-between px-3 py-2">
                    <h1 className="text-[#021428] text-lg font-semibold">History</h1>
                    <input type="text" placeholder="Search for anything..." className="placeholder:text-gray-200 bg-white py-2 px-5 rounded-lg w-96" />
                    <FaBell className="w-8 h-8 bg-[#021428] p-2 text-white rounded-md" />
                </div>
                <div>
                    <Table />
                </div>
            </div>
        </div>

    )
}

export default Dashboard
