import React from "react";

import { MdAddLocation } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobApply from "./JobApply";
const ViewJob = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const jobRoles = [
    "Node Js Developer",
    "Content Writer",
    "Web Developer",
    "UI/UX Designer",
    "Digital Marketing",
  ];
  return (
    <div className="bg-gray-300">
      {/* Header *****************************************  */}
      <div className="bg-black text-white p-5 pl-20 text-lg">
        <h1>
          <Link
            to="/"
            className="hover:bg-white hover:text-black hover:rounded-lg p-2 transition-all duration-300"
          >
            Home
          </Link>
          <span> / Jobname</span>
        </h1>
      </div>
      {/* Main ************************* */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10">
        <div className="md:flex md:space-x-8">
          {/* Main Content Section */}
          <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-md mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="https://jobx-app.vercel.app/static/media/logo1.db856b2a8ff723c5dd79.png"
                alt=""
                className="w-16 h-16 object-contain mr-4"
              />
              <p className="text-gray-500">Full time/onsite</p>
            </div>
            <h1 className="text-2xl font-bold mb-2">Company Name</h1>
            <p className="text-gray-700 flex items-center mb-4">
              <MdAddLocation className="mr-2" /> Location
            </p>

            <h2 className="text-xl font-semibold mb-2">Role of Employees</h2>
            <p className="text-gray-700 mb-4">Roles and Responsibilities</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Assist with job postings, resume screening, and initial
                candidate screening.
              </li>
              <li>
                Schedule interviews and coordinate communication by calling the
                candidates.
              </li>
              <li>Calling the leads.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">
              Qualifications and Skills
            </h3>
            <p className="text-gray-700 mb-4">
              Currently pursuing a degree in Human Resources, Business
              Administration, or a related field (or recently graduated). Strong
              organizational skills with the ability to manage multiple tasks
              simultaneously. Good communication skills.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                Java
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                Python
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                C++
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                MERN Stack
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                Data Structure
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                Database
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                Management
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Availability:</span>
              <span>Full time/onsite</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="font-semibold">Experience Level:</span>
              <span>Fresher</span>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-300 transition duration-300">
              Apply Now
            </button>
          </div>

          {/* Sidebar Section */}
          <aside className="md:w-1/3 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center bg-blue-600 p-2 hover:cursor-pointer hover:bg-blue-300">
              APPLY NOW
            </h1>

            <div className="space-y-4 p-4">
              <div>
                <h3 className="font-semibold">Views</h3>
                <p>7</p>
              </div>
              <div>
                <h3 className="font-semibold">Applicants</h3>
                <p>0</p>
              </div>
              <div>
                <h3 className="font-semibold">Job Type</h3>
                <p>Full time/Onsite</p>
              </div>
              <div>
                <h3 className="font-semibold">Salary</h3>
                <p>Not Disclosed</p>
              </div>
              <div>
                <h3 className="font-semibold">Post Date</h3>
                <p>12 Apr, 2024</p>
              </div>
            </div>

            <div className="p-4">
              <button className="mt-2 bg-gray-200 text-gray-800 py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-300 transition duration-300 p-4">
                <span>BOOKMARK</span> <FaHeart />
              </button>
            </div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <a href="#" className="text-blue-500">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-pink-500">
                <FaInstagramSquare className="text-2xl" />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-800">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-black">
                <RiVercelFill className="text-2xl" />
              </a>
            </div>
          </aside>
        </div>
      </div>
      {/* footer ********************************************* */}
      <div className="p-20">
      <JobApply/>
      </div>
    </div>
  );
};

export default ViewJob;
