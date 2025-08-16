const Login = () => {
  return (
    <div>
      <h1>Welcome back!</h1>
      <p className='login-desc'>Please log in to continue</p>
      <form action="">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" placeholder='username' />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" name="password" placeholder='password' />

        <button>Log me in</button>
      </form>
    </div>
  )
}

export default Login