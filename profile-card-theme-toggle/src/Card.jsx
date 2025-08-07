import React, { useState } from 'react'


const Card = () => {
    const[cardStyle,setcardStyle]=useState({
        border: "1px solid #cccccc3b",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px"
    })


    const[textcolor,settextcolor]=useState('green')


    const changecolor=(bgcolor,textcolor)=>{
        setcardStyle({...cardStyle,backgroundColor:bgcolor,color:textcolor})
        settextcolor(textcolor)


    }


 
    return (
      <>
      <h1 style={{color:'red'}}>Dynamic and conditional Inline Styling</h1>
      <button onClick={()=>{changecolor("black","red")}}>DARK MODE</button>
      <button onClick={()=>{changecolor("white","green")}}>DEFAULT MODE</button>
     
      <div style={{display:'flex',flexWrap:'wrap'}}>
        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>


        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>


        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>


        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>


        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>


        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>


        <div style={cardStyle}>
            <img style={{ width:'200px'}} src='1.png'/>
            <div style={{padding:'5px',color:textcolor}}>
                <h4>Aman Verma</h4>
                <p>Software developer</p>
            </div>
        </div>
      </div>
      </>
    )
}


export default Card
