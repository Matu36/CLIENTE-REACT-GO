import Home from "../page/Home/Home";
import Error404 from "../page/Error404/Error404";

export default [
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
