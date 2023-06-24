import React from 'react';
import SearchBar from "./SearchBar";
import { Button, Col, Container, Overlay, Popover, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useRef, useState } from "react";
import FilterBar from "../Filter/Filterbar";
import { filters } from "../Filter/Filters";
import ProductsList from "./ProductList";

const Products = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleFilterClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Container fluid className="main">
      <div className="searchMobile text-center mb-3">
        <Row>
          <Col xs={10}>
            <SearchBar />
          </Col>
          <Col xs={2}>
            <div ref={ref}>
              <Button onClick={handleFilterClick}>
                <FaFilter />
              </Button>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
              >
                <Popover id="popover-contained" style={{ width: "400px" }}>
                  <Popover.Body>
                    <FilterBar filters={filters} />
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col md={3} xs={12}>
          <div className="filterBar">
            <FilterBar filters={filters} />
          </div>
        </Col>
        <Col md={9} xs={12}>
          <ProductsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;