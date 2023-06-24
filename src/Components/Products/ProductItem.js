import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CartState } from "../../ContextApi/Context";

const ProductItem = (props) => {
  const { product } = props;

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Img
          className="cardPic imgTag"
          as="img"
          variant="top"
          src={product.imageURL}
          alt={product.name}
        />
        <Row>
          <Col lg={5} md={12}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>
              <span>Rs. {product.price}</span>
            </Card.Subtitle>
          </Col>
          <Col lg={7} md={10} className="text-right">
            {cart.some((item) => item.id === product.id) ? (
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "DELETE_FROM_BAG",
                    payload: product,
                  })
                }
              >
                Remove Item
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
                disabled={!product.quantity}
              >
                {!product.quantity ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;