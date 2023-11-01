import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
  const { setshowModal } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    setshowModal(false);
  };

  return (
    <div className="sign-up-form">
      <h2>Crea tu cuenta</h2>
      <form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Apellidos" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Correo Electrónico" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control type="password" placeholder="Contraseña" />
            </Col>
            <Col>
              <Form.Control type="password" placeholder="Repetir Contraseña" />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </form>
    </div>
  );
}
