import React,{useState,useEffect} from "react"
import { redirect, useNavigate } from "react-router-dom"
import GenericBanner from "../components/GenericBanner"
import {ReactComponent as AppleLogo} from '../img/logos/apple.svg'
import {ReactComponent as GoogleLogo} from '../img/logos/google.svg'
import loadingImage from '../img/loading.gif'
import loginImg from '../img/login.png'

const Login = () => {
const [loading,setLoading] = useState(false)
const [emailSupplied,setEmailSupplied] = useState(false)
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
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

    setTimeout(() => {
     setLoading(false)
     setEmailSupplied(true)
    },1000)
}

const onChange = (id,evt) => {
    let ret = evt?.target?.value

    switch(id){
        case 'email':
            setEmail(ret)
        break

        case 'password':
            setPassword(ret)
        break
    }
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
                    <img src={loginImg} alt='Login'/>
                </div>
                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{marginTop: 200,visibility: 'visible', animationDelay: 0.5, animationName: 'fadeInUp'}}>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" value={email} onChange={(e) => {onChange('email',e)}} id="name" placeholder="Email "/>
                                    <label htmlFor="name">Your Email address</label>
                                </div>
                            </div>
                            
                            { emailSupplied && (
                              <div className="col-md-12">
                                <div className="form-floating">
                                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => {onChange('password',e)}} placeholder="Email "/>
                                  <label htmlFor="name">Your Password</label>
                                </div>
                              </div>
                            )}
                            
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