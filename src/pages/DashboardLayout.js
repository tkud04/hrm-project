import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"
import userLogo from '../images/user/02.jpeg'
const DashboardLayout = () => {
   const [isSticky,setIsSticky] = useState(false)
   const [navBarTop,setNavBarTop] = useState(null)

/*
   const checkSticky = (e) => {
    const scrollTop = window.scrollY
    
    if(scrollTop > navBarTop - 10){
      setIsSticky(true)
    }
    else{
      setIsSticky(false)
    }
   }

   useEffect(() => {
    const navBarPosition = document.querySelector('#undefined-sticky-wrapper').getBoundingClientRect()
    setNavBarTop(navBarPosition.top)
   },[])
   
   useEffect(() => {
   
    window.addEventListener('scroll',checkSticky)

    return () => {window.removeEventListener('scroll',checkSticky)}
   },[navBarTop])
   */


   const NavBar = () => (
    <>
     <nav className="navbar navbar-default navbar-top navbar-fixed-top">
            <div className="navbar-header">
               <a href="#" className="navbar-brand">
                  <div className="brand-logo"><i className="fa fa-bitcoin"></i> TRADIFY</div>
                  <div className="brand-logo-collapsed"><i className="fa fa-bitcoin"></i></div>
               </a>
            </div>
            <div className="nav-wrapper">
               <ul className="nav navbar-nav mt0">
                  <li>
                     <a href="#" data-toggle="aside">
                     <em className="fa fa-align-left"></em>
                     </a>
                  </li>
               </ul>
               <ul className="nav navbar-nav navbar-right mt0">
                  <li className="dropdown dropdown-list">
                     <a href="#" data-toggle="dropdown" data-play="fadeIn" className="dropdown-toggle">
                     <strong><i className="fa fa-btc"></i> Wallet</strong>
                     </a>
                  </li>
                  <li className="dropdown dropdown-list">
                     <a href="#" data-toggle="dropdown" data-play="fadeIn" className="dropdown-toggle">
                        <em className="fa fa-bell"></em>
                        <div className="label label-danger">3</div>
                     </a>
                     <ul className="dropdown-menu col-md-4 col-sm-6 col-xs-12">
                        <li>
                           <div className="table-responsive">
                              <table className="table table-striped table-bordered table-hover">
                                 <thead>
                                    <tr>
                                       <th>Buy/Sell</th>
                                       <th>Progress</th>
                                       <th>Date</th>
                                       <th>Status</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Buy order SC</td>
                                       <td>
                                          <div className="progress progress-striped progress-xs">
                                             <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-success w-100-p">
                                                <span className="sr-only">100% Complete</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <em className="fa fa-calendar fa-fw text-muted"></em>02/19/2018
                                       </td>
                                       <td className="text-center">
                                          Complete
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>Sell order SC</td>
                                       <td>
                                          <div className="progress progress-striped progress-xs">
                                             <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-danger w-50-p">
                                                <span className="sr-only">50% Complete</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <em className="fa fa-calendar fa-fw text-muted"></em>02/18/2018
                                       </td>
                                       <td className="text-center">
                                          50% Filled
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>Buy order IOTA</td>
                                       <td>
                                          <div className="progress progress-striped progress-xs">
                                             <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-success w-50-p">
                                                <span className="sr-only">50% Complete</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <em className="fa fa-calendar fa-fw text-muted"></em>02/17/2018
                                       </td>
                                       <td className="text-center">
                                          50% Filled
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li className="dropdown">
                     <a href="#" data-toggle="dropdown" data-play="fadeIn" className="dropdown-toggle">
                     <em className="fa fa-user"></em>
                     </a>
                     <ul className="dropdown-menu">
                        <li><a href="#">Profile</a>
                        </li>
                        <li><a href="#">Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="#">Logout</a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </nav>
    </>
   )

   const Aside = () => (
    <aside className="aside">
            <nav className="sidebar">
               <ul className="nav">
                  <li>
                     <div data-toggle="collapse-next" className="item user-block has-submenu">
                        <div className="user-block-picture">
                           <img src={userLogo} alt="Avatar" width={60} height={60} className="img-thumbnail img-circle account-img-mb"/>
                        </div>
                        <div className="user-block-info">
                           <span className="user-block-name item-text">James Franky</span>
                           <span className="user-block-role"><i className="fa fa-check text-green"></i> Verified</span>
                           <div className="label label-primary"><i className="fa fa-chevron-down"></i> Account Info</div>
                        </div>
                     </div>
                     <ul className="nav collapse">
                        <li><a href="#">Open Orders</a>
                        </li>
                        <li><a href="#">Transactions History</a>
                        </li>
                        <li>
                           <a href="#">
                              Verification 
                              <div className="label label-success pull-right"><i className="fa fa-check"></i> Verified</div>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              2FA 
                              <div className="pull-right label label-danger"><i className="fa fa-unlock"></i> Not Enabled</div>
                           </a>
                        </li>
                        <li><a href="#">Bonus Code</a>
                        </li>
                        <li><a href="#">Activity Log</a>
                        </li>
                        <li><a href="#">API</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="#">Logout</a>
                        </li>
                     </ul>
                  </li>
                  <li className="active">
                     <a href="#" title="Markets" data-toggle="collapse-next" className="has-submenu">
                        <em className="fa fa-home"></em>
                        <div className="label pull-right"><i className="fa fa-line-chart"></i></div>
                        <span className="item-text">Markets</span>
                     </a>
                     <ul className="nav collapse in">
                        <li className="active">
                           <a href="index.html" title="Default" data-toggle="" className="no-submenu">
                           <span className="item-text">Layout One</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" title="Layout 2" data-toggle="" className="no-submenu">
                           <span className="item-text">Layout Two</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" title="Layout 3" data-toggle="" className="no-submenu">
                           <span className="item-text">Layout Three</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" title="With Footer" data-toggle="" className="no-submenu">
                           <span className="item-text">Layout Four</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" title="With Footer" data-toggle="" className="no-submenu">
                           <span className="item-text">Layout Five</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" title="With Footer" data-toggle="" className="no-submenu">
                           <span className="item-text">Layout Six</span>
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="prices.html" title="Dashboard" className="">
                        <em className="fa fa-btc"></em>
                        <span className="item-text">Live Pricing</span>
                     </a>
                  </li>
                  <li className="">
                     <a href="datatable.html" title="Dashboard" className="">
                        <em className="fa fa-gear"></em>
                        <span className="item-text">Shortcodes</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" title="Pages" data-toggle="collapse-next" className="has-submenu">
                     <em className="fa fa-file-text"></em>
                     <span className="item-text">Pages</span>
                     </a>
                     <ul className="nav collapse ">
                        <li>
                           <a href="login.html" title="Login" data-toggle="" className="no-submenu">
                           <span className="item-text">Login</span>
                           </a>
                        </li>
                        <li>
                           <a href="signup.html" title="Sign up" data-toggle="" className="no-submenu">
                           <span className="item-text">Sign up</span>
                           </a>
                        </li>
                        <li>
                           <a href="lock.html" title="Lock" data-toggle="" className="no-submenu">
                           <span className="item-text">Lock</span>
                           </a>
                        </li>
                        <li>
                           <a href="recover.html" title="Recover Password" data-toggle="" className="no-submenu">
                           <span className="item-text">Recover Password</span>
                           </a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </nav>
         </aside>
   )

   return (
    <>
    <div id="overlayLoader">
    <div id="preloader">
      <span></span>
      <span></span>
   </div>
</div>


     <section className="wrapper">
       <NavBar/>
       <Aside/>

       <section>
         <section className="main-content">

         </section>
       </section>
     </section>
    </>
   )

}

export default DashboardLayout