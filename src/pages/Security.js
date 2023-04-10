import React,{useState,useEffect} from "react"
import SideBar from "../components/SideBar"

const Security = () => {
  
    return (
      <div className="row">
        <div className="col-md-4">
         <SideBar
          activeBar="security"
         />
        </div>
        <div className="col-md-8">
          <div className="py-5">
           <h4>Security</h4>
          </div>
        </div>
      </div>
    )
}

export default Security
