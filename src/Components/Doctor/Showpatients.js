import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Webservice from '../../WebServices/Webservice'
import WebApi from '../../WebServices/WebApi'
import { useDispatch, useSelector } from 'react-redux'
import { palist } from '../../Redux/Slice'


function Showpatients() {
  const [activeView, setActiveView] = useState(true)
  const [quaery, setquaery] = useState('')

 const dr = useSelector(state=>state.hello1.value);
 console.log("my dr token is ",dr)     

 const patientl = useSelector(state=>state.hello1.plist)
 console.log("my patient list is  ",patientl)

 const dis = useDispatch();
 useEffect(()=>{
  patientlist();
 }, [])
const patientlist = async() =>{
  
  const resp = await Webservice.Getapiwtoken(WebApi.patlist, dr.token)
  console.log("my resp is ",resp)
  if(resp.data.status){
     dis(palist(resp.data.data))
  }
}
const check = async(id)=>{
  const urls = WebApi.checkapi + id 
  const resp = await Webservice.putmethodwtoken(urls, null, dr.token)
  console.log("my check resp is",resp)
  if(resp.data.status){
    const checklist = patientl.filter(ob => ob.id !== id)
    dis(palist(checklist))
  }


}
const uncheck = async(id)=>{
  const urls =  WebApi.uncheckapi + id 
  const resp = await Webservice.putmethodwtoken(urls, null, dr.token)
  console.log("my uncheck resp is ", resp)
  if(resp.data.status){
    const unchecklist = patientl.filter(ob => ob.id !== id)
    dis(palist(unchecklist))
  }

}

const activePatientList = patientl.filter(ob => ob.activeStatus)
const inActivePatientList = patientl.filter(ob => !ob.activeStatus)

const filterPatients = (patient, que)=>{
  return patient.filter(ob=> ob.name.toLowerCase().includes(que.toLowerCase()) ||
  ob.phoneNumber.toLowerCase().includes(que.toLowerCase())

  );

}
const filteractive = filterPatients(activePatientList, quaery)
const filterinactive =filterPatients(inActivePatientList, quaery)
console.log("my filter active",filteractive,"my filter not active",filterinactive)


  return (
    <div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
<div className='container'>

<input type='text' className='form-control' value={quaery} onChange={e=>setquaery(e.target.value)} placeholder='Search Patients Here....'/>
<button className='btn btn-info' onClick={()=>setActiveView(true)}>Active Patients</button> &nbsp;&nbsp;&nbsp;
<button className='btn btn-info' onClick={()=>setActiveView(false)}>InActive Patients</button>
<h1 style={{fontSize:"larger" , fontWeight:"bold",textAlign:"center"}}>Appointments</h1><br></br>
<table className='table table-bordered table-hover'>

    <thead>
    <tr>
      <td>S.No</td>
      <td>Name</td>
      <td>Gender</td>
      <td>Age</td>
      <td>Phone No.</td>
      <td>Daignosis</td>
      <td>Appointment Date</td>
      <td>Appointment Time</td>
      <td>Address</td>
      <td>Active Status</td>
    </tr>

    </thead>
    <tbody>
    {activeView ? filteractive.map((item,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.sex}</td>
          <td>{item.age}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.daignosis}</td>
          <td>{item.appointmentdate}</td>
          <td>{item.time}</td>
          <td>{item.address.raddress}</td>
          <td>{item.activeStatus ? <button className='btn btn-primary' onClick={()=>check(item.id)}>Check</button>:<button className='btn btn-warning' onClick={()=>uncheck(item.id)}>Uncheck</button>
}</td>
         
          </tr>
        )):filterinactive.map((item,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.sex}</td>
          <td>{item.age}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.daignosis}</td>
          <td>{item.appointmentdate}</td>
          <td>{item.time}</td>
          <td>{item.address.raddress}</td>
          <td>{item.activeStatus ? <button className='btn btn-primary' onClick={()=>check(item.id)}>Check</button>:<button className='btn btn-warning' onClick={()=>uncheck(item.id)}>Uncheck</button>
}</td>
         
          </tr>
        ))}
      
    </tbody>

</table>

</div>    
    <Footer/>
    </div>
  )
}

export default Showpatients