import React from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
     <div>
      
      {/* Navbar */}
        <div className="navbar navbar-custom sticky" role="navigation">
            <div className="container">
                {/* Navbar-header */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <i className="ti-menu"></i>
                    </button>
                    {/* LOGO */}
                    <a className="navbar-brand logo" href="landing.html">
                        <i className="fa fa-bitcoin"></i> TRADIFY
                    </a>
                </div>
                {/* end navbar-header */}

                {/* menu */}
                <div className="navbar-collapse collapse" id="data-scroll">
                    <ul className="nav navbar-nav navbar-right">
                         <li className="active">
                            <a href="#home">Home</a>
                        </li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Landing <span className="caret"></span></a>
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-left-0">
                          <li><a href="landing.html">Layout One</a></li>
                          <li><a href="landing-2.html">Layout Two</a></li>
                        </ul>
                      </li>
                        <li>
                            <a href="#About">About</a>
                        </li>

                        <li>
                            <a href="#Currencies">Currencies</a>
                        </li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Markets <span className="caret"></span></a>
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-left-0">
                          <li><a href="index.html">Layout One</a></li>
                          <li><a href="index-2.html">Market Two</a></li>
                          <li><a href="index-3.html">Market Three</a></li>
                          <li><a href="index-4.html">Market Four</a></li>
                          <li><a href="index-5.html">Market Five</a></li>
                          <li><a href="index-6.html">Market Six</a></li>
                        </ul>
                      </li>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                        <li>
                            <a href="datatable.html">Shortcodes</a>
                        </li>
                    </ul>
                </div>
                {/*/Menu */}
            </div>
            {/* end container */}
        </div>

      <Outlet/>
     </div>
    )
}

export default Layout