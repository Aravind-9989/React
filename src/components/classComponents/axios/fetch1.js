const FetchData=async()=>{
    // hit the server using fetch---
    axios.get("https://fakestoreapi.com/products").then(res=>console.log(res)).catch(err=>console.log(err))
// }
// hit using fetch-------
// fetch("https://fakestoreapi.com/products").then(res=>res.JSON()).then(res=>console.log(res)).catch(err=>console.log(err))

// hit using async axios-------
var result=await axios.get("https://fakestoreapi.com/products")
console.log(result);

// hit using async fetch------

//  let result=await fetch("https://fakestoreapi.com/products")
//  let resulttt= await result.json()
//  console.log(resulttt);

}
export default FetchData