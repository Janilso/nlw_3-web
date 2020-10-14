import CreateOrphanage from "../pages/create_orphanage";
import Home from "../pages/home";
import OrphanagesMap from "../pages/orphanages_map";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/app",
    component: OrphanagesMap,
  },
  {
    path: "/orphanages/create",
    component: CreateOrphanage,
  },
];

export default routes;
