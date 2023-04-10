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
  import NotFound from "../pages/NotFound"

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

    const redirectIfAuthenticated = (str='dashboard') => {
        if(globalState?.email?.length > 1){
            console.log({str})
          return redirect('/dashboard')
        }
        return null
    }

    const authRedirect = (isSecured=false,dest) => {
        console.log({isSecured,dest})
        if(isSecured){
            if(globalState?.email?.length > 1){
              return redirect(`dashboard`)
            }
            return null
        }
        
        else{
            if(globalState?.email?.length < 1){
                return redirect('/login')
              }
              return null
        }
    }

    const router = createBrowserRouter(
       createRoutesFromElements(
         <>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/login" element={<Login/>} loader={() => authRedirect(false,'login')}/>
            <Route path="/signup" element={<Signup/>} loader={() => authRedirect(false,'signup')}/>
            <Route path="*" element={<NotFound/>}/>
           </Route>  

           <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<Dashboard/>} loader={() => authRedirect(true,'dashboard')}/>
            <Route path="/security" element={<Security/>} loader={() => authRedirect(true,'security')}/>
            </Route>
        </>
       )
    )

    return (
        <RouterProvider router={router}/>
    )
  }
  
export default RootNavigation
