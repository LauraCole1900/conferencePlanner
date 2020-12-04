import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './login.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div >
        <div className ="card">
            <div className="container">
              <h2> Welcome to Your Conference Planner</h2> 

            </div>
         <button onClick={() => loginWithRedirect()} className ="Login-button">Log In</button>
     </div>
     </div>
  )
  )
};

export default Login;