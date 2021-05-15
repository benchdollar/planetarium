// import "./PlanetariumItem";
import imageMilkyway from "../resources/milky_way.jpg";
import imageSun from "../resources/sun.jpg";
import imageEarth from "../resources/earth_and_moon.jpg";

export interface PlanetariumItem {
  id: number;
  title: string;
  image: string;
};

  

export const PlanetariumItems: Array<PlanetariumItem> = [
  {
    id: 17,
    title: "Die Milchstraße",
    image: imageMilkyway,
  },
  {
    id: 0,
    title: "Die Sonne",
    image: imageSun,
  },
  {
    id: 1,
    title: "Der Merkur",
    image: imageSun,
  },
  {
    id: 2,
    title: "Die Venus",
    image: imageSun,
  },
  {
    id: 3,
    title: "Die Erde mit ihrem Mond",
    image: imageEarth,
  },
];

export default PlanetariumItems;
