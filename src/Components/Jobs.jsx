import React from "react";
import { useNavigate } from "react-router-dom";
import "../App";

const Jobs = () => {
  let find = useNavigate()
  let handelClick = ()=>{
    find("/FindJob")
  }

  const jobs = [
    "Web Developer",
    "Lawyer",
    "Content Writer",
    "Data Analyst",
    "Graphic Designer",
    "Software Engineer",
    "Teacher",
    "Marketing Manager",
    "Product Manager",
    "Sales Executive",
    "HR Manager",
    "Civil Engineer",
    "Architect",
    "Financial Analyst",
    "SEO Specialist",
    "UX/UI Designer",
    "Business Analyst",
    "Event Coordinator",
    "Project Manager",
    "Social Media Manager",
  ];

  const imageUrls = [
    "https://cdn.vectorstock.com/i/1000v/23/65/admin-support-for-clients-of-enterprises-vector-39402365.jpg",
    "https://images.surferseo.art/ab2827f1-a2ea-469f-874f-de59c41af595.jpeg",
    "https://www.careerguide.com/career/wp-content/uploads/2023/12/Content-Writing.jpg",
    "https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/ai-ml/artificial-intelligence-1920.jpg",
    "https://cdn-ilaajhb.nitrocdn.com/bzYtFznvkVaQdGOioMzGqUmNQFhSYZZC/assets/images/optimized/rev-a0e3774/jkconsulting.com/wp-content/uploads/2024/03/Network-switch-and-ethernet-cables-2-copy-1080x675.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdTkV7O7XUMHZC0gIKFnafhWsBp_Z7MOt3Q&s",
    "https://legal.fronteo.com/wp-content/uploads/2023/09/FLLP_legal_affairs_work.png",
    "https://supersourcing.com/blog/wp-content/uploads/2023/12/Banner.webp",
    "https://www.applify.com.sg/blog/wp-content/uploads/2023/09/UI-UX-Developer-Skills.jpg",
    "https://contentwriters.com/blog/wp-content/uploads/PPC2018.jpg",
    "https://www.softwebsolutions.com/wp-content/uploads/2017/06/Nodejs-Developer.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdTkV7O7XUMHZC0gIKFnafhWsBp_Z7MOt3Q&s",
    "https://legal.fronteo.com/wp-content/uploads/2023/09/FLLP_legal_affairs_work.png",
    "https://supersourcing.com/blog/wp-content/uploads/2023/12/Banner.webp",
    "https://www.applify.com.sg/blog/wp-content/uploads/2023/09/UI-UX-Developer-Skills.jpg",
    "https://contentwriters.com/blog/wp-content/uploads/PPC2018.jpg",
    "https://www.softwebsolutions.com/wp-content/uploads/2017/06/Nodejs-Developer.jpg",
    "https://www.softwebsolutions.com/wp-content/uploads/2017/06/Nodejs-Developer.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdTkV7O7XUMHZC0gIKFnafhWsBp_Z7MOt3Q&s",
    "https://legal.fronteo.com/wp-content/uploads/2023/09/FLLP_legal_affairs_work.png",
  ];

  

  return (
    <div className="grid lg:grid-cols-4 gap-6  sm:grid-cols-2  md:grid-cols-3 md:gap-2  p-14 bg-gray-200 mt-10" onClick={handelClick}>
      <div className="col-span-full text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Featured Jobs</h1>
        <p className="text-lg text-gray-600">Your Job for a Future</p>
      </div>

      {/* Wrapping the job cards in a responsive container */}

 

    
      {imageUrls.map((element, index) => (
        <div
          key={index}
          className="w-full sm:w-60 lg:w-72 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center text-center p-4 hover:shadow-2xl hover:border-2 border-pink-200"
        >
          <div className="flex justify-center items-center">
            <img
              src={element}
              alt={jobs[index]}
              className="w-24 h-20 object-cover mx-auto rotate-img"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {jobs[index]}
            </h2>
            <p className="text-gray-600 hover:text-orange-500 cursor-pointer">
              40 jobs
            </p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Jobs;
