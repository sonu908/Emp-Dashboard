import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Employees() {
  const initialEmployeeDetails = [
    { empId: "123", name: "John", role: "Developer", dob: "1990-01-15" },
    { empId: "456", name: "Jane", role: "Designer", dob: "1985-03-22" },
    {
      empId: "789",
      name: "Bob",
      role: " Analyst",
      dob: "1995-01-30",
    },
    {
      empId: "105",
      name: "Alice",
      role: " Manager",
      dob: "1995-05-22",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState(
    initialEmployeeDetails
  );

  const handleSearch = () => {
    const filteredEmployees = initialEmployeeDetails.filter((employee) =>
      Object.values(employee).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setEmployeeDetails(filteredEmployees);
  };

  return (
    <div className="card w-full text-neutral-content text-xs">
      <div className="card w-full text-neutral-content">
        <div className="w-full flex justify-center p-3 bg-[#5E5E5E82] rounded-3xl">
          <input
            type="text"
            className="w-10/12 bg-transparent"
            value={searchTerm}
            placeholder="Search with name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>

      {employeeDetails.map((employee) => (
        <div
          key={employee.empId}
          className="w-full p-3 bg-[#5E5E5E82] rounded-3xl mt-5"
        >
          <div>
            <div className="flex justify-around p-1">
              <button>
                <p>EMP ID </p>
              </button>
              <button>
                <span>:</span>
                {employee.empId}
              </button>
            </div>
            <div className=" flex justify-around p-1">
              <button>
                <p>Name </p>
              </button>
              <button className=" font">
                <span>:</span>
                {employee.name}
              </button>
            </div>
            <div className=" flex justify-around p-1">
              <button>
                <p>Role </p>
              </button>
              <button className=" text-[#86591D]">
                <span>:</span>
                {employee.role}
              </button>
            </div>
            <div className=" flex justify-around p-1">
              <button>
                <p>DOB </p>
              </button>
              <button>
                <span>:</span>
                {employee.dob}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Employees;
