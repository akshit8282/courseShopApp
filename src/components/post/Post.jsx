import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div>
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/post/abc" className="link">
           React Basics
          </Link>
        </span>
        <hr />
       
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
       
      </p>
      <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/post/abc">
            Buy
            </Link>
          </span>
          <span className="postCat">
          <Link className="link" to="/post/abc">
            Couse Details
            </Link>
          </span>
        </div>
    </div>
  <hr style={{height:'2px'}}/>
    <div style={{margin:'20px'}}></div>
    </div>
  );
}
