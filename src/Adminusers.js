import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faBell, faCog, faBars, faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

function Adminusers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      {/* Top Navigation */}
      <nav className="bg-blue-950 p-1 flex justify-between items-center">
        <p className="m-1 p-2 text-white text-lg font-medium">
          Calebian <span className="text-yellow-400">properties</span>
        </p>
        <FontAwesomeIcon icon={faBars} className="m-4 text-white" />
        <input
          className="bg-transparent p-2 px-4 rounded-lg w-1/2 border border-white text-white"
          type="text"
          placeholder="Search"
        />
        <div className="flex items-center gap-6 pr-4">
          <FontAwesomeIcon icon={faBell} className="text-yellow-500 cursor-pointer" />
          <FontAwesomeIcon icon={faCog} className="text-yellow-500 cursor-pointer" />
        </div>
      </nav>

      {/* Body Section */}
      <div className="flex bg-blue-900 min-h-screen">
        {/* Sidebar */}
        <div className="flex flex-col bg-blue-950 p-4 w-60 text-left">
          <Link to="/Admin" className="text-yellow-500 flex items-center font-bold hover:bg-slate-300 p-2 rounded">
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            Dashboard
          </Link>
          <Link to="/adminusers" className="text-gray-400 font-bold hover:bg-slate-300 p-2 rounded">Users</Link>
          <Link to="/sold" className="text-gray-400 font-bold hover:bg-slate-300 p-2 rounded">Sold-units</Link>
          <Link to="/analysis" className="text-gray-400 font-bold hover:bg-slate-300 p-2 rounded">Analytics</Link>
          <Link to="/Try" className="text-gray-400 font-bold hover:bg-slate-300 p-2 rounded">Uploaded</Link>
          <Link to="/Admin" className="text-gray-500 hover:text-blue-600 font-medium ml-10 mt-5">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back
          </Link>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex flex-col p-8 text-white w-full">
          <h2 className="text-xl font-bold mb-4">Registered Users</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-black rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id} className="border-b hover:bg-gray-100">
                      <td className="py-2 px-4">{user.username || user.name}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">{user.role}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4">cannot get users</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminusers;
