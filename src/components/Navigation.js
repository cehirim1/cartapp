import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  //updates cart
  const cartUpdate = useSelector((state) => state.cart);

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "lightgrey",
        border: "orange solid 1px",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          className="fw-bold shadow shadow-sm px-3 py-2 border bg-light"
        >
          <img
            src="./assets/images/shop.png"
            width="50"
            height="50"
            alt="shopping-bag logo"
          />
          <span className="brand-text">ShopApp</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link
            to="/"
            as={Link}
            style={{
              color: "black",
              hover: "orange",
              fontSize: "18px",
            }}
          >
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
            style={{
              fontSize: "23px",
            }}
          >
            <Navbar.Text
              className="px-5 py-0 mx-5"
              style={{
                backgroundColor: "orange",
                border: "rounded solid",
                borderRadius: "5px",
                display: "flex",
                fontSize: "20px",
              }}
            >
              {cartUpdate.length}
            </Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              <FontAwesomeIcon icon={faCartShopping} />
              &nbsp;Cart
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
