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

function App() {

return (
  <Router>
    <Routes>
       <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
       </Route>    
    </Routes>
  </Router>
)
}


export default App;
