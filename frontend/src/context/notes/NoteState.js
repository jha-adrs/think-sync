import React, { useState } from 'react'
import NoteContext from './noteContext';

const NoteState = (props) => {
    const s1 = {
        "name": "Aadarsh",
        "age": 20
    };
    const [state, setState] = useState(s1);
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
        <NoteContext.Provider value={{ state }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
