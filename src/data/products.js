import forumLow from "../assets/img/championes/forum-low-cL.jpg";
import gazelleGris from "../assets/img/championes/gazelle-gris.jpg";
import gazelleIndoor from "../assets/img/championes/gazelle-indoor.jpg";
import superstar from "../assets/img/championes/superstar.jpg";

const products = [
  { id: 1, image: forumLow, name: "Championes Forum Low CL", price: 5990, category: "men" },
  { id: 2, image: gazelleGris, name: "Championes Gazelle", price: 5990, category: "women" },
  { id: 3, image: gazelleIndoor, name: "Championes Gazelle Indoor", price: 6490, category: "men" },
  { id: 4, image: superstar, name: "Championes Superstar", price: 4990, category: "kids" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); 
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === parseInt(id)));
    }, 500); 
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 500); 
  });
};
