import React from "react";
import { logoImg } from "../../assets";
import Button from "../../components/button";
import { FiArrowRight } from "react-icons/fi";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import Location from "../../components/location";

const Home = () => {
  const { push } = useHistory();
  const handleClick = () => {
    push("/app");
  };

  return (
    <div className="contant bg-gradient page-landing">
      <div className="contant-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location />

        <Button
          icon={<FiArrowRight />}
          typeButton="secondary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Home;
