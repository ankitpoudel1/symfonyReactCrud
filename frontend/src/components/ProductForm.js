import React, { useState } from "react";

function ProductForm(props){
    const[name,setName] = useState('');
    const[productCode,setProductCode] = useState('');
    const[price,setPrice] = useState('');
    let product=[];
    
    function handleNameChange(event) {
       setName(event.target.value);
      }

    function handleCodeChange(event) {
        setProductCode(event.target.value);
    }

    function handlePriceChange(event) {
      setPrice(event.target.value);
    }
    
    
    function handleSubmit(event) {
      product={
        'productCode' : productCode,
        'name':name,
        'price':price,

      }
      saveProduct();
      event.preventDefault();
      }



      async function saveProduct (){ 
        fetch('http://localhost:8000/product', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        }).then(res => res.json())
          .then(res => {
            if (res.status==true)
            {props.setProductsLoaded(false);
             props.setShow(false);
            }
          });
      };

      return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
         <div> <label> Product Code:</label>
            <input type="text" value={productCode} onChange={(e)=>{handleCodeChange(e)}} />
         </div>
         <div>   
           <label> Name:  </label>
            <input type="text" value={name} onChange={(e)=>{handleNameChange(e)}} />
         </div>
         <div>   
           <label> Price:  </label>
            <input type="number" value={price} onChange={(e)=>{handlePriceChange(e)}} />
         </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      );
}

export default ProductForm;

