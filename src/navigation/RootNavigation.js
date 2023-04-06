import {
    Routes,
    Route,
  } from "react-router-dom"

  import {BrowserRouter as Router} from 'react-router-dom'
  import Layout from "../pages/Layout"
  import Home from "../pages/Home"
  import About from '../pages/About'
  import ContactUs from "../pages/ContactUs"
  import Login from "../pages/Login"

  import DashboardLayout from "../pages/DashboardLayout"
  import Dashboard from "../pages/Dashboard"

  const RootNavigation = () => {
    return (
        <Router>
         <Routes>
           <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<ContactUs/>}/>
           </Route>  

           <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
           </Route>
         </Routes>
      </Router>
    )
  }
  
export default RootNavigation