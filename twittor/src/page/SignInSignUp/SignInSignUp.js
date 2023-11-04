import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SingInForm";
import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";
import "../SignInSignUp/SignInSignUp.scss";

export default function SignInSignUp() {
  const [showModal, setshowModal] = useState(false);
  const [contentModal, setcontentModal] = useState(null);

  const openModal = (content) => {
    setshowModal(true);
    setcontentModal(content);
  };

  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent openModal={openModal} setshowModal={setshowModal} />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setshowModal}>
        {contentModal}
      </BasicModal>
    </>
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
          <FontAwesomeIcon icon={faComment} /> Únete a la conversación
        </h2>
      </div>
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setshowModal } = props;

  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhiteTwittor} alt="twittorwhite"></img>
        <h2> Mira lo que está pasando en el mundo en este momento</h2>
        <h3> Únete a twittor hoy mismo! </h3>
        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setshowModal={setshowModal} />)}
        >
          Regístrate
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => openModal(<SignInForm />)}
        >
          Iniciar Sesión
        </Button>
      </div>
    </Col>
  );
}
