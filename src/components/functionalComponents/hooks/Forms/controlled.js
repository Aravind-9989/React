// import { useState } from "react"

// const Controlled =()=>{
// const[username,setusername]=useState("")
// const[password,setPassword] = useState("");
// const[usernameError,setusernameError]=useState(null);
// const[confirmpasswordInput, setConfirmPassword ]=useState("");
// const [showPassword, setShowPassword]=useState(false);
// const [mobilenumberInput,SetMobilenumber]=useState("");
// const [radioInput, setRadioInput] = useState("");
// const[selectInput ,setSelectInput]=useState=("");


// const usernamehandler=(event)=>{
//     const usernameInput=event.target.value
//     setusername(usernameInput)
//     if(username.length>5){
//         // alert("please enter less than 5 characters")
//         showError()
//     }else{
// setusernameError(null)
//     }
// }

// const showError=()=>{
//     setusernameError("username must be less than 5 characters ")
// }
// const passwordhandler=(event)=>{
//    const passwordInput=event.target.value;
//     setConfirmPassword(confirmpasswordInput);
  
// }
// const confirmPasswordHandler=(Event)=>{
//   const confirmpasswordInput=Event.target.value
// if (confirmpasswordInput!==password) {
//       setusernameError("password does not match");
     
// } else {
//     setusernameError("null")
// }
// }
// const formSubmitHandler=(Event)=>{
//   Event.preventDefault();
//   console.log("form submitted");
// };
// // const mobilenumber=(Event)=>{
// //   let mobilenumberInput=Event.target.value
// //   SetMobilenumber(confirmpasswordInput)
// // }
// // const radioInput=(Event)=> {
// //   Setradio(Event.target.value)
// // }
// // const selectInput=(Event)=>{
// //   setselect(Event.target.value)
// // } 
// // let form = document.getElementById('myForm');
// // form.addEventListener('submit', submitHandler);
// // function submitHandler(e) {
// //   e.preventDefault();
// //   console.log('The form was submitted")')
// //   const user={
// //        username,
// //        email,
// //        password,
// //        mobileNumber:mobilenumber,
// //        gender: radio, 
// //        type : select
// //   };
// //   if (validateUser(user)) {
// //     alert('Registration Successful!')
// //   } else {
// //     alert('Please fill out all fields correctly')
// //   }
  
// // };

//     return(
//         <>
//         <h1>controlled components</h1>
//         <form className="form-horizontal" action="/action_page.php">
//   <div className="form-group">
//     <label className="control-label col-sm-2" htmlFor="email">
//       Email:
//     </label>
//     <div className="col-sm-10">
//       <input
//         type="text"
//         className="form-control"
//         id="email"
//         placeholder="Enter email"
//         name="email"
//         value={username}
//         style={{border:usernameError ? "2px solid red":"0"}}
//         onChange={usernamehandler}
//       />
//       {
//         usernameError
//         ?
//         <span style={{color:"red"}}>{usernameError}</span>
//         :
//         null
//       }
     
//     </div>
//   </div>

//   <div className="form-group">
//     <label className="control-label col-sm-2" htmlFor="pwd">
//       Password:
//     </label>
//     <div className="col-sm-10">
//       <input
//         type="password"
//         className="form-control"
//         id="pwd"
//         placeholder="Enter password"
//         name="password"
//         value={passwordhandler}
//         onChange={(e)=>setPassword(e.target.value)}
//       />
//     </div>
//     <div className="col-sm-10">
//       <input
//         type="Confirmpassword"
//         className="form-control"
//         id="pwd"
//         placeholder="Enter password"
//         name="password"
//         value={confirmpasswordInput}
//         onChange={confirmPasswordHandler}
//       />
//     </div>
//     <div className="col-sm-10">
//       <input
//         type="text"
//         className="form-control"
//         id="Mobile"
//         placeholder="Enter mobile number"
//         value={mobilenumberInput}
//         onChange={(e)=>mobileNumberHandler(e.target.value)}
//       />
//     </div>
//     <div className="col-sm-10">
//       <input
//         type="Radio"
//         className="form-control"
//         // id="pwd"
//         // placeholder="Enter password"
//         name="gender"
//         value={Male}
//         checked={radioInput==="male"}
//         onChange={(e)=>setRadioInput(e.target.value)}
//       />{" "}
//       {/* male */}
//       <label>
//       <input
//         type="Radio"
//         className="form-control"
//         // id="pwd"
//         // placeholder="Enter password"
//         name="gender"
//         value={Female}
//         checked={radioInput==="Female"}
//         onChange={(e)=>setRadioInput(e.target.value)}
//       />{" "}
//       {/* Female */}
//       </label>
//     </div>
//     <div className="col-sm-10">
//       <input
//         type="Select"
//         className="form-control"
//         id="selectType"
//         // placeholder="Enter password"
//         // name="password"
//         value={selectInput}
//         // value={Male}
//         // value={Female}
//         onChange={(e)=>setSelectInput(e.target.value)}
//       />
//       <option value="">Select</option>
//       <option value="Type 1">Type 1</option>
//       <option value="Type 2">Type 2</option>
//     </div>
//   </div>
//   <div className="form-group">
//     <div className="col-sm-offset-2 col-sm-10">
//       {/* <div className="checkbox">
//         <label>
//           <input type="checkbox" /> Remember me
//         </label>
//       </div> */}
//     </div>
//   </div>
//   <div className="form-group">
//     <div className="col-sm-offset-2 col-sm-10">
//       <button type="submit" className="btn btn-default">
//         Submit
//       </button>
//     </div>
//   </div>
// </form>

//         </>
//     )
// }
// export default Controlled
// // ElementInternals,phonenumber,confirmpassword,radio,select
import { within } from "@testing-library/react";
import { useState } from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [selectInput, setSelectInput] = useState("");

  const usernameHandler = (event) => {
    const usernameInput = event.target.value;
    setUsername(usernameInput);
    if (usernameInput.length > 5) {
      showError();
    } else {
      setUsernameError(null);
    }
  };

  const showError = () => {
    setUsernameError("Username must be less than 5 characters");
  };

  const confirmPasswordHandler = (event) => {
    const confirmPasswordInput = event.target.value;
    setConfirmPassword(confirmPasswordInput);
    if (confirmPasswordInput !== password) {
      setUsernameError("Passwords do not match");
    } else {
      setUsernameError(null);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Mobile Number:", mobileNumber);
    console.log("Gender:", radioInput);
    console.log("Type:", selectInput);
  };

  return (
    <>
      <h1>Controlled components</h1>
      <form className="form-horizontal" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={username}
              style={{ border: usernameError ? "2px solid red" : "0" }}
              onChange={usernameHandler}
            />
            {usernameError && (
              <span style={{ color: "red" ,border:"2px solid black"}}>{usernameError}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="pwd">
            Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="confirmPwd">
            Confirm Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="confirmPwd"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={confirmPasswordHandler}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="mobile">
            Mobile Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2">Gender:</label>
          <div className="col-sm-10">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={radioInput === "Male"}
                onChange={(e) => setRadioInput(e.target.value)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={radioInput === "Female"}
                onChange={(e) => setRadioInput(e.target.value)}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="selectType">
            Select Type:
          </label>
          <div className="col-sm-10">
            <select
              id="selectType"
              className="form-control"
              value={selectInput}
              onChange={(e) => setSelectInput(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>

  );
};
// localStorage.setItem("user", JSON.stringify({ name, gender, selectInput }));
export default Controlled;
