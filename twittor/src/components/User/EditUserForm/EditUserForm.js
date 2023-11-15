import React, { useState, useCallback } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { useDropzone } from "react-dropzone";
import { API_HOST } from "../../../utils/constant";

import "./EditUserForm.scss";

export default function EditUserForm(props) {
  const { user, setShowModal } = props;
  const [formData, setFormData] = useState(initiaValue(user));
  const [bannerUrl, setBannerUrl] = useState(
    user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}` : null
  );

  const onDropBanner = useCallback((acceptedFile) => {
    console.log(acceptedFile);
  });

  const {
    getRootProps: getRootBannerProps,
    getInputProps: getInputBannerProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop: onDropBanner,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="edit-user-form">
      <div
        className="banner"
        style={{ backgroundImage: `url('${bannerUrl}')` }}
        {...getRootBannerProps()}
      >
        <input style={{ display: "none" }} {...getInputBannerProps} />
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="nombre"
                defaultValue={formData.nombre}
                onChange={onChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                defaultValue={formData.apellidos}
                onChange={onChange}
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
            defaultValue={formData.biografia}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Sitio Web"
            name="sitioWeb"
            defaultValue={formData.sitioWeb}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group>
          <DatePicker
            placeholderText="Fecha de Nacimiento"
            locale={es}
            selected={new Date(formData.fechaNacimiento || null)}
            onChange={(value) =>
              setFormData({ ...formData, fechaNacimiento: value })
            }
          />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initiaValue(user) {
  return {
    nombre: user.nombre || "",
    apellidos: user.apellidos || "",
    biografia: user.biografia || "",
    ubicacion: user.ubicacion || "",
    sitioWeb: user.sitioWeb || "",
    fechaNacimiento: user.fechaNacimiento || "",
  };
}
