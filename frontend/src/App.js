import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import NoteState from './context/notes/NoteState';
import Signup from './Components/Signup';
// So wrapping the whole thing in NoteState enables allt he nested components to access the states

function App() {
  return (

    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
