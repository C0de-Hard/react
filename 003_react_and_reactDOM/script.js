const root1 = document.getElementById("root");
const ele1 = document.createElement('h1');//heavier in size
ele1.textContent = "this heading is made using vanilla js";
root1.appendChild(ele1);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
//this returns reactDOMRoot object from the ReactDom object by using createRoot function from the ReactDom object
const ele2 = React.createElement('h2',{},["this is subheading and is created using react and reactDOM"]);//React element -> lightweight
root2.render(ele2);//BTS its creating dom element (using the parameters passed while creating ele2) & also appending it to root2

/* 
in this script react will replace the DOM/older-react-elements coz render treats #root as react-controlled. 
so it just removes the older contents and replaces it with new react element(s).

Nor u can append the react element to any div/root which is not created by ReactDOM.createRoot, coz 
it will just show u the content as [object Object] coz browser dont know how to show react elements.

So U cant have both together in same div..
*/
