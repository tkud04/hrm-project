import React,{useState,useEffect} from "react"
import SideBar from "../components/SideBar"
import GenericModal from "../components/GenericModal"
import ErrorText from "../components/ErrorText"


const Verification = () => {
  
  
  const [loading,setLoading] = useState(false)
  const [tabId,setTabId] = useState('address')
  
  const onInputChanged = (id,value) => {
  /*
   switch(id){
    case 'current-password':
      setCurrentPassword(value)
    break

    case 'new-password':
      setNewPassword(value)
    break

    case 'confirm-new-password':
      setConfirmNewPassword(value)
    break

    default:
      console.log('nothing to do here')
   }
   */
  }

  const clearValidationErrors = () => {
   /*setCurrentPasswordValidation(false)
   setNewPasswordValidation(false)
   setConfirmNewPasswordValidation(false)*/
  }

  const clearInputs = () => {
   /* setCurrentPassword('')
    setNewPassword('')
    setConfirmNewPassword('')*/
  }

  const next = () => {
    clearValidationErrors()
    /*let validation = currentPassword === '' || currentPassword.length < 7 ||
    newPassword === '' || newPassword.length < 7 || 
    confirmNewPassword === '' || confirmNewPassword.length < 7 ||
    newPassword !== confirmNewPassword

    if(validation){
      if(currentPassword.length < 7){
        setCurrentPasswordValidationMessage('Must be at least 7 characters')
        setCurrentPasswordValidation(true)
      }
      if(currentPassword.length === ''){
        setCurrentPasswordValidationMessage('This field is required')
        setCurrentPasswordValidation(true)
      }

      if(newPassword.length < 7){
        setNewPasswordValidationMessage('Must be at least 7 characters')
        setNewPasswordValidation(true)
      }
      if(newPassword.length === ''){
        setNewPasswordValidationMessage('This field is required')
        setNewPasswordValidation(true)
      }

      if(confirmNewPassword.length < 7){
        setConfirmNewPasswordValidationMessage('Must be at least 7 characters')
        setConfirmNewPasswordValidation(true)
      }
      if(confirmNewPassword.length === ''){
        setConfirmNewPasswordValidationMessage('This field is required')
        setConfirmNewPasswordValidation(true)
      }
      if(newPassword !== confirmNewPassword){
        setConfirmNewPasswordValidationMessage('Passwords do not match')
        setConfirmNewPasswordValidation(true)
      }
    }
    else{
      setLoading(true)
      setTimeout(() => {
        alert('Password changed!')
        setLoading(false)
        clearInputs()
        document.querySelector('#close-button').click()
      },1000)
    }*/
  }

  const selectTab = id => {
    setTabId(id)
  }

  const activeTabColors = {
    backgroundColor: '#16D5FF',
    color: '#ffffff'
  }

  const inactiveTabColors = {
    backgroundColor: 'rgb(245, 247, 250)',
    color: '#000000'
  }

  
    return (
      <div className="row">
        <div className="col-md-4">
         <SideBar
          activeBar="verification"
         />
        </div>
        <div className="col-md-8">
          <div className="py-5">
           <div className="row" style={styles.tabWrapper}>
             <a className="col-md-6" onClick={() => {selectTab('address')}} >
             <div style={{...styles.tabDiv,backgroundColor: tabId === 'address' ? activeTabColors.backgroundColor : inactiveTabColors.backgroundColor}}>
              <h4 style={{...styles.tabTitle,color: tabId === 'address' ? activeTabColors.color : inactiveTabColors.color}}>Address</h4>
             </div>
             </a>
             <a className="col-md-6" onClick={() => {selectTab('id')}}>
             <div style={{...styles.tabDiv,backgroundColor: tabId === 'id' ? activeTabColors.backgroundColor : inactiveTabColors.backgroundColor}}>
             <h4 style={{...styles.tabTitle,color: tabId === 'id' ? activeTabColors.color : inactiveTabColors.color}}>ID</h4>
             </div>
             </a>
           </div>
          </div>

          <div className="row">
            {tabId === 'address' && (
              <div className="col-md-12">
                <h4>Address Tab</h4>
              </div>
            )}

            {tabId === 'id' && (
              <div className="col-md-12">
                 <h4>ID Tab</h4>
              </div>
            )}
          </div>
        </div>
     
      </div>
    )
}

const styles = {
  tabWrapper: {
    borderRadius: 12,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row', 
    //justifyContent: 'space-between',
    width: '90%',
    //borderBottomWidth: 0.5,
    //borderBottomStyle: 'solid',
    //borderBottomColor: '#00000015'
  },
  tabDiv: {
    padding: 4,
    borderRadius: 5,
    justifyContent: 'center'
  },
  tabTitle: {
    alignSelf: 'center',
    textAlign: 'center'
  }
}

export default Verification
