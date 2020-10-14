import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import "./styles.scss";
import Sidebar from "../../components/sidebar";
import CarroselImages from "../../components/carousel_images";
import happyMapIcon from "../../utils/mapIcon";
import { getOrphanage, iOrphanage } from "../../services/orphanage_service";
import { useParams } from "react-router-dom";
import { URL_MAPBOX, URL_GOOGLE_MAPS_ROUTER } from "../../services/api_routers";
import CardInfo from "../../components/card-info";

interface OrphanageParams {
  id: string;
}

const Orphanage = () => {
  const [orphanage, setOrphanage] = useState<iOrphanage>();
  const params = useParams<OrphanageParams>();

  /*
   * Functions
   */
  useEffect(() => {
    getOrphanage(Number(params.id)).then((orphanage) =>
      setOrphanage(orphanage)
    );
  }, [params.id]);

  const images =
    orphanage?.images.map((image) => {
      return {
        url: image.url,
        id: image.id,
      };
    }) || [];

  /*
   * Renders
   */

  const renderMap = () => {
    return (
      <div className="map-container">
        <Map
          center={[
            orphanage?.latitude ?? -27.2092052,
            orphanage?.longitude ?? -49.6401092,
          ]}
          zoom={16}
          style={{ width: "100%", height: 280 }}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer url={URL_MAPBOX} />
          <Marker
            interactive={false}
            icon={happyMapIcon}
            position={[
              orphanage?.latitude ?? -27.2092052,
              orphanage?.longitude ?? -49.6401092,
            ]}
          />
        </Map>

        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${URL_GOOGLE_MAPS_ROUTER}&destination=${orphanage?.latitude},${orphanage?.longitude}`}
          >
            <p className="text-map">Ver rotas no Google Maps</p>
          </a>
        </footer>
      </div>
    );
  };

  return (
    <div className="orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <CarroselImages images={images} />

          <div className="orphanage-details-content">
            <h1>{orphanage?.name}</h1>
            <p>{orphanage?.about}</p>

            {renderMap()}

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage?.instructions}</p>

            <div className="open-details">
              <CardInfo
                icon={<FiClock />}
                title={["Segunda à Sexta", orphanage?.opening_hours ?? ""]}
              />
              <CardInfo
                typeCard={orphanage?.open_on_weekends ? "green" : "red"}
                icon={<FiInfo />}
                title={[
                  `${
                    orphanage?.open_on_weekends ? "Atendemos" : "Não atendemos"
                  }`,
                  "fim de semana",
                ]}
              />
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orphanage;
