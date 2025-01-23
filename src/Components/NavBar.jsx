import { useState } from 'react';
import { IoLogoBitcoin } from 'react-icons/io';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSetting = ()=>{
    setIsSettingOpen(!isSettingOpen)
  }

  return (
    <div>
      <nav className="flex bg-blue-600 text-white justify-between py-4 px-6 items-center">
        {/* Toggle button for mobile view */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Logo */}
        <h1 className="flex font-bold text-xl">
          <IoLogoBitcoin className="text-3xl mr-2" />
          LOGO
        </h1>

        {/* Menu items (on mobile, they toggle visibility) */}
        <ul className="hidden md:flex text-lg gap-4">
          <li className="hover:text-gray-300 cursor-pointer">HOME</li>
          <li className="hover:text-gray-300 cursor-pointer">FIND JOBS</li>
          <li className="hover:text-gray-300 cursor-pointer">FIND COMPANIES</li>
          <li className="hover:text-gray-300 cursor-pointer">FIND CANDIDATES</li>
          <li className="hover:text-gray-300 cursor-pointer">BLOG</li>
        </ul>

        {/* Avatar */}
        <div title='Open Setting' className="text-2xl rounded-full bg-gray-400 p-3 w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleSetting}>
          R
        </div>
      </nav>

      {/* Dropdown menu for mobile view */}
      <ul
        className={`bg-white w-fit text-black p-4 ml-9 absolute top-16 left-0 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <li className="my-3 font-bold">HOME</li>
        <li className="my-3 font-bold">FIND JOBS</li>
        <li className="my-3 font-bold">FIND COMPANIES</li>
        <li className="my-3 font-bold">FIND CANDIDATES</li>
        <li className="my-3 font-bold">BLOG</li>
      </ul>

      <ul className={`bg-white w-fit text-black p-4 ml-9 absolute top-16 right-10 ${isSettingOpen ? 'block' : 'hidden'}`}>
      <li className="my-3 font-bold">Profile</li>
        <li className="my-3 font-bold">Account</li>
        <li className="my-3 font-bold">Dashboard</li>
        <li className="my-3 font-bold">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
