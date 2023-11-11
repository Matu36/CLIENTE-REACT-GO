import React from "react";
import { API_HOST } from "../../../utils/constant";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user } = props;

  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerBanner?id=${user.id}`
    : null;

  console.log(bannerUrl);

  return (
    <div>
      <h2>BannerAvatar..</h2>
    </div>
  );
}
