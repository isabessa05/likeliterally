function Login ({handleLogin}) {

    const allErrors = <h1 key={error}>{error.error}</h1>

    function handleSubmitLogIn(e) {
        e.preventDefault();
        const userLog = {
          username: username,
          password: password
        }
        handleLogin(userLog)
    }
    return (
        <div>
        <form onSubmit={handleSubmitLogIn}>
        <h1>Login</h1>
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {user? <h1>Welcome {user.first_name}</h1> : null}
      {error? allErrors : null }
    </div>
    )
}