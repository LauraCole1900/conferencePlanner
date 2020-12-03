import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Login from "./components/login";
import Signup from "./components/signup";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Conference from "./components/conference";
import Session from "./components/session";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Container fluid className="mycontainer">
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/conference" component={Conference} />
            <Route exact path="/session" component={Session} />
            <Route path="/" component={Login} />
          </Container>
        </Router>
      </main>
    </div>
  );
}

export default App;
