import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WebApi from '../../WebServices/WebApi'
import Webservice from '../../WebServices/Webservice'
import Footer from '../Footer'

function Updatepatient() {
  const dr = useSelector(state=>state.hello1.value)
  console.log("my dr data is",dr)
  const rlist = useSelector(state=>state.hello1.upplist)
  console.log("my rlist is ",rlist)
 
  const [message,setMessage] = useState('');

  const namep = useRef();
  const numberp = useRef();
  const adp = useRef();
  const rupdate = async(e)=>{
      e.preventDefault();
      const obj = {
          name:namep.current.value,
          appointmentdate:adp.current.value,
          phoneNumber:numberp.current.value
      }
      console.log("my obj is ",obj)
      const urls = WebApi.rpupdate + rlist.id ;
      const resp = await Webservice.putmethodwtoken(urls, obj, dr.token)
      console.log("my update resp is ",resp)
      if(resp.data.status){
          setMessage(resp.data.msg);
          e.target.reset();
      }

  }
return (
  <div  className='pageStyle'>
  <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='container'>
     
      <form onSubmit={rupdate} className='form-control'>
          <h1 style={{textAlign:"center"}}>
          Update Your Information Here.....
      </h1>
      <br/>
      <hr/>
      <br/>
              <div className='container'>
                  <div>
                      <input  type='text' ref={namep} defaultValue={rlist.name} className='form-control' placeholder='Enter  Name'></input>
                  </div>
                  <div>
                      <input type='number' ref={numberp} defaultValue={rlist.phoneNumber} className='form-control' placeholder='Enter  Phone Number'></input>
                  </div>
                
                  <div>
                      <input type='date' ref={adp} defaultValue={rlist.appointmentdate}  className='form-control' placeholder='Date'></input>
                  </div>
                  {/* <div>
                    <input type='password' ref={passwordp1}  className='form-control' placeholder='Enter New Password'/> */}
                  {/* </div> */}
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

export default Updatepatient;