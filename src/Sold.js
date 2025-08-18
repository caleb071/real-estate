import React from "react";
import { Link } from "react-router-dom";
import { faBell, faCog, faBars, faHouse, faArrowLeft, faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mansion3 from './assets/mansion3.jpeg';
import mansion4 from './assets/mansion4.jpg';

function Sold() {
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
                    <Link to="/try" className="text-gray-400 font-bold hover:bg-slate-300 p-2 rounded">Uploaded</Link>
                    <Link to="/Admin" className="text-gray-500 hover:text-blue-600 font-medium ml-10 mt-5">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back
                    </Link>
                </div>
                {/* Sold properties */}
                <div className="flex flex-col gap-6 p-8 w-full">
                    {/* card 1 */}
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center gap-4">
                        <img src={mansion3} alt="mansion" className="w-40 h-32 object-cover rounded-lg" />
                        <div>
                            <h4 className="font-bold text-lg mb-2">4BR Mansion</h4>
                            <p className="text-gray-700">Sold for 45.4M</p>
                            <p className="text-gray-700">Location: Karen</p>
                            <p className="text-gray-700">payment: check<FontAwesomeIcon icon={faCheckDouble} className="ml-2 text-xl text-green-500">
                              </FontAwesomeIcon></p>

                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center gap-4">
                        <img src={mansion4} alt="mansion" className="w-40 h-32 object-cover rounded-lg" />
                        <div>
                            <h4 className="font-bold text-lg mb-2">5BR Mansion</h4>
                            <p className="text-gray-700">Sold for 52M</p>
                            <p className="text-gray-700">Location: Kiambu</p>
                            <p className="text-gray-700">payment: morgage<FontAwesomeIcon icon={faCheck} className="ml-2 text-xl text-gray-500">
                              </FontAwesomeIcon></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sold;