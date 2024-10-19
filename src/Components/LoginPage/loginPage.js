import axios from 'axios'
import React, { useState } from 'react'
import { Popup } from '../PopUp/Popup'
import './loginPage.css'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
  const navigate = useNavigate();  
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [conformPassowrd,setconformPassowrd]=useState("")
  const [name,setName]=useState("")
  const [message,setmessage]=useState("")
  const [error,seterror]=useState(false)
  const [popup,setpopup]=useState(false)
  const [LoginPage,setLoginPage]=useState(true)
  const handelOnchange=(e)=>{
    switch (e.target.name) {
      case "email":
        setemail(e.target.value)
        break;
      case "password":
        setpassword(e.target.value)
        break;
      case "newpassword":
        setpassword(e.target.value)
        break;
      case "conformPassword":
        setconformPassowrd(e.target.value)
        break;
      case "name":
        setName(e.target.value)
        break;
    }

  }
const setpopstatus=()=>{
  setpopup(!popup)
}
const onsubmit=async()=>{
  try {
    console.log(email,password)
 const respose=await axios.post("/api/userDetails",{email:email,password:password})
    setemail("")
    setpassword("")
    if(respose.data.message.islogin)
      navigate("/home")
    else
    setmessage(respose.data.message.message)
    setpopup(true)
  } catch (error) {
    console.log(error)
  }

}
const onsignupUser=async()=>{
  try {
  if(password!==conformPassowrd)
    seterror(true)
 else{
  //make api call
    const data=await axios.post('/api/addUser',{email:email,password:password,name:name})
  console.log(data.data.message)
  setmessage(data.data.message)
    setemail("")
    setpassword("")
    setconformPassowrd("")
    setpopup(true)
    
  } 

 }
catch (error) {
    console.log(error)
}

}

const handelsignup=()=>{
  setName("")
  setemail("")
  setpassword("")
  setconformPassowrd("")
  setLoginPage(!LoginPage)
}


  return (
    <div>
      <div className='box'>

       <div>  {
      popup&&<Popup message={message } action={setpopstatus} />
    }
    </div>

    {LoginPage &&(
    <div >
      <div className='text' >
    <label >Email id:</label>
    <input value={email} id="name"  name="email" onChange={handelOnchange} type='email'/>
      </div>
      <div className='text'>
    <label>password:</label>
    <input value={password}  name="password" onChange={handelOnchange} type='password'/>
      </div>
    <div className='loginButtons' >
    <button onClick={onsubmit}>Submit</button>
    <button className='signupbutton' onClick={handelsignup}>SignUp</button>
    </div>
    </div>
    )}

    {
      !LoginPage &&(
<div>
        <div>

    <label>Name</label>
    <input value={name} name="name" onChange={handelOnchange} type='text'/>
        </div>
        <div>

    <label>Email id</label>
    <input value={email} name="email" onChange={handelOnchange} type='email'/>
        </div>
        <div>
    <label>password</label>
    <input value={password} name="newpassword" onChange={handelOnchange} type='password'/>
        </div>
        <div>

    <label>re-enter the password</label>
    <input value={conformPassowrd} name="conformPassword" onChange={handelOnchange} type='password'/>
        </div>
    <button onClick={onsignupUser}>Submit</button>
    <label>New user</label>
    <button onClick={handelsignup}>already exist</button>
    {error && <p style={{color:"red"}} >password mismatch</p>}
</div>

      )
    }
    </div>
    </div>
  )
}

export default LoginPage
