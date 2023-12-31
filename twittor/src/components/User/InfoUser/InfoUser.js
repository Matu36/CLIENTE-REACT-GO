import React from "react";
import moment from "moment";
import localization from "moment/locale/es";
import { Location, Link, DataBirth } from "../../../utils/icons";

import "./InfoUser.scss";

export default function InfoUser(props) {
  const { user } = props;

  return (
    <div className="info-user">
      <h2 className="name">
        {user?.nombre} {user?.apellidos}
      </h2>

      <p className="email">{user?.email}</p>

      {user?.biografia && <div className="description"> {user.biografia} </div>}

      <div className="more-info">
        <Location />
        {user?.ubicacion && <p>{user.ubicacion}</p>}
        {user?.sitioWeb && (
          <a
            href={user.sitioWeb}
            alt={user.sitioWeb}
            target="_blanck"
            rel="noopener noreferrer"
          >
            <Link />

            {/* {user.sitioWeb} */}
          </a>
        )}
        {/* El Link de abajo sacarlo ! */}
        <Link />

        {/* {user.sitioWeb} */}
        {user?.fechaNacimiento && (
          <p>
            <DataBirth />
            {moment(user.fechaNacimiento)
              .locale("es", localization)
              .format("LL")}
          </p>
        )}
        {/* Sacar el DATAbIRT DE ABAJO */}
        <DataBirth />
      </div>
    </div>
  );
}
