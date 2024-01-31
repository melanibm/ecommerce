import chocotortaImg from "./img/WhatsApp Image 2023-12-13 at 20.51.03.jpeg";
import cheescakeImg from "./img/WhatsApp Image 2023-12-13 at 20.51.41.jpeg";
import brownieImg from "./img/WhatsApp Image 2023-12-13 at 20.52.24.jpeg";
import frutal from "./img/Sin título.jpg";


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
    category: "tartas",
    img: brownieImg,
    stock: 10,
    description: "Brownie bomba",
  },
  {
    id: 4,
    name: "Frutal",
    price: 1500,
    category: "tartas",
    img: frutal,
    stock: 10,
    description: "Tarta Frutal",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500)

  })

}


export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter((prod) => prod.category === category);
      resolve(filteredProducts);
    }, 500);
  });
};

