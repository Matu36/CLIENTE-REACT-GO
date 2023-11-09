import React, { useState, useEffect } from "react";
import SignInSignUp from "./page/SignInSignUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/contexts";
import { isUserLogedApi } from "./api/auth";
import Routing from "./routes/Routing";

export default function App() {
  const [user, setUser] = useState("null");
  const [loadUser, setLoadUser] = useState(false);
  const [refrescCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refrescCheckLogin]);

  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
      {/* {user ? ( */}
      <Routing setRefreshCheckLogin={setRefreshCheckLogin} />
      {/* // ) : ( */}
      {/* //   <SignInSignUp setRefreschCheckLogin={setRefreshCheckLogin} /> */}
      {/* // )} */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        pauseOnFocusLoss
      />
    </AuthContext.Provider>
  );
}
