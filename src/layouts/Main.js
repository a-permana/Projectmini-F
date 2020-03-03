import React from "react";
import { Container, Col } from "reactstrap";
import Navigation from "../component/navigation";

const Main = props => {
  return (
    <>
      <Navigation />
      <Container fluid={true} className="mt-2">
        <Col>{props.children}</Col>
        <center>
          <Col>&copy; 2020 BLOG </Col>
        </center>
      </Container>
    </>
  );
};
export default Main;
