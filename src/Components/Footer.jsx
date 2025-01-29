import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="container mx-auto flex flex-col lg:flex-row sm:block justify-between">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold mb-3">
            <FaLayerGroup className="inline-block mr-2" /> Get the latest news!
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
          <p className="text-gray-400 text-wrap mb-4 lg:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
            cupiditate quae nam molestias.
          </p>
          <div className="flex flex-col lg:flex-row items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-700 rounded-md px-4 py-2 mb-4 lg:mb-0 lg:mr-2"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
              SIGN UP
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 mb-8 text-sm">
          <div>
            <h2 className="text-lg font-semibold mb-5">Service</h2>
            <ul>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  1on1 Coaching
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Company Review
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Accounts Review
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  HR Consulting
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-5">Company</h2>
            <ul>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Meet the Team
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Account Review
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-5">Helpful Links</h2>
            <ul>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  FAQs
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-5">Legal</h2>
            <ul>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Accessibility
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Returns Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Refund Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:text-blue-500">
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <a href="#" className="text-blue-500">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#" className="text-blue-500">
            <FaInstagramSquare className="text-3xl" />
          </a>
          <a href="#" className="text-blue-500">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="#" className="text-blue-500">
            <FaGithub className="text-3xl" />
          </a>
          <a href="#" className="text-blue-500">
            <RiVercelFill className="text-3xl" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-6 text-xs">
        <p>&copy; 2022. Miracle Infosoft. All rights reserved.</p>
        <div className="mt-4 md:mt-0">
          <span className="mr-4 cursor-pointer">Terms & Conditions</span>
          <span className="mr-4 cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
