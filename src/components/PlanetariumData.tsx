// import "./PlanetariumItem";
import imageMilkyway from "../resources/milky_way.jpg";
import imageSun from "../resources/sun.jpg";
import imageMercury from "../resources/mercury.jpg";
import imageVenus from "../resources/venus.jpg";
import imageEarth from "../resources/earth_and_moon.jpg";
import imageMars from "../resources/mars.jpg";
import imageJupiter from "../resources/jupiter.jpg";
import imageSaturn from "../resources/saturn.jpg";
import imageUranus from "../resources/uranus.jpg";
import imageNeptune from "../resources/neptune.jpg";
import imagePluto from "../resources/pluto_and_charon.jpg";

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
    image: imageMercury,
  },
  {
    id: 2,
    title: "Die Venus",
    image: imageVenus,
  },
  {
    id: 3,
    title: "Die Erde mit ihrem Mond",
    image: imageEarth,
  },
  {
    id: 4,
    title: "Der Mars",
    image: imageMars,
  },
  {
    id: 5,
    title: "Der Jupiter",
    image: imageJupiter,
  },
  {
    id: 6,
    title: "Der Saturn",
    image: imageSaturn,
  },
  {
    id: 7,
    title: "Der Uranus",
    image: imageUranus,
  },
  {
    id: 8,
    title: "Der Neptun",
    image: imageNeptune,
  },
  {
    id: 9,
    title: "Der Pluto",
    image: imagePluto,
  },
];

export default PlanetariumItems;
