import Part from 'components/Part/Part'

const Content = (props) => {
    return (
      <>
        <Part part = {props.part[0].name} exercises = {props.part[0].exercises} />
        <Part part = {props.part[1].name} exercises = {props.part[1].exercises} />
        <Part part = {props.part[2].name} exercises = {props.part[2].exercises} />
        
        
      </>
    )
  }

  export default Content