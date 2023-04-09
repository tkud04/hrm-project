import {
    Route,
    redirect,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
  } from "react-router-dom"

  import Layout from "../pages/Layout"
  import Home from "../pages/Home"
  import About from '../pages/About'
  import ContactUs from "../pages/ContactUs"
  import Login from "../pages/Login"
  import Signup from "../pages/Signup"
  import Security from "../pages/Security"

  import DashboardLayout from "../pages/DashboardLayout"
  import Dashboard from "../pages/Dashboard"

  import { useGlobalState } from "../contexts/globalContext"

  const RootNavigation = () => {
    const globalState = useGlobalState()


    const redirectIfUnauthenticated = () => {
        if(globalState?.email?.length < 1){
          return redirect('/login')
        }
        return null
    }

    const redirectIfAuthenticated = () => {
        if(globalState?.email?.length > 1){
          return redirect('/dashboard')
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
            <Route path="/login" element={<Login/>} loader={redirectIfAuthenticated}/>
            <Route path="/signup" element={<Signup/>} loader={redirectIfAuthenticated}/>
           </Route>  

           <Route element={<DashboardLayout/>} loader={redirectIfUnauthenticated}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/security" element={<Security/>}/>
            </Route>
        </>
       )
    )

    return (
        <RouterProvider router={router}/>
    )
  }
  
export default RootNavigation
