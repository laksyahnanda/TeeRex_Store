import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { CartState } from '../../ContextApi/Context';

const ProductsList = (props) => {
  const cartState = CartState() || {};
  const { state: { products = [] } = {}, productState: { colour, gender, price, type, searchQuery } = {} } = cartState;

  const filterProducts = () => {
    let filteredProducts = products;

    if (colour && colour.length) {
      filteredProducts = filteredProducts.filter((product) => colour.includes(product.color));
    }

    if (gender && gender.length) {
      filteredProducts = filteredProducts.filter((product) => gender.includes(product.gender));
    }

    if (type && type.length) {
      filteredProducts = filteredProducts.filter((product) => type.includes(product.type));
    }

    if (price && price.length) {
      let min, max;
      price.forEach((range) => {
        const rangeArray = range.split('-');
        min = rangeArray[0];
        max = rangeArray[1];
      });

      filteredProducts = filteredProducts.filter((product) => {
        const productPrice = parseInt(product.price);
        let status = false;

        if (max && max.trim().length !== 0) {
          status = productPrice >= min && productPrice <= max;
        } else {
          status = productPrice >= min;
        }

        return status;
      });
    }

    if (searchQuery && searchQuery.length) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.type.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    return filteredProducts;
  };

  return (
    <div>
      <Row>
        {filterProducts().map((product) => (
          <Col lg={3} md={6} xs={6} key={product.id}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
