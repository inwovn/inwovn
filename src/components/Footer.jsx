import React from 'react';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import { FaXTwitter } from 'react-icons/fa6';



import logo from '../assets/logo.png'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          {/* Left Side */}
          <div>
            {/* <img
              src={logo}
              alt="INWOVN Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-green-400 text-sm">Make It Happen</p> */}
            <div className="mt-4 text-gray-400 text-sm space-y-1">
              <p className="hover:text-white cursor-pointer">Contact</p>
              <p className="hover:text-white cursor-pointer">About us</p>
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
              <p className="hover:text-white cursor-pointer">Cookie Preferences</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 items-end">
            <p className="text-gray-400">Follow us</p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/Inwovn/61578267932179/#"
                className="bg-gray-800 rounded-full p-2 hover:bg-green-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com/inwovn"
                className="bg-gray-800 rounded-full p-2 hover:bg-green-400 transition-colors"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/inwovn_/"
                className="bg-gray-800 rounded-full p-2 hover:bg-green-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/inwovn/about/"
                className="bg-gray-800 rounded-full p-2 hover:bg-green-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 gap-4">
          <div>
            <img
              src={logo}
              alt="INWOVN Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-green-400 text-sm">Make It Happen</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 text-xs text-gray-400">
            <span>Copyright © 2025 Inwovn - All Rights Reserved</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-full text-xs hover:bg-green-500 transition-colors"
            >
              ⬆ TO THE TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
