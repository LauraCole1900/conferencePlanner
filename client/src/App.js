import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/login";
import Logout from "./components/logout";
import Navbar from "./pages/navbar";
import Title from "./pages/title";
import Profile from "./pages/profile";
import Conference from "./pages/conferences";
import Session from "./components/session";
import CreateConference from "./components/forms/createConference";
import CreateSession from "./components/forms/createSession";
import ConfSuccess from "./pages/success/confSuccess";
import SessionSuccess from "./pages/success/sessionSuccess";
import ConfDetails from "./pages/confDetails";
import "./App.css";

function App() {

  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <Router>
        <header>
          <Title />
          <div>
            {isAuthenticated && <Navbar />}
          </div>
        </header>
        <main>
          <Container fluid className="mycontainer">
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/conferences" component={Conference} />
            <Route path="/session" component={Session} />
            <Route path="/conference_created" component={ConfSuccess} />
            <Route path="/session_added" component={SessionSuccess} />
            <Route path="/conferences/*" component={ConfDetails} />
            <Route path="/create_conference" component={CreateConference} />
            <Route path="/add_session" component={CreateSession} />
            <Route path={["/", "/login"]} component={Login} />
          </Container>
        </main>
      </Router>
    </div>
  );
};

export default App;
