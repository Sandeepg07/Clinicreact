import React, { useRef, useState } from 'react'
import Webservice from '../../WebServices/Webservice';
import WebApi from '../../WebServices/WebApi';
import Footer from '../Footer';
import { useSelector } from 'react-redux';

function Addpatient() {
  const rec = useSelector(state => state.hello1.value)
  console.log("my rec is ", rec)
  const [message,setMessage] = useState("")
  const namep = useRef();
  const genp = useRef();
  const agep = useRef();
  const numberp = useRef();
  const apdate = useRef();
  const aptime = useRef();
  const diagnp = useRef();
  const addreesp= useRef();
  const raddpat = async(e)=>{
    e.preventDefault();
    const obj = {
      
        name: namep.current.value,
        sex:genp.current.value,
        age:agep.current.value,
        daignosis:diagnp.current.value,
        phoneNumber:numberp.current.value,
        appointmentdate:apdate.current.value,
        time:aptime.current.value,
        raddress:addreesp.current.value
     
    }
    console.log("my obj is ",obj);
    const resp = await Webservice.Postapiwtoken(WebApi.rpadd, obj, rec.token )
    console.log("my resp is ",resp)
    if(resp.data.status){
      setMessage(resp.data.msg)
      e.target.reset();

    }
    else {
      setMessage(resp.data.msg)
      e.target.reset();
    }

  }
  return (
    <div>
  <br/><br/><br/><br/><br/><br/>
    <div  >
    <form onSubmit={raddpat} className='form-control'>
            <h1 style={{textAlign:"center"}}>
            Add Patients Here.....
        </h1>
        <br/>
        <hr/>
        <br/>
      
                <div className='container'>
                    <div>
                        <input  type='text' ref={namep} className='form-control' placeholder='Enter  Name'></input>
                    </div>
                    <div>
                        <input type='number' ref={numberp} className='form-control' placeholder='Enter  Phone Number'></input>
                    </div>
                    <div>
                       <select ref={genp} className='form-control'>
                       <option value=''>--Select Gender--</option>
                       <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>

                       </select>
                    </div>
                    <div>
                        <input type='number' ref={agep} className='form-control' placeholder='Enter Age'></input>
                    </div>
                    <div>
                      <input type='date' ref={apdate} className='form-control' placeholder='Select Date'/>
                    </div>
                    <div>
                        <input  type='text' ref={addreesp} className='form-control' placeholder='Enter Address'></input>
                    </div>
                    <div>
                      <input type='time' ref={aptime} className='form-control' placeholder='Select Time'/>
                    </div>
                    <div>
                      <input type='text' ref={diagnp} className='form-control' placeholder='Write About Your Problem'/>
                    </div>
                    <br/>
                    <hr/>
                    
                    <div>
                        <input type='submit' className='form-control'/>
                    </div>
                    <h3 style={{textAlign:"center",color:"red"}}>{message}</h3>
                </div>
            </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Addpatient;