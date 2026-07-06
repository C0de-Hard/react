import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App.js"
const htmlRoot = document.querySelector('#root');
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
    <App className="App" count="1"></App>
)