import React,{useState,useEffect} from "react"
import { redirect, useNavigate } from "react-router-dom"
import GenericBanner from "../components/GenericBanner"
import {ReactComponent as AppleLogo} from '../img/logos/apple.svg'
import {ReactComponent as GoogleLogo} from '../img/logos/google.svg'
import loadingImage from '../img/loading.gif'
import loginImg from '../img/login.png'
import ErrorText from "../components/ErrorText"

const Login = () => {
const [loading,setLoading] = useState(false)
const [emailSupplied,setEmailSupplied] = useState(false)
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [emailValidation,setEmailValidation] = useState(false)
const [passwordValidation,setPasswordValidation] = useState(false)
const [emailValidationMessage,setEmailValidationMessage] = useState('')
const [passwordValidationMessage,setPasswordValidationMessage] = useState('')
const [display2FA,setDisplay2FA] = useState(false)
const [otp,setOtp] = useState('')

const mailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const navigate = useNavigate()

const loginWithApple = (e) => {
    e.preventDefault()
    console.log('logging with Apple')
}

const loginWithGoogle = (e) => {
    e.preventDefault()
    console.log('logging with Google')
}

const clearValidationErrors = () => {
    setEmailValidation(false)
    setPasswordValidation(false)
}

const login = (e) => {
    clearValidationErrors()

    e.preventDefault()
    console.log('logging in normally')
    setLoading(true)

    if(email.length < 1 || !mailValidationRegex.test(email)){
     let msg = ''

     if(!mailValidationRegex.test(email)){
       msg = 'Enter a valid email address'
     }
     if(email.length < 1){
       msg = 'This field is required'
     }

     setEmailValidation(true)
     setEmailValidationMessage(msg)
     setLoading(false)
    }
    else{
      setTimeout(() => {
        setLoading(false)
        setEmailSupplied(true)
      },1000)
    }
    
}

const next = (e) => {
    e.preventDefault()
   
    if(password.length < 1){
    setPasswordValidation(true)
    }
    else{
        //validation successful
        console.log({email,password})
    }
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

        case 'otp':
            setOtp(ret)
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

                        {display2FA ? (
                            <div className="row g-3">
                               <div className="col-md-12">
                                 <div className="col-md-12">
                                 <h4 className="display-6">A 6-digit OTP code has been sent to your email address. Please enter it below to continue</h4>
                                 </div>
                                 <div className="form-floating">
                                    <input type="number" className="form-control" value={otp} onChange={(e) => {onChange('otp',e)}} id="otp" placeholder="OTP code "/>
                                    <label htmlFor="name">OTP Code</label>
                                 </div>
                               </div>
                            </div>
                        )
                        : (
                          <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input 
                                      type="email" 
                                      className="form-control" 
                                      value={email} 
                                      onChange={(e) => {onChange('email',e)}} 
                                      id="name" 
                                      placeholder="Email "
                                      required
                                    />
                                    <label htmlFor="name">Your Email address</label>
                                </div>
                                {emailValidation && <ErrorText errorMessage={emailValidationMessage}/>}
                            </div>
                            
                            { emailSupplied && (
                              <div className="col-md-12">
                                <div className="form-floating">
                                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => {onChange('password',e)}} placeholder="Password" required/>
                                  <label htmlFor="name">Your Password</label>
                                </div>
                                {passwordValidation && <ErrorText errorMessage={passwordValidationMessage}/>}
                              </div>
                            )}
                            
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} onClick={(email.length > 0 && password.length > 0) ? next : login}>
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
                        )}
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