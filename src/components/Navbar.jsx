import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-5 border-b border-gray-300 sm:p-5 bg-white shadow-lg">
      <nav className="container mx-auto flex justify-between  items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold text-black mx-10">ai/acc🇮🇳</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-400 text-black text-sm cursor-pointer">Home</li>
          <li className="hover:text-gray-400 text-black text-sm cursor-pointer">About</li>
          <li className="hover:text-gray-400 text-black text-sm cursor-pointer">Events</li>
          <li className="hover:text-gray-400 text-black text-sm cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 mt-2">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-gray-400 text-black text-sm cursor-pointer">Home</li>
            <li className="hover:text-gray-400 text-black text-sm cursor-pointer">About</li>
            <li className="hover:text-gray-400 text-black text-sm cursor-pointer">Events</li>
            <li className="hover:text-gray-400 text-black text-sm cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
