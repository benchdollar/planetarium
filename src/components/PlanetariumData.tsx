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
import imageBootes from "../resources/bootes.jpg";
import imageAquila from "../resources/aquila.png";
import imageLyra from "../resources/lyra.jpg";
import imageUrsa from "../resources/ursa.jpg";

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
  {
    id: 10,
    title: "Das Sternbild Bootes (Bärenhüter)",
    image: imageBootes,
  },
  {
    id: 11,
    title: "Das Sternbild Aquila (Adler)",
    image: imageAquila,
  },
  {
    id: 12,
    title: "Das Sternbild Lyra (Leier)",
    image: imageLyra,
  },
  {
    id: 13,
    title: "Die Sternbilder Kleiner und großer Bär (Ursa Minor/Major)",
    image: imageUrsa,
  },
];

export default PlanetariumItems;
