import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"
import logo from '../img/icon-1.png'
import { useLoginState } from "../contexts/loginStore"

const NavBar = () => {
    const loginState = useLoginState()

    return (
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
}

export default NavBar