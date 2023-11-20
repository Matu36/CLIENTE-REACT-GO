import React from "react";
import { Spinner, Button, ButtonGroup } from "react-bootstrap";

import BasicLayout from "../../layout/BasicLayout";

import "./Users.scss";

export default function Users(props) {
  const { setRefreshCheckLogin } = props;
  return (
    <BasicLayout
      className="users"
      title="Usuarios"
      setRefreshCheckLogin={setRefreshCheckLogin}
    >
      <div className="users__title">
        <h2>Users</h2>
        <input type="text" placeholder="Busca un Usuario..." />
      </div>
      <ButtonGroup className="users__options">
        <Button className="active">Siguiendo</Button>
        <Button>Nuevos</Button>
      </ButtonGroup>
    </BasicLayout>
  );
}
