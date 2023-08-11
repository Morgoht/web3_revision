import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(' A new note ...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
    })
  }, [])
  console.log('render', notes.length, 'notes');

  const addNote = (e) =>{
    e.preventDefault()
    const newNoteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService 
    .create(newNoteObject)
    .then(newObject => {
      setNotes(notes.concat(newObject))
      setNewNote('')
    })
  }
  
  const handleNoteChange = (e) =>{
    setNewNote(e.target.value)
  }

  const toggleImportanceOf = (id) => {
    console.log(`impportance of ${id} needs to be toggled`)
    // find trouve la note à modifier
    const note = notes.find(n => n.id === id)
    // copie de la note avec la modification
    const changedNote = {...note, important: !note.important} 
    //
    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      alert(`the note ${note.id} doens\'t exist `)
      setNotes()
    })
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
            <Note 
              key={note.id} 
              note={note} 
              toggleImportant={() => toggleImportanceOf(note.id)} />
          )}
        </ul>
        <form onSubmit={addNote}>
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
