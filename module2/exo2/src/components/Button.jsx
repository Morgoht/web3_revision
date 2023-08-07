
const Button = ({text, changeCount, delta}) => {

    const handleClick = (e) => {
        console.log("event clicked ! on ", e);
        const deltaValue = e.target.dataset.delta
        const delta = parseInt(deltaValue)
        changeCount(delta)
    }
    
    
    return (
        <button data-delta ={delta} onClick={handleClick}> {text}</button>
    )
}

export default Button