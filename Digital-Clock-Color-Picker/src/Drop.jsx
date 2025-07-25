import React, { useState } from 'react'
import Clock from './Clock'

const Drop = () => {
  const[color,setcolor]=useState('green')

  const changecolor=(event)=>{
    setcolor(event.target.value)
  }
  return (
    <div>
        <select onChange={changecolor}>
            <option value={"blue"}>Blue</option>
            <option value={"yellow"}>Yellow</option>
            <option value={"green"}>Green</option>

        </select>

        <Clock color={color}/>
    </div>
  )
}

export default Drop