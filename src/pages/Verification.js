import React,{useState,useEffect} from "react"
import SideBar from "../components/SideBar"
import GenericModal from "../components/GenericModal"
import ErrorText from "../components/ErrorText"
import loadingImage from '../img/loading.gif'
import { useNavigate } from "react-router-dom"


const Verification = () => {
  
  const navigate = useNavigate()

  const [loading,setLoading] = useState(false)
  const [tabId,setTabId] = useState('address')
  const [country,setCountry] = useState('none')
  const [countryValidation,setCountryValidation] = useState(false)
  const [zipCode,setZipCode] = useState('')
  const [zipCodeValidation,setZipCodeValidation] = useState(false)
  const [state,setState] = useState('none')
  const [stateValidation,setStateValidation] = useState(false)
  const [address,setAddress] = useState('')
  const [addressValidation,setAddressValidation] = useState(false)
  const [addressStates,setAddressStates] = useState([])
  const [city,setCity] = useState('')
  const [cityValidation,setCityValidation] = useState(false)
  const [idType,setIdType] = useState('none')
  const [idTypeValidation,setIdTypeValidation] = useState(false)
  const [idNumber,setIdNumber] = useState('')
  const [idNumberValidation,setIdNumberValidation] = useState(false)
  const [pic,setPic] = useState('')
  const [picValidation,setPicValidation] = useState('')

  const onInputChanged = (id,value) => {
  
   switch(id){
    case 'zip-code':
      setZipCode(value)
    break

    case 'address':
      setAddress(value)
    break

   case 'city':
      setCity(value)
    break

    case 'pic':
      setPic(value)
    break

    case 'idNumber':
      setIdNumber(value)
    break

    default:
      console.log('nothing to do here')
   
   }
  }

  const onSelectChanged = (id,value) => {
    switch(id){
      case 'country':
       setCountry(value)
      break

      case 'state':
        setState(value)
       break

      case 'idType':
        setIdType(value)
      break
    }
  }

  const countries = [
   {label: 'Nigeria', value: 'nigeria'}
  ]

  const states = [
    {label: 'Lagos', value: 'lagos'}
  ]

  const emptyStates = [
    {label: 'Select an option', value: 'none'},
  ]

  const idTypes = [
    {label: 'Voter\'s card',value: 'voters-card'},
    {label: 'Driver\'s license',value: 'drivers-license'},
    {label: 'National ID Card',value: 'national-id-card'},
  ]

  const clearValidationErrors = () => {
    setCountryValidation(false)
    setStateValidation(false)
    setCityValidation(false)
    setAddressValidation(false)
    setZipCodeValidation(false)
    setIdTypeValidation(false)
    setIdNumberValidation(false)
    setPicValidation(false)
  }

  const clearInputs = () => {
   /* setZipCode('')
    setNewPassword('')
    setConfirmNewPassword('')*/
  }

  const validateAddressTab = (e) => {
    e.preventDefault()
    clearValidationErrors()
   
    let validation = zipCode === '' || zipCode.length < 4 ||
    country === 'none' || state === 'none' || address.length === '' || address.length < 7 ||
    city === '' || city.length < 3

    if(validation){
      if(zipCode.length < 4){
       // setZipCodeValidationMessage('Must be at least 4 characters')
        setZipCodeValidation(true)
      }
      if(zipCode.length === ''){
       // setZipCodeValidationMessage('This field is required')
        setZipCodeValidation(true)
      }

      if(country === 'none'){
       // setNewPasswordValidationMessage('This field is required')
        setCountryValidation(true)
      }

      if(state === 'none'){
        //setConfirmNewPasswordValidationMessage('This field is required')
        setStateValidation(true)
      }
      if(address.length === ''){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setAddressValidation(true)
      }
      if(address.length < 7){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setAddressValidation(true)
      }
      if(city.length === ''){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setCityValidation(true)
      }
      if(city.length < 3){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setCityValidation(true)
      }
    }
    else{
      console.log({country,state,zipCode,city,address,city})
      selectTab('id')
    }
  }

  const validateIdTab = (e) => {
    e.preventDefault()
    clearValidationErrors()
   
    let validation = idType === 'none' || idNumber.length === '' || idNumber.length < 7 ||
    pic === '' || pic.length < 3

    if(validation){
     if(idType === 'none'){
       // setNewPasswordValidationMessage('This field is required')
        setIdTypeValidation(true)
      }

      if(idNumber.length === ''){
        //setConfirmNewPasswordValidationMessage('This field is required')
        setIdNumberValidation(true)
      }
      if(idNumber.length < 3){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setIdNumberValidation(true)
      }
      if(pic.length === ''){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setPicValidation(true)
      }
      if(pic.length < 3){
        //setConfirmNewPasswordValidationMessage('Passwords do not match')
        setPicValidation(true)
      }
    }
    else{
      console.log({country,state,zipCode,city,address,city,idType,idNumber,pic})
      setLoading(true)
      setTimeout(() => {
        alert('Submitted for review!')
        setLoading(false)
        navigate('/dashboard')
        
      },1000)
    }
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

  useEffect(() => {
   let ret = emptyStates

   switch(country){
    case 'nigeria':
      ret = states
    break

    default:
      ret = emptyStates
   }

   setAddressStates(ret)
  },[country])


  
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
             <a className="col-md-6" onClick={() => null} >
             <div style={{...styles.tabDiv,backgroundColor: tabId === 'address' ? activeTabColors.backgroundColor : inactiveTabColors.backgroundColor}}>
              <h4 style={{...styles.tabTitle,color: tabId === 'address' ? activeTabColors.color : inactiveTabColors.color}}>Address</h4>
             </div>
             </a>
             <a className="col-md-6" onClick={() => null}>
             <div style={{...styles.tabDiv,backgroundColor: tabId === 'id' ? activeTabColors.backgroundColor : inactiveTabColors.backgroundColor}}>
             <h4 style={{...styles.tabTitle,color: tabId === 'id' ? activeTabColors.color : inactiveTabColors.color}}>ID</h4>
             </div>
             </a>
           </div>
          </div>

          <div className="row">
            {tabId === 'address' && (
              <div className="col-md-8 offset-md-1">
                 <form>
                  <div className="form-floating">
                   <select className="form-control" id="country" value={country} onChange={(e) => {onSelectChanged('country',e?.target?.value)}}>
                    <option value='none'>Select country</option>
                     {countries.map((item,index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                      )
                    )}
                   </select>
                   <label htmlFor="country" className="form-label">Country</label>
                  </div>
                  {countryValidation && (<ErrorText errorMessage='This field is required'/>)}

                  <div className="form-floating mt-3">
                   <input type="text" value={zipCode} onChange={(e) => {onInputChanged('zip-code',e?.target?.value)}} className="form-control" id="zipCode" placeholder="ZIP Code"/>
                   <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                  </div>
                 {zipCodeValidation && (<ErrorText errorMessage='This field is required'/>)}

                 <div className="form-floating mt-3">
                   <select className="form-control" id="state" value={state} onChange={(e) => {onSelectChanged('state',e?.target?.value)}}>
                    <option value='none'>Select province/state</option>
                     {addressStates.map((item,index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                      )
                    )}
                   </select>
                   <label htmlFor="state" className="form-label">Province/State</label>
                  </div>
                  {stateValidation && (<ErrorText errorMessage='This field is required'/>)}

                 <div className="row">
                  <div className="col-md-6">
                     <div className="form-floating mt-3">
                      <input type="text" value={address} onChange={(e) => {onInputChanged('address',e?.target?.value)}} className="form-control" id="address" placeholder="Address"/>
                      <label htmlFor="address" className="form-label">Address</label>
                     </div>
                     {addressValidation && (<ErrorText errorMessage='This field is required'/>)}  
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating mt-3">
                     <input type="text" value={city} onChange={(e) => {onInputChanged('city',e?.target?.value)}} className="form-control" id="city" placeholder="City"/>
                     <label htmlFor="city" className="form-label">City</label>
                    </div>
                    {cityValidation && (<ErrorText errorMessage='This field is required'/>)}
                  </div>
                 </div>

                 <div className="col-12 mt-5">
                    <button className="btn btn-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} disabled={loading} onClick={validateAddressTab}>
                      Next
                      {loading && (<img src={loadingImage} style={{width: 20, marginLeft: 5}}/>)}
                    </button>
                  </div>
                 </form>
              </div>
            )}

            {tabId === 'id' && (
              <div className="col-md-8 offset-md-1">
                 <form>
                 <div className="form-floating">
                   <select value={idType} className="form-control" id="idType" onChange={(e) => {onSelectChanged('idType',e?.target?.value)}}>
                    <option value='none'>ID Type</option>
                     {idTypes.map((item,index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                      )
                    )}
                   </select>
                   <label htmlFor="idType" className="form-label">ID Type</label>
                  </div>
                  {idTypeValidation && (<ErrorText errorMessage='This field is required'/>)}

                  <div className="form-floating mt-3">
                   <input type="text" value={idNumber} onChange={(e) => {onInputChanged('idNumber',e?.target?.value)}} className="form-control" id="idNumber" placeholder="ID Number"/>
                   <label htmlFor="idNumber" className="form-label">ID Number</label>
                  </div>
                 {idNumberValidation && (<ErrorText errorMessage='This field is required'/>)}

                 <div className="form-floating mt-3">
                   <input type="file" onChange={(e) => {onInputChanged('pic',e?.target?.value)}} className="form-control" id="pic" placeholder="Upload your ID"/>
                   <label htmlFor="pic" className="form-label">Upload yor ID</label>
                  </div>
                 {picValidation && (<ErrorText errorMessage='This field is required'/>)}

                 <div className="col-12 mt-5">
                   <div className="row">
                    <div className="col-md-6">
                      <button className="btn btn-outline-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} disabled={loading} onClick={() => {selectTab('address')}}>
                       Back
                      </button>
                    </div>
                    <div className="col-md-6">
                     <button className="btn btn-primary py-3 px-4 form-control" style={{flexDirection: 'row'}} disabled={loading} onClick={validateIdTab}>
                      Next
                      {loading && (<img src={loadingImage} style={{width: 20, marginLeft: 5}}/>)}
                     </button>
                    </div>
                   </div>
                    
                  </div>
                 </form>
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
