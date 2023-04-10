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
           <div style={styles.itemWrapper}>
             <h4 style={styles.itemTitle}>Two-Factor Authentication <i className=" fa fa-exclamation-circle" data-bs-toggle="tooltip" data-bs-title="Default tooltip"></i></h4>
             <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between'}}>
              <div style={{flexDirection: 'row', marginLeft: 5}}>
                <i className="fa fa-envelope"></i>
                <span style={{marginLeft: 10, color: 'rgb(38, 55, 77)'}}>Email</span>
              </div>
              <p>2FA codes are sent by email</p>
              <button className="btn btn-primary" style={{marginRight: 10}}>Enable</button>
             </div>
           </div>

           <div style={{...styles.itemWrapper,marginTop: 50}}>
             <h4 style={styles.itemTitle}>Password </h4>
             <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between'}}>
              <div style={{flexDirection: 'row', marginLeft: 5}}>
                <i className="fa fa-lock"></i>
                <span style={{marginLeft: 10, color: 'rgb(38, 55, 77)'}}>Change Password</span>
              </div>
              <button className="btn btn-primary" style={{marginRight: 10}} data-bs-toggle="modal" data-bs-target="#exampleModal">Change</button>
             </div>
           </div>
          </div>
        </div>
        <div className="col-md-12">
      
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    )
}

const styles = {
  itemWrapper: {
    border: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(219, 225, 234)',
    borderRadius: 12,
    paddingTop: 26,
    paddingBottom: 24
  },
  itemTitle: {
    fontSize: 18,
    color: 'rgb(38, 55, 77)',
    marginLeft: 10
  }
}

export default Security
