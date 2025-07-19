import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)} 
        >
          <img
            src={logo}
            alt="INWOVN Logo"
            className="h-10 md:h-12  w-auto" // ✅ Responsive height
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "hover:text-green-400 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "hover:text-green-400 transition-colors"
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "hover:text-green-400 transition-colors"
            }
          >
            About us
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-green-400 font-semibold"
                : "block hover:text-green-400 transition-colors"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "block text-green-400 font-semibold"
                : "block hover:text-green-400 transition-colors"
            }
            onClick={toggleMenu}
          >
            Service
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block text-green-400 font-semibold"
                : "block hover:text-green-400 transition-colors"
            }
            onClick={toggleMenu}
          >
            About us
          </NavLink>
        </div>
      )}
    </header>
  );
}
