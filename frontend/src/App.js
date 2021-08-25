import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './components/ProductsList';
import ProductsAdd from './components/ProductsAdd';
import React,{useState} from 'react';

function App() {

  const [productsLoaded,setProductsLoaded] = useState(false);

  return (
    <div className="App">
      <ProductsAdd setProductsLoaded={setProductsLoaded}/>
      <ProductsList productsLoaded={productsLoaded} setProductsLoaded={setProductsLoaded}/>
    </div>
  );
}

export default App;
