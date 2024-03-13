
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MySpinner from "../components/functionalComponents/bootstrap/spinner";


const ProductDetail = () => {
  const routeInformation = useParams();
  console.log(routeInformation, "routeInformation");
  const[product,setproduct]=useState({})

  useEffect(()=>{
//fetch the data realted to the product 
fetchdata()

  },[routeInformation.id])
  
  const fetchdata=()=>{
    axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
    .then(response=>{
      if(response.status===200){
        setproduct(response.data)
      }
    })
  }
  return (
    <>
      {/* <h3>I am product detail</h3> */}
       {
        Object.keys(product).length>0
        ?
        // <h1>Product sucess</h3>
        <>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <img src={product.image} width={"400"} height={400}/>
        <h4 style={{color:"blue"}}>₹{product.price}</h4>
        </>
       
        :
        <MySpinner/>

       }
    </>
  );
};
export default ProductDetail;
