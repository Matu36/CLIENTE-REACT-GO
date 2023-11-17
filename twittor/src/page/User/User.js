import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import BasicLayout from "../../layout/BasicLayout";
import { getUserApi } from "../../api/user";
import InfoUser from "../../components/User/InfoUser/InfoUser";
import BannerAvatar from "../../components/User/BannerAvatar";
import { getUserTweetApi } from "../../api/tweet";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null);
  const { params } = match;
  const loggedUser = useAuth();

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) toast.error("El usuario que has visitado no existe");
      })
      .catch(() => {
        toast.error("El usuario que has visitado no existe");
      });
  }, [params]);

  useEffect(() => {
    getUserTweetApi(params.id, 1).then((response) => {
      setTweets(response);
    });
  }, []);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
        </h2>
      </div>

      <div>
        <BannerAvatar user={user} loggedUser={loggedUser} />
      </div>
      <InfoUser user={user} />
      <div className="user__tweets">Lista de Tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);
