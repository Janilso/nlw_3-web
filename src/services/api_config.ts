import axios from "axios";
import { URL_BASE } from "./api_routers";

const api = axios.create({
  baseURL: URL_BASE,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.post["Access-Control-Allow-Origin"] = "true";

export default api;
