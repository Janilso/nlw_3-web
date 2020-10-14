import React from "react";
import "./assets/styles/global.scss";
import "leaflet/dist/leaflet.css";

import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
