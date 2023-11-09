import Home from "../page/Home/Home";
import Error404 from "../page/Error404/Error404";
import User from "../page/User";

export default [
  {
    path: "/:id",
    exact: true,
    component: User,
  },

  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "*",
    component: Error404,
  },
];
