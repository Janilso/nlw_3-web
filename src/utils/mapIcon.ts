import Leaflet from "leaflet";
import { markerImg } from "../assets";

const happyMapIcon = Leaflet.icon({
  iconUrl: markerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default happyMapIcon;
