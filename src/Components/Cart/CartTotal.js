import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartTotal = (props) => {
  const { product, dispatch } = props;
  let cart = JSON.parse(localStorage.getItem("cartStorage"));
  const navigate = useNavigate();
  console.log(typeof cart);
  let [total, setTotal] = useState(0);
  const sum = () => {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
      result += cart[i].price * cart[i].qty;
    }
    setTotal(result);
  };
  useEffect(() => {
    sum();
  }, [cart]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Bill Total: {total}</h3>
        <Button
          onClick={() => {
            navigate("/");
            alert("Order Placed Succesfully!");
            localStorage.clear();
            dispatch({
              type: "DELETE_CART",
            });
          }}
        >
          Place Order
        </Button>
      </div>
    </>
  );
};

export default CartTotal;