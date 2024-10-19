import { FaBell, FaHistory, FaSearch, FaUser, FaWallet } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import Table from "./Table";
import { useState } from "react";

const Dashboard = () => {
    const [searchItem, setSearchItem] = useState("")
    return (
        <div>
            <div className="h-[100vh] w-[100%] bg-[#fff] mx-auto p-0">
                <div className="flex flex-row justify-between px-3 py-2">
                    <h1 className="text-[#021428] text-lg font-semibold">Dashboard</h1>
                    <div>
                        <input type="text" placeholder="Search for anything..." className="placeholder:text-gray-200 bg-white border-2 border-[#021428] h-11 px-5 rounded-l-md w-80" value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
                        <button className="bg-[#021428] text-white px-4 py-[14px] rounded-r-md relative bottom-[-1.2px]"><FaSearch /></button>
                    </div>
                    <FaBell className="w-8 h-8 bg-[#021428] p-2 text-white rounded-md" />
                </div>
                <div>
                    <Table searchItem={searchItem}/>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
