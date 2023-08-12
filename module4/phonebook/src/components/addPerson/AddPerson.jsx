import { useState } from "react"

const AddPerson = ({addNewPerson}) => {
    const [name, setName] = useState('')
    return (
        <form onSubmit={addNewPerson}>
        <div>
          name : <input value={name} onChange={setName}/>
          <br/>
          number : <input onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    )
}
export default AddPerson 