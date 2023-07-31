
const Button = ({handleClick, label}) => {

    return(
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        
    )
}

export default Button