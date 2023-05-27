import React, { useState,useEffect } from 'react'
import "./index.css"
import Header from "../../components/header"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUsers} from "../../redux/action" 
function Index() {
    const dispatch = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("accessToken")!=null){
          navigate("/profile")
        }
    },[])
    let navigate=useNavigate()
    const [user,setUser]=useState({
        fullName:"",
        email:"",
        password:""
    });
    const [confirmPassword,setConfirmPassword]=useState("")
    const [errors,setErrors]=useState("")
    const [success,setSuccess]=useState("")

    function setUserDetails(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    function signup(e){
            e.preventDefault();
            if(user.fullName!=="" && user.email!=="" && user.password!=="" && confirmPassword!=="" && user.password===confirmPassword){
                setSuccess("Successfully SignedUp!");
                localStorage.setItem("user",JSON.stringify(user));
                localStorage.setItem("accessToken",JSON.stringify(generateAccessToken()));
                dispatch(setUsers(user));

                navigate("/profile");
            }
            else{
                    setErrors("Error : All the fields are mandatory");
            }
    }

    function generateAccessToken(){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token="";
        for (let i = 0; i < 16; i++) {
            token += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return token;
    }
  return (
    <div>
        <Header />
        
        <form onSubmit={signup}>
        <h1>SignUp</h1>
            <input type="text"name="fullName"
                    placeholder="Full Name"
                    value={user.fullName}
                    onChange={(e)=>setUserDetails(e)}
                    />
            <input type="text" name="email"
                    placeholder="Email"
                    value={user.email} onChange={(e)=>setUserDetails(e)}/>
            <input type="password" name="password"
                    placeholder="Password"
                    value={user.password} onChange={(e)=>setUserDetails(e)}/>
            <input type="password" name="" value={confirmPassword} placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
            {errors?<p className='error'>{errors}</p>:<p className='success'>{success}</p>}
            <button className="signUp" type='submit'>
                SignUp
            </button>
        </form>

            
            
    </div>
  )
}

export default Index