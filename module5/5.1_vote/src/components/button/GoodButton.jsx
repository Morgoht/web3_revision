import { useContext } from "react"
import { Context as CounterContext } from "../../contexts/countersContext"

const GoodButton = () => {
    const {increaseGood} = useContext(CounterContext)
    return(
        <button onClick={increaseGood}>
            increase
        </button>
    )
}
export default GoodButton