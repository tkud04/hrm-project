import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"
import logo from '../img/icon-1.png'
import { useLoginState } from "../contexts/loginStore"

const Layout = () => {
   const [isSticky,setIsSticky] = useState(false)
   const [spinnerVisible,setSpinnerVisible] = useState(true)
   const loginState = useLoginState()


   /*const checkSticky = (e) => {
    const scrollTop = window.scrollY
    
    if(scrollTop > navBarTop - 10){
      setIsSticky(true)
    }
    else{
      setIsSticky(false)
    }
   }
   */
    // Spinner
    const spinner = function () {
        setTimeout(function () {
            setSpinnerVisible(false)
            /*if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }*/
        }, 1);
    }
    

   useEffect(() => {
     spinner()
   })



   const NavBar = () => (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <a href="/" className="navbar-brand d-flex align-items-center">
            <h2 className="m-0 text-primary">
                <img className="img-fluid me-2" src={logo} alt=""style={{width: 45}}/>
                HRM Project
            </h2>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-4 py-lg-0">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/about" className="nav-item nav-link">About</a>
                {loginState?.email.length < 1 ? (
                    <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</a>
                    <div className="dropdown-menu shadow-sm m-0">
                        <a href="/login" className="dropdown-item">Login</a>
                        <a href="/signup" className="dropdown-item">Signup</a>
                    </div>
                   </div>
                ) : (
                    <div className="nav-item dropdown">
                     <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Hi, Dave</a>
                     <div className="dropdown-menu shadow-sm m-0">
                        <a href="/dashboard" className="dropdown-item">Dashboard</a>
                        <a href="/signup" className="dropdown-item">Sign out</a>
                     </div>
                   </div>
                )}

                <a href="/contact" className="nav-item nav-link">Contact</a>
            </div>
            <div className="h-100 d-lg-inline-flex align-items-center d-none">
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#"><i
                        className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#"><i
                        className="fab fa-twitter"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="#"><i
                        className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </nav>
   )

    return (
     <div>
       {spinnerVisible && (
        <>
        {/* Spinner Start */}
        <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
         >
         <div className="spinner-grow text-primary" role="status"></div>
         </div>
         {/* Spinner End */}
         </>
       )}
      {/* Navbar */}

      <NavBar/>
     

      <Outlet/>

      {/* FOOTER */}
      <div className="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <h1 className="text-primary mb-4"><img className="img-fluid me-2" src={logo} alt=""
                            style={{width: 45}}/>HRM Project</h1>
                    <span>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                        stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
                        et lorem et sit.</span>
                </div>
                <div className="col-md-6">
                    <h5 className="mb-4">Newsletter</h5>
                    <p>Subscribe to our Newsletter for notifications and updates about profitable coins</p>
                    <div className="position-relative">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email"/>
                        <button type="button"
                            className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="mb-4">Get In Touch</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3"></i>info@hrmproject.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="mb-4">Our Services</h5>
                    <a className="btn btn-link" href="#">Currency Wallet</a>
                    <a className="btn btn-link" href="#">Currency Transaction</a>
                    <a className="btn btn-link" href="#">Bitcoin Investment</a>
                    <a className="btn btn-link" href="#">Token Sale</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="#">About Us</a>
                    <a className="btn btn-link" href="#">Contact Us</a>
                    <a className="btn btn-link" href="#">Our Services</a>
                    <a className="btn btn-link" href="#">Terms & Condition</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="mb-4">Follow Us</h5>
                    <div className="d-flex">
                        <a className="btn btn-square rounded-circle me-1" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square rounded-circle me-1" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square rounded-circle me-1" href="#"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square rounded-circle me-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">HRM Project</a>, All Rights Reserved.
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    {/* Footer End */}


    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></a> 
      {/* end FOOTER */}

     </div>

     
    )
}

export default Layout