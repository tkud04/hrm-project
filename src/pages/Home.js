import React,{useState,useEffect} from "react"
import { redirect, useNavigate } from "react-router-dom"
import hero from '../img/hero-1.png'
import about from '../img/about.png'
import icon9 from '../img/icon-9.png'
import icon10 from '../img/icon-10.png'
import icon2 from '../img/icon-2.png'
import icon7 from '../img/icon-7.png'
import icon6 from '../img/icon-6.png'
import icon5 from '../img/icon-5.png'
import icon4 from '../img/icon-4.png'
import icon3 from '../img/icon-3.png'
import icon8 from '../img/icon-8.png'

const Home = () => {
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [loginEmail,setLoginEmail] = useState('')
const [loginPassword,setLoginPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')
const [signupEmail,setSignupEmail] = useState('')
const [signupPassword,setSignupPassword] = useState('')
const navigate = useNavigate()


const currencies = [
{name: 'Ada',status: 'New',img: require('../images/ada.png')},
{name: 'Ark',status: 'New',img: require('../images/ark.png')},
{name: 'Tron',status: 'New',img: require('../images/trx.png')},
{name: 'Eos',status: 'New',img: require('../images/eos.png')},
{name: 'Qtum',status: 'New',img: require('../images/qtum.png')},
{name: 'Bitcoin',status: 'Top',img: require('../images/btc.png')},
{name: 'Ethereum',status: 'Old',img: require('../images/eth.png')},
{name: 'Litecoin',status: 'Old',img: require('../images/ltc.png')},
{name: 'Dash',status: 'Old',img: require('../images/dash.png')}
]

const features = [
    {icon: icon7, title: 'Easy To Start', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon6, title: 'Safe & Secure', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon5, title: 'Affordable Plans', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon4, title: 'Secure Storage', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon3, title: 'Protected By Insurance', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon8, title: '24/7 Support', description: 'Just a long text to fill the space and see how the UI looks'},
]

const services = [
    {icon: icon7, dataDelay: '0.1s', title: 'Currency Wallet', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon3, dataDelay: '0.3s', title: 'Currency Transaction', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon9, dataDelay: '0.5s', title: 'Bitcoin Investment', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon5, dataDelay: '0.1s', title: 'Currency Exchange', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon2, dataDelay: '0.3s', title: 'Bitcoin Escrow', description: 'Just a long text to fill the space and see how the UI looks'},
    {icon: icon8, dataDelay: '0.5s', title: 'Token Sale', description: 'Just a long text to fill the space and see how the UI looks'},
]

const roadmap = [
    {title: 'Fund your account', description: 'Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.'},
    {title: 'Verify your identity', description: 'Complete the identity verification process to secure your account and transactions.'},
    {title: 'Start trading', description: 'You\'re good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.'}
]

const tokenSales = [
    {title: 'BTC', icon: require('../img/coins/btc.png'), description:'0.71% - 117.5%',status: 'increase'},
    {title: 'USDT', icon: require('../img/coins/usdt.png'), description:'1.74% - 203.34%',status: 'decrease'},
    {title: 'ETH', icon: require('../img/coins/eth.png'), description:'0.81% - 140.22%',status: 'increase'},
    {title: 'DOT', icon: require('../img/coins/dot.png'), description:'1.45% - 87.11%',status: 'decrease'},
    {title: 'ADA', icon: require('../img/coins/ada.png'), description:'1.25% - 78.09%',status: 'decrease'},
    {title: 'SHIB', icon: require('../img/coins/shib.png'), description:'0.30% - 3.54%',status: 'decrease'},
]

const faqs = [
    {question: 'How do I get started?',answer: 'This is a long text to fill up space and render the UI with dummy data in order to see how it looks'},
    {question: 'Is trading coins legal in my country?',answer: 'This is a long text to fill up space and render the UI with dummy data in order to see how it looks'},
    {question: 'How do I withdraw my earnings?',answer: 'This is a long text to fill up space and render the UI with dummy data in order to see how it looks'},
    {question: 'Is this site trusted?',answer: 'This is a long text to fill up space and render the UI with dummy data in order to see how it looks'},
    {question: 'How do I deposit funds?',answer: 'This is a long text to fill up space and render the UI with dummy data in order to see how it looks'},
]


const handleSignup = (e) => {
    e.preventDefault()
    console.log({firstName,lastName,signupEmail,signupPassword,confirmPassword})
}

const handleLogin = (e) => {
    e.preventDefault()
    console.log({loginEmail,loginPassword})
   navigate('/dashboard')
}

const Banner = () => {

    return (
     <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <h1 className="display-4 mb-3 animated slideInDown">Make Better Life With Trusted CryptoCoin</h1>
                    <p className="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                        magna dolore erat amet</p>
                    <a href="" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
                </div>
                <div className="col-lg-6 animated fadeIn">
                    <img className="img-fluid animated pulse infinite" style={{animationDuration: 3}} src={hero}
                        alt=""/>
                </div>
            </div>
        </div>
    </div>

    )
}

    return (
      <>
       <Banner/>

       {/* About */}
       <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src={about} alt=""/>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h1 className="display-6">About Us</h1>
                        <p className="text-primary fs-5 mb-4">The Most Trusted Cryptocurrency Platform</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                            diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <div className="d-flex align-items-center mb-2">
                            <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>Tempor erat elitr rebum at clita</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>Tempor erat elitr rebum at clita</span>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>Tempor erat elitr rebum at clita</span>
                        </div>
                        <a className="btn btn-primary py-3 px-4" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*Facts*/}
    <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid mb-4" src={icon9} alt=""/>
                    <h1 className="display-4" data-toggle="counter-up">123456</h1>
                    <p className="fs-5 text-primary mb-0">Today Transactions</p>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid mb-4" src={icon10} alt=""/>
                    <h1 className="display-4" data-toggle="counter-up">123456</h1>
                    <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
                    <img className="img-fluid mb-4" src={icon2} alt=""/>
                    <h1 className="display-4" data-toggle="counter-up">123456</h1>
                    <p className="fs-5 text-primary mb-0">Total Transactions</p>
                </div>
            </div>
        </div>
    </div>

    {/*Features*/}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
                <h1 className="display-6">Why Us!</h1>
                <p className="text-primary fs-5 mb-5">The Best In The crypto Industry</p>
            </div>
            <div className="row g-5">
             {features.map((f,index) => {
                return (
                    <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex align-items-start">
                        <img className="img-fluid flex-shrink-0" src={f.icon} alt=""/>
                        <div className="ps-4">
                            <h5 className="mb-3">{f.title}</h5>
                            <span>{f.description}</span>
                        </div>
                    </div>
                </div>
                )
               }
             )}
            </div>
        </div>
    </div>

    {/*Services*/}
    <div className="container-xxl bg-light py-5 my-5">
    <div className="container py-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
            <h1 className="display-6">Services</h1>
            <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
        </div>
        <div className="row g-4">
          {services.map((s,index) => {
            return (
                <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={s.dataDelay}>
                <div className="service-item bg-white p-5">
                    <img className="img-fluid mb-4" src={s.icon} alt=""/>
                    <h5 className="mb-3">{s.title}</h5>
                    <p>{s.description}</p>
                    <a href="#">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                </div>
                </div>
            )
           }
          )}
        </div>
    </div>
    </div>

    {/*Roadmap */}
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
            <h1 className="display-6">Build your crypto portfolio</h1>
            <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
        </div>
        <div className="roadmap-carousel wow fadeInUp" data-wow-delay="0.1s">
          {roadmap.map((r,index) => {
            return (
                <div key={index} className="roadmap-item">
                <div className="roadmap-point"><span></span></div>
                <h5>{r.title}</h5>
                <span>{r.description}</span>
            </div>
            )
          }
          )}
        </div>
    </div>
    </div>

    {/*Token Sale */}
    <div className="container-xxl bg-light py-5 my-5">
    <div className="container py-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
            <h1 className="display-6">Earn Today</h1>
            <p className="text-primary fs-5 mb-5">Simple & Secure. Search popular coins and start earning.</p>
        </div>
        <div className="row g-3">
          {tokenSales.map((t,index) => {
            let statusColor = t.status === 'increase' ? 'text-primary' : 'text-danger'
            return (
                <div key={index} className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-white text-center p-3">
                    <img src={t.icon} alt=""/>
                    <h1 className="mb-0">
                        
                        {t.title}
                    </h1>
                    <span className={`${statusColor} fs-5`}>{t.description}</span>
                </div>
            </div>
            )
          })
          }
        </div>
    </div>
    </div>

    {/*FAQ */}
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
            <h1 className="display-6">FAQs</h1>
            <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="accordionExample">
              {faqs.map((item,index) => {
                return (
                    <div key={index} className="accordion-item wow fadeInUp" data-wow-delay={item.dataDelay}>
                    <h2 className="accordion-header" id={`heading-${index}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`} aria-expanded="true" aria-controls={`#collapse-${index}`}>
                           {item.question}
                        </button>
                    </h2>
                    <div id={`#collapse-${index}`} className="accordion-collapse collapse show" aria-labelledby={`#heading-${index}`}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {item.answer}
                        </div>
                    </div>
                </div>
                )
              }
              )}
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Home