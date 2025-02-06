import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                    {/* Logo with Link */}
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        <h1>{props.title}</h1>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 hover:text-blue-600"
                                    : "text-gray-700 hover:text-blue-600"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 hover:text-blue-600"
                                    : "text-gray-700 hover:text-blue-600"
                            }
                        >
                            About Us
                        </NavLink>
                        
                        <NavLink
                            to="/login"
                            className="btn1 bg-blue-600 text-white px-3 py-1 border rounded-2xl hover:bg-blue-800"
                        >
                            Register
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Header;