import React, { useEffect } from 'react'
import "./index.css"
import { Link, useNavigate } from 'react-router-dom'
import Header from "../../components/header"
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../redux/action';
function Index() {
    let navigate=useNavigate()
    // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
   const user=JSON.parse(localStorage.getItem("user"));

   function handleLogout(){
    localStorage.clear();
    dispatch(clearUser());
    navigate("/")
   }
   
   useEffect(()=>{
   if(localStorage.getItem("accessToken")==null){
    navigate("/")
   }
   })
  return (
    <div>
        <Header />
        <div className="details">
            <h1>Profile </h1>
            <h1>Full Name : {user && user.fullName}</h1>
            <h1>Email : {user && user.email}</h1>
            <h1>Password : {user && user.password}</h1>
            <button id='logout' onClick={handleLogout}>LogOut</button>
        </div>
    </div>
  )
}

export default Index