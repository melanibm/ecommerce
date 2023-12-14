import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/itemCount/itemCount';
import ItemListContainerProducts from './componentes/ItemListContainer/ItemListContainerProducts';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
      <ItemListContainerProducts />

    </div>
  );
}

export default App;
