import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteProduct } from '../app/cartSlice';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
 
  const dispatch = useDispatch();
  const productCart = useSelector(state =>state.cart);

  const removeElement=(id)=>{
    //dispatch
    dispatch(deleteProduct(id));
  
  }
    //you can map products here
    const cards = productCart.map((product) => (
      <div className=" flex col-md-3" style={{ marginBottom: "18px" }} >
       
        <Card key={product.id} className="h-50">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "50px", height: "80px", paddingTop: "15px" }}
            />
          </div>
          <Card.Body>
            <Card.Title> {product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="danger" onClick={()=>removeElement(product.id)}>Remove</Button>
          </Card.Footer>
        </Card>
   
      </div>
    ));
  return (
    <>
     <h1>Cart</h1>
    <div>
     
     {cards}
    </div>
    </>
  )
}

export default Cart
