import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './UserContext'
import navbarImg from './literally.png'
import 'bulma/css/bulma.css'

function NavBar({ handleLogOut }) {

    const { user, setUser } = useContext(UserContext)

    return (

        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div class="navbar-brand"></div>
             <a class="navbar-item" href="http://localhost:4000/feed">
                <img src={navbarImg}/>
             </a>

            <div class="navbar-menu">
            <div class="navbar-start">
            <Link to="/home" className='navbar-item'>  Home  </Link>
            {user ? null : <Link to="/login" className='navbar-item'> Log In   </Link>}
            {user ? null : <Link to="/signup" className='navbar-item'> Sign Up </Link>}
            {user ? <Link onClick={handleLogOut} to="/home" className='navbar-item'>Log Out</Link> : null}
            {user ? <Link to="/profile" className='navbar-item'> My Profile </Link> : null}
            {user ? <Link to='/books' className='navbar-item'> My Books </Link> : null}
            {user ? <Link to='/feed' className='navbar-item'> Feed </Link> : null}
            </div>
            </div>
        </nav>
    )
}

export default NavBar;