import Country from "../country/Country"

const Countries = ({countries}) => {
    console.log(countries)
    if(countries.length >= 10){
        return(
            <div>
                Too many countries
            </div>
        )
    }else {
        return(
            <ul>
                {countries.map(c  =>
                    <Country key = {c.name.common} name = {c.name.common}/>
                )}
            </ul>
        )
    }

}
export default Countries