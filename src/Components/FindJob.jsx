import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaThList, FaThLarge, FaHeart } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";

const FindJob = () => {
  let arr = ["React Js Developer ", "Content Developer", "Web Developer"];
  return (
    <div className="mb-60">
      {/* Header */}
      <div className="bg-black text-white p-5 pl-5 md:pl-20 text-lg">
        <h1>
          <Link
            to="/"
            className="hover:bg-white hover:text-black hover:rounded-lg p-2 transition-all duration-300"
          >
            Home
          </Link>
          <span> / More Jobs / Center Name</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="mt-5 mx-auto w-[90%] flex flex-col lg:flex-row justify-between">
        {/* Filters Section */}
        <aside className="lg:w-[30%] w-full border-2 border-gray-300 mb-10 lg:mb-0 h-fit">
          {/* Filters Header */}
          <div className="flex justify-between p-3 border-b-2 border-gray-300">
            <p className="font-bold">Filters</p>
            <p className="text-orange-500 cursor-pointer">Clear All Filters</p>
          </div>

          {/* Skills Filter */}
          <div className="border-b-2 border-gray-300">
            <div className="flex justify-between p-2">
              <p className="font-bold">Skills</p>
              <p className="text-orange-500 cursor-pointer">Clear</p>
            </div>
            <div className="text-center mb-5">
              <select className="bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[90%] mx-auto">
                <option value="">--Select a language--</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C++">C++</option>
                <option value="SQL">SQL</option>
                <option value="PHP">PHP</option>
                <option value="Ruby">Ruby</option>
                <option value="Swift">Swift</option>
                <option value="Kotlin">Kotlin</option>
                <option value="Go">Go</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Rust">Rust</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="border-b-2 border-gray-300">
            <div className="flex justify-between p-2">
              <p className="font-bold">Availability</p>
              <p className="text-orange-500 cursor-pointer">Clear</p>
            </div>
            <div className="my-2">
              {[
                "Full Time",
                "Part Time",
                "Internship",
                "Contract",
                "Freelance",
                "Volunteer",
                "Temporary",
                "Remote",
                "On-Site",
                "Hybrid",
              ].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 mb-2 ml-5"
                >
                  <input
                    className="mr-2 rounded-full w-4 h-4 bg-gray-400 border-gray-300 focus:ring-0 checked:bg-orange-500 cursor-pointer"
                    type="checkbox"
                    name={type.toLowerCase().replace(" ", "")}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Other Filters */}
          {["Category", "Experience", "Location"].map((filter) => (
            <div key={filter} className="border-b-2 border-gray-300">
              <div className="flex justify-between p-2">
                <p className="font-bold">{filter}</p>
                <p className="text-orange-500 cursor-pointer">Clear</p>
              </div>
              <div className="text-center mb-5">
                <select className="bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[90%] mx-auto">
                  <option value="">--Select {filter}--</option>
                  <option value="WebDeveloper">Web Developer</option>
                  <option value="Fresher">Fresher</option>
                  <option value="Jaipur">Jaipur</option>
                  {/* Add more options as required */}
                </select>
              </div>
            </div>
          ))}

          <div className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 text-center cursor-pointer">
            Search Now
          </div>
        </aside>

        {/* Job Listings Section */}
        <div className="lg:w-[70%] w-full ">
          {/* Search Bar */}
          <div className="flex flex-wrap justify-between items-center border-b-2 p-3 border-gray-300">
            <div className="text-lg font-semibold">Job</div>
            <div className="flex items-center w-full lg:w-auto border border-gray-300 rounded-md">
              <FaSearch className="ml-2 mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="border-none focus:ring-0 outline-none p-2 w-full lg:w-auto"
              />
              <button className="ml-2 bg-blue-500 text-white p-2 rounded-r-md">
                Search
              </button>
            </div>

            <div className="flex items-center space-x-3 mt-3 lg:mt-0">
              <select className="bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">--Sort by--</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
              <FaThLarge className="text-lg cursor-pointer" />
              <FaThList className="text-lg cursor-pointer" />
            </div>
          </div>

          {/* Job Cards */}
          <div className="m-auto">
            {arr.map((element, index) => (
              <div key={index} className="border-2 bg-white w-[90%] mt-16 m-auto">
                <header className="flex justify-between p-2">
                  <img
                    src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png"
                    alt=""
                    className="w-16 h-16 rounded-3xl"
                  />
                  <div className="text-right">
                    <p className="text-sm">Payment not disclosed</p>
                    <p className="text-sm bg-orange-500 text-white rounded-xl mt-1 px-2">
                      full time/onsite
                    </p>
                  </div>
                </header>
                <main className="p-2">
                  <h1 className="text-2xl font-bold">{element}</h1>
                  <p className="flex items-center mt-2">
                    <MdAddLocation className="mr-1" /> Bhopal
                  </p>
                  <p>Immediate Joiner</p>
                </main>
                <footer className="flex justify-between border-t-2 border-gray-300">
                  <Link
                    to="/ApplyJob"
                    className="p-2 w-full text-center hover:bg-orange-500 border-r-2 border-gray-300"
                  >
                    APPLY NOW
                  </Link>
                  <Link
                    to="/ViewJob"
                    className="p-2 w-full text-center hover:bg-orange-500 border-r-2 border-gray-300"
                  >
                    VIEW JOB
                  </Link>
                  <button className="p-2 border-2 rounded-full hover:bg-orange-100">
                    <FaHeart
                      className="text-2xl"
                      onClick={(element) => {
                        element.target.style.color =
                          element.target.style.color === "red" ? "" : "red";
                      }}
                    />
                  </button>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
