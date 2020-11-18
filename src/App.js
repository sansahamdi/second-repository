import React from 'react'
import './App.css';

function App() {
  return (
    <div className="login-form">
      <div className="container">
        <h1 className="text-center"><span className="font-weight-bold">amazone</span>.com</h1>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button className="mb-3 btn-primary btn-block" type="submit" class="btn btn-primary">Log in</button>
  <div className="text-center">
    <a href="/sign up">Sign Up</a>
    <span className="p-2">|</span>
    <a href="/sign up">Forgot Password</a>
  </div>
</form>
      </div>
    </div>
  );
}

export default App;
