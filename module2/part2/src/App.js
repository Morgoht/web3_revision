import './App.css';
import Button from 'components/Button/Button'
import { useState } from 'react';



function App() {
  const [ counter, setCounter] = useState(0)
 
  const buttonPlus = () => setCounter(counter + 1);
  const buttonReset = () => setCounter(0)
  const buttonLess = () => setCounter(counter -1)
  return (
    <div>
      {counter}
      <Button handleClick={buttonPlus} label = "plus" />
      <Button handleClick={buttonReset} label = "reset" />
      <Button handleClick={buttonLess} label = "moins" />
    </div>
  )
}

export default App;
