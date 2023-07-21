

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exoCours = [10, 7, 14]
  
  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        <Part part = {part1} exercises = {exercises1} />
        <Part part = {part2} exercises = {exercises2} />
        <Part part = {part3} exercises = {exercises3} />
        
      </>
    )
  }
  const Part = (props) => {
    return (
      <>
        <p>{props.part} {props.exercises}</p>
      </>
    )
  }
  
  const Total = (props) => {
    return (
      <>
        <p> Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
      </>
    )
  }
  
  return (
  <div>
    <Header course = {course}/>
    <Content part = {part1} exercises = {exercises1} />
    <Total exercises = {exoCours}  />
    
  </div>  
  )
}

export default App;
