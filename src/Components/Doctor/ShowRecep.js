import React, { useEffect } from 'react'
import Footer from '../Footer'
import Webservice from '../../WebServices/Webservice'
import WebApi from '../../WebServices/WebApi'
import { useDispatch, useSelector } from 'react-redux'
import { rdelilsit, receptionlist, recupdatelist } from '../../Redux/Slice'
import { useNavigate } from 'react-router-dom'

function ShowRecep() {
  const doctor = useSelector(state=> state.hello1.value)
  const rlist = useSelector(state => state.hello1.list)
  const navigate = useNavigate();
  console.log("my rlist ",rlist);
  console.log(" dr data is ",doctor)
  const dis = useDispatch();
  useEffect(()=>{
    relist();
  }, [])
const relist = async()=>{
  const resp = await Webservice.Getapiwtoken(WebApi.receptionList, doctor.token)
  console.log("my reception list is",resp)
  if(resp.status){
    dis(receptionlist(resp.data.data))
  }
  
}
const edit = async(item) => {
  dis(recupdatelist(item))
  navigate("/updater")


  

}
const deleteR = async(id)=>{
  const urls = WebApi.receptiondelete + id;
  const resp = await Webservice.putmethodwtoken(urls, null, doctor.token)
  console.log("my delete res is ",resp)
  if(resp.data.status){
    const r_dlist = rlist.filter(ob => ob.id !== id)
    dis(rdelilsit(r_dlist))
   

  }
}

  return (
    <div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className='container'>
    <h1  className="text-center fw-light " style={{color:"red"}}>
    Receptions Details
    </h1><hr/>
    <table className='table table-bordered table-hover'>
      <thead>
      <th>S.No</th>
      <th>Name</th>
      <th>Phone No.</th>
      <th>Email</th>
      <th>Address</th>
      <th>Password</th>
      <th>Active Status</th>
      <th>Action</th>

      </thead>
      <tbody>
            {rlist.map((item,index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>{item.raddress}</td>
              <td>{item.password}</td>
              <td>{item.activeStatus ? <input type='checkbox' checked/>:<input type='checkbox'/> }</td>
              <td><button className='btn btn-small btn-primary' onClick={() => edit(item)}>Edit</button> <button className='btn btn-danger btn-small' onClick={() => deleteR(item.id)}>Delete</button></td>

              </tr>
            ))}
      </tbody> 
    </table>
    </div>
    <br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
  )
}

export default ShowRecep;