import Header from "./Header";
import "./Allcss.css";
import Buttons from "./Buttons";

function Calculator() {
  return (
    <div className="mainBody border-current border-2 h-96 w-72 rounded-md bg-slate-800">
      <Header />

      <Buttons />
    </div>
  );
}
export default Calculator;
