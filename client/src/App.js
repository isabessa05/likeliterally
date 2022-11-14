import { useState, useEffect } from "react";
import Login from './Login'
import UserContext from './UserContext'
import PasswordContext from './PasswordContext'
import ErrorContext from './ErrorContext'
import UsernameContext from './UsernameContext'
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Home from "./Home";
import Profile from "./Profile";
import Feed from "./Feed";
import Books from "./Books";
import { useRedirect } from 'react-admin';


function App() {
  const [user, setUser] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])

  const history = useHistory();

  //Fetch for permanence of logged user
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  //End of fetch for user permanence

  // Start of the Log In function
  function handleLogIn(userLog) {
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

  //Start of Sign Up Function

  function handleSignUp(newUser) {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => handleLogIn(user));
        setError([])
      }
      else {
        r.json().then((err) => setError(err));
      }
    });
  }

  //REDIRECTION HERE

  //End of Sign Up Function



  //Start of fetch function for feed posts

  function handlePosts() {
    fetch(`/posts/${user.id}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((postsData) => console.log(postsData))
          setError([])
        }
        else {
          r.json().then((err) => setError(err));
        }
      })
  }


  //End of fetch function for feed posts


  return (

    <BrowserRouter>
  
      <UserContext.Provider value={{ user, setUser }}>
        <UsernameContext.Provider value={{ username, setUsername }}>
          <PasswordContext.Provider value={{ password, setPassword }}>
            <ErrorContext.Provider value={{ error, setError }}>

              <div>
                <NavBar handleLogOut={handleLogOut} />
                <Switch>
                  <Route exact path='/home'>
                    <Home />
                  </Route>
                  <Route exact path='/login'>
                    <Login handleLogIn={handleLogIn} />
                  </Route>
                  <Route exact path='/signup'>
                    <SignUp handleSignUp={handleSignUp} />
                  </Route>
                  <Route exact path='/profile'>
                    <Profile />
                  </Route>
                  <Route exact path='/feed'>
                    <Feed handlePosts={handlePosts} />
                  </Route>
                  <Route exact path ='/books'>
                    <Books/>
                  </Route>


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