import React from "react";
import "./CartMessage.scss";
function CartMessage(props) {
  return (
    <div className="cart-message">
      <div className="icon-check-add">
        <i class="fa-solid fa-check"></i>
      </div>
      <h6>An item has been added to your shopping cart</h6>
    </div>
  );
}

export default CartMessage;
