import styles from "./Header.module.css";
import { useState } from "react";
const LightMode = new URL("../assets/images/lightmode.png", import.meta.url); //.. to go in parent directory
const DarkMode = new URL("../assets/images/darkmode.png", import.meta.url); //coz we(Header.js) are in component
export default () => {
    const [light,setLight] = useState(true);
  return (
    <header className={styles.header}>
      <h1>Where in the World?</h1>
      <button onClick={
        () => {setLight(!light)}
      }>
        {light ? (
          <>
            <img src={DarkMode} style={{width:50, height:50, boxSizing: "border-box", padding:12.5}}/>
            <p>Dark Mode</p>
          </>
        ) : (
          <>
          <img src={LightMode} />
          <p>Light Mode</p>
          </>
        )}
      </button>
    </header>
  );
};
