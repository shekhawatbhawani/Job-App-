import React from "react";

const Offer = () => {
  let arr = [
    "Searching the best jobs",
    "Apply for a good job",
    "More quality hires",
    "Choose working hours",
  ];
  return (
    <div className="p-10">
      <div>
        <h1 className="text-2xl text-center">What we offer</h1>
        <p className="text-center">Offering the Best Deal</p>
      </div>
      <div className="flex flex-wrap justify-between gap-6 mt-16 mb-10">
        {arr.map((element, index) => {
          return (
            <div
              key={index}
              className="border-t-2 border-red-600 w-full sm:w-72 lg:w-60 pt-8 shadow-md p-3 rounded-md"
            >
              <h1 className="text-xl text-center font-semibold">{element}</h1>
              <p className="text-base mt-2 p-1">
                Lorem ipsum dolor sit ame...
              </p>
              <button className="hover:text-orange-600 mt-3">Read More &gt;&gt; </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
