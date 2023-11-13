import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

import "./EditUserForm.scss";

export default function EditUserForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Editando Usuario");
  };

  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" name="nombre" />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Agrega a tu biografía"
            type="text"
            name="biografia"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Sitio Web" name="sitioWeb" />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
