import  Button  from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";
import React,{useState} from "react";
import ProductForm from "./ProductForm";

function ProductsAdd(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Product
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ProductForm setProductsLoaded={props.setProductsLoaded} setShow={setShow}/>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }

  export default ProductsAdd;