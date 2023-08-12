import axios from 'axios';
import Person from './components/person/Person';
import {useState, useEffect} from 'react'
import FilterPerson from 'components/filter/FilterPerson';
import AddPerson from 'components/addPerson/AddPerson';


function App() {
  //variable d'etat du repertoire
  const [persons, setPersons] = useState([])
  // creeons un variable d'etat qui contrôle l'element d'entrée du form
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilterPerson] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
      
    })
    console.log(`${persons}`)
    
},[])


  const handleChangeName = (e) => {
    const newValue = e.target.value
    setNewPerson(newValue)
    console.log(newValue)
  }
  const handleChangeNumber = (e) => {
    const newValue = e.target.value
    setNewNumber(newValue)

  }
  const handleAddPerson = (e) => {
    e.preventDefault()
    const newObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length +1
    }
    if(persons.some(p => p.name === newObject.name)){
      alert(`${newObject} est déja présent`)
    }else{

      console.log(`add ${newObject}`)
      setPersons(persons.concat(newObject))
    }
  }
 


  return (
    <div>
      <h2>PhoneBook </h2>
      <FilterPerson valueFilter={filterPerson} changeFilter={setFilterPerson}/>
      <h2>Add a new person</h2>
      <AddPerson/>
      <form onSubmit={handleAddPerson}>
        <div>
          name : <input onChange={handleChangeName}/>
          <br/>
          number : <input onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => 
          <Person
            key={p.id}
            name={p.name}
            number={p.number}
           /> 
        )}
      </ul>
      
    
    </div>
  );
}

export default App;
