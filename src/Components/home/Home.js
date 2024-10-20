import React from 'react'
import './home.css'
import { Headers } from '../Headers/Headers';
export const Home = () => {
  const names = [
    { id: '1', name: 'Ssdf' },
    { id: '2', name: 'Ssasdf' },
    { id: '3', name: 'Ssasadf' }
  ];

  const messages=[
    {message:"one",time:"Sdfsd",in:true},{message:"two",time:"sdfsdf",in:false},{message:"one",time:"Sdfsd",in:true},{message:"two",time:"sdfsdf",in:false},{message:"one",time:"Sdfsd",in:true},{message:"two",time:"sdfsdf",in:false},{message:"one",time:"Sdfsd",in:true},{message:"two",time:"sdfsdf",in:false}
  ]
const onclickfunction=(data)=>{
  console.log(data)
}
  return (
    <>
    <div>
<Headers/>
      <div className='sideBox'>

      <ul className='table' style={{ listStyleType: 'none' }}>

        {names.map((name)=>(
          <li className='names' onClick={()=>{onclickfunction(name.id)}} key={name.id} >{name.name}</li>

        ))}

      </ul>
    </div>
    <div className='TextBox'>
{messages.map((message)=>(
<div key={message.time} className={message.in?'message':"messagesent"}>{message.message}</div>
))}
    </div>
    <div>

    </div>
        </div>

    </>
  )
}
