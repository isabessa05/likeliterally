import { useState, useEffect } from "react";
import Login from './Login'
import UserContext from './UserContext'
import PasswordContext from './PasswordContext'
import ErrorContext from './ErrorContext'
import UsernameContext from './UsernameContext'
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])


  // Start of the Log In function
  function handleLogIn(userLog){
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLog),
    }).then((r) => {
      if (r.ok) {
        r.json()
        .then((userData) => setUser(userData))
        //Sets the errors to empty so it will clean the error messages
        setError([])
      
      }
      else {
        r.json().then((err) => setError(err));
      }
    })
  }

// End of log in function 


//Start of Log Out Function

function handleLogOut() {
  fetch("/logout", {
    method: "DELETE",
  });
  setUser(null)
  alert("You are logged out!")
}

//End of Log Out Function
  
  
  return (
  
    <BrowserRouter>
    <UserContext.Provider value = {{user, setUser}}>
    <UsernameContext.Provider value= {{username, setUsername}}>
    <PasswordContext.Provider value = {{password, setPassword}}>
    <ErrorContext.Provider value= {{error, setError}}>

    <div>
      <NavBar handleLogOut={handleLogOut}/>
    <Switch>
    
    <Login handleLogIn={handleLogIn}/>


    </Switch>
    </div>
    </ErrorContext.Provider>
    </PasswordContext.Provider>
    </UsernameContext.Provider>
    </UserContext.Provider>
   
    </BrowserRouter>
    
  );
}

export default App;