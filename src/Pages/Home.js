import { useEffect } from "react";
import Header from "../Navigation-routing/header";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import MySpinner from "../components/functionalComponents/bootstrap/spinner";
import "./Homee.css"
import UseAxios from "../components/functionalComponents/hooks/Customhook/axios";
// import { ImageProps } from "react-bootstrap";
import { BASE_PROD_URL } from "../components/endpoints/endpoints";
import { endpoints } from "../components/endpoints/endpoints";
const Homescreen = () => {
const[data]=UseAxios(`${BASE_PROD_URL}${endpoints.products}`)
const [Day,setday]=useState(null)
// console.log(new Date().getDay())

useEffect(()=>{
  getGreetings()
 setday(getToday())
})
 
function getToday() {

  let day;
// console.log(day)
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = null;
  }

  return day;
}

function getGreetings(){
  const timeinHours=new Date().getHours()
  let greeting;
  if(timeinHours > 6 && timeinHours < 11){
    greeting="Good Morning"
  }else if(timeinHours>=11 && timeinHours<16){
    greeting="Good Afternoon"
  }else if(timeinHours >=16 && timeinHours<18){
    greeting="Good Evening"
  }else{
    greeting="Good Night"
  }
  return getGreetings
}
  // const [data, setadata] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setadata(response.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(data);
  return (
    <>
      <Header />
      <div className="Container">
      
      {
        data.length>0
        ?
        data.map((eachobject)=>{

        })
        :
        <MySpinner/>
        }

      {data.map((eachobject) => {
        return (
          <>
          <h2>{Day}</h2>
            <Customcard data={eachobject} />
          </>
        );
      })}
      </div>
    </>
  );
};

export default Homescreen;

function Customcard({ data }) {
  const { image, category, price, description, title, id } = data;

  const handleClick = () => {
    // Handle click logic if needed
  }

  return (
    <Card style={{ width: "18rem" }} className="custom-cards">
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "150px" }} // Fixed missing unit in width style
        height={200}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <button onClick={handleClick}> {/* Added onClick event handler */}
          <Link to={`/${category}/${id}`}>
            Navigation
          </Link>
        </button>
      </Card.Body>
    </Card>
  );
}

