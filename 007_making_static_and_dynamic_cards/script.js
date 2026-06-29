import { React } from "react";
import { createRoot } from "react-dom/client";

const st_card = (
  <div className="card" style={{ width: "250px", height: "400px" }}>
    <img
      src="https://m.media-amazon.com/images/I/41sGDjwWcEL._SX342_SY445_QL70_FMwebp_.jpg"
      alt="device image"
    />
    <p><b>Samsung AC Windfree 2026 Model</b></p>
    <br />
    <p>5 stars</p>
    <br />
    <p>Rs. 53,990 </p>
    <br />
  </div>
);


const root = createRoot(document.getElementById("root"));
root.render(
  <>
  <div className="main">{[st_card,st_card,st_card,st_card,st_card,st_card,st_card,st_card,st_card,st_card,st_card]}</div>
  <h2 style={{backgroundColor : 'red', textAlign : 'center', color : 'white'}}> ignore the key props warnings for now</h2>
  <a href="index2.html">go to dynamic cards page</a>
  </>
);
