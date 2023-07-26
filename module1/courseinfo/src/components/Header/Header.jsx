import logo from '../../img/logoVinci.png'


const Header = (props) => {
    return (
    <>    
        <h1>{props.course.name}</h1>
        <img src = {logo} alt = "Logo Vinci"/>
    </>
    )
  }

  export default Header