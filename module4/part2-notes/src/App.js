import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(' A new note ...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/notes')
    .then(response => {
    console.log('response fulfilled')
    setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes');

  const addNote = (e) =>{
    e.preventDefault()
    const newNoteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    axios.post('http://localhost:3001/notes', newNoteObject)
    .then(response => {
      console.log(response)
      setNotes(notes.concat(newNoteObject))
      setNewNote('')
    })
  }
  const handleNoteChange = (e) =>{
    console.log(e.target.value)
    setNewNote(e.target.value)
  }
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
  /**
   * l'astuce ici est de définir une variable d'état qui est muté à chaque changement du form avec un
   * la prorpieté "onChange" => onChange est un event qui appelle le setter qui mute 
   * la variable d'état newNote 
   * 1) définir variable d'état de la liste à affiché
   * 2) définir varibale d'état avec la nouvelle note et l'actualisé à chaque entrée du form
   * 3) définir le form avec les eventHandler 
   */

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onClick={addNote}>
          <input 
            value ={newNote} 
            onChange={handleNoteChange}  
          />
          <button type="submit">save</button>
        </form>
      </ul>
    </div>
  )
}

export default App
