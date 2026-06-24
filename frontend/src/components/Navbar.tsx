import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navConstants } from "../utils/Constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyles =
    "border-2 border-gray-500 px-6 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent hover:scale-105";

  return (
    <header className="py-6 shadow-sm">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-32">
        {/* Logo */}
        <h2 className="text-xl font-bold cursor-pointer">
          Hotel Kailash
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navConstants.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:underline hover:underline-offset-4 ${
                    isActive
                      ? " font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className={buttonStyles}>Login</button>
          <button className={buttonStyles}>Sign Up</button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pt-6 pb-4 bg-white">
          <ul className="flex flex-col gap-6">
            {navConstants.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <button className={buttonStyles}>Login</button>
            <button className={buttonStyles}>Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;