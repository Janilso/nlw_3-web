import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

import { FiPlus } from "react-icons/fi";
import "./styles.scss";
import Button from "../../components/button";
import Sidebar from "../../components/sidebar";
import Title from "../../components/title";
import Input from "../../components/input";
import happyMapIcon from "../../utils/mapIcon";

const CreateOrphanage = () => {
  return (
    <div id="page-create-orphanage" className="create-orphanage">
      <Sidebar />
      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <Title title="Dados" />

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
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

            <Input id="name" label="Nome" />
            <Input
              id="about"
              label="Sobre"
              sublabel="Máximo de 300 caracteres"
              typeTextarea
            />
            <Input id="images" label="Fotos">
              <div className="uploaded-image" />

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </Input>
          </fieldset>

          <fieldset>
            <Title title="Visitação" />
            <Input id="instructions" label="Instruções" />
            <Input id="opening_hours" label="Nome" />

            <Input id="open_on_weekends" label="Atende fim de semana">
              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </Input>
          </fieldset>

          <Button type="submit" title="Confirmar" typeButton="green" />
        </form>
      </main>
    </div>
  );
};

export default CreateOrphanage;
