import { useContext } from 'react'
// import './Login.css'
import UserContext from './UserContext'
import PasswordContext from './PasswordContext'
import ErrorContext from './ErrorContext'
import UsernameContext from './UsernameContext'
import background from './background.svg'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import './MainCss.css'

function Login({ handleLogIn }) {

  const { user, setUser } = useContext(UserContext)
  const { username, setUsername } = useContext(UsernameContext)
  const { password, setPassword } = useContext(PasswordContext)
  const { error, setError } = useContext(ErrorContext)
  const history = useHistory();

  const allErrors = <h1 key={error}>{error.error}</h1>


  function handleSubmitLogIn(e) {

    e.preventDefault();
    const userLog = {
      username: username,
      password: password
    }
    handleLogIn(userLog)
    history.push('/home')
  }
  return (
    <div className='centered' style={{
      backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
      height: '99vh', width: '100vw'
    }}>
      <form onSubmit={handleSubmitLogIn}>
        <div className='form-field'>
          <h1>Welcome back!</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <button className='button-33' type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;