import React from 'react'
import "./popup.css"
export const Popup = (data) => {
  console.log("pops is called")
  return (
    <>
    <div className='tostmessage' >
    <span>{data.message}</span>
    <button onClick={data.action}>X</button>
    </div>
    </>
  )
}
