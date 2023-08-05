import './components/styles/App.css';
import React,{useEffect,useContext, useState} from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import UserHome from './components/UserHome';
import UserNav from './components/UserNav';
import NoteContext from './context/notes/noteContext';
// So wrapping the whole thing in NoteState enables allt he nested components to access the states

function App() {
  //const { auth } = useContext(NoteContext);
  const auth = true;

  return (

    <>
      <NoteState>
        <BrowserRouter>
          {(auth)?<UserNav/>:<Navbar/>}
          <Routes>
            <Route exact path='/' element={(auth)?<UserHome/>:<Home />} />
            <Route exact path='/login' element={(auth)?<UserHome/>:<Login />} />
            <Route exact path='/signup' element={(auth)?<UserHome/>:<Signup />} />
            <Route exact path='/about' element={<About />} />
      
            <Route exact path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
