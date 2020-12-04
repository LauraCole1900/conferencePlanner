import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Profile from "./pages/profile";
import Conference from "./pages/conferences";
import Session from "./pages/session";
import CreateConference from "./components/forms/createConference";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Container fluid className="mycontainer">
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/conferences" component={Conference} />
            <Route exact path="/session" component={Session} />
            <Route exact path="/create_conference" component={CreateConference} />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
