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


import logo from './logo.svg'
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

const HomePage = () => (
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
)

export default App;
