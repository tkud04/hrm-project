import React,{useState,useEffect} from "react"
import SideBar from "../components/SideBar"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Dashboard = () => {
   const [tabs,setTabs] = useState([])

   const defaultTabs = [
      {
         title: 'EUR/USD',
         content: <h2>Any content 1</h2>
      },
      {
         title: 'Bitcoin',
         content: <h2>Any content 2</h2>
      },
      {
         title: 'Ethereum',
         content: <h2>Any content 3</h2>
      }
   ]

   const removeTab = (title) => {
     let temp = []
     for(let x of tabs){
       if(x.title !== title){
         temp.push(x)
       }
     }

     setTabs(temp)

   }

   const CurrencyTabs = () => (
      <Tabs>
      <TabList>
         {tabs.map((item,index) => (
            <Tab key={index}>
               <div style={{paddingLeft: 10, justifyContent:'space-between'}}>
                  {item.title} <a href="#" onClick={() => {removeTab(item.title)}} style={{marginLeft: 10}}><sup>x</sup></a>
               </div>
            </Tab>
          )
         )}
      </TabList>
  
      {tabs.map((item,index) => (
          <TabPanel key={index}>
            {item.content}
          </TabPanel>
          )
      )}
    </Tabs>
   )

   useEffect(() => {
    setTabs(defaultTabs)
   },[])
  
    return (
      <div className="row">
        <div className="col-md-4">
         <SideBar/>
        </div>
        <div className="col-md-8">
         <CurrencyTabs/>
        </div>
      </div>
      
    )
}

export default Dashboard