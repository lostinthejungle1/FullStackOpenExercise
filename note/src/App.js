import Note from "./components/Note";
import { useState,useEffect } from "react";
import noteService from './services/notes'
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = ()=>{
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('a new note...')
  const [showAll,setShowAll] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)

  useEffect(()=>{
    console.log('effect')
    noteService.getAll().then(data=>{
      console.log('promise fulfilled')
      setNotes(data);
    })
  },[])

  console.log('render',notes.length,'notes')
  console.log('running here')
  const notesToShow = showAll?notes:notes.filter(note=>note.important);
  const addNote = event=>{
    event.preventDefault();
    const newObj = {
      content:newNote,
      important:Math.random()<0.5
    }
    noteService.create(newObj)
    .then(data=>{
      // console.log('res',res)
      setNotes(notes.concat(data))
      setNewNote('')
    })
    
  }

  const handleNoteChange = event=>{
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id=>{
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(n=>n.id===id);
    const changedNote = {...note,important:!note.important}
    noteService.update(id,changedNote).then(data=>{
      setNotes(notes.map(n=>n.id!==id?n:data))
    }).catch(err=>{
      console.log('error')
      setErrorMessage(`note ${note.content} has already been removed from the server`)
      setTimeout(()=>setErrorMessage(null),5000)
      setNotes(notes.filter(n=>n.id!==id))
    })
  }

  return (
    <div>
      <h1>notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={()=>setShowAll(!showAll)}>show {showAll?'important':'all'}</button>
      </div>
      <ul>
        {notesToShow.map(note=><Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">submit</button>
      </form>
      <Footer />
    </div>
  )
}

export default App;