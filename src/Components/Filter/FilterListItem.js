import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { CartState } from '../../ContextApi/Context';

const FilterListItems = () => {
  const cartState = useContext(CartState);
  const { state: productState = {}, dispatch: productDispatch } = cartState || {};

  const handleFilter = (e) => {
    const { name, value } = e.target;
    productDispatch({ type: 'FILTER', payload: { [name]: value } });
  };

  const { colour = '', gender = '', price = '', type = '' } = productState;

  return (
    <Form>
      <Form.Group controlId="formColour">
        <Form.Label>Colour</Form.Label>
        <Form.Control
          as="select"
          name="colour"
          value={colour}
          onChange={handleFilter}
        >

        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          name="gender"
          value={gender}
          onChange={handleFilter}
        >
        
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formPrice">
        <Form.Label>Price Range</Form.Label>
        <Form.Control
          as="select"
          name="price"
          value={price}
          onChange={handleFilter}
        >
          
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formType">
        <Form.Label>Product Type</Form.Label>
        <Form.Control
          as="select"
          name="type"
          value={type}
          onChange={handleFilter}
        >
          
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default FilterListItems;
