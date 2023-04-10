import React,{useState,useEffect} from "react"
import SideBar from "../components/SideBar"

const Dashboard = () => {
  
    return (
      <div className="row">
        <div className="col-md-4">
         <SideBar/>
        </div>
        <div className="col-md-8">
          <div className="py-5">
           <h4>Dashboard</h4>
          </div>
        </div>
      </div>
      
    )
}

export default Dashboard