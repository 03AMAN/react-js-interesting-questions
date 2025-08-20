import React, { useContext } from 'react'
import Subjectcontext from './Createcontext'
const Subject = () => {
    const subject = useContext(Subjectcontext)
  return (
    <div style={{backgroundColor:'red',padding:'10px'}}>
        <h1>Subject is:{subject}</h1>
        </div>
  )
}


export default Subject
