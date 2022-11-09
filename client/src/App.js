import { useState, useEffect } from "react";
import Login from './Login'

function App() {
  const [user, setUser] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])

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
      
      }
      else {
        r.json().then((err) => console.log(err.errors));
      }
    })
  }
  return (
   <div>
    <UserContext.Provider value = {{user, setUser}, {}}>
    <Login handleLogIn={handleLogIn}/>
    </UserContext.Provider>
    </div>
  );
}

export default App;