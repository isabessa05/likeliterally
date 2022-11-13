import React from "react";
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import UserContext from './UserContext'

function NavBar ({handleLogOut}) {   

    const {user, setUser} = useContext(UserContext) 

    return (
        <nav className="menu__container">
            <div class="menu">
        <Link to="/home">  Home  </Link>
        {user? null : <Link to="/login"> Log In   </Link>}
        {user? null : <Link to="/signup"> Sign Up </Link>}
        {/* Will only show the log out button if the user is logged in */}
        {user? <Link onClick={handleLogOut}>Log Out</Link> : null}
        {user? <Link to="/profile"> My Profile </Link> : null}
        {user? <Link to='/books'> My Books </Link> : null}
        {user? <Link to='/feed'> Feed </Link> : null }
        </div>
        </nav>
    )
}

export default NavBar;