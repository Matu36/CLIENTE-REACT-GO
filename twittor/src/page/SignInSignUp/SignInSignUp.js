import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";
import "../SignInSignUp/SignInSignUp.scss";

export default function SignInSignUp() {
  return (
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  );
}

//El x6 le está diciendo que divide la pantalla a cada componente en 6 columnas y 6 columnas (TOTAL DE 12).

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={LogoTwittor} alt="twittor" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} /> Sigue lo que te interesa
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Entérate de qué está hablando la gente
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} /> únete a la conversación
        </h2>
      </div>
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhiteTwittor} alt="twittorwhite"></img>
        <h2> Mira lo que está pasando en el mundo en este momento</h2>
        <h3> únete a twittor hoy mismo! </h3>
      </div>
    </Col>
  );
}
