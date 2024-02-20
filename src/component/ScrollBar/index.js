import { useEffect } from "react";
import { useState } from "react";
import "./style.css"

export default function ScrollBar({ url }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }









  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);

      setErrorMessage(error.message);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchData(url);
  }, [url]);


  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);


  if (loading) {
    return <div>Please Wait data is Loading...</div>;
  }
  if (errorMessage) {
    return <div>Error {errorMessage}</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Scroll Bar Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div 
          style={{width:`${scrollPercentage}%`}}
          className="current-progress-bar">
            
          </div>
        </div>
        
      </div>
      
      <div className="data-container">
        {data && data.length > 0
          ? data.map((product) => <p key={product.id}>{product.title}</p>)
          : null}
      </div>
    </div>
  );
}
