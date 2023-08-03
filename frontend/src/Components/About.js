import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
const About = (props)=>{
    const a = useContext(noteContext);

    return(
        <div>
            About Section {a.name}
        </div>
    )
}

export default About
