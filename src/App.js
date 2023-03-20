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
import './App.css'
import DashboardLayout from "./pages/DashboardLayout"
import Dashboard from "./pages/Dashboard"

function App() {

return (
  <Router>
    <Routes>
       <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
       </Route>  

       <Route element={<DashboardLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
       </Route>
    </Routes>
  </Router>
)
}


export default App;
