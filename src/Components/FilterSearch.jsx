import React from 'react'

const FilterSearch = () => {
  return (
    <div className='bg-orange-500 p-5 flex flex-wrap justify-around'>
      
      {/* Job Role Dropdown */}
      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
        <select 
          name="jobRole" 
          id="jobRole" 
          className='p-2 rounded-md focus:outline-none w-full'
          aria-label="Select Job Role"
        >
          <option value="" disabled selected>Select Job Role</option>
          <option value="contentWriter">Content Writer</option>
          <option value="digitalMarketing">Digital Marketing</option>
          <option value="nodeJsDeveloper">Node Js Developer</option>
          <option value="reactJsDeveloper">React Js Developer</option>
          <option value="uiUxDesigner">UI/UX Designer</option>
          <option value="webDeveloper">Web Developer</option>
        </select>
      </div>
      
      {/* Location Dropdown */}
      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
        <select 
          name="location" 
          id="location" 
          className='p-2 rounded-md focus:outline-none w-full'
          aria-label="Select Location"
        >
          <option value="" disabled selected>Select Location</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="jaipur">Jaipur</option>
          <option value="delhi">Delhi</option>
          <option value="kolkata">Kolkata</option>
          <option value="kanpur">Kanpur</option>
        </select>
      </div>
      
      {/* Category Dropdown */}
      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
        <select 
          name="category" 
          id="category" 
          className='p-2 rounded-md focus:outline-none w-full'
          aria-label="Select Category"
        >
          <option value="" disabled selected>Select Category</option>
          <option value="contentWriter">Content Writer</option>
          <option value="digitalMarketing">Digital Marketing</option>
          <option value="nodeJsDeveloper">Node Js Developer</option>
          <option value="reactJsDeveloper">React Js Developer</option>
          <option value="uiUxDesigner">UI/UX Designer</option>
          <option value="webDeveloper">Web Developer</option>
        </select>
      </div>
      
      {/* Search Button */}
      <div className="w-[90%] md:w-auto md:mb-0 mb-4 md:mr-4">
        <button 
          className='border-2 border-white p-2 font-semibold w-full md:w-auto hover:bg-white hover:text-red-500'
          aria-label="Search Now"
        >
          SEARCH NOW
        </button>
      </div>
    </div>
  )
}

export default FilterSearch;
