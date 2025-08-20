import React, { useState } from 'react'
import College from './College'
import Subjectcontext from './Createcontext'
const Home = () => {
  const [subject,setsubject] = useState('')
  return (
    <div style={{backgroundColor:'yellow',padding:'10px'}}>
      <Subjectcontext.Provider value={subject}>
        <select  value={subject} onChange={(event)=>{setsubject(event.target.value)}}>
          <option value="">Select Subject</option>
          <option value="Science">Science</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
        </select>
        <button onClick={()=>{setsubject('')}}>Clear Subject</button>
      <h1>Context Api</h1>
      <College/>


      </Subjectcontext.Provider>
    </div>
  )
}


export default Home
