//this is main App component ie the only component in root.
import CreateBasket from "./components/CreateBasket";
import Button from "./components/Button";
import './components/CreateBasket.css'


const LeftArrow = new URL("./assests/images/left_arrow.png", import.meta.url);
const RightArrow = new URL("./assests/images/right_arrow.png", import.meta.url);

const basketName1 = "basket 1",
  appleCount1 = 100,
  btnUrl1 = RightArrow.href;
const basketName2 = "basket 2",
  appleCount2 = 0,
  btnUrl2 = LeftArrow.href;

export default function App() {
  return (
    <>
      <section className="main">
        <CreateBasket basketName={basketName1} appleCount={appleCount1} />
        <Button btnUrl={btnUrl1} />
        <Button btnUrl={btnUrl2} />
        <CreateBasket basketName={basketName2} appleCount={appleCount2} />
      </section>
    </>
  );
}
