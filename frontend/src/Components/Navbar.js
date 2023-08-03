/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../logo.svg'
import pencil from '../pencil.svg'
import './Navbar.css';
function Navbar() {
    let location = useLocation(); //returns an object
    useEffect(() => {

    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg justify-content-center topnav">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center" id="brandlogo" />
                        <Link className="navbar-brand mx-1 " id="navbaritem" to="/">Think Sync</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container-fluid middleitems">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" href="#" to="/" id="navbaritem2">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} href="#" to="/about" id="navbaritem2">About Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle`} href="#" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        Features
                                    </Link>
                                    <ul className="dropdown-menu" id="navbarDropdown" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" id="navbarDropdown" href="#" to="/">Cloud Synced</a></li>
                                        <li><a className="dropdown-item" id="navbarDropdown" href="#" to="/">Safe</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/premium' ? "active" : ""}`} href="#" to="/about" id="navbaritem2">Premium</Link>
                                </li>
                            </ul>
                        </div>

                        <span>
                            <button className={`btn buttonn first nav-link `} type= 'button'>
                            Login 
                            {/*<img src={pencil} alt="" width="150" height="50" className="d-inline-block align-text-center" id="brandlogo" />*/}
                        </button>
                    </span>

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
        </div >
    )
}

export default Navbar
