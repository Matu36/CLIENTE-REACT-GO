import React from "react";
import { Button } from "react-bootstrap";
import { API_HOST } from "../../../utils/constant";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;

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
          <Button>Editar Perfil</Button>

          {/* {loggedUser._id !== user.id && */}
          <Button>Seguir</Button>
        </div>
      )}
    </div>
  );
}
