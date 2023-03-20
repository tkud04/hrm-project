import React from "react"

const Home = () => {
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

    return (
        <>
        <section className="home bg-image home-small" id="home">

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="home-wrapper home-intro row vertical-content">
                            <div className="col-md-6">
                                <h1>Digital Currency Exchange</h1>
                                <h4 className="normal-font-w">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</h4>
                                <a href="index.html" className="btn btn-custom"><i className="fa fa-line-chart"></i> Market</a>
                                <a href="https://www.youtube.com/watch?v=tgEFgPk-cRY" className="btn btn-secondary popup-video"><i className="glyphicon glyphicon-play"></i> How To Trade?</a>
                            </div>

                            <div className="col-md-5 col-sm-10 m-t-20">
                                <div className="tabbable-panel">
                                <div className="tabbable-line">
                                   <ul className="nav nav-tabs border-bottom-none">
                                      <li className="active btn btn-primary text-white">
                                         <a className="normal-font-w border-none" href="#tab_default_1" data-toggle="tab"><i className="fa fa-user"></i>
                                         Register </a>
                                      </li>
                                      <li className="btn btn-secondary text-white">
                                         <a className="normal-font-w border-none" href="#tab_default_2" data-toggle="tab"><i className="fa fa-key"></i>
                                         Sign In </a>
                                      </li>
                                   </ul>
                                   <div className="tab-content tab-content-BuySell m-t-9">
                                      <div className="tab-pane active" id="tab_default_1">
                                          <form className="intro-form" action="#" id="invite" method="POST">
                                                        <h5><i className="fa fa-user"></i> Register<span>Don't have an account? Register to start trading</span></h5>
                                                        <input name="fname" id="fname" className="fname" placeholder="Full Name" type="text" required="required"/>
                                                        <input type="email" placeholder="Email Address" name="email" required="required"/>
                                                        <input type="password" placeholder="Password" className="form-control" required="required"/>
                                                        <input type="password" placeholder="Repeat Password" className="form-control" required="required"/>
                                                        <button type="submit" className="btn btn-secondary btn-block">Register</button>

                                                        <p>By Signing up you agree to our <a href="#">terms of conditions</a></p>
                                                    </form>
                                      </div>


                                      <div className="tab-pane" id="tab_default_2">
                                        <form className="intro-form" action="#" id="invite-2" method="POST">
                                               <h5><i className="fa fa-key"></i> Sign in<span>Have an account? Sign in & start trading</span></h5>
                                               <input name="fname" id="fname-2" className="fname" placeholder="Full Name" type="text" required="required"/>
                                               <input type="email" placeholder="Email Address" name="email" required="required"/>
                                               <button type="submit" className="btn btn-secondary btn-block">Sign In</button>

                                               <p>By Clicking Get Trial you agree to our terms of conditions of this product</p>
                                               </form>
                                      </div>
                                   </div>
                                </div>
                             </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                </div>{/* end row */}
            </div>
           {/* end container */}
        </section>
        <section className="section bg-lightgray" id="About">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            
                            <p><span className="fa fa-bar-chart color-blue"></span> What We Do</p>
                            <h2 className="text-uppercase text-blue text-blue">Trade Confidently</h2>
                        </div>
                    </div>
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <hr className="light"/>
                    <p className="text-faded">
                        We provide individuals and businesses a world class experience to buy and sell cutting-edge cryptocurrencies
                        and digital tokens. Crypto is the go-to spot for traders who demand lightning fast trade execution,
                        stable wallets, and industry-best security practices. Whether you are new to trading and cryptocurrencies, or a veteran to both, It
                        was created for you!
                    </p>
                    <div className="row"><a href="index-2.html" className="btn btn-primary">Get Started Now <i className="fa fa-sign-in"></i></a></div>
                </div>
            </div>
               {/* end row */}

            </div>{/* end container */}
        </section>
       {/* end SERVICES */}

       {/* FEATURES */}
        <section className="section">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                    <i className="fa fa-money fa-3x color-blue"></i>
                   <h4 className="title">Low Fee</h4>
                   <p>0% maker fee and 0.1% taker fee makes us one of the most competitive exchanges on the market</p>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                    <i className="fa fa-lock fa-3x color-blue"></i>
                   <h4 className="title">Security</h4>
                   <p>The vast majority of digital assets are stored securely in offline storages</p>
                </div>


                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                    <i className="fa fa-users fa-3x color-blue"></i>
                   <h4 className="title">Experienced Team</h4>
                   <p>Our experienced team helps us build the best product and deliver first class service to our clients</p>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                    <i className="fa fa-support fa-3x color-blue"></i>
                   <h4 className="title">24/7 Support</h4>
                   <p>Our multilingual 24/7 support allows us to keep in touch with customers in all time zones and regions</p>
                </div>


                </div>
               {/* end row */}

            </div>{/* end container */}
        </section>
       {/* end FEATURES */}


       {/* Currencies */}
        <section className="section bg-lightgray" id="Currencies">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <p><span className="fa fa-money color-blue"></span> Avaible Currencies to Trade</p>
                            <h2 className="text-uppercase text-blue text-blue">Availble Currenciess</h2>
                        </div>
                    </div>
                  </div>
                  <div className="row text-center">
                    <center>
                    {currencies.map((item,index) => {
                      let {name,status,img} = item 
                      return (
                        <div className="col-md-1 col-sm-2 col-xs-4 m-t-9 text-center">
                          <a href="#">
                           <img className="w-80" src={img} alt={name}/>
                          </a>
                          <span className="label label-primary">{name}</span><span className="label label-warning">{status}</span>
                        </div>
                      )
                     }
                    )}
                    </center>
                   
                </div>
              </div>
        </section>
       {/* end Currencies */}





       {/* BLOG */}
        <section className="section bg-lightgray" id="blog">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            
                            <p><span className="fa fa-bullhorn color-blue"></span>From our Blog</p>
                            <h2 className="text-uppercase text-blue">News & Stories</h2>
                        </div>
                    </div>
                </div>
               {/* end row */}

                <div className="row">
                    <div className="col-sm-4">
                        <div className="blog-box">
                            <div className="blog-box-content">
                                <h4 className="blog-grid-title-md"><a href="#">Architecto beatae vitae dicta sunt explicabo</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.</p>
                            </div>
                            <div className="blog-box-footer">
                                <a href="#" className="btn btn-sm btn-custom"> Read more <p className="label label-warning">26 Feb 2018</p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="blog-box">
                            <div className="blog-box-content">
                                <h4 className="blog-grid-title-md"><a href="#">Architecto beatae vitae dicta sunt explicabo</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.</p>
                            </div>
                            <div className="blog-box-footer">
                                <a href="#" className="btn btn-sm btn-custom"> Read more <p className="label label-warning">26 Feb 2018</p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="blog-box">
                            <div className="blog-box-content">
                                <h4 className="blog-grid-title-md"><a href="#">Architecto beatae vitae dicta sunt explicabo</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.</p>
                            </div>
                            <div className="blog-box-footer">
                                <a href="#" className="btn btn-sm btn-custom"> Read more <p className="label label-warning">26 Feb 2018</p></a>
                            </div>
                        </div>
                    </div>

                </div>{/* end row */}

            </div>{/* end container */}
        </section>
       {/* end BLOG */}
       </>
    )
}

export default Home