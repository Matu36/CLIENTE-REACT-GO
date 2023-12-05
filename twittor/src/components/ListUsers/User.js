import React, { useState, useEffect } from "react";
import { Media, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_HOST } from "../../utils/constant";
import { getUserApi } from "../../api/user";
import AvatarNoFound from "../../assets/png/avatar-no-found.png";

//REEMPLAZAR EL MEDIA CON EL FLEX

/*

EJEMPLO:
<body>
  <div class="container">
    <div class="row comments justify-content-center">
      <div class="col-8">
        <form class="form_comments d-flex justify-content-end flex-wrap">
          <textarea placeholder="Comentario"></textarea>
          <button class="btn" type="button">Comentar</button>
        </form>
        <!--conservé "media" ya que aparece en los estilos; flex-direction-column para tomar la dirección de arriba para abajo (no de izquierda a derecha)-->
        <div class="media d-flex flex-direction-column">
          <div class="flex-shrink-0">
            <img src="https://via.placeholder.com/64" alt="Karina" class="align-self-center">
          </div>
          <!--flex-grow se utiliza para que un elemento flex crezca hasta rellenar el espacio disponible
          ms (margin start) reemplaza a ml (margin left): https://getbootstrap.com/docs/5.0/getting-started/rtl/#approach-->
          <div class="flex-grow-1 ms-0">
            <p class="name">Karina ST <span>11:56, hoy</span></p>
            <p class="comment">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos dolore optio!

            </p>
            <!--flex-direction-row para tomar la dirección de izquierda a derecha; justify-content-end para alinear los componentes a la derecha-->
            <div class="buttons text-end d-flex flex-direction-row justify-content-end">
              <a href="#">Responder</a>
              <a href="#">Editar</a>
              <a href="#">Eliminar</a>
            </div>

            <div class="media d-flex flex-direction-column">
              <!--flex-shrink por su parte se utiliza para que un elemento flex se encoja, de ser necesario. Si su valor es cero, no se encogerá cuando la página se haga más pequeña -->
              <div class="flex-shrink-0">
                <img src="https://via.placeholder.com/64" alt="Karina" class="d-flex align-self-center">
              </div>
              <div class="flex-grow-1 ms-0">
                <p class="name">Karina <span>22:56, hoy</span></p>
                <p class="comment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos dolore optio!
                </p>
                <div class="buttons text-end d-flex flex-direction-row justify-content-end">
                  <a href="#">Responder</a>
                  <a href="#">Editar</a>
                  <a href="#">Eliminar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>*/

export default function User(props) {
  const { user } = props;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserApi(user.id).then((response) => {
      setUserInfo(response);
    });
  }, [user]);

  return (
    <div as={Link} to={`/${user.id}`} className="list-users__user">
      <Image
        width={64}
        height={64}
        roundedCircle
        className="mr-3"
        src={
          userInfo?.avatar
            ? `${API_HOST}/obtenerAvatar?id=${user.id}`
            : AvatarNoFound
        }
        alt={`${user.nombre} ${user.apellidos}`}
      />

      <div>
        <h5>
          {user.nombre} {user.apellidos}
        </h5>
        <p>{userInfo?.biografia}</p>
      </div>
    </div>
  );
}
