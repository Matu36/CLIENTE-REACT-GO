import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function addTweetApi(mensaje) {
  const url = `${API_HOST}/twwet`;
  const data = {
    mensaje,
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return { code: response.status, message: "Tweet Enviado" };
      }

      return { code: 500, message: "Error del Servidor" };
    })

    .catch((err) => {
      return err;
    });
}

export function getUserTweetApi(idUser, page) {
  const url = `${API_HOST}/leoTweets?id=${idUser}&pagina=${page}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })

    .catch((err) => {
      return err;
    });
}

export function getTweetsFollowersAPI(page = 1) {
  const url = `${API_HOST}/leoTweetsSeguidores?pagina=${page}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}
