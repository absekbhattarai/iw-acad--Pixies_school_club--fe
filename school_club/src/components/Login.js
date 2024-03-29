import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">
        <svg
          width="5em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-arrow-left-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
          />
        </svg>
        
        </Link>
       
        <form>
          <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="InputPassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>

        <div className="Register">
          <Link to="/login/register">Register</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
