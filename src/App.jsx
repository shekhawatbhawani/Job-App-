import { useState } from 'react'
import './App.css'
import FilterSearch from './Components/FilterSearch'
import Heading1 from './Components/Heading1'
import ImageCard from './Components/ImageCard'
import ImageFoot from './Components/ImageFoot'
import JobApply from './Components/JobApply'
import NavBar from './Components/NavBar'
import CompanyApply from './Components/CompanyApply'
import Jobs from './Components/Jobs'
import Offer from './Components/Offer'
import Talented from './Components/Talented'
import Footer from './Components/Footer'

function App() {
  let [job ,setJob] = useState("Job")
  let [company ,setCompany] = useState("Comapnies")
  return (
    <>
     <NavBar/>
     <FilterSearch/>
     <ImageCard/>
     <ImageFoot/>
     <Heading1 job={job}/>
     <JobApply/>
     <Heading1 job={company}/>
     <CompanyApply/>
     <Heading1 job={job}/>
     <JobApply/>
     <Heading1 job={company}/>
     <CompanyApply/>
     <Jobs/>
     <Offer/>
     <Talented/>
     <Footer/>
    </>
  )
}

export default App
