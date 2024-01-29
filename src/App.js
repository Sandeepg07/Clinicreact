import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Menu from "./Components/Menu";
import Home1 from "./Components/Home1";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Appoinments from "./Components/Appoinments";
import AddRecep from "./Components/Doctor/AddRecep";
import Showpatients from "./Components/Doctor/Showpatients";
import ShowRecep from "./Components/Doctor/ShowRecep";
import { useSelector } from "react-redux";
import Wrongpath from "./Components/Wrongpath";
import Updaterec from "./Components/Doctor/Updaterec";
import Contact from "./Components/Contact";
import Viewpatient from "./Components/Reception/Viewpatient";
import Addpatient from "./Components/Reception/Addpatient";
import Updatepatient from "./Components/Reception/Updatepatient";
import Home from "./Components/Home";


function App() {
const login = useSelector(state=>state.hello1.value);

  return (
   <div>
   <Menu/>
   <Routes>
   { login.isLogin ? <>
     
   
    <Route path="/showpatients" element={<Showpatients/>}></Route>
    <Route path="/addrecep" element={<AddRecep/>}></Route>
    <Route path="/showrecep" element={<ShowRecep/>}></Route>
    <Route path="/home1" element={<Home1/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/updater" element={<Updaterec/>}></Route>
    <Route path="/recviewpatient" element={<Viewpatient/>}></Route>
    <Route path="/recaddpatient" element={<Addpatient/>}></Route>
    <Route path="/recpatupdate" element={<Updatepatient/>}></Route>
   
      
   </>:<>
   
   <Route path="/bookappointments" element={<Appoinments/>}></Route>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/gallery" element={<Gallery/>}></Route>
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/register" element={<Register/>}></Route>
   <Route path="contactus" element={<Contact/>}></Route>
  
     
   </> }
   
   
   <Route path="*" element={<Wrongpath/>}></Route>

  
   </Routes>
   
    
    
    </div>
  );
}

export default App;
