import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../app/cartSlice";
import { getProducts } from "../app/productSlice";
import { enums } from '../utils/status';
const Products = () => {
  const { data:products,status } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => getProducts(data));
    dispatch(getProducts());
    // console.log(products + ' products')
  },[dispatch]);

  //onclick event to add to cart
  const addToCart = (product) => {
    //dispatch the action
    dispatch(addProduct(product));
  };
  
  if(status === enums.LOADING){
    return <Alert variant="success" key='success'>Loading Products...</Alert>
  }

  if(status === enums.ERROR){
    return <Alert variant="danger" key='dnager'>Something went wrong!</Alert>
  }
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "18px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px", paddingTop: "15px" }}
          />
        </div>
        <Card.Body>
          <Card.Title> {product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
       {/* {JSON.stringify(products)} */}
      </div>
    </>
  );
};

export default Products;

//'https://www.fakestoreapi.com/products
