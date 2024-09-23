import { FaClock, FaCross } from "react-icons/fa";
import Students from "./Students";

const Table = () => {
    return (
        <div className="flex justify-center items-center w-[90%] m-auto pt-3">
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-[#021428] text-white border border-gray-300 px-2">
                        <th className="py-4">Stud_Id</th>
                        <th className="py-4">Stud_name</th>
                        <th className="py-4">Class</th>
                        <th className="py-4">Book_No</th>
                        <th className="py-4">Book_Name</th>
                        <th className="py-4">Borrowing_Date</th>
                        <th className="py-4">Return_Date</th>
                        <th className="py-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((student, index) => {
                        return (
                            <tr key={index} className="border border-gray-300 text-[#021428] font-semibold">
                                <td className="py-3 px-4 text-start">{student.Id}</td>
                                <td className="py-3 px-4 text-start">{student.name}</td>
                                <td className="py-3 px-4 text-start">{student.class}</td>
                                <td className="py-3 px-4 text-start">{student.book_no}</td>
                                <td className="py-3 px-4 text-start">{student.book_name}</td>
                                <td className="py-3 px-4 text-start">{student.borrowing}</td>
                                <td className="py-3 px-4 text-start">{student.returning}</td>
                                <td><FaClock className="text-[#FA8701]"/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
