const URL_BASE = "http://localhost:3333";
const URL_ORPHANAGES = "/orphanages";
const URL_MAPBOX = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

export { URL_BASE, URL_ORPHANAGES, URL_MAPBOX };
