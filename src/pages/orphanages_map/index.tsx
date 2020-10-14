import React, { useEffect, useState } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import Leaflet from "leaflet";
import { markerImg } from "../../assets";
import { getAllOrphanages } from "../../services/orphanage_service";
import { iOrphanage } from "../../services/orphanage_service";

import Button from "../../components/button";
import Location from "../../components/location";
import "./styles.scss";
import { URL_MAPBOX } from "../../services/api_routers";

const OrphanagesMap = () => {
  const { push } = useHistory();
  const [orphanages, setOrphanages] = useState<iOrphanage[]>([]);
  useEffect(() => {
    getAllOrphanages().then((orphanages) => setOrphanages(orphanages));
  }, []);

  /*
   * Functions
   */
  const handleClick = () => {
    push("/orphanages/create");
  };
  const toOrphanage = (id: number) => {
    push(`/orphanages/${id}`);
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
          <TileLayer url={URL_MAPBOX} />
          {orphanages.map(({ latitude, longitude, id, name }) => {
            return (
              <Marker position={[latitude, longitude]} icon={mapIcon} key={id}>
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  {name}
                  <Button
                    icon={<FiArrowRight />}
                    onClick={() => toOrphanage(id)}
                  />
                </Popup>
              </Marker>
            );
          })}
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
