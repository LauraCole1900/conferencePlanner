import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style.css";


const Title= () => {

  return (
    <Jumbotron fluid className="jumbotron">
  <Container>
    <h1 className="top">COOL CATS</h1>
    <h2 className="subtitle">
     Conference Planner
    </h2>
  </Container>
</Jumbotron>
  )
}

export default Title