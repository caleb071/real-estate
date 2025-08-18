import { faBell, faCog, faBars, faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';


const lineData = [
  { name: 'Jan', users: 10 },
  { name: 'Feb', users: 14 },
  { name: 'Mar', users: 20 },
  { name: 'Apr', users: 15 },
  { name: 'may', users: 25 },
  { name: 'jun', users: 31 },
  { name: 'Jul', users: 28 },
  { name: 'Aug', users: 35 },
];

const pieData = [
  { name: 'Commercial', value: 13 },
  { name: 'Apartments', value: 15 },
  { name: 'mansions', value: 15 },
  { name: 'sold', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Admin() {
  return (
    <>
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
          {/* <img src={Photo} alt="profile" className="w-8 h-8 rounded-full" /> */}
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
          <Link to="/" className="text-gray-500 hover:text-blue-600 font-medium ml-10 mt-5">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back
          </Link>
        </div>

        <div className="flex flex-col p-8 text-white w-full">
          <div className="p-6 bg-transparent min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-yellow-500 p-4 rounded-lg shadow-md">
                <h2 className="text-gray-500 text-sm">Total Users</h2>
                <p className="text-2xl text-black font-bold">113</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg shadow-md hover:bg-yellow-500">
                <h2 className="text-gray-500 text-sm">Properties</h2>
                <p className="text-2xl text-black font-bold">53</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg shadow-md hover:bg-yellow-500">
                <h2 className="text-gray-500 text-sm">Sold Properties</h2>
                <p className="text-2xl text-black font-bold">15</p>
              </div>
            </div>
            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Chart */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2 text-black">User Growth</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              {/* Pie Chart */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2 text-black">Property Categories</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
