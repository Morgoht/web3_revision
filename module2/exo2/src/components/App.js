import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const App = () => {
    const [count, setCount] = useState(0)
    const changeCount = (delta) => {
        if(delta === 0){
            console.log("0 clicked");
            setCount(0)
        }else{
            setCount(count + delta)
        }
    }
    
    return(
        <div>
            <Display number = {count} />
            <Button text = "increase" changeCount = {changeCount} delta ={1} />
            <Button text = "reset" changeCount = {changeCount} delta = {0} />
            <Button text = "decrease" changeCount = {changeCount} delta={-1} />
            
        </div>
    )
}
export default App