function Login() {
  return (
    <div className="container py-5">
      <h2 className='text-center mt-5' >Login</h2>
    <form className='py-3' style={{width: '350px', margin: 'auto'}}>
      
      <div className="form-outline mb-4">
        <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
      </div>

      
      <div className="form-outline mb-4">
        <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
      </div>

      
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>

        <div className="col">
         
          <a href="#!">forgot password?</a>
        </div>
      </div>

      <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

    </form>
  </div>
  )
}

export default Login;