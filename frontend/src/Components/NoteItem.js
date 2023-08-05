import React from 'react'
import './styles/NoteItem.css'
const NoteItem = (props) => {
    const { note } = props;
    const dateString = note.date;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();


    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const handleCopyClick = () => {
        console.log('Book clicked');
    }
    const handleDeleteClick = () => {
        console.log('Delete clicked');
    }
    const handleEditClick = () => {
        console.log('Edit clicked');
    }

    return (
        <div className=' col-sm-12 col-lg-3 col-md-8'>


            <div className="card card-margin">
                <div className="card-header no-border">
                    <h5 className="card-title">{note.title}</h5>
                </div>
                <div className="card-body pt-0">
                    <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                            <div className="widget-49-date-primary">
                                <span className="widget-49-date-day">{day}</span>
                                <span className="widget-49-date-month">{month.slice(0, 3)}</span>
                            </div>
                            <div className="widget-49-meeting-info">
                                <span className="widget-49-pro-title">{capitalize(note.tag)}</span>
                                <span className="widget-49-meeting-time">Created at {hours+":"+minutes}</span>
                            </div>
                        </div>
                        <div className="description widget-49-meeting-points">
                            <span className='widget-49-meeting-item my-3'>
                            <p >{note.description}</p>
                            </span>
                        </div>
                        {/*<ol className="widget-49-meeting-points">
                            <li className="widget-49-meeting-item"><span>Expand module is removed</span></li>
                            <li className="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                            <li className="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
    </ol>*/}
                        <div className="container d-flex justify-content-center">
                            <span className="icon" title="Copy" onClick={handleCopyClick}>
                                <i className="fa-regular fa-copy fa-lg text-primary mx-3"></i>
                            </span>
                            <span className="icon" title="Edit" onClick={handleEditClick}>
                                <i className="fa-regular fa-pen-to-square fa-lg text-warning mx-3"></i>
                            </span>
                            <span className="icon" title="Delete" onClick={handleDeleteClick}>
                                <i className="fa-regular fa-trash-can fa-lg text-danger mx-3"></i>
                            </span>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoteItem

