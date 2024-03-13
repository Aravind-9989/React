import axios from "axios";
import { useEffect, useState } from "react";

const UseAxios=(url)=>{
    const[data,setadata]=useState([])
    useEffect(() => {
        axios
          .get(url)
          .then((response) => {
            if (response.status === 200) {
              setadata(response.data);
            }
          })
          .catch((err) => console.log(err));
      }, []);
    //   console.log(data);
    return [data]
}
export default UseAxios