import React, { useEffect } from 'react'
import Footer from '../Footer';
import Webservice from '../../WebServices/Webservice';
import { useDispatch, useSelector } from 'react-redux';
import WebApi from '../../WebServices/WebApi';
import { patupdate, rpatlist } from '../../Redux/Slice';
import { useNavigate } from 'react-router-dom';

function Viewpatient() {
  const dr = useSelector(state => state.hello1.value)
 console.log("my dr token is ",dr)
 const patientl = useSelector(state=>state.hello1.rplist)
 const pa = patientl.length;
 console.log("the pa is ",pa)
 console.log("my patient list is  ",patientl)
 const dis = useDispatch();
 const navi = useNavigate();
 


const patientlist = async() =>{
  
  const resp = await Webservice.Getapiwtoken(WebApi.rpatlist, dr.token)
  console.log("my resp is ",resp)
  if(resp.data.status){
     dis(rpatlist(resp.data.data))
  }
}
useEffect(()=>{
  patientlist();
 }, [])
const edit = (obj)=>{
  dis(patupdate(obj))
  navi("/recpatupdate")

}


const deleteR = async(id) => {
  const urls = WebApi.rpatdelete + id
  const resp = await Webservice.deletwithtoken(urls, dr.token)
  console.log("my delete resp is of rpat", resp)
  if(resp.data.status){
    const rpatd = patientl.filter(ob =>  ob.id !== id)
    dis(rpatlist(rpatd));
  }

}
  return (
    <div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
<div className='container'>
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
      <td>Action</td>
    </tr>

    </thead>
    <tbody>
        { pa !== 0 ? patientl.map((item,index)=>(
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
          <td>{item.activeStatus ? <input type='checkbox' checked></input>:<input type='checkbox' />
}</td>
<td><button className='btn btn-small btn-primary' onClick={() => edit(item)}>Edit</button> <button className='btn btn-danger btn-small' onClick={() => deleteR(item.id)}>Delete</button></td>

         
          </tr>
        )):(<tr>
          <td>
            Data Not Found 
          </td>
        </tr>)}
    </tbody>

</table>

</div>    
    <Footer/>
    </div>
  )
}

export default Viewpatient;