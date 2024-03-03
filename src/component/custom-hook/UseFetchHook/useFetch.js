import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
console.log(data)
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data && data?.products && data?.products?.length) {
        setdata(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
