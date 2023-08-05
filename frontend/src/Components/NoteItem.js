import React from 'react'

const NoteItem = (props) => {
const {note} = props;
    return (
    <div className='row my-3'>
        <div className="card my-3 mx-3 col-4">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItem

