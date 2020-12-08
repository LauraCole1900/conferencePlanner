import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style.css";


const Title= () => {

  return (
    <Jumbotron fluid className="jumbotron">
  <Container>
  <img className="img" alt="logo" src="/images/ccLogo2.png" height="200"/> 
  </Container>
</Jumbotron>
  )
}

export default Title