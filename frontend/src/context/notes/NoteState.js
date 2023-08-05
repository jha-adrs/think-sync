import React, { useState } from 'react'
import NoteContext from './noteContext';

const NoteState = (props) => {
    const s1 = [{
        "_id": "613b0c3d9b0b7c1a5c8b0b1e",
        "title": "Aadarsh",
        "description": 20
    }, {
        "_id": "613b0c3d9b0b7c1a5c8b0b1f", "title": "Jha",
        "description": 40
    },{
        "_id": "613b0c3d9b0b7c1a5c8b0b1g", "title": "JhaAadarsh",
        "description": 50
    },
    {
        "_id": "613b0c3d9b0b7c1a5c8b0b1h", "title": "AadarshJha",
        "description": 60
    }
];


    const [note, setNote] = useState(s1);
    // Example of constantly changing value
    /**
     * useState(()=>{
        const interval = setInterval(() =>{
            setState((prevState)=>({
                ...prevState,
                age: prevState.age+1,
            }));
        },2000);

        return () => clearInterval(interval);
    },[]);
     */


    return (
        <NoteContext.Provider value={{ note, setNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
