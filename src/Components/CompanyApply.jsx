import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CompanyApply = () => {
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

  const companies = [
    "Facebook",
    "Apple",
    "Amazon",
    "Google",
    "HP",
    "Intel",
    "Microsoft",
    "IBM",
    "Oracle",
  ];

  return (
    <div className="p-16 w-[90%] m-auto">
      <Slider {...settings}>
        {companies.map((element, index) => {
          return (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg max-w-64 mx-auto shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s"
                  alt=""
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h1 className="text-2xl text-red-500 font-semibold text-center mt-0">
                {element}
              </h1>
              <p className=" text-orange-700 text-center mt-2">Link to Apply</p>

              <div className="border-t-2 p-2 text-center text-2xl mt-4 cursor-pointe hover:bg-orange-500 hover:text-white">
                <Link
                  to="/ApplyJob"
                  className="border-t-2 p-2 text-center text-2xl mt-4 cursor-pointe hover:bg-orange-500 hover:text-white w-full "
                >
                  Apply Now
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CompanyApply;
