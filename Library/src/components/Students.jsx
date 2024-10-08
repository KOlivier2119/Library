import { FaBell, FaHistory, FaUser, FaWallet } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import Table from "./Table";
const Students = () => {
    return (
        <div>
            <div className="flex flex-row overflow-x-hidden">
                <div className="h-[100vh] w-[20%] flex flex-col gap-8 bg-[#021428] text-white text-lg py-3 px-4 justify-center">
                    <div className="flex flex-row gap-2">
                        <IoStatsChart className="w-7 h-7" />
                        <h1>Dashboard</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FiUsers className="w-7 h-7" />
                        <h1>Students</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FaWallet className="w-7 h-7" />
                        <h1>Borrowed</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <MdOutlineAssignmentReturned className="w-7 h-7" />
                        <h1>Returned</h1>
                    </div>
                    <div className="flex flex-row gap-2">

                        <IoMdAddCircleOutline className="w-7 h-7" />
                        <h1>Add Book</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FaHistory className="w-6 h-6" />
                        <h1>History</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FaUser className="w-7 h-7" />
                        <h1>Profile</h1>
                    </div>
                </div>
                <div className="h-[100vh] w-[80%] bg-[#EEF3F9]">
                    <div className="flex flex-row justify-between px-3 py-2 ">
                        <h1 className="text-[#021428] text-lg font-semibold">History</h1>
                        <input type="text" placeholder="Search for anything..." className="placeholder:text-gray-200 bg-white py-2 px-5 rounded-lg w-96" />
                        <FaBell className="w-8 h-8 bg-[#021428] p-2 text-white rounded-md" />
                    </div>
                 <div>
                    <Table />
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Students
