import React,{useState,useEffect} from "react"
import { redirect, useNavigate } from "react-router-dom"
import GenericBanner from "../components/GenericBanner"
import {ReactComponent as AppleLogo} from '../img/logos/apple.svg'
import {ReactComponent as GoogleLogo} from '../img/logos/google.svg'
import loadingImage from '../img/loading.gif'

const Login = () => {
const [loading,setLoading] = useState(false)
const navigate = useNavigate()

const loginWithApple = (e) => {
    e.preventDefault()
    console.log('logging with Apple')
}

const loginWithGoogle = (e) => {
    e.preventDefault()
    console.log('logging with Google')
}

const login = (e) => {
    e.preventDefault()
    console.log('logging in normally')
    setLoading(true)
}

    return (
      <>
       <GenericBanner 
        title="Login"
       />

       {/* Login */}
       <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: 0.1, animationName: 'fadeInUp'}}>
                <div className="col-lg-6">
                    <h1 className="display-6">Login</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                   
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: 0.1, animationName: 'fadeInUp'}}>
                    <p className="mb-2">Our office:</p>
                    <h4>123 Street, New York, USA</h4>
                    <hr className="w-100"/>
                    <p className="mb-2">Call us:</p>
                    <h4>+012 345 6789</h4>
                    <hr className="w-100"/>
                    <p className="mb-2">Mail us:</p>
                    <h4>info@example.com</h4>
                    <hr className="w-100"/>
                    <p className="mb-2">Follow us:</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: 0.5, animationName: 'fadeInUp'}}>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Email "/>
                                    <label htmlFor="name">Your Email address</label>
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} onClick={login}>
                                    Next
                                    {loading && (<img src={loadingImage} style={{width: 20, marginLeft: 5}}/>)}
                                    </button>
                            </div>

                            <div className="col-md-12">
                                <h3 style={{textAlign: 'center'}}>OR</h3>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} onClick={loginWithGoogle}>
                                  <GoogleLogo style={styles.socialLogo}/>
                                  Continue with Google
                                </button>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} onClick={loginWithApple}>
                                    <AppleLogo style={styles.socialLogo}/>
                                    Continue with Apple
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </>
    )
}

const styles = {
    socialLogo: {
        width: 20,
        height: 20,
        marginRight: 5
    }
}

export default Login