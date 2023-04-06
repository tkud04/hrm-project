import {
    Routes,
    Route,
    redirect,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
  } from "react-router-dom"

  import {BrowserRouter as Router} from 'react-router-dom'
  import Layout from "../pages/Layout"
  import Home from "../pages/Home"
  import About from '../pages/About'
  import ContactUs from "../pages/ContactUs"
  import Login from "../pages/Login"
  import Signup from "../pages/Signup"

  import DashboardLayout from "../pages/DashboardLayout"
  import Dashboard from "../pages/Dashboard"

  import { useLoginState } from "../contexts/loginStore"

  const RootNavigation = () => {
    const loginState = useLoginState()


    const redirectIfUnauthenticated = () => {
        console.log('current user: ',loginState?.email?.length)
        if(loginState?.email?.length < 1){
          return redirect('/login')
        }
        return null
    }

    const router = createBrowserRouter(
       createRoutesFromElements(
         <>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
           </Route>  

           <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<Dashboard/>} loader={redirectIfUnauthenticated}/>
           </Route>
        </>
       )
    )

    return (
        <RouterProvider router={router}/>
    )
  }
  
export default RootNavigation