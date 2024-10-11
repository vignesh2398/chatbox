import axios from 'axios'
import React, { useState } from 'react'

const LoginPage = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [conformPassowrd,setconformPassowrd]=useState("")
  const [name,setName]=useState("")
  const [error,seterror]=useState(false)
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

const onsubmit=()=>{
  console.log(email,password)
  //make login api call
  setemail("")
  setpassword("")
}
const onsignupUser=async()=>{
  try {
    
  
  console.log(email,password,conformPassowrd,"make api call for signup")
  if(password!==conformPassowrd)
    seterror(true)
 else{
  //make api call

    const data=await axios.post('/api/addUser',{email:email,password:password,name:name})
  console.log(data.data.message)
    setemail("")
    setpassword("")
    setconformPassowrd("")
    
  } 

 }
catch (error) {
    console.log(error)
}

}

const handelsignup=()=>{
  setLoginPage(false)
}


  return (
    <>
    {LoginPage &&(
    <div >

    <label>Email id</label>
    <input value={email} name="email" onChange={handelOnchange} type='email'/>
    <label>password</label>
    <input value={password} name="password" onChange={handelOnchange} type='password'/>
    <button onClick={onsubmit}>Submit</button>
    <label>New user</label>
    <button onClick={handelsignup}>Click here to sign in</button>
    
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
    {error && <p style={{color:"red"}} >password mismatch</p>}
</div>

      )
    }
    </>
  )
}

export default LoginPage
