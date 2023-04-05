import {
  Routes,
  Route,
  /*Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,*/
} from "react-router-dom"

import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from './pages/About'
import ContactUs from "./pages/ContactUs"
import './App.css'
import DashboardLayout from "./pages/DashboardLayout"
import Dashboard from "./pages/Dashboard"

function App() {

return (
  <Router>
    <Routes>
       <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
       </Route>  

       <Route element={<DashboardLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
       </Route>
    </Routes>
  </Router>
)
}


export default App;
