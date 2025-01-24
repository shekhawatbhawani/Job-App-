import React from "react";
import { Link } from "react-router-dom";

const Talented = () => {
  return (
    <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16">
      <aside className="w-full sm:w-5/12 md:w-4/12 p-3">
        <h1 className="flex gap-3 text-2xl">
          <h1 className="border-b-2 pb-2 border-red-500 ">Post</h1>
          <h1>Job</h1>
        </h1>
        <h3 className="text-lg font-semibold my-2">
          Quick and Easy Way to Advertise
        </h3>
        <p>
          If you're looking to fill open positions with qualified and competent
          workers, Jobxpro is your best bet.
        </p>
        <h3 className="text-lg font-semibold my-2">Hire for Your company:</h3>
        <p>
          Simply post your work specifications and due dates on our platform.
          You will be updated on the status of application submissions as they
          come in.
        </p>
        <h3 className="text-lg font-semibold my-2">
          Reach out to qualified matches:
        </h3>
        <p>
          Get in touch with good fits by sorting out candidates using different
          criteria. There is no extra work or inconvenience involved.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            {" "}
            <Link to="/PostJob">POST A JOB</Link>
          </button>
          <button className="bg-black text-yellow-300 border border-gray-500 hover:text-pink-700 px-4 py-2 rounded-md hover:bg-gray-100">
          <Link to="/PostJobsLearn">LEARN MORE</Link>
          </button>
        </div>
      </aside>

      <aside className="w-full sm:w-5/12 md:w-4/12 p-3 mt-6 sm:mt-0">
        <h1 className="flex gap-2 text-2xl">
          <h1 className="border-b-2 pb-2 border-red-500 ">Talented</h1>
          <h1>Candidates</h1>
        </h1>
        <h3 className="text-lg font-semibold my-2">
          Get discovered by companies looking to hire remote
        </h3>
        <p>
          Find the best job for you by narrowing your search based on your
          priorities.
        </p>
        <h3 className="text-lg font-semibold my-2">Get your profile listed:</h3>
        <p>
          Get the attention of potential employers. Find internships and
          full-time positions by searching with keywords. Following your
          application, the recruiters will reach out to you directly.
        </p>
        <h3 className="text-lg font-semibold my-2">Customize your profile:</h3>
        <p>
          JobXpro’s impressive customizability lets you zero in on organizations
          and fields that are a good fit for your expertise and interests. Learn
          how to use your unique set of experiences, education, and talents to
          pinpoint the greatest possible career path for you.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <Link to="/PostJob">POST A JOB</Link>
          </button>
          <button className="bg-black text-yellow-400 border border-gray-500 hover:text-pink-700 px-4 py-2 rounded-md hover:bg-gray-100">
          <Link to="/PostJobsLearn">LEARN MORE</Link>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Talented;
