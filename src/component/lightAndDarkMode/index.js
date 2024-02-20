import { useState } from "react"

export default function LightAndDarkMode(){
    const[color,setColor]=useState("white")
   

    const handleColor=()=>{
       setColor(!(color==="white")?"white":"black")
       
    }
    console.log(color)
    return <div className="container"   style={{backgroundColor:color==="white"?"black":"white",
    width:"100vw",
    height:"100vh",
   textAlign:"center",
   overflow:"hidden",
   margin:0  }}>
    <h1    style={{color:color==="white"?"white":"black"}}>Hello world !</h1>
    <button  style={{padding:"10px" ,fontSize:"15px", fontWeight:"bold",cursor:"pointer",borderRadius:"7px",color:color==="white"?"white":"black",backgroundColor:color==="white"?"black":"white"}} onClick={handleColor}>change Theme</button>
    </div>




}