import { useState } from "react";
import "./style.css"

const RandomeColorGenerator=()=>{

    const randomeColorUtility=(length)=>{
return Math.floor(Math.random()*length)
    }

    const [color,setColor]=useState("#000000")
    const  [typeOfColor, setTypeOfColor] = useState('hex')
    
    const handleHexColorGeneration=()=>{
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let hexColor="#";
for(let i=0;i<6;i++){
    hexColor+=hex[randomeColorUtility(hex.length-1)]
}
setColor(hexColor)
// console.log(hexColor)
    }

    const handleRgbColorGeneration=()=>{
        const r=randomeColorUtility(256);
        const g=randomeColorUtility(256);
        const b=randomeColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)
       

    }
    
    return(
        <div className="wrapper"   style={{backgroundColor:color}}>
        <div className="buttons">
        <button  className="create-hex-color"  onClick={()=>setTypeOfColor("hex")}>Create Hex Color</button>
        <button  className="create-rgb-color"  onClick={()=>setTypeOfColor("rgb")}>Create RGB Color</button>
        <button  className="generate-random-color"  onClick={typeOfColor==='rgb' ?()=>handleRgbColorGeneration():()=>handleHexColorGeneration()}>Generate Random Color</button>
        </div>
        <div className="Display-color">
<h1>{color}</h1>
<h3>{typeOfColor}</h3>
        </div>

        </div>

    )
}
export default RandomeColorGenerator;