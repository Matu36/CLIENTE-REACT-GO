import React, { useState } from "react";
import { Spinner, Form, Button } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { signInApi, setTokenApi } from "../../api/auth";

import "./SignInForm.scss";

export default function SignInForm() {
  const [formData, setformData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    if (size(formData) !== validCount) {
      toast.warning("Completa todos los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("El email es inválido");
      } else {
        setSignInLoading(true);
        signInApi(formData)
          .then((response) => {
            if (response.message) {
              toast.warning(response.message);
            } else {
              setTokenApi(response.token);
            }
          })
          .catch(() => {
            toast.error("Error del Servidor, inténtelo más tarde");
          })
          .finally(() => {
            setSignInLoading(false);
          });
      }
    }
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-form">
      <h2>Entrar</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Correo Electrónico"
            defaultValue={formData.email}
            name="email"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            defaultValue={formData.password}
            name="password"
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          {!signInLoading ? "Iniciar Sesión" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
