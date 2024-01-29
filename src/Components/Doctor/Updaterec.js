import React, { useRef, useState } from 'react'
import Webservice from '../../WebServices/Webservice';
import WebApi from '../../WebServices/WebApi';
import { useSelector } from 'react-redux';
import AppCss from '../../App.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function Updaterec() {
    const dr = useSelector(state=>state.hello1.value)
    console.log("my dr data is",dr)
    const rlist = useSelector(state=>state.hello1.uprlist)
    console.log("my rlist is ",rlist)
    const navigate = useNavigate();
    const [message,setMessage] = useState('');

    const namep = useRef();
    const numberp = useRef();
    const passwordp = useRef();
    const rupdate = async(e)=>{
        e.preventDefault();
        const obj = {
            name:namep.current.value,
            oldPassword:passwordp.current.value,
            phoneNumber:numberp.current.value
        }
        console.log("my obj is ",obj)
        const urls = WebApi.receptionupdate + rlist.id ;
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
                        <input type='password' ref={passwordp} defaultValue={rlist.password}  className='form-control' placeholder='Enter New  Password'></input>
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

export default Updaterec;