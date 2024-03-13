import { Link } from "react-router-dom"

const Header =()=>{
const linkstyle={textDecoration:"none",margin:20,color:"white"}
  
    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link style={linkstyle} to={"/"}>Home</Link>
            </li>
            <li className="nav-item"> 
              <Link style={linkstyle} to={"/profile"}>profile</Link>
            </li>
            <li className="nav-item">
              <Link style={linkstyle} to={"/Setting"}>setting</Link>
            </li>
            <li className="nav-item">
              <Link style={linkstyle} to={"/About"}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Header