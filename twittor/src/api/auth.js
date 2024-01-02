import { API_HOST, TOKEN } from "../utils/constant";
import { jwtDecode } from "jwt-decode";

export function signUpApi(user) {
  const url = `${API_HOST}/registro`;
  const userTemp = {
    ...user,
    email: user.email.toLowerCase(),
    fechaNacimiento: new Date(),
  };

  delete userTemp.repeatPassword;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Email en Uso" };
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function signInApi(user) {
  const url = `${API_HOST}/login`;

  const data = {
    ...user,
    email: user.email.toLowerCase(),
  };
  const params = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: " Usuario o contraseña incorrectos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//Por parámetro le enviamos el token y en el setItem donde lo alojamos
//y que token le mandamos.

export function setTokenApi(token) {
  localStorage.setItem(TOKEN, token);
}

//Obtengo el token
export function getTokenApi() {
  return localStorage.getItem(TOKEN);
}

//funciòn para desloguear

export function logoutApi() {
  localStorage.removeItem(TOKEN);
}

//Le paso el token a la funcion y si no està que devuelva nulo
export function isUserLogedApi() {
  const token = getTokenApi();

  if (!token) {
    logoutApi();
    return null;
  }
  //Si el token esta expirado que se desloguee
  if (isExpired(token)) {
    logoutApi();
  }
  return jwtDecode(token);
}

//Funcion que verifica si el token expiro o no; el jwtDecode es un paquete que
//permite decodificar el token mostrandonos los datos; el exp nos muestra la fecha de
//expiraciòn.

function isExpired(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  if (timeout < 0) {
    return true;
  }
  return false;
}
