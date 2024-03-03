import useFetch from "./useFetch";

export default function TestFetchHook() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  if (loading) return <h1>Please wait! data is loading</h1>;
  if (error) return <h3>{error}</h3>;

  return (
    <div className="container" style={{display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"}}>
      {data?.map((dataItem) => (
        <p  key={dataItem.id}>{dataItem.title}</p>
      ))}
    </div>
  );
}
