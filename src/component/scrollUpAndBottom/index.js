import { useEffect, useState,useRef } from "react"

export default function ScrollUpAndBottom(){
const [data,setData]=useState(null)
const [loading,setLoading]=useState(false)
const [error ,setError]=useState("")
const bottomRef=useRef(null)


const FetchData=async()=>{
    try {
        setLoading(true)
        const response= await fetch("https://dummyjson.com/products?limit=100")
        const result= await response.json()
        if(result && result.products && result.products.length>0) {
            setData(result.products.map((dataItems)=>dataItems.title))
            setLoading(false)

        }
    } catch (error) {
        setError(error.message)
        
    }
}

useEffect(()=>{
FetchData()
},[])

function handleScrollUp(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
function handleScrollBottom(){
    bottomRef.current.scrollIntoView({
       
        behavior:"smooth"
    })
}

console.log(data)
if(loading) return <div>Please wait Data is loading !!</div>

    return <div className="container" style={{display:"flex",alignItems:"center" ,justifyContent:"center", flexDirection:"column"}}>
        <h3>This is top of the list</h3>
        <button  onClick={handleScrollBottom} >Scroll Bottom</button>
       {
           data?data.map((data)=><h3>{data}</h3>):null
        }
        <button  onClick={handleScrollUp} >ScrollUp</button>
        <div ref={bottomRef}></div>
       <h3>This is the bottom of the list</h3>
    </div>
}