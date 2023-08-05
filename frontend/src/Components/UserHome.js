import React,{useEffect, useContext} from 'react'
import NoteItem from './NoteItem';
import noteContext from '../context/notes/noteContext'
function Notes() {
    const context = useContext(noteContext);
    const {note,setNote} = context;
  return (
    <div className='container my-5 p-7'>
        <div className='container-fluid'>
            <h2 className='p-3'>Your Notes</h2>
            <div className="row">
                {note.map((note)=>{
                    return <NoteItem key={note._id} note={note}/>
                })}
            </div>
        </div> 
    </div>
  )
}

export default Notes
