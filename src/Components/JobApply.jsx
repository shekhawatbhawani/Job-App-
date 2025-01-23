import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAddLocation } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const JobApply = () => {
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
    <div className="p-10 w-[90%] m-auto">
      <Slider {...settings}>
        {jobRoles.map((element, index) => {
          return (
            <div key={index} className="border-2 max-w-80 p-2 ml-4">
              <header className="flex justify-between">
                <div>
                  <img
                    src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png"
                    alt=""
                    className="w-16 h-16 rounded-3xl"
                  />
                </div>
                <div>
                  <p className="text-sm">Payment not disclosed</p>
                  <p className="text-sm text-center bg-orange-500 rounded-xl mt-1">full time/onsite</p>
                </div>
              </header>
              <main className="mt-5">
                <h1 className="text-2xl font-bold">{element}</h1>
                <p className="flex items-center">
                  <MdAddLocation /> Bhopal
                </p>
                <p>Immediate Joiner</p>
              </main>
              <footer className="flex justify-between border-t-2 border-gray-300">
                <div className="border-r-2 border-gray-300 p-2">APPLY NOW</div>
                <div className="border-r-2 border-gray-300 p-2 text-start">VIEW JOB</div>
                <div className="">
                  <div className="border-2 p-2 rounded-full hover:bg-orange-600 hover:text-white text-2xl">
                    <FaHeart />
                  </div>
                </div>
              </footer>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default JobApply;
