
import {useState, useContext, useEffect} from 'react'
import UserContext from './UserContext'
import ErrorContext from './ErrorContext'
function SignUp({handleSignUp}){
 
    //UseContext variables
    const {user, setUser} = useContext(UserContext) 
    const {error, setError} = useContext(ErrorContext)


   

    //UseState Variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [picture, setPicture] = useState("")
    

    const allErrors = <h1 key={error}>{error.error}</h1>
    console.log(allErrors)


    function handleSubmit(e) {
      e.preventDefault();
      const newUser = {
        first_name: firstName,
        last_name: lastName,
        picture: picture,
        username: username,
        password: password,
    }

    handleSignUp(newUser)

}

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              autoComplete="off"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname">Profile picture</label>
             <input
              type="text"
              id="picture"
              autoComplete="off"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button href="www.google.com" type="submit">Sign Up</button>
          </form>
          {error? allErrors : null}
        </div>
      )
}

export default SignUp;