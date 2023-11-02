import React, { useState } from "react";
import Kloudstack_logo from "../img/Kloudstac_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute top-0 right-0 left-0 z-[100] w-full app_navbar bg-white text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <Link to="/" className="flex items-center py-4 px-2 ">
            <img
              src={Kloudstack_logo}
              alt=""
              srcSet=""
              className="h-6 md:h-12"
            />
          </Link>

          <div className="flex space-x-4">
            {/*------------------ Navbar links ------------------- */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/about"
                className={`py-2 px-6 text-xl hover:text-custom_green ${
                  selectedOption === "About" ? "text-custom_green" : ""
                }`}
                onClick={() => handleMenuClick("About")}
              >
                About
              </Link>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="py-5 px-6 text-xl cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className=" flex items-center">
                    {" "}
                    Courses{" "}
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {/*------------- Dropdown menu -------------------- */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-4 w-max  bg-white app_navbar_dropdown z-111 rounded-md">
                      <Link
                        to="/courses/pythonml"
                        className="block px-4 py-2 hover:text-custom_green hover:bg-slate-200"
                        onClick={toggleDropdown}
                      >
                        AI and ML with Python
                      </Link>
                      <Link
                        to="/courses/pythongenai"
                        className="block px-4 py-2 hover:text-custom_green hover:bg-slate-200"
                        onClick={toggleDropdown}
                      >
                        Generative AI with Python and AWS
                      </Link>
                      <Link
                        to="/courses/data"
                        className="block px-4 py-2 hover:text-custom_green hover:bg-slate-200"
                        onClick={toggleDropdown}
                      >
                        Multi-Cloud Data Engineer
                      </Link>
                      <Link
                        to="/courses/networking"
                        className="block px-4 py-2 hover:text-custom_green hover:bg-slate-200"
                        onClick={toggleDropdown}
                      >
                       Multi-Cloud Network Engineer 
                      </Link>
                      <Link
                        to="/courses/security"
                        className="block px-4 py-2 hover:text-custom_green hover:bg-slate-200"
                        onClick={toggleDropdown}
                      >
                        Multi-Cloud Security Engineer
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to="/contact"
                className={`py-2 px-6 text-xl hover:text-custom_green ${
                  selectedOption === "Contact" ? "text-custom_green" : ""
                }`}
                onClick={() => handleMenuClick("Contact")}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ---------------- Hamburger menu  (shown on mobile) -------------------- */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ------------Navbar for Mobile menu -----------------------*/}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/about"
                className="block w-full text-left py-2 px-4"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <div className="">
                <div className="block py-2 px-4" onClick={toggleDropdown}>
                  <div className="flex items-center">
                    {" "}
                    Courses{" "}
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="mt-2 p-2 md:p-0 md:w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                      to="/courses/pythonml"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={toggleMobileMenu}
                    >
                       AI and ML with Python
                    </Link>
                    <Link
                      to="/courses/pythongenai"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={toggleMobileMenu}
                    >
                      Generative AI with Python and AWS
                    </Link>
                    <Link
                      to="/courses/data"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={toggleMobileMenu}
                    >
                      Multi Cloud Data
                    </Link>
                    <Link
                      to="/courses/networking"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={toggleMobileMenu}
                    >
                      Multi Cloud Networking
                    </Link>
                    <Link
                      to="/courses/security"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={toggleMobileMenu}
                    >
                      Multi Cloud Security
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="block py-2 px-4"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
