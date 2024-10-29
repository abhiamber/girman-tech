// Navbar.js
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // Use NavLink for active styles
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
import { Search } from "lucide-react";

const Navbar = ({ setShowInput, showInput, handleEnterPress }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEnterPress(searchTerm);
    }
  };
  return (
    <header className="flex items-center justify-between px-40 py-4 shadow-lg bg-white">
      <div className="flex items-center text-2xl font-bold">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <img src={logoText} alt="Logo Text" className="h-10 w-auto ml-2" />
        </Link>
      </div>

      {showInput ? (
        <div className="flex w-3/4 sm:w-1/3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 text-gray-300" />
            <input
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-full pl-10 border border-gray-200 rounded py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>
        </div>
      ) : (
        <nav className="flex space-x-4">
          <NavLink
            to="/search"
            onClick={() => setShowInput(true)}
            className={({ isActive }) =>
              `text-gray-700 hover:underline text-blue-700 ${
                isActive || location.pathname === "/"
                  ? "text-blue-700 underline"
                  : ""
              }`
            }
          >
            SEARCH
          </NavLink>
          <NavLink
            to="https://girmantech.com"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 hover:underline ${
                isActive ? "underline" : ""
              }`
            }
          >
            WEBSITE
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/company/girmantech/"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 hover:underline ${
                isActive ? "underline" : ""
              }`
            }
          >
            LINKEDIN
          </NavLink>
          <a
            href="mailto:contact@girmantech.com"
            className="hover:text-blue-700 hover:underline text-gray-700"
          >
            CONTACT
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
