import React from "react";
import "../Item/Item.css";
import { NavLink } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="ContenedorItem">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
          <p className="Info">
            Precio: ${price}</p>
          <p className="Info">
            Stock disponible: {stock}</p>
        </section>
        <footer className="ItemFooter">
          <NavLink to={`/item/${id}`} className='Opcion'>Ver detalle</NavLink>
        </footer>
      </article>
    </div>
  );
};

export default Item;

