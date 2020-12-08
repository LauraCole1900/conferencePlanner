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
import EditConference from "./components/conference/Edit"
import CreateSession from "./components/forms/createSession";
import ConfSuccess from "./pages/success/confSuccess";
import SessionSuccess from "./pages/success/sessionSuccess";
import DeleteSuccess from "./pages/success/deleteSuccess";
import ConfDetails from "./pages/confDetails";
import "./App.css";

function App() {

  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
      <div className="Body">
    <div style={{margin:"2vw"}}>
      <Router>
        <header>
          <div>
            {isAuthenticated && <Navbar />}
          </div>
        </header>
        <main>
          <div className="container-fluid" style={{width:"80%", paddingBottom:"10vh"}}>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/conferences" component={Conference} />
            <Route path="/session" component={Session} />
            <Route path="/conference_created" component={ConfSuccess} />
            <Route path="/session_added" component={SessionSuccess} />
            <Route path="/conference_deleted" component={DeleteSuccess} />
            <Route path="/conferences/*" component={ConfDetails} />
            <Route path="/create_conference" component={CreateConference} />
            <Route path="/edit/:id" component={EditConference} />
            <Route path="/add_session/*" component={CreateSession} />
            <Route path={["/", "/login"]} component={Login} />
          </div>
        </main>
        <Title />
      </Router>
    </div>
    </div>
  );
};

export default App;
