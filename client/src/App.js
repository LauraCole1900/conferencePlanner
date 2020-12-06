import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
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
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <Router>
        <header>
          <Title />
          <Navbar />
        </header>
        <main>
          <Container fluid className="mycontainer">
            <Profile />
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path={["/", "/logout"]} component={Logout} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/conferences" component={Conference} />
            <Route exact path="/session/:id" component={Session} />
            <Route exact path="/create_conference" component={CreateConference} />
            <Route exact path="/add_session" component={CreateSession} />
            <Route exact path="/conference_created" component={ConfSuccess} />
            <Route exact path="/session_added" component={SessionSuccess} />
            <Route exact path="/conferences/:id" component={ConfDetails} />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
