import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"
import logo from '../img/icon-1.png'
import { useGlobalState } from "../contexts/globalContext"

const SideBar = ({
    logout,
    activeBar='profile'
}) => {
    const globalState = useGlobalState()
    const ll = () => {
        console.log('no logout function is defined')
    }

    const logoutFunction = typeof logout === 'function' ? logout : ll
    
    const getActiveBar = (str) => {
     let ret = activeBar === str ? 'active' : 'link-dark'
     ret = 'nav-link ' + ret
     return ret
    }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: 280}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className={getActiveBar('profile')} aria-current="page">
              <i className="fa fa-user" style={styles.linkIcon}></i>
              Profile
            </a>
          </li>
          <li>
            <a href="#" className={getActiveBar('security')} >
            <i className="fa fa-shield" style={styles.linkIcon}></i>
              Security
            </a>
          </li>
          <li>
            <a href="#" className={getActiveBar('verification')}>
            <i className="fa fa-contact" style={styles.linkIcon}></i>
              Verification
            </a>
          </li>
          <li>
            <a href="#" className={getActiveBar('notifications')}>
            <i className="fa fa-bell" style={styles.linkIcon}></i>
              Notifications
            </a>
          </li>
          <li>
            <a href="#" className={getActiveBar('activity')}>
            <i className="fa fa-pulse" style={styles.linkIcon}></i>
              Activity
            </a>
          </li>
        </ul>
        <hr/>
        {/**<div className="dropdown">
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>**/}
      </div>
   )
}

const styles = {
    linkIcon: {
        width: 16,
        height: 16,
        marginRight: 10
    }
}

export default SideBar
