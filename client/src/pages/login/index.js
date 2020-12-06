import React from "react";
import { Container, Card } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import './login.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Container>
        <Card className="card">
          <h2>Welcome to<br />Cool Cats Conference Planner</h2>
          <button onClick={() => loginWithRedirect()} className="Login-button">Please log in<br />to continue</button>
        </Card>
      </Container>
    )
  )
};

export default Login;