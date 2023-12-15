import chocotortaImg from "./img/WhatsApp Image 2023-12-13 at 20.51.03.jpeg";
import cheescakeImg from "./img/WhatsApp Image 2023-12-13 at 20.51.41.jpeg";
import brownieImg from "./img/WhatsApp Image 2023-12-13 at 20.52.24.jpeg";


const products = [
  {
    id: 1,
    name: "Chocotorta",
    price: 1500,
    category: "tortas",
    img: chocotortaImg,
    stock: 10,
    description: "Chocotorta redonda",
  },
  {
    id: 2,
    name: "Cheescake",
    price: 1500,
    category: "tortas",
    img: cheescakeImg,
    stock: 10,
    description: "Cheescake frutos rojos",
  },

  {
    id: 3,
    name: "Brownie",
    price: 1500,
    category: "tortas",
    img: brownieImg,
    stock: 10,
    description: "Brownie bomba",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
