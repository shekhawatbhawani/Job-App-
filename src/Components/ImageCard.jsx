import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
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

  const imageUrls = [
    "https://jobx-app.vercel.app/static/media/noida.3fabae3d5f2fcac124d5.png",
    "https://jobx-app.vercel.app/static/media/jabalpur.30c05dbdc28287e5dd9c.png",
   // "https://jobx-app.vercel.app/static/media/kolkata.6fe209d921d634345bea.png",
    "https://jobx-app.vercel.app/static/media/Bengaluru.5b1620c4379a4f2a873c.png",
    "https://jobx-app.vercel.app/static/media/bhopal.2c87af791a94fa10a21e.png",
    "https://jobx-app.vercel.app/static/media/Gwalior.49ff4554ba1c777a2fc9.png",
  ];

  return (
    <div className="mt-0 px-2 z-0">
      <Slider {...settings}>
        {imageUrls.map((image, index) => {
          return (
            <div key={index} className="mt-4 max-w-60 mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer">
              <img src={image} alt={`Location Image ${index + 1}`} className="w-full h-80 object-cover" />
              <div className="absolute bottom-1 left-0 p-4">
                <h1 className="text-2xl font-bold text-white">Location {index + 1}</h1>
                <p className="text-white bg-orange-600 p-2 rounded-md mt-1">49 jobs</p>
              </div>
            </div>
          );
        })}
      </Slider>

    </div>
  );
};

export default ImageCard;
