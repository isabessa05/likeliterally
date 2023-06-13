import { useContext } from 'react'
// import './MainCss.css'
import UserContext from './UserContext'
import PasswordContext from './PasswordContext'
import ErrorContext from './ErrorContext'
import UsernameContext from './UsernameContext'
import { useHistory } from 'react-router-dom'


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
    <div className="centered">
    <div className="has-background-success-light">
      <form onSubmit={handleSubmitLogIn}>
        <div className='form-field'>
          <h1 className='title has-text-centered'> Welcome back!</h1>
          <div className="container">
           <div className="column">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className='input is-success is-small is-rounded'
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <div className='form-field'>
          <label htmlFor="password">Password</label>
          <input
            className='input is-success is-small is-rounded'
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <div className='form-field'>
          <button className='button is-success is-light is-focused is-small is-rounded' type="submit">Login</button>
        </div>
        </div>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;