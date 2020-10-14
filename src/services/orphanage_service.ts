import api from "./api_config";
import { URL_ORPHANAGES } from "./api_routers";

// const iOrphanage =
export interface iOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

const getAllOrphanages = () => {
  return new Promise<iOrphanage[]>((resolve, reject) => {
    api
      .get(URL_ORPHANAGES)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err));
  });
};

export { getAllOrphanages };
