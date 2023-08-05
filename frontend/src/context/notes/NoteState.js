import React, { useState } from 'react'
import NoteContext from './noteContext';

const NoteState = (props) => {
    const s1 = [{
        "_id": "64cd33d4aa01f05a540d7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is my 1th note",
        "tag": "general",
        "date": "2023-12-04T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is my nth note",
        "tag": "general",
        "date": "2023-08-04T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7521",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is my nth note",
        "tag": "general",
        "date": "2023-08-04T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540e7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is fsda fasdf sdasdaf asdfsdafsdfasd sdf dsfsda fsda sdf sdmy 456th note",
        "tag": "general",
        "date": "2023-08-12T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7513",
        "user": "64ca04af090cbbd86d94a431",
        "title": "sd fgsd",
        "description": "This is my 5tsd asdasd asdasf adsfasg asdfgafs gdfg fsdg fdgdfh note",
        "tag": "imp",
        "date": "2023-08-22T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540e7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is fsda fasdf sdasdaf asdfsdafsdfasd sdf dsfsda fsda sdf sdmy 456th note",
        "tag": "general",
        "date": "2023-08-12T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7513",
        "user": "64ca04af090cbbd86d94a431",
        "title": "sd fgsd",
        "description": "This is my 5tsd asdasd asdasf adsfasg asdfgafs gdfg fsdg fdgdfh note",
        "tag": "imp",
        "date": "2023-08-22T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540e7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is fsda fasdf sdasdaf asdfsdafsdfasd sdf dsfsda fsda sdf sdmy 456th note",
        "tag": "general",
        "date": "2023-08-12T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7513",
        "user": "64ca04af090cbbd86d94a431",
        "title": "sd fgsd",
        "description": "This is my 5tsd asdasd asdasf adsfasg asdfgafs gdfg fsdg fdgdfh note",
        "tag": "imp",
        "date": "2023-08-22T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540e7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is fsda fasdf sdasdaf asdfsdafsdfasd sdf dsfsda fsda sdf sdmy 456th note",
        "tag": "general",
        "date": "2023-08-12T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7513",
        "user": "64ca04af090cbbd86d94a431",
        "title": "sd fgsd",
        "description": "This is my 5tsd asdasd asdasf adsfasg asdfgafs gdfg fsdg fdgdfh note",
        "tag": "imp",
        "date": "2023-08-22T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540e7511",
        "user": "64ca04af090cbbd86d94a431",
        "title": "Second23daasdsdNote",
        "description": "This is fsda fasdf sdasdaf asdfsdafsdfasd sdf dsfsda fsda sdf sdmy 456th note",
        "tag": "general",
        "date": "2023-08-12T17:22:28.054Z",
        "__v": 0
    },
    {
        "_id": "64cd33d4aa01f05a540d7513",
        "user": "64ca04af090cbbd86d94a431",
        "title": "sd fgsd",
        "description": "This is my 5tsd asdasd asdasf adsfasg asdfgafs gdfg fsdg fdgdfh note",
        "tag": "imp",
        "date": "2023-08-22T17:22:28.054Z",
        "__v": 0
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
    const[auth, setAuth] = useState(true);

    return (
        <NoteContext.Provider value={{ note, setNote, auth, setAuth }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
