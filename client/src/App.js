import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Login from "./components/login";
import Logout from "./components/logout";
// import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Conference from "./components/conference";
import Session from "./components/session";
import CreateConference from "./components/forms/createConference";
import { useAuth0}  from "@auth0/auth0-react";
 
import "./App.css";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <div> 
      <Profile />
      <header>
        {/* <Navbar /> */}
      </header>
      <main>
        <Router>
          <Container fluid className="mycontainer">
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path={["/", "/logout"]} component={Logout} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/conference" component={Conference} />
            <Route exact path="/session" component={Session} />
            <Route exact path="/create_conference" component={CreateConference} />
          </Container>
        </Router>
      </main>
    </div>
  );
}

export default App;
