import "./write.css";
import code from '../../images/code.jpg'

export default function Write() {
  return (
    <div className="write">
     <h1 className="heading">Your Courses!</h1>
     <div class="card  main mb-3">
       <div className="cardbody">
       <div className="cardimg">
  <img class="card-img-top" src={code} alt="Card image cap" />
  </div>
  <div className="bodyc card-body">
    <h5 class="card-title">Course Name</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><button className="cbutton">Go to course!</button></p>
  </div>
</div>
</div>
<div class="card main mb-3">
<div className="cardbody">
       <div className="cardimg">
  <img class="card-img-top" src={code} alt="Card image cap" />
  </div>
  <div className="bodyc card-body">
    <h5 class="card-title">Course Name</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><button className="cbutton">Go to course!</button></p>
  </div>
</div>
    </div>
    <div class="card main mb-3">
<div className="cardbody">
       <div className="cardimg">
  <img class="card-img-top" src={code} alt="Card image cap"/>
  </div>
  <div className="bodyc card-body">
    <h5 class="card-title">Course Name</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><button className="cbutton">Go to course!</button></p>
  </div>
</div>
    </div>
    </div>
  );
}
