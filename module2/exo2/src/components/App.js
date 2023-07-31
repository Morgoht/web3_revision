import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const App = () => {
    const [count, setCount] = useState(0)
    const handleClick = (delta) => {
        setCount(count + delta)
    }
    
    return(
        <div>
            <Display number = {count} />
            <Button text = "increase" handleClick = {() => handleClick(1)} />
            <Button text = "reset" handleClick = {() => handleClick(- count)} />
            <Button text = "decrease" handleClick = {() => handleClick(-1)} />
            
        </div>
    )
}
export default App