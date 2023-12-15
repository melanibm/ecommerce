import React from 'react';
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer = ({ greeting }) => { 
    return (
        <div className="ContenedorPrincipal">
            <h1 className="TextoPrincipal">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer