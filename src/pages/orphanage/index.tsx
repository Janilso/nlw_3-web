import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import "./styles.scss";
import Sidebar from "../../components/sidebar";
import CarroselImages from "../../components/carousel_images";
import happyMapIcon from "../../utils/mapIcon";

const Orphanage = () => {
  return (
    <div className="orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <CarroselImages
            images={[
              {
                url:
                  "https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg",
                alt: "Lar das meninas",
                id: 0,
              },
              {
                url:
                  "https://www.lupadigital.info/wp-content/uploads/2018/05/imagens-gratis.jpg",
                alt: "Lar das meninas",
                id: 1,
              },
              {
                url:
                  "https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg",
                alt: "Lar das meninas",
                id: 2,
              },
              {
                url:
                  "https://i.pinimg.com/originals/07/12/9a/07129ae291762b21e20b42552803704b.jpg",
                alt: "Lar das meninas",
                id: 3,
              },
              {
                url:
                  "https://www.sonetur.com.br/wp-content/uploads/2018/03/sonetur-fotos-2017-63.jpg",
                alt: "Lar das meninas",
                id: 4,
              },
              {
                url:
                  "https://diariodorio.com/wp-content/uploads/2020/07/Pedra_da_gavea_capa.jpg",
                alt: "Lar das meninas",
                id: 5,
              },
              {
                url:
                  "https://diariodorio.com/wp-content/uploads/2020/07/Pedra_da_gavea_capa.jpg",
                alt: "Lar das meninas",
                id: 6,
              },
              {
                url:
                  "https://diariodorio.com/wp-content/uploads/2020/07/Pedra_da_gavea_capa.jpg",
                alt: "Lar das meninas",
                id: 7,
              },
              {
                url:
                  "https://diariodorio.com/wp-content/uploads/2020/07/Pedra_da_gavea_capa.jpg",
                alt: "Lar das meninas",
                id: 8,
              },
            ]}
          />

          <div className="orphanage-details-content">
            <h1>Lar das meninas</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </p>

            <div className="map-container">
              <Map
                center={[-27.2092052, -49.6401092]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-27.2092052, -49.6401092]}
                />
              </Map>

              <footer>
                <a href="?">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
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
