const Table = () => {
    return (
        <div className="flex justify-center items-center w-[90%] m-auto pt-3">
          <table className="w-full border border-gray-300">
            <tr className="bg-[#021428] text-white ">
                <th className="py-4">Stud_Id</th>
                <th className="py-4">Stud_name</th>
                <th className="py-4">Class</th>
                <th className="py-4">Book_No</th>
                <th className="py-4">Book_Name</th>
                <th className="py-4">Borrowing_Date</th>
                <th className="py-4">Return_Date</th>
                <th className="py-4">Status</th>
            </tr>
            <tr></tr>
          </table>
        </div>
    )
}

export default Table
