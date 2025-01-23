import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RiVercelFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10"> 
      <div className="container mx-auto flex flex-col justify-between items-center"> 
        <div className="flex flex-col mb-6 md:mb-0"> 
          <h1 className="text-2xl font-bold mb-4">
            <FaLayerGroup className="inline-block mr-2" /> Get the latest news!
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
          </p>
          <div className="flex items-center mt-4">
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="border border-gray-700 rounded-md px-4 py-2 mr-2" 
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">SIGN UP</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col"> 
            <h2 className="text-lg font-semibold mb-4">Service</h2>
            <ul>
              <li><a href="#" className="hover:text-blue-500">1on1 Coaching</a></li>
              <li><a href="#" className="hover:text-blue-500">Company Review</a></li>
              <li><a href="#" className="hover:text-blue-500">Accounts Review</a></li>
              <li><a href="#" className="hover:text-blue-500">HR Consulting</a></li>
              <li><a href="#" className="hover:text-blue-500">SEO Optimization</a></li>
            </ul>
          </div>
          <div className="flex flex-col"> 
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li><a href="#" className="hover:text-blue-500">About</a></li>
              <li><a href="#" className="hover:text-blue-500">Meet the Team</a></li>
              <li><a href="#" className="hover:text-blue-500">Account Review</a></li>
            </ul>
          </div>
          <div className="flex flex-col"> 
            <h2 className="text-lg font-semibold mb-4">Helpful Links</h2>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
            </ul>
          </div>
          <div className="flex flex-col"> 
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Accessibility</a></li>
              <li><a href="#" className="hover:text-blue-500">Returns Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Hiring Statistics</a></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center mt-6 md:mt-0">
          <a href="#" className="text-blue-500 mr-4"><FaFacebook className="text-lg" /></a>
          <a href="#" className="text-blue-500 mr-4"><FaInstagramSquare className="text-lg" /></a>
          <a href="#" className="text-blue-500 mr-4"><FaTwitter className="text-lg" /></a>
          <a href="#" className="text-blue-500 mr-4"><FaGithub className="text-lg" /></a>
          <a href="#" className="text-blue-500"><RiVercelFill className="text-lg" /></a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6"> 
        <p>&copy; 2022. Miracle Infosoft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;