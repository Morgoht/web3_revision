import APICountries from './services/countries'
import Countries from "./components/countries/Countries";
import FilterCountries from './components/filterCountries/FilterCountries';
import { useEffect, useState } from "react";


function App() {
  const [countries, setCountries] = useState([])
  const [newCountries, setNewCountries] = useState('')

/** recherche les pays avec une requete à l'API
 * trier la recherche en filtrant le nom et renvoyé les resultat
 */
  const intialLoad = () => {
    APICountries
    .getAll()
    .then(countries => setCountries(countries))
    .catch(error => console.log(error))
  }

  useEffect(intialLoad, [])

  const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(newCountries)
  })
  
  
  return (
    <div>
      <h2>Connect API with countries</h2>
      <FilterCountries filterValue={newCountries} changeFilter={setNewCountries}/> 
      <h2>Country find</h2>
      <Countries countries={filteredCountries}/>
    </div>
  )
}

export default App;

