import React, { useRef, useState } from 'react'
import Footer from '../Footer'
import { useSelector } from 'react-redux';
import Webservice from '../../WebServices/Webservice';
import WebApi from '../../WebServices/WebApi';

function AddRecep() {
  const [message,setMessage] = useState('');
 
 const dr = useSelector(state=>state.hello1.value);
 console.log("my dr data is ",dr)
 const namep = useRef();
 const numberp = useRef();
 const emailp = useRef();
const passwordp = useRef();
const addressp = useRef();
const register = async(e)=>{
  e.preventDefault();
  const obj = {
    name:namep.current.value,
    phoneNumber:numberp.current.value,
    email:emailp.current.value,
    password:passwordp.current.value,
    raddress:addressp.current.value
  
}
console.log("my obj data is :",obj)
const respones = await Webservice.Postapiwtoken(WebApi.saverecp, obj, dr.token)
console.log("my respnse data is", respones) ;
if(respones.data.status){
  setMessage(respones.data.msg);
  e.target.reset();
  console.log("my message ",message)
}else{
  setMessage(respones.data.msg);
  console.log("my message ",message)
}
}
  return (
    <div>
     <br/><br/><br/><br/><br/><br/>
    <div >
    <form onSubmit={register} className='form-control'>
            <h1 style={{textAlign:"center"}}>
            Add Receptions Here.....
        </h1>
        <br/>
        <hr/>
        <br/>
                <div className='container'>
                    <div>
                        <input  type='text' ref={namep} className='form-control placeh' placeholder='Enter  Name'></input>
                    </div>
                    <div>
                        <input type='number' ref={numberp} className='form-control placeh' placeholder='Enter  Phone Number'></input>
                    </div>
                    <div>
                        <input type='email' ref={emailp} className='form-control placeh' placeholder='Enter  Email'></input>
                    </div>
                    <div>
                        <input type='password' ref={passwordp} className='form-control placeh' placeholder='Enter  Password'></input>
                    </div>
                    <div>
                      <input type='text' ref={addressp} className='form-control placeh' placeholder='Enter  Address'/>
                    </div>
                    <br/>
                    <hr/>
                    
                    <div>
                        <input type='submit' className='form-control placeh'/>
                    </div>
                    <h3 style={{textAlign:"center",color:"red"}}>{message}</h3>
                </div>
            </form>
    </div>
    <Footer/>
    </div>
  )
}

export default AddRecep