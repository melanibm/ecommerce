import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemListContainerProducts from './componentes/ItemListContainer/ItemListContainerProducts';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemListContainerProducts />
      <ItemDetailContainer/>
      
      

    </div>
  );
}

export default App;
