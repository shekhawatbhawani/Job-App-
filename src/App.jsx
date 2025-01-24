
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './Components/Body';
import Apply from './Components/Apply';
import PostJob from './Components/PostJob';
import LearnMore from './Components/LearnMore';
import ViewJob from './Components/ViewJob';
function App() {
 
  return (
    <>
    <Router>
     <NavBar/>
     <Routes>
      <Route path='/' element={ <Body/>}></Route>
      <Route path='/ApplyJob' element={<Apply/>}></Route>
      <Route path='/PostJob' element={<PostJob/>}></Route>
      <Route path='/PostJobsLearn' element={<LearnMore/>}></Route>
      <Route path='/ViewJob' element={<ViewJob/>}></Route>
     </Routes>
     </Router>
     <Footer/>
    </>
  )
}

export default App
