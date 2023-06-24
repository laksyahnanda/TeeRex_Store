import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container,Dropdown, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown';
import SearchBar from '../Products/SearchBar';
import { CartState } from '../../ContextApi/Context';
import '../style.css';

const CustomNavbar = () => {
  const cartState = CartState() || {};
  const { state: { cart = [] } = {} } = cartState;
  const navigate = useNavigate();

  return (
    <BootstrapNavbar bg="black" expand="lg" className="mb-4" fixed="top">
      <Container fluid>
        <BootstrapNavbar.Brand>
          <Link to="/" className="Logo" style={{ textDecoration: 'none' }}>
            TeeRex Store
          </Link>
        </BootstrapNavbar.Brand>
        {useLocation().pathname.split('/')[1] !== 'cart' && (
          <div className="search text-center">
            <SearchBar />
          </div>
        )}
        <Nav className="ml-auto">
          <BootstrapNavbar.Brand>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Products
            </Link>
          </BootstrapNavbar.Brand>
          <Dropdown title="cart">
            <Button
              variant="info"
              onClick={() => {
                navigate('/cart');
              }}
            >
              <FaShoppingCart color="white" fontSize="25px" />
              <span className="badge badge-dark" style={{ position: 'absolute', marginLeft: '-5px' }}>
                {cart.length}
              </span>
            </Button>
          </Dropdown>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
