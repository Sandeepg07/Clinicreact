import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forlogin } from '../Redux/Slice';
import "../App.css";

function Menu() {
  const Login = useSelector(state=>state.hello1.value)
  console.log("my login is :",Login)

  const navigate = useNavigate();

  const dis = useDispatch();

    const [isMenuOpen, setMenuOpen] = useState(false);

  

       const niklo = ()=>{
        dis(forlogin({token:undefined,isLogin:false,type:undefined}))
navigate("/")
       }

 const logout = ()=>{
dis(forlogin({token:undefined,isLogin:false,type:undefined}))
navigate("/")

    }
  return (
    <div className='container-fluid'> 
    <header>
<div className="header-top sticky-top">
    <div className="container-fluid">   
        <div className="row">
            <div className="col-lg-7 col-md-12 left-item">
                <ul>
                    <li><i className="fas fa-envelope-square"></i> sandeepgathiya0@gmail.com</li>
                    <li><i className="fas fa-phone-square"></i>+91 9165783022</li>
                </ul> 
            </div>
            <div className="col-lg-5 d-none d-lg-block right-item">
                <ul>
                    <li><a><i className="fab fa-github"></i></a></li>
                    <li><a><i className="fab fa-google-plus-g"></i></a></li>
                    <li> <a><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a><i className="fab fa-twitter"></i></a></li>
                    <li> <a><i className="fab fa-facebook-f"></i></a></li>
                    <li> <a><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>

    </div>
</div>
<div id="nav-head" className="header-nav">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 col-sm-12 nav-img">
                <img src="assets/images/logo.png" alt=""/>
                <i className="fas d-block d-md-none  small-menu fa-bars" onclick="openmenu()"></i>
            </div>
            <div  className="col-md-9 nav-item ">
            <ul className="menu">
{Login.isLogin ?
             <div>
                    {Login.type === "doctor" ? 
                                        <div>   
                                                <i class="fas fa-times" onclick="closemenu()"></i>
                                                <li><h3>For Doctor </h3></li>
                                                <li><Link to="/home1">Home</Link></li>
                                                <li><Link to="/showrecep">Reception Details</Link></li>
                                                <li><Link to="/addrecep"> Add Receptionist</Link></li>
                                                <li><Link to="/showpatients">Patients Details </Link></li>
                                                <li><span onClick={logout} style={{cursor:"pointer"}}>LOGOUT</span></li>
                                        </div>
                                        :
                                       ''
                                       
                                        }
                                         {Login.type === "reception" ? <div>
                                         <i class="fas fa-times" onclick="closemenu()"></i>  

                                         <li><h3>For Receptionist</h3></li>

                                         <li><Link to="/home1">Home</Link></li>
                                         <li><Link to="/recaddpatient">Add Patients</Link></li>
                                         <li><Link to="/recviewpatient">Patients Details</Link></li>
                                         <li><span onClick={logout} style={{cursor:"pointer"}}>LOGOUT</span></li>
                                         
                                            </div>:''}
                                           
             </div>
             :
             <div >
                     
                    <i class="fas fa-times" onclick="closemenu()"></i>  
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                   
             </div>}
             </ul>
              
            </div>
        </div>

    </div>
</div>

</header>

    </div>
  )
}

export default Menu
