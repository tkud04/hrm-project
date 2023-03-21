import React,{useState,useEffect} from "react"
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official"

const Dashboard = () => {
   const [data,setData] = useState([])
   const [chartsLoaded,setChartsLoaded] = useState(false)
  const options = {
   title: {
      text: 'BTC-SC'
   },
   rangeSelector: {
      selected: 1
  },
  series: [{
      type: 'candlestick',
      name: 'SC-BTC',
      data: data,
      dataGrouping: {
          units: [
              [
                  'week', // unit name
                  [1] // allowed multiples
              ], [
                  'month',
                  [1, 2, 3, 4, 6]
              ]
          ]
      }
  }]

  }

  const fetchData = async () => {
   const response = await fetch('tradify/data.json')
   if(response.status === 200){
      let responseData = await response.json()
      setData(responseData)
      setChartsLoaded(true)
   }
  }

  useEffect(() => {
   fetchData()
  },[])

  /* useEffect(() => {
      // Candlestick
      fetch('tradify/data.json', function (data) {
            
         // create the chart
         Highcharts.stockChart('candlestickChart', {

           chart: {
         },


             rangeSelector: {
                 selected: 1
             },

             series: [{
                 type: 'candlestick',
                 name: 'SC-BTC',
                 data: data,
                 dataGrouping: {
                     units: [
                         [
                             'week', // unit name
                             [1] // allowed multiples
                         ], [
                             'month',
                             [1, 2, 3, 4, 6]
                         ]
                     ]
                 }
             }]
         });
     });
   },[])
   */

    return (
        <>
        <button type="button" className="btn btn-labeled btn-primary pull-right">
               <span className="btn-label"><i className="fa fa-dollar"></i>
               </span>Goto Wallet</button>
               <h3>Dashboard</h3>
        
        <div className="row">
        <div className="col-md-9">
                     {/* First Row Starts Here */}
                     <div className="row">
                        <div className="col-lg-3 col-sm-6">
                           <div /*data-toggle="play-animation" data-play="fadeInDown" data-offset="0" data-delay="100"*/ className="panel widget">
                              <div className="panel-body bg-primary">
                                 <div className="row row-table row-flush">
                                    <div className="col-xs-12">
                                       <p className="mb0">$759,781,417.92 <em className="fa fa-level-up">
                                          </em>
                                       </p>
                                       <h4 className="m0">Market Cap</h4>
                                       <span className="m-t-10"><i className="fa fa-dollar"></i> Total Market Capital
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                           <div /*data-toggle="play-animation" data-play="fadeInDown" data-offset="0" data-delay="500"*/ className="panel widget">
                              <div className="panel-body bg-warning">
                                 <div className="row row-table row-flush">
                                    <div className="col-xs-12">
                                       <p className="mb0">$1,947,201.24 <em className="fa fa-level-down"></em></p>
                                       <h4 className="m0">Trade Volume</h4>
                                       <span className="f-left m-t-10">
                                       <i className="fa fa-dollar"></i> 24h Trade Volume
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                           <div /*data-toggle="play-animation" data-play="fadeInDown" data-offset="0" data-delay="1000"*/ className="panel widget">
                              <div className="panel-body bg-danger">
                                 <div className="row row-table row-flush">
                                    <div className="col-xs-12">
                                       <p className="mb0">32.4 Billions <em className="fa fa-refresh"></em></p>
                                       <h4 className="m0">Circ Supply</h4>
                                       <span className="m-t-10">
                                       <i className="text-c-green f-16 fa fa-refresh"></i> Circulating Supply
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                           <div /*data-toggle="play-animation" data-play="fadeInDown" data-offset="0" data-delay="1500"*/ className="panel widget">
                              <div className="panel-body bg-success">
                                 <div className="row row-table row-flush">
                                    <div className="col-xs-12">
                                       <p className="mb0">40 Billions <em className="fa fa-money"></em></p>
                                       <h4 className="m0">Total Supply</h4>
                                       <span className="f-left m-t-10">
                                       <i className="fa fa-money"></i> Total Supply
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* First Row Ends Here */}
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="panel panel-default">
                              <div className="panel-heading">All Markets
                                 <a href="#;" data-perform="panel-dismiss" data-toggle="tooltip" title="" className="pull-right" data-original-title="Close Panel">
                                 <em className="fa fa-times"></em>
                                 </a>
                                 <a href="#;" data-perform="panel-collapse" data-toggle="tooltip" title="" className="pull-right" data-original-title="Collapse Panel">
                                 <em className="fa fa-plus"></em>
                                 </a>
                              </div>
                              <div className="panel-wrapper collapse">
                                 <div className="panel panel-default">
                                    <div className="panel-heading">All Markets |
                                       <small>All Availble Markets</small>
                                    </div>
                                    <div className="panel-body">
                                       <table id="datatable1" className="table table-striped table-hover">
                                          <thead>
                                             <tr>
                                                <th className="tableSmallPad">Coin</th>
                                                <th className="tableSmallPad">Price</th>
                                                <th className="tableSmallPad">Vol</th>
                                                <th className="tableSmallPad">CHG</th>
                                                <th className="tableSmallPad">Name</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             {/* BCH Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad">
                                                   {/*RADIO 1*/}
                                                   <input type="radio" className="radio_item" value="" name="BCH" id="radio1"/>
                                                   <label className="label_item" htmlFor="radio1"> <i className="fa fa-star text-c-blue"></i> </label> BCH
                                                </td>
                                                <td className="tableSmallPad">0.16000009</td>
                                                <td className="tableSmallPad">2967.720</td>
                                                <td className="text-c-blue tableSmallPad">+17.84</td>
                                                <td className="tableSmallPad">Bitcoin Cash</td>
                                             </tr>
                                             {/* BCH Ends Here */}
                                             {/* ETH Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio10"/>
                                                   <label className="label_item" htmlFor="radio10"> <i className="fa fa-star text-c-blue"></i> </label> ETH
                                                </td>
                                                <td className="tableSmallPad">0.10039995</td>
                                                <td className="tableSmallPad">2887.720</td>
                                                <td className="text-c-blue tableSmallPad">+1.35</td>
                                                <td className="tableSmallPad">Ethereum</td>
                                             </tr>
                                             {/* ETH Ends Here */}
                                             {/* XRP Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio3"/>
                                                   <label className="label_item" htmlFor="radio3"> <i className="fa fa-star text-c-blue"></i> </label> XRP
                                                </td>
                                                <td className="tableSmallPad">0.00009485</td>
                                                <td className="tableSmallPad">1633.576</td>
                                                <td className="text-c-blue tableSmallPad">+5.10</td>
                                                <td className="tableSmallPad">Ripple</td>
                                             </tr>
                                             {/* XRP Ends Here */}
                                             {/* STR Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio4"/>
                                                   <label className="label_item" htmlFor="radio4"> <i className="fa fa-star text-c-blue"></i> </label> STR
                                                </td>
                                                <td className="tableSmallPad">0.00004322</td>
                                                <td className="tableSmallPad">1196.608</td>
                                                <td className="text-c-red tableSmallPad">-0.05</td>
                                                <td className="tableSmallPad">Stellar</td>
                                             </tr>
                                             {/* STR Ends Here */}
                                             {/* LTC Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio5"/>
                                                   <label className="label_item" htmlFor="radio5"> <i className="fa fa-star text-c-blue"></i> </label> LTC
                                                </td>
                                                <td className="tableSmallPad">0.01790003</td>
                                                <td className="tableSmallPad">1115.235</td>
                                                <td className="text-c-blue tableSmallPad">+1.58</td>
                                                <td className="tableSmallPad">Litecoin</td>
                                             </tr>
                                             {/* LTC Ends Here */}
                                             {/* SC Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio6"/>
                                                   <label className="label_item" htmlFor="radio6"> <i className="fa fa-star text-c-blue"></i> </label> SC
                                                </td>
                                                <td className="tableSmallPad">0.00000272</td>
                                                <td className="tableSmallPad">131.014</td>
                                                <td className="text-c-blue tableSmallPad">+1.87</td>
                                                <td className="tableSmallPad">Siacoin</td>
                                             </tr>
                                             {/* SC Ends Here */}
                                             {/* Doge Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio7"/>
                                                   <label className="label_item" htmlFor="radio7"> <i className="fa fa-star text-c-blue"></i> </label> DOGE
                                                </td>
                                                <td className="tableSmallPad">0.00000055</td>
                                                <td className="tableSmallPad">169.631</td>
                                                <td className="text-c-red tableSmallPad">-1.79</td>
                                                <td className="tableSmallPad">Dogecoin</td>
                                             </tr>
                                             {/* Doge Ends Here */}
                                             {/* DBG Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio8"/>
                                                   <label className="label_item" htmlFor="radio8"> <i className="fa fa-star text-c-blue"></i> </label> DGB
                                                </td>
                                                <td className="tableSmallPad">0.00000402</td>
                                                <td className="tableSmallPad">90.224</td>
                                                <td className="text-c-blue tableSmallPad">+0.00</td>
                                                <td className="tableSmallPad">DigiByte</td>
                                             </tr>
                                             {/* DGB Ends Here */}
                                             {/* NXT Starts Here */}
                                             <tr className="clickable-row" data-href="index.html">
                                                <td className="tableSmallPad"><input type="radio" className="radio_item" value="" name="ETH" id="radio9"/>
                                                   <label className="label_item" htmlFor="radio9"> <i className="fa fa-star text-c-blue"></i> </label> NXT
                                                </td>
                                                <td className="tableSmallPad">0.00002241</td>
                                                <td className="tableSmallPad">100.305</td>
                                                <td className="text-c-blue tableSmallPad">+2.56</td>
                                                <td className="tableSmallPad">NXT</td>
                                             </tr>
                                             {/* NXT Ends Here */}                                               
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 <div className="panel-footer">All Markets</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Chart Starts Here */}
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="panel panel-default">
                              <div className="panel-collapse">
                                 <div className="panel-body">
                                    <h4>BTC-SC</h4>
                                    <div id="candlestickChart" className="h-500">
                                       {chartsLoaded && (
                                       <HighchartsReact
                                         highcharts={Highcharts}
                                         //constructorType={"stockChart"}
                                         options={{
                                          title: {
                                             text: 'BTC-SC'
                                          },
                                          rangeSelector: {
                                             selected: 1
                                         },
                                         series: [{
                                             //type: 'candlestick',
                                             name: 'SC-BTC',
                                             data: data,
                                             dataGrouping: {
                                                 units: [
                                                     [
                                                         'week', // unit name
                                                         [1] // allowed multiples
                                                     ], [
                                                         'month',
                                                         [1, 2, 3, 4, 6]
                                                     ]
                                                 ]
                                             }
                                         }]
                                       
                                         }}
                                       />
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Chart Ends Here */}
                     <div className="row">
                        <div className="col-md-6">
                           <div /*data-toggle="play-animation" data-play="fadeInLeft" data-offset="0" data-delay="1400"*/ className="panel widget">
                              <div className="panel-body">
                                 <div className="text-right text-muted">
                                    <em className="fa fa-gavel fa-2x text-danger"></em>
                                 </div>
                                 <h3 className="mt0">Bid Price</h3>
                                 <p className="text-danger"><i className="fa fa-money"></i> $0.02</p>
                                 <p><i className="fa fa-btc"></i> 0.00000284</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div /*data-toggle="play-animation" data-play="fadeInLeft" data-offset="0" data-delay="1400"*/ className="panel widget">
                              <div className="panel-body">
                                 <div className="text-right text-muted">
                                    <em className="fa fa-bullhorn fa-2x text-green"></em>
                                 </div>
                                 <h3 className="mt0">Ask Price</h3>
                                 <p className="text-green"><i className="fa fa-money"></i> $0.02</p>
                                 <p><i className="fa fa-btc"></i> 0.00000285</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Market History */}
                     <div className="col-md-12">
                        <div className="panel panel-default">
                           <div className="panel-heading">Market History
                              <a href="#" data-perform="panel-collapse" data-toggle="tooltip" title="Collapse Panel" className="pull-right">
                              <em className="fa fa-minus"></em>
                              </a>
                           </div>
                           <div className="table-responsive">
                              <table className="table table-bordered table-hover">
                                 <thead>
                                    <tr>
                                       <th>Date</th>
                                       <th>Buy/Sell</th>
                                       <th>Bid/Ask</th>
                                       <th>Total Units SC</th>
                                       <th>Total Cost SC</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>
                                          02/18/2018 06:02:45 PM
                                       </td>
                                       <td className="text-green">Buy <i className="fa fa-arrow-up"></i></td>
                                       <td>0.00000276</td>
                                       <td>1627.72581489</td>
                                       <td>0.00449252</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          02/18/2018 06:02:45 PM
                                       </td>
                                       <td className="text-danger">Sell <i className="fa fa-arrow-down"></i></td>
                                       <td>0.00000276</td>
                                       <td>2627.72581489</td>
                                       <td>0.00749252</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          02/18/2018 06:02:45 PM
                                       </td>
                                       <td className="text-danger">Sell <i className="fa fa-arrow-down"></i></td>
                                       <td>0.00000276</td>
                                       <td>2627.72581489</td>
                                       <td>0.00749252</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          02/18/2018 06:02:45 PM
                                       </td>
                                       <td className="text-danger">Sell <i className="fa fa-arrow-down"></i></td>
                                       <td>0.00000276</td>
                                       <td>2627.72581489</td>
                                       <td>0.00749252</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          02/18/2018 06:02:45 PM
                                       </td>
                                       <td className="text-danger">Sell <i className="fa fa-arrow-down"></i></td>
                                       <td>0.00000276</td>
                                       <td>2627.72581489</td>
                                       <td>0.00749252</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          02/18/2018 06:02:45 PM
                                       </td>
                                       <td className="text-green">Buy <i className="fa fa-arrow-up"></i></td>
                                       <td>0.00000276</td>
                                       <td>1627.72581489</td>
                                       <td>0.00449252</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <div className="panel-footer">
                              <div className="row">
                                 <div className="col-lg-12">
                                    <div className="float-right">
                                       <ul className="pagination pagination-sm pagi-margin">
                                          <li className="disabled"><a href="#">First</a></li>
                                       </ul>
                                       <ul className="pagination pagination-sm pagi-margin">
                                          <li className="disabled"><a href="#">Prev</a></li>
                                       </ul>
                                       <ul className="pagination pagination-sm pagi-margin">
                                          <li className="active"><a href="#">1</a></li>
                                          <li><a href="#">2</a></li>
                                          <li><a href="#">3</a></li>
                                          <li><a href="#">4</a></li>
                                          <li><a href="#">5</a></li>
                                       </ul>
                                       <ul className="pagination pagination-sm pagi-margin">
                                          <li><a href="#">Next</a></li>
                                       </ul>
                                       <ul className="pagination pagination-sm pagi-margin">
                                          <li><a href="#">Last</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
        </div>
        </>
    )
}

export default Dashboard