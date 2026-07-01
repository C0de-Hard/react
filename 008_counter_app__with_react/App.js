//this is main App component ie the only component in root.
import CreateBasket from "./components/CreateBasket";
import Button from "./components/Button";
import "./components/CreateBasket.css";
import { createRoot } from "react-dom/client";

const LeftArrow = new URL("./assests/images/left_arrow.png", import.meta.url);
const RightArrow = new URL("./assests/images/right_arrow.png", import.meta.url);

const basketName1 = "basket 1",
  btnUrl1 = RightArrow.href;
const basketName2 = "basket 2",
  btnUrl2 = LeftArrow.href;
let appleCount2 = 0;
let appleCount1 = 100;

function reRender() {
  const root = createRoot(document.querySelector("#root"));
  root.render(<App />);
}
export default function App() {
  return (
    <>
      <section className="main">
        <CreateBasket basketName={basketName1} appleCount={appleCount1} />
        <Button
          btnUrl={btnUrl1}
          onClick={() => {
            console.log("right click");
            if (appleCount1 > 0) {
              appleCount1--;
              appleCount2++;
              reRender();
            }
          }}
        />
        <Button
          btnUrl={btnUrl2}
          onClick={() => {
            console.log("right click");
            if (appleCount2 > 0) {
              appleCount2--;
              appleCount1++;
              reRender();
            }
          }}
        />
        <CreateBasket basketName={basketName2} appleCount={appleCount2} />
      </section>
      {/* <p style={{ textAlign: "center", marginTop: "100px" }}>
        <button onClick={reRender}>Re-Render</button>
      </p> */}
    </>
  );
}
