
import Title from '../title/Title'
import Display from '../display/Display'

const Statistics = ({good,neutral,bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / all 
    const positif = good /all

    return(
        <div>
            <Title text="statistics"></Title>
            <Display text="good" value={good}></Display>
            <Display text="neutral" value={neutral}></Display>
            <Display text="bad" value={bad}></Display>
            <Display text="All" value={all}></Display>
            <Display text="Average" value={average}></Display>
            <Display text="Positive" value={positif}></Display>
        </div>
    )

}
export default Statistics