function Navbar() {
    return (
      <header className="text-white p-5 border-b border-gray-300">
        <nav className="container mx-auto flex justify-center items-center space-x-20">
          <h1 className="text-l font-bold text-black">ai/acc🇮🇳</h1>
          <ul className="flex space-x-8">
            <li className="hover:text-gray-400 text-black text-sm">Home</li>
            <li className="hover:text-gray-400 text-black text-sm">About</li>
            <li className="hover:text-gray-400 text-black text-sm">Events</li>
            <li className="hover:text-gray-400 text-black text-sm">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
  