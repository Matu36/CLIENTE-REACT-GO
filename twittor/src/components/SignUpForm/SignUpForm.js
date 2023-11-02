import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash"; // -->  SIRVE PARA VALIDAR. //
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
  const { setshowModal } = props;
  const [formData, setformData] = useState(initialFormValue());

  const onSubmit = (e) => {
    e.preventDefault();

    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (validCount !== size(formData)) {
      toast.warning("Completá todos los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Email inválido");
      } else if (formData.password !== formData.repeatPassword) {
        toast.warning("Las contraseñas tienen que ser iguales");
      } else if (size(formData.password) < 6) {
        toast.warning("La contraseña tiene que tener al menos 6 carácteres");
      } else {
        toast.success("Form OK.");
      }
    }
  };

  // Función onChange que podemos usar si todo nuestro formulario son inputs (de otra manera no) //
  // El lodash nos permite hacer validaciones de una forma mas óptima
  // El toast nos muestra mensajes lindos.

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-up-form">
      <h2>Crea tu cuenta</h2>
      <form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                defaultValue={formData.nombre}
                name="nombre"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                defaultValue={formData.apellidos}
                name="apellidos"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                defaultValue={formData.password}
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repetir Contraseña"
                name="repeatPassword"
                defaultValue={formData.repeatPassword}
              />
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

function initialFormValue() {
  return {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
