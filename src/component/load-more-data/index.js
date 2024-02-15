import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (product && product.length === 100) setDisableButton(true);
  },[product]);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log("Result", result.products);

      if (result && result.products && result.products.length) {
        const newArr = [...product, ...result.products];
        setProduct(newArr);
        // console.log(product)
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  if (loading) {
    return <div>Data is loading.... Please Wait</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {product && product?.length
          ? product.map((items) => (
              <div className="product" key={items.id}>
                <img src={items.thumbnail} alt={items.title} />
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disableButton}
        onClick={() => setCount(count + 1)}
        className="button-container"
      >
        Load more product
      </button>
      {disableButton ? <p>You have reached to hundred product !</p> : null}
    </div>
  );
}
