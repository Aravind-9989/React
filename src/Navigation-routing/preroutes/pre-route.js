import { Route, Routes } from "react-router-dom";
import Invalid from "../../Pages/invalid";
import Login from "../../Pages/login";

const Preroute = () => {
    return (
        <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/invalid" com={Invalid} />
        </Routes>
    );
}

export default Preroute;
