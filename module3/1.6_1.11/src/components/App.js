import { useState } from 'react'
import Button from './Button'
import Title from './title/Title'
import Statistics from './statistics/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
 

  const newAll = () => {
    const newVal = all + 1
    setAll(newVal)
  }
  const handleGood = () =>{
    const newVal = good + 1
    setGood(newVal)
    newAll()
  }
  const handleNeutral = () =>{
    const newVal = neutral + 1
    setNeutral(newVal)
    newAll()
  }
  const handleBad = () =>{
    const newVal = bad + 1
    setBad(newVal)
    newAll()
  }

  return (
    <div>
        <Title text="Give feedback"></Title>
        <Button text="good" handleClick={handleGood} ></Button>
        <Button text="neutral" handleClick={handleNeutral} ></Button>
        <Button text="bad" handleClick={handleBad} ></Button>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        
        

    </div>
  )
}

export default App