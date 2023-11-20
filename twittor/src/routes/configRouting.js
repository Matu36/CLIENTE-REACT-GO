import Home from "../page/Home/Home";
import Error404 from "../page/Error404/Error404";
import User from "../page/User";
import Users from "../page/Users";

export default [
  {
    path: "/users",
    exact: true,
    component: Users,
  },
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
