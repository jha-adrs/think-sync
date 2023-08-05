import React, { useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../logo.svg'
import NoteContext from '../context/notes/noteContext';
import './styles/Navbar.css';
const UserNav = () => {
    let location = useLocation(); //returns an object
    useEffect(() => {

    }, [location]);
    const { auth, setAuth } = useContext(NoteContext);

    const handleLogout = () => {
        setAuth(false);
        localStorage.removeItem('authToken');
        window.location.reload();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top justify-content-center topnav">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center" id="brandlogo" />
                        <Link className="navbar-brand mx-1 " id="navbaritem" to="/">Think Sync</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container-fluid middleitemsuser">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 settransparent">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" href="#" to="/" id="navbaritem2">My Notes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} href="#" to="/dashboard" id="navbaritem2">Dashboard</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/premium' ? "active" : ""}`} href="#" to="/about" id="navbaritem2">Go Premium</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search your notes" aria-label="Search" />
                                
                            </form>
                            <Link href="#/" to='/logout'>
                                    <button className="btn btn-outline-danger btn-lg buttontextuser btn-8" onClick={handleLogout}><span className='' style={{ color: `${location.pathname === '/login' ? '#000000' : ''}` }}
                                    >Logout</span></button>
                                </Link>
                        </div>
                        <div>

                        </div>


                        {/*
                        <div className="logging">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" href="#" to="/signup" id="navbaritem3">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} href="#" to="/login" id="navbaritem3">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <button className={`btn buttonn first nav-link `} id="navbaritem3" type="submit">
                                    <img src={pencil} alt="" width="150" height="50" className="d-inline-block align-text-center" id="brandlogo" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        */}
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default UserNav
