function ProductsRow(props) {
    return(<tr key={props.product.id}> 
              <td>
                {props.product.id}
              </td>
              <td>
                {props.product.name}  
              </td>
              <td>
              {props.product.productCode}
              </td>
              <td>
              {props.product.price}
              </td>
              {/* <td>
                <Button variant="success" onClick={()=> {handleDetail(eventItems[key].id)}}> View </Button>
    
              </td> */}
            </tr>);
    }    
export default ProductsRow;    