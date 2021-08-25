import React, {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import ProductsRow from "./ProductsRow";
import './ProductsList.css';

function ProductsList(props){

    const [products,setProducts] = useState([]);
    let countRow = 0;
    let productsList = [];

    async function fetchProducts (){ 
        try {
        const result = await fetch('http://localhost:8000/products/list');
        const json = await result.json();
        // console.log(json);
        setProducts(json);
        props.setProductsLoaded(true);
        }
        catch (error) {
            console.log(error);
        }
    };


    useEffect ( () => {

        // if  (Object.keys(products).length === 0 && !props.productsLoaded)
        if (!props.productsLoaded)
         {
            fetchProducts(); 
         }
    })
     
    
    if (!props.productsLoaded)
    {
      return (
        <div className="ContentBody EventsBody">
          Loading ...
        </div>
      )
    }
    else {

        return (
      <Table striped bordered hover className="ProductsList">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Code</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                {products.length>0 && products.map(product => <ProductsRow key={product['id']} product={product} />)}    
                </tbody>
              
      </Table> 
        );
      }
    
}

export default ProductsList;