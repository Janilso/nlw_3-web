import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { markerImg } from "../../assets";
import Button from "../button";

import "./styles.scss";

const Sidebar = () => {
  const { goBack } = useHistory();
  return (
    <>
      <aside className="side-bar bg-gradient">
        <img src={markerImg} alt="Happy" />
        <footer>
          <Button
            typeButton="primary"
            icon={<FiArrowLeft />}
            onClick={() => goBack()}
          />
        </footer>
      </aside>
      <div className="side-bar-ocult" />
    </>
  );
};

export default Sidebar;
