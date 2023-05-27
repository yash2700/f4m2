import React, { useEffect } from 'react'
import "./index.css"
import { Link, useNavigate } from 'react-router-dom'
function Index() {
  let navigate=useNavigate()
 
  function handleClick(e){
    const url=e.target.innerText;
    if(url=="SignUp"){
      if(localStorage.getItem("accessToken")!=null){
        e.preventDefault();
      }
    }
    else{
      if(localStorage.getItem("accessToken")!=null){
        e.preventDefault()
      }
    }
  }
  return (
   <div className="header">
    <div className="left">
        Header
    </div>
    <div className="right">
        <Link to="/" onClick={(e)=>handleClick(e)}>SignUp</Link>
        <Link to="/profile">Profile</Link>
    </div>
   </div>
  )
}

export default Index