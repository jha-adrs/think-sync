import React, { useEffect, useContext } from 'react'
import NoteItem from './NoteItem';
import noteContext from '../context/notes/noteContext'
import AddButton from '../assets/addbutton.svg'
import './styles/Home.css'
function Notes() {
    const context = useContext(noteContext);
    const { note, setNote } = context;
    const handleNewnote = () => {
        console.log('Add a new note');
    }
    return (
        <div className='container my-5 p-2'>
            <div className=''>
                <h2 className='p-3'>Your Notes</h2>

                <div className="row justify-content-between">
                    {note.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })}
                </div>
            </div>
                <i className="fa-solid fa-plus fa-4x floating-button" onClick={handleNewnote} title="Add new note" style={{ color: "#198754", border:"2px"}}></i>
                    
        </div>
    )
}

export default Notes
