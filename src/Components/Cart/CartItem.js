import React from "react";
import { Form, Image, Toast } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Cartitem.module.css";
import { AiOutlineDelete } from 'react-icons/ai';

const CartItem = (props) => {
  const { product, dispatch } = props;
  const [showToast, setToast] = React.useState(false);
  const [showQty, setQty] = React.useState(false);
  const [prod, setProd] = React.useState({});
  const quantityChangeHandler = (event) => {
    if (event.target.value < 1) {
      setToast(true);
    } else {
      if (event.target.value > product.quantity) {
        setProd(product);
        setQty(true);
      } else {
        dispatch({
          type: "CHANGE_CART_QUANTITY",
          payload: {
            id: product.id,
            qty: event.target.value,
          },
        });
      }
    }
  };

  return (
    <>
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header>
          <strong className="mr-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body>Quanity can't be less than 1.</Toast.Body>
      </Toast>
      {/* {`${prod.name} is not available more than ${prod.quantity}`} */}
      <Toast onClose={() => setQty(false)} autohide show={showQty} delay={2000}>
        <Toast.Header>
          <strong className="mr-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body>
          
          {`${prod.name} is not available more than ${prod.quantity}`}
        </Toast.Body>
      </Toast>

      {/* product List */}
      <div className={styles.row}>
        <Image
          className={styles.image}
          src={product.imageURL}
          alt={product.name}
          fluid
          rounded
        />
        <div>
          <h5>{product.name}</h5>
          <h5>{product.price}</h5>
        </div>
        <div>
          <span>
            <strong>Qty:</strong>
          </span>
          <Form.Control
            type="number"
            value={product.qty}
            onChange={quantityChangeHandler}
          />
        </div>
        <button
          className={styles.del}
          onClick={() =>
            dispatch({
              type: "DELETE_FROM_BAG",
              payload: product,
            })
          }
        >
          <AiFillDelete fontSize="20px" />
          Delete
        </button>
      </div>
    </>
  );
};

export default CartItem;