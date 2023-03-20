import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
   const [isSticky,setIsSticky] = useState(false)
   const [navBarTop,setNavBarTop] = useState(null)

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

   const NavBar = () => (
    <div className="container">
    {/* Navbar-header */}
    <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <i className="ti-menu"></i>
        </button>
        {/* LOGO */}
        <a className="navbar-brand logo" href="/">
            <i className="fa fa-bitcoin"></i> HRM DEMO
        </a>
    </div>
    {/* end navbar-header */}

    {/* menu */}
    <div className="navbar-collapse collapse" id="data-scroll">
        <ul className="nav navbar-nav navbar-right">
             <li className="active">
                <a href="/home">Home</a>
            </li>
        
            <li>
                <a href="/contact">Contact</a>
            </li>
           
            <li>
                <a href="/blog">Blog</a>
            </li>
           
        </ul>
    </div>
    {/*/Menu */}
    {/* end container */}
</div>
   )

    return (
     <div>
      
      {/* Navbar */}
      {isSticky ? (
         <div id="undefined-sticky-wrapper" className="sticky-wrapper is-sticky" style={{height: 92}}>
         <div className="navbar navbar-custom sticky" role="navigation" style={{position: 'fixed', top: 0}}>
           <NavBar/>
         </div>
       </div>
      ) : (
        <div id="undefined-sticky-wrapper" className="sticky-wrapper" style={{height: 92}}>
        <div className="navbar navbar-custom sticky" role="navigation">
          <NavBar/>
        </div>
      </div>
      )}
     

      <Outlet/>

      {/* FOOTER */}
        <footer className="bg-dark footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-12">
                        <h4 className="logo"><i className="fa fa-bitcoin"></i> HRM DEMO</h4>
                        <p>This is a sample long text just to fill space. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.</p>

                        <ul className="list-inline social">
                            <li>
                                <a href="#" className="bg-twitter"><i className="ti-twitter-alt"></i></a>
                            </li>
                            <li>
                                <a href="#" className="bg-dribbble"><i className="ti-dribbble"></i></a>
                            </li>
                            <li>
                                <a href="#" className="bg-linkedin"><i className="ti-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className="bg-googleplus"><i className="ti-google"></i></a>
                            </li>
                            <li>
                                <a href="#" className="bg-facebook"><i className="ti-facebook"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 col-md-offset-2">
                        <h5>Solutions</h5>
                        <ul className="list-unstyled footer-list">
                           <li><a href="/login">Start Trading</a></li>
                           <li><a href="#">Blog Posts</a></li>
                           <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled footer-list">
                            <li><a href="#">Help &amp; Support</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms &amp; Conditions</a></li>
                            
                        </ul>
                    </div>

                </div> {/* end row */}

              
            </div> {/* end container */}
        </footer> 
        {/* end FOOTER */}

     </div>
    )
}

export default Layout