import React from "react";
import { Link } from "react-router-dom";
const LearnMore = () => {
  return (
    <div className="mb-24">
      <div className="bg-black text-white p-5 pl-5 md:pl-20 text-lg">
        <h1>
          <Link
            to="/"
            className="hover:bg-white hover:text-black hover:rounded-lg p-2 transition-all duration-300"
          >
            Home
          </Link>
          <span> / Promotion</span>
        </h1>
      </div>
      <div className="p-10">
        <div className="text-center mt-8 md:mt-11">
          <h1 className="border-b-2 border-red-600 text-2xl md:text-3xl inline-block pb-3 font-semibold">
            Post Job
          </h1>
        </div>
        <div className="mt-5 md:mt-7">
          <img
            src="https://jobx-app.vercel.app/static/media/learn.2ebcc4c29c8087bb4e5f.jpg"
            alt=""
            className="max-w-full md:max-w-3xl m-auto"
          />
        </div>
        <div className="p-4 md:p-5">
          <div className="m-auto max-w-full md:max-w-[750px]">
            <h3 className="text-base md:text-lg font-semibold my-2">
              Quick and Easy Way to Advertise
            </h3>
            <p>
              If you're looking to fill open positions with qualified and
              competent workers, Jobxpro is your best bet.
            </p>
            <h3 className="text-base md:text-lg font-semibold my-2">
              Hire for Your Company:
            </h3>
            <p>
              Simply post your work specifications and due dates on our
              platform. You will be updated on the status of application
              submissions as they come in.
            </p>
            <h3 className="text-base md:text-lg font-semibold my-2">
              Reach out to qualified matches:
            </h3>
            <p>
              Get in touch with good fits by sorting out candidates using
              different criteria. There is no extra work or inconvenience
              involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
