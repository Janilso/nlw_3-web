import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import { useHistory } from "react-router-dom";
import { markerImg } from "../../assets";
import Button from "../../components/button";
import Location from "../../components/location";
import "leaflet/dist/leaflet.css";
import "./styles.scss";

const OrphanagesMap = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="contant orphanages-map">
      <aside className="bg-gradient">
        <header>
          <img src={markerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <Location />
        </footer>
      </aside>
      <div className="map">
        <Map
          center={[-23.6431282, -46.660879]}
          zoom={15}
          style={{ width: "100%", height: "100vh" }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>
      </div>
      <div className="button-create-orphanage">
        <Button icon={<FiPlus />} onClick={handleClick} />
      </div>
    </div>
  );
};

export default OrphanagesMap;
