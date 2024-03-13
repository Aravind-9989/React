import { Route, Routes } from "react-router-dom";
import Homescreen from "../../Pages/Home";
import Setting from "../../Pages/setting"; 
import Profile from "../../Pages/profile"; 
import About from "../../Pages/about";
import Invalid from "../../Pages/invalid";
import ProductDetail from "../../Pages/productdetail";

const Post = () => {
    return (
         <Routes>
            <Route exact path="/" Component={Homescreen} />
            <Route path="/setting" Component={Setting} />
            <Route path="/profile" Component={Profile} />
            <Route path="/about" Component={About} />
            <Route path="*" Component={Invalid} />
            <Route path="/:category/:id" Component={ProductDetail}/>
            </Routes>
    );
}

export default Post
