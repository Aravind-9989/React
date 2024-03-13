import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/about";
import Invalid from "../Pages/invalid";
import Profile from "../Pages/profile";
import Setting from "../Pages/setting";
import Preroute from "./preroutes/pre-route";
import Homescreen from "../Pages/Home";
import Post from "./postroutes/post-routes";
import { createContext, useState } from "react";

 export const userdetails=createContext()

const Navigation = () => {
 const[username,SetUserName]= useState("Dheeraj")


 const ChangeName=()=>{
  SetUserName("Hello")
 }
  return (
    <BrowserRouter>
    <userdetails.Provider value={{username,ChangeName}}>
      {true 
      ? 
      <Post /> 
      :
       <Preroute/>
       }

      </userdetails.Provider>
    </BrowserRouter>
  );
};

export default Navigation;

// //  // home
// // // // setting
// // // // about
// // // // profile

// // // // login
// // // // register
// // // // otp
// // // // forgot password
