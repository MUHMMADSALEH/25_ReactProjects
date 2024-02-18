
import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator(){

    
    const [inputValue,setInputValue]=useState("")
    const[qrCode,setQrCode]=useState("")
    // console.log(inputValue)
    const handleOnClick=()=>{
        setQrCode(inputValue)
setInputValue("")
console.log(inputValue)

    }

    return <div className="container">
<h1>QR Code Genrator</h1>
        <input type="text" name="QrCode"  value={inputValue}     placeholder="Enter Your Name...." onChange={(e)=>setInputValue(e.target.value)} />
        <button  onClick={handleOnClick}>GenerateQrCode</button>
<div >
    <QRCode
    
    value={qrCode}
    // viewBox={`0 0 256 256`}
    />
</div>
    </div>
}