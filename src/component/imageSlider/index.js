import { useEffect, useState } from "react";
import data from "./data";
import "./style.css";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? data.data.length - 1 : activeIndex - 1);
    // console.log("data length",data.data.length-1)
  };
  const handleNext = () => {
    console.log(data.data.length - 1);
    setActiveIndex((activeIndex + 1) % data.data.length);
  };

  useEffect(() =>{ 
    
    let timer
   timer= setTimeout(
    () =>
      setActiveIndex(
        activeIndex === 0 ? data.data.length - 1 : activeIndex - 1
      ),
    3000
    
  )
  return ()=>{
    clearTimeout(timer)
  }

},[activeIndex])
   
   

   
  
  return (
    <div className="container">
      <button onClick={() => handlePrevious(activeIndex)}>Previuos</button>
      {data.data.map((data, index) =>
        activeIndex === index ? (
          <img
            src={data.download_url}
            alt={data.author}
            key={data.url}
            className={activeIndex === index ? "imageactive" : "imageinactive"}
          />
        ) : null
      )}
      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
};
// console.log(data.data[0].url)
export default ImageSlider;
