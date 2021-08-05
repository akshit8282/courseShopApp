import { Link } from "react-router-dom";
import "./topbar.css";
import Logout from '../../pages/logout/logout'

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/history">
              HISTORY
            </Link>
          </li>
          <li data-toggle="modal" data-target=".bs-example-modal-sm" className="topListItem"><Link className="link" to="/logout">LOGOUT</Link></li>
         
        </ul>
      </div>
      <div className="topRight">
        
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
      
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
      
    </div>
  );
}
