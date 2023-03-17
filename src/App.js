import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useRoutes
  /*Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,*/
} from "react-router-dom"

import {BrowserRouter as Router} from 'react-router-dom'
import HomePage from "./pages/Home"
import './App.css'

function App() {

return (
  <Router>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    </Routes>
  </Router>
)
}


export default App;
