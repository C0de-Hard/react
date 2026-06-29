import React from "react";
import { createRoot } from "react-dom/client";

//use a function to return a card with any values we want
function card(name,brand, desc, price, key, img_url) {
  return (
    <div className="card" key={key}>
      <img
        src={img_url}
        alt="device image"
      />
      <p>
        <b>{name}</b>
      </p>
      <h5 className="brand">{brand}</h5>
      <br />
      <p className="desc">{desc}</p>
      <br />
      <p>Rs.{price}</p>
      <br />
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const container = data.products.map((product) => {
      // console.log(product);
      return card(product.title,product.brand,product.description,product.price,product.id,product.thumbnail);
    });
    console.log(container);
    const root = createRoot(document.getElementById("root"));
    root.render(
      <>
      <h1 style={{marginTop : '20px', textAlign : 'center'}}>Products Page</h1>
        <div className="main">
          {container}
        </div>
      </>,
    );
  });


