import React from 'react'
import './home.css'
export const Home = () => {
  const names = [
    { id: 'sdf', name: 'Ssdf' },
    { id: 'sadf', name: 'Ssasdf' },
    { id: 'sdsaf', name: 'Ssasadf' }
  ];
const onclickfunction=(data)=>{
  console.log("ssssssss",data.target)
}
  return (
    <>
    <div>
      <ul style={{ listStyleType: 'none' }}>

        {names.map((name)=>(
          <li className='names' onClick={onclickfunction} key={name.id} >{name.name}</li>
        ))}

      </ul>
    </div>

    </>
  )
}
