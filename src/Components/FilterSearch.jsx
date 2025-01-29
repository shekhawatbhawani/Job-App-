import React from "react";
import { Link } from "react-router-dom";
import MultipleSelect from "./MultipleSelect";

const FilterSearch = () => {
  const jobRoleOptions = [
    { value: "contentWriter", label: "Content Writer" },
    { value: "digitalMarketing", label: "Digital Marketing" },
    { value: "nodeJsDeveloper", label: "Node Js Developer" },
    { value: "reactJsDeveloper", label: "React Js Developer" },
    { value: "uiUxDesigner", label: "UI/UX Designer" },
    { value: "webDeveloper", label: "Web Developer" },
  ];
  const cityOptions = [
    { value: "bhopal", label: "Bhopal" },
    { value: "indore", label: "Indore" },
    { value: "jaipur", label: "Jaipur" },
    { value: "delhi", label: "Delhi" },
    { value: "kolkata", label: "Kolkata" },
    { value: "kanpur", label: "Kanpur" },
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "chennai", label: "Chennai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "lucknow", label: "Lucknow" },
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "chandigarh", label: "Chandigarh" },
    { value: "coimbatore", label: "Coimbatore" },
  ];
  
  const jobCategoryOptions = [
    { value: "contentWriter", label: "Content Writer" },
    { value: "digitalMarketing", label: "Digital Marketing" },
    { value: "nodeJsDeveloper", label: "Node Js Developer" },
    { value: "reactJsDeveloper", label: "React Js Developer" },
    { value: "uiUxDesigner", label: "UI/UX Designer" },
    { value: "webDeveloper", label: "Web Developer" },
    { value: "graphicDesigner", label: "Graphic Designer" },
    { value: "dataAnalyst", label: "Data Analyst" },
    { value: "projectManager", label: "Project Manager" },
    { value: "seoSpecialist", label: "SEO Specialist" },
    { value: "mobileAppDeveloper", label: "Mobile App Developer" },
    { value: "fullStackDeveloper", label: "Full Stack Developer" },
    { value: "devOpsEngineer", label: "DevOps Engineer" },
    { value: "marketingManager", label: "Marketing Manager" },
    { value: "customerSupport", label: "Customer Support" },
  ];
  
  return (
    <div className="bg-orange-500 p-5 flex flex-wrap justify-around">
      {/* Job Role Dropdown */}

      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
        <MultipleSelect Options={jobRoleOptions} />
      </div>

      {/* Location Dropdown */}
     <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
      <MultipleSelect Options={cityOptions}/>

     </div>

      {/* Category Dropdown */}
      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
       <MultipleSelect Options={jobCategoryOptions}/>
      </div>

      {/* Search Button */}
      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
        <button
          className="border-2 border-white p-2 font-semibold w-full md:w-auto hover:bg-white hover:text-red-500"
          aria-label="Search Now"
        >
          <Link to="/FindJob">SEARCH NOW</Link>
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
