import './components/styles/App.css';
import React,{useEffect,useContext} from 'react';
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
// So wrapping the whole thing in NoteState enables allt he nested components to access the states

function App() {
  let isAuthenticated = true;
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      isAuthenticated = true;
    }
    else {
      isAuthenticated = false;
    }
  }, [])
  return (

    <>
      <NoteState>
        <BrowserRouter>
          {(isAuthenticated)?<UserNav/>:<Navbar/>}
          <Routes>
            <Route exact path='/' element={(isAuthenticated)?<UserHome/>:<Home />} />
            <Route exact path='/login' element={(isAuthenticated)?<UserHome/>:<Login />} />
            <Route exact path='/signup' element={(isAuthenticated)?<UserHome/>:<Signup />} />
            <Route exact path='/about' element={<About />} />
      
            <Route exact path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
