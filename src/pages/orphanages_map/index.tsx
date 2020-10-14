import React from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import { markerImg } from "../../assets";
import Leaflet from "leaflet";

import Button from "../../components/button";
import Location from "../../components/location";
import "./styles.scss";

const OrphanagesMap = () => {
  const { push } = useHistory();

  /*
   * Functions
   */
  const handleClick = () => {
    push("/orphanages/create");
  };
  const toOrphanage = () => {
    push("/orphanages/1");
  };

  /*
   * Renders
   */
  const mapIcon = Leaflet.icon({
    iconUrl: markerImg,
    iconSize: [50, 60],
    iconAnchor: [25, 60],
    popupAnchor: [165, 10],
  });

  const renderMap = () => {
    return (
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
          <Marker position={[-23.6417191, -46.6600886]} icon={mapIcon}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              Lar das meninas
              <Button icon={<FiArrowRight />} onClick={toOrphanage} />
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  };

  return (
    <div className="contant orphanages-map">
      <aside className="bg-gradient">
        <header>
          <img src={markerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>{"Muitas crianças estão esperando a sua visita :)"}</p>
        </header>
        <footer>
          <Location />
        </footer>
      </aside>
      {renderMap()}
      <div className="button-create-orphanage">
        <Button icon={<FiPlus />} onClick={handleClick} />
      </div>
    </div>
  );
};

export default OrphanagesMap;
