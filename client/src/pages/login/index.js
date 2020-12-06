import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './login.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div >
        <div className="loginCard">
            <h2 id="welcome"> Welcome to Your Conference Planner</h2>
            <button onClick={() => loginWithRedirect()} className="loginBtn">Log In</button>
        </div>
      </div>
    )
  )
};

export default Login;