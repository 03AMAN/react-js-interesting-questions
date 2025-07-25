import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const Clock = ({color}) => {
  const [time,settime]=useState(0);

  useEffect(()=>{
    setInterval(() => {
      settime(new Date().toLocaleTimeString())
    }, 1000);
  },[])
  return (
    <div style={{backgroundColor:'#000',color:color,width:"120px"}}>{time}


    </div>
  )
}

export default Clock