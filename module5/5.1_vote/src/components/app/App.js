import { useContext } from "react";
import { Context, Context as CounterContext } from "../../contexts/countersContext";
import GoodButton from "../button/GoodButton";
import OkButton from "../button/OkButton";
import BadButton from "../button/BadButton";
import ResetButton from "../button/ResetButton";

function App() {
    const {goodCounter, okCounter, badCounter } = useContext(CounterContext)
    return (
      <div>
        <h2>Test du UseContext</h2>
        <ul>
            <li><span>Good : {goodCounter}</span> <GoodButton /></li>
            <li>ok : {okCounter} <OkButton/></li>
            <li>bad : {badCounter} <BadButton/> </li>
        </ul>
        <ResetButton/>
      </div>
    )
  }
  
  export default App;
  