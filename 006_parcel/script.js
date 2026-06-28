// import React from "react-dom/client" u can omit this line
import {createRoot} from "react-dom/client";
const root = createRoot(document.getElementById('root'));

// ReactDOM.render(root); this was used in react 17 now DEPRECATED
// root.render(cont); this is correct way coz we dont import the ReactDOM but only the createRoot
const cont1 = <h1>HI! WHATS UP</h1>;
const cont2 = <p>Welcome to my app.</p>;
const cont3 = <button>Click Me</button>;

// Wrap them inside a fragment wrapper
root.render(
  <>
    {cont1}
    {cont2}
    {cont3}
  </>
);
