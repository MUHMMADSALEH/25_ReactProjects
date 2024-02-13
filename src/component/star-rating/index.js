import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"
const StarRating=({noOfStar=5})=>{
    const  [rating, setRating] = useState(0)

    const handleOnclick=(getCurrentindex)=>{
        setRating(getCurrentindex);

    }
    console.log(rating)
    return <div className="container">
    {
        [...Array(noOfStar)].map((_,index)=>{
            return <FaStar onClick={()=>handleOnclick(index)} key={index}   className={index<=rating ?"active":"inactive"}/>
        }
       
        )
    }
    
    </div>

}
export default StarRating;