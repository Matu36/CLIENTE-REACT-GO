import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ConfigModal from "../../modal/BasicModal/ConfigModal/ConfigModal";
import EditUserForm from "../EditUserForm/EditUserForm";
import { API_HOST } from "../../../utils/constant";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import { checkFollowApi } from "../../../api/follow";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const [showModal, setShowModal] = useState(false); //Estado para mostrar o no el modal
  const [following, setFollowing] = useState(null); //Estado que guarda si estamos siguiendo a alguien o no

  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerBanner?id=${user.id}`
    : null;

  const avatarUrl = user?.avatar
    ? `${API_HOST}/obtenerAvatar?id=${user.id}`
    : AvatarNoFound;

  useEffect(() => {
    checkFollowApi(user?.id).then((response) => {
      if (response?.status) {
        setFollowing(true);
      } else {
        setFollowing(false);
      }
    });
  }, [user]);

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

          {/* {loggedUser._id !== user.id && (
            following !== null &&
            (following ? ( */}
          <Button>Siguiendo</Button>
          {/* ) : ( */}
          <Button>Seguir </Button>
        </div>
      )}

      <ConfigModal
        show={showModal}
        setShow={setShowModal}
        title="Editar perfil"
      >
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  );
}
