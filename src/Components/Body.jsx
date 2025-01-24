import React from "react";
import FilterSearch from "./FilterSearch";
import ImageCard from "./ImageCard";
import ImageFoot from "./ImageFoot";
import Heading1 from "./Heading1";
import JobApply from "./JobApply";
import CompanyApply from "./CompanyApply";
import Jobs from "./Jobs";
import Offer from "./Offer";
import Talented from "./Talented";
import { useState } from 'react'

const Body = () => {
    let [job ,setJob] = useState("Job")
    let [company ,setCompany] = useState("Comapnies")
  return (
    <div>
      <FilterSearch/>
      <ImageCard/>
      <ImageFoot />
      <Heading1 job={job} />
      <JobApply />
      <Heading1 job={company} />
      <CompanyApply />
      <Heading1 job={job} />
      <JobApply />
      <Heading1 job={company} />
      <CompanyApply />
      <Jobs />
      <Offer />
      <Talented />
    </div>
  );
};

export default Body;
