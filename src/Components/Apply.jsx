import React from "react";
import { Link } from "react-router-dom";
import { FaGofore } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Apply = () => {
  return (
    <div className="mb-7">
      <div className="bg-black text-white p-5 pl-20 text-lg">
        <h1>
          <Link
            to="/"
            className="hover:bg-white hover:text-black hover:rounded-lg p-2 transition-all duration-300"
          >
            Home
          </Link>
          <span> / Log in</span>
        </h1>
      </div>
      <div className="flex justify-center items-center mx-auto w-full max-w-sm shadow-xl p-6 bg-white rounded-xl mt-10">
        <div className="w-full">
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://jobx-app.vercel.app/logo1.png"
              alt="logo"
              className="h-20 mb-4"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Email Here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mb-4">
            Sign In
          </button>
          <p className="text-center text-sm mb-4">or sign in with</p>
          <div className="flex justify-center space-x-4 text-2xl">
            <FaGofore className="text-blue-500 cursor-pointer hover:text-blue-600 bg-red-400 p-1 text-4xl rounded-lg" />
            <FaGithubSquare className="text-gray-800 cursor-pointer hover:text-black text-4xl" />
          </div>
          <div className="text-center mt-4">
            <span className="text-sm">Need an account? </span>
            <Link to="" className="text-blue-500 hover:text-blue-600">
              Join us Now &gt;&gt;
            </Link>
              <Link to="" className="text-sm text-black-500 hover:text-blue-600">
                Forgot Password?
              </Link>
            <div className="mt-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
