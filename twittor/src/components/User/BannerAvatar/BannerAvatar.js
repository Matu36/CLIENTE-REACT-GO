import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { API_HOST } from "../../../utils/constant";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import ConfigModal from "../../modal/BasicModal/ConfigModal/ConfigModal";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const [showModal, setShowModal] = useState(false);

  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerBanner?id=${user.id}`
    : null;

  const avatarUrl = user?.avatar
    ? `${API_HOST}/obtenerAvatar?id=${user.id}`
    : AvatarNoFound;

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
      {user && (
        // (
        <div className="options">
          {/* {loggedUser._id === user.id &&  */}
          <Button onClick={() => setShowModal(true)}>Editar Perfil</Button>

          {/* {loggedUser._id !== user.id && */}
          <Button>Seguir</Button>
        </div>
      )}

      <ConfigModal
        show={showModal}
        setShow={setShowModal}
        title="Editar perfil"
      >
        Formulario de Edición
      </ConfigModal>
    </div>
  );
}
