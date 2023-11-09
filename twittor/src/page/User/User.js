import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import BasicLayout from "../../layout/BasicLayout";
import { getUserApi } from "../../api/user";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) toast.error("El usuario que has visitado no existe");
      })
      .catch(() => {
        toast.error("El usuario que ha visitado no existe");
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>Matías Pineda</h2>
      </div>

      <div>Banner Usuario</div>
      <div>Info Usuario</div>
      <div className="user__tweets">Lista de Tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);