import React from "react";
import CartItemsList from "./CartitemList";

const Cart = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div style={{ fontSize: "25px", fontWeight: "600", margin: "1rem" }}>
        <span>Shopping Cart</span>
      </div>
      <div>
        <CartItemsList />
      </div>
    </div>
  );
};

export default Cart;