import axios from "axios";
import React, { useState, useEffect } from "react";

function Products() {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, [count]);
  const fetchdata = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    setdata(result.data.products);
    console.log(data);
  };
  const filterData = data.filter((item) => item.id === count);
  return (
    <>
      <h1>count--{count}</h1>
      <button onClick={() => setcount(count + 1)}>increment</button>
      {filterData.length > 0 ? (
        filterData.map((item) => (
          <h4 key={item.id}>
            id:{item.id},title:{item.title},description:{item.description}
          </h4>
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </>
  );
}
export default Products;
