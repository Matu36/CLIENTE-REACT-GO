import React, { useState } from "react";
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
  const [user, setUser] = useState({
    nombre: "Matías Pineda",
  });

  return (
    <div>
      <div>{user ? <SignInSignUp /> : <h1>No estas Logueado!</h1>}</div>
    </div>
  );
}
