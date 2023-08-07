import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const App = () => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")))
    const changeCount = (delta) => {
        localStorage.setItem("count", JSON.stringify(count+delta))
        setCount(count + delta)
    }
    return(
        <div>
            <Display number = {count} />
            <Button text = "increase" changeCount = {changeCount} delta ={1} />
            <Button text = "reset" changeCount = {changeCount} delta = {-count} />
            <Button text = "decrease" changeCount = {changeCount} delta={-1} />
        </div>
    )
}
export default App