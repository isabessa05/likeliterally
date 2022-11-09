import React from "react";
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import UserContext from './UserContext'

function NavBar ({handleLogOut}) {   

    const {user, setUser} = useContext(UserContext) 

    return (
        <nav className="menu__container">
            <div class="menu">
        <Link to="/"> Home  </Link>
        <Link to="/login"> Log In   </Link>
        <Link to="/signup"> Sign Up </Link>
        {/* Will only show the log out button if the user is logged in */}
        {user? <Link onClick={handleLogOut}>Log Out</Link> : null}
        </div>
        </nav>
    )
}

export default NavBar;